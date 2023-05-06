import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from 'src/hooks/useTypedSelector';
import { onCreateDraftRequested } from '../redux/actions/event.actions';
import CreateEvent from '../views/CreateEvent/CreateEvent';
import { ICreateEventFormData } from '../views/CreateEvent/types';
import Layout from '../views/Layout/Layout';
import ScheduleComponent from '../views/CreateEvent/Schedule/Schedule';

const CreateEventContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { user } = useTypedSelector((state) => state.user);

  const [reserveDate, setReserveDate] = useState(new Date());
  const [modalSchedule, setModalSchedule] = useState(false);
  const [location, setLocation] = useState<any>({});
  const [schedule, setSchedule] = useState<any>([]);
  const [formValues, setFormValues] = useState<any>({});

  const getBase64Picture = async (file: any) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // eslint-disable-next-line func-names
    reader.onload = function () {
      resolve(reader.result);
    };
  });

  const onCreateEvent = async (formData: ICreateEventFormData) => {
    const imagesBase64: any = [];
    await Promise.all(
      Array.from(formData.images).map(async (image: any) => {
        const imageBase64: any = await getBase64Picture(image);
        imagesBase64.push(imageBase64.split(',')[1]);
      }),
    );

    if (imagesBase64 && user) {
      const body = {
        ...formData,
        userId: user.userId,
        images: imagesBase64,
        type: formData.type,
        date: reserveDate,
        vacancies: Number(formData.vacancies),
        ticketsPerPerson: Number(formData.ticketsPerPerson),
        schedule,
        location: {
          lat: location.lat.toString(),
          lng: location.lng.toString(),
          label: location.label,
        },
      };
      console.log('🚀 ~ ON CREATE', body);

      // dispatch(onCreateEventRequested(body));
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

  const onSaveDraft = async () => {
    const {
      vacancies, ticketsPerPerson, images, ...data
    } = formValues;
    const imagesBase64: any = [];
    if (images) {
      await Promise.all(
        Array.from(images).map(async (image: any) => {
          const imageBase64: any = await getBase64Picture(image);
          imagesBase64.push(imageBase64.split(',')[1]);
        }),
      );
    }

    let body;
    if (imagesBase64) {
      body = {
        ...data,
        images: imagesBase64,
        vacancies: Number(vacancies),
        ticketsPerPerson: Number(ticketsPerPerson),
        userId: user?.userId,
      };
    } else {
      body = {
        ...data,
        vacancies: Number(vacancies),
        ticketsPerPerson: Number(ticketsPerPerson),
        userId: user?.userId,
      };
    }

    dispatch(onCreateDraftRequested(body));
  };

  return (
    <Layout>
      <CreateEvent
        onSubmit={onCreateEvent}
        setReserveDate={setReserveDate}
        reserveDate={reserveDate}
        isEdit={false}
        location={location}
        setLocation={setLocation}
        setModalSchedule={setModalSchedule}
        schedule={schedule}
        setFormValues={setFormValues}
        onSaveDraft={onSaveDraft}
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
export default CreateEventContainer;
