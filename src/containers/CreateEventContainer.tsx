import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import dayjs, { Dayjs } from 'dayjs';
import { onCreateEventRequested } from '../redux/actions/event.actions';
import CreateEvent from '../views/CreateEvent/CreateEvent';
import { ICreateEventFormData } from '../views/CreateEvent/types';
import Layout from '../views/Layout/Layout';
import ScheduleComponent from '../views/CreateEvent/Schedule/Schedule';

const CreateEventContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line max-len
  const [eventStartTime, setEventStartTime] = useState<Dayjs | null>(
    dayjs(new Date().toDateString()),
  );
  const [reserveDate, setReserveDate] = useState(new Date());
  const [eventEndTime, setEventEndTime] = useState<Dayjs | null>(null);
  const [modalSchedule, setModalSchedule] = useState(false);
  const [schedule, setSchedule] = useState<any>([]);

  const getBase64Picture = async (file: any) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result);
    };
  });

  const onCreateEvent = async (formData: ICreateEventFormData) => {
    const image: any = await getBase64Picture(formData.image[0]);
    if (image) {
      const body = {
        ...formData,
        image: image.split(',')[1],
        type: formData.type.toLowerCase(),
        date: reserveDate,
        vacancies: Number(formData.vacancies),
        ticketsPerPerson: Number(formData.ticketsPerPerson),
        startTime:
          eventStartTime
          && new Date(eventStartTime.format('YYYY-MM-DDTHH:mm:ss')),
        endTime:
          eventEndTime && new Date(eventEndTime.format('YYYY-MM-DDTHH:mm:ss')),
        schedule,
        // TODO: Change this for the real location
        location: {
          lat: 10,
          lng: 10,
          label: 'Paseo Colon',
        },
      };

      // TODO Change userID for organizerId
      dispatch(onCreateEventRequested({ ...body, userId: '0' }));
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
  };

  return (
    <Layout>
      <CreateEvent
        onCreateEvent={onCreateEvent}
        setReserveDate={setReserveDate}
        reserveDate={reserveDate}
        setEventStartTime={setEventStartTime}
        eventStartTime={eventStartTime}
        setEventEndTime={setEventEndTime}
        eventEndTime={eventEndTime}
        setModalSchedule={setModalSchedule}
      />
      <ScheduleComponent
        onSubmit={onSubmitSchedule}
        modalSchedule={modalSchedule}
        onClose={() => setModalSchedule(false)}
      />
    </Layout>
  );
};
export default CreateEventContainer;
