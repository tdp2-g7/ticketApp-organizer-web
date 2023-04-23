import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import ScheduleComponent from 'src/views/CreateEvent/Schedule/Schedule';
import { IEvent } from 'src/types/events.types';
import useTypedSelector from '../hooks/useTypedSelector';
import {
  onEditRequested,
  onEventDeleteImage,
  onGetDetailsRequested,
  onUpdateDraftRequested,
} from '../redux/actions/event.actions';
import CreateEvent from '../views/CreateEvent/CreateEvent';
import { ICreateEventFormData } from '../views/CreateEvent/types';
import Layout from '../views/Layout/Layout';

const EditEventContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { user } = useTypedSelector((state) => state.user);
  const { eventData, drafts } = useTypedSelector((state) => state.event);

  const [searchParams] = useSearchParams();
  const isDraft = searchParams.get('isDraft');

  const [reserveDate, setReserveDate] = useState(new Date());
  const [currentLocation, setLocation] = useState<any>(eventData?.location);
  const [modalSchedule, setModalSchedule] = useState(false);
  const [schedule, setSchedule] = useState<any>([]);
  const [formValues, setFormValues] = useState<any>({});

  let eventDraft: IEvent | null | undefined;
  const params = useParams();
  const eventId = params.id;

  useEffect(() => {
    if (eventId) {
      dispatch(onGetDetailsRequested(eventId));
    }
  }, [dispatch]);

  if (isDraft) {
    eventDraft = drafts.find((draft: any) => draft.eventDraftId === eventId);
  }

  const getBase64Picture = async (file: any) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // eslint-disable-next-line func-names
    reader.onload = function () {
      resolve(reader.result);
    };
  });

  const onSubmit = async (formData: ICreateEventFormData) => {
    const imagesBase64: any = [];
    if (formData.images instanceof FileList) {
      await Promise.all(
        Array.from(formData.images).map(async (image: any) => {
          const imageBase64: any = await getBase64Picture(image);
          imagesBase64.push(imageBase64.split(',')[1]);
        }),
      );
    }

    eventData?.images.forEach((imageBase64: string) => {
      imagesBase64.push(imageBase64);
    });

    if (imagesBase64 && user) {
      const { ticketsSold, ...data } = formData;
      const body = {
        ...data,
        userId: user.userId,
        images: imagesBase64,
        type: formData.type,
        date: reserveDate,
        vacancies: Number(formData.vacancies),
        ticketsPerPerson: Number(formData.ticketsPerPerson),
        schedule,
        location: {
          lat: currentLocation.lat.toString(),
          lng: currentLocation.lng.toString(),
          label: currentLocation.label,
        },
      };
      dispatch(onEditRequested(body));
    }
  };

  const deleteImage = (imageToDelete: any) => {
    if (eventData) {
      const newImages = eventData.images.filter(
        (imageToCompare: any) => imageToCompare !== imageToDelete,
      );
      const data = {
        ...eventData,
        images: newImages,
      };
      dispatch(onEventDeleteImage(data));
    }
  };

  const onSubmitSchedule = (formData: any) => {
    const arr = Object.entries(formData)
      .filter(([key]) => key.includes('description'))
      .map(([key, value]) => {
        const number = key.split('_')[1];
        return {
          description: value,
          startTime: formData[`startTime_${number}`],
          endTime: formData[`endTime_${number}`],
        };
      });
    setSchedule(arr);
    setModalSchedule(false);
  };

  const onUpdateDraft = async () => {
    const imagesBase64: any = [];
    if (formValues.images instanceof FileList) {
      await Promise.all(
        Array.from(formValues.images).map(async (image: any) => {
          const imageBase64: any = await getBase64Picture(image);
          imagesBase64.push(imageBase64.split(',')[1]);
        }),
      );
    }

    eventDraft?.images.forEach((imageBase64: string) => {
      imagesBase64.push(imageBase64);
    });

    const body = {
      ...formValues,
      images: imagesBase64,
      userId: user?.userId,
    };
    if (eventId) {
      dispatch(onUpdateDraftRequested(body, eventId));
    }
  };

  return (
    <Layout>
      <CreateEvent
        onSubmit={onSubmit}
        setReserveDate={setReserveDate}
        reserveDate={reserveDate}
        eventInitialValues={isDraft ? eventDraft : eventData}
        isEdit
        deleteImage={deleteImage}
        setModalSchedule={setModalSchedule}
        schedule={schedule}
        location={currentLocation}
        setLocation={setLocation}
        setFormValues={setFormValues}
        onSaveDraft={onUpdateDraft}
      />
      <ScheduleComponent
        onSubmit={onSubmitSchedule}
        modalSchedule={modalSchedule}
        onClose={() => setModalSchedule(false)}
        schedule={schedule.length ? schedule : eventData?.schedule}
      />
    </Layout>
  );
};
export default EditEventContainer;
