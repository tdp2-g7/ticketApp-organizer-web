import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ScheduleComponent from 'src/views/CreateEvent/Schedule/Schedule';
import useTypedSelector from '../hooks/useTypedSelector';
import { onEditRequested, onEventDeleteImage, onGetDetailsRequested } from '../redux/actions/event.actions';
import CreateEvent from '../views/CreateEvent/CreateEvent';
import { ICreateEventFormData } from '../views/CreateEvent/types';
import Layout from '../views/Layout/Layout';

const EditEventContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [reserveDate, setReserveDate] = useState(new Date());
  const { eventData } = useTypedSelector((state) => state.event);
  const [modalSchedule, setModalSchedule] = useState(false);
  const [schedule, setSchedule] = useState<any>([]);

  const params = useParams();
  const eventId = params.id;

  useEffect(() => {
    if (eventId) {
      dispatch(onGetDetailsRequested(eventId));
    }
  }, [dispatch]);

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
    Array.from(formData.images).forEach(async (image: any) => {
      const imageBase64: any = await getBase64Picture(image);
      imagesBase64.push(imageBase64.split(',')[1]);
    });
    eventData?.images.forEach((imageBase64: string) => {
      imagesBase64.push(imageBase64);
    });

    if (imagesBase64) {
      const body = {
        ...formData,
        images: imagesBase64,
        type: formData.type.toLowerCase(),
        date: reserveDate,
        vacancies: Number(formData.vacancies),
        ticketsPerPerson: Number(formData.ticketsPerPerson),
      };

      // TODO Change userID for organizerId
      dispatch(onEditRequested({ ...body, userId: '0' }));
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

  return (
    <Layout>
      <CreateEvent
        onSubmit={onSubmit}
        setReserveDate={setReserveDate}
        reserveDate={reserveDate}
        eventInitialValues={eventData}
        isEdit
        deleteImage={deleteImage}
        setModalSchedule={setModalSchedule}
        schedule={schedule}
      />
      <ScheduleComponent
        onSubmit={onSubmitSchedule}
        modalSchedule={modalSchedule}
        onClose={() => setModalSchedule(false)}
        schedule={schedule}
      />
    </Layout>
  );
};
export default EditEventContainer;