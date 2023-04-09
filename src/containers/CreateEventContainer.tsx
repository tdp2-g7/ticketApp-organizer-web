import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from 'src/hooks/useTypedSelector';
import { onCreateEventRequested } from '../redux/actions/event.actions';
import CreateEvent from '../views/CreateEvent/CreateEvent';
import { ICreateEventFormData } from '../views/CreateEvent/types';
import Layout from '../views/Layout/Layout';
import ScheduleComponent from '../views/CreateEvent/Schedule/Schedule';

const CreateEventContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { user } = useTypedSelector((state) => state.user);

  const [reserveDate, setReserveDate] = useState(new Date());
  const [modalSchedule, setModalSchedule] = useState(false);
  const [schedule, setSchedule] = useState<any>([]);

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
    await Promise.all(Array.from(formData.images).map(async (image: any) => {
      const imageBase64: any = await getBase64Picture(image);
      imagesBase64.push(imageBase64.split(',')[1]);
    }));

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
        // TODO: Change this for the real location
        location: {
          lat: '10',
          lng: '10',
          label: 'Paseo Colon',
        },
      };
      dispatch(onCreateEventRequested(body));
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
        onSubmit={onCreateEvent}
        setReserveDate={setReserveDate}
        reserveDate={reserveDate}
        isEdit={false}
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
export default CreateEventContainer;
