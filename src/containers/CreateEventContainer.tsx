import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import dayjs, { Dayjs } from 'dayjs';
import { onCreateEventRequested } from '../redux/actions/event.actions';
import CreateEvent from '../views/CreateEvent/CreateEvent';
import { ICreateEventFormData } from '../views/CreateEvent/types';
import Layout from '../views/Layout/Layout';

const CreateEventContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [reserveDate, setReserveDate] = useState(new Date());
  // eslint-disable-next-line max-len
  const [eventStartTime, setEventStartTime] = useState<Dayjs | null>(dayjs((new Date()).toDateString()));
  const [eventEndTime, setEventEndTime] = useState<Dayjs | null>(null);

  const getBase64Picture = async (file: any) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // eslint-disable-next-line func-names
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
        startTime: eventStartTime && new Date(eventStartTime.format('YYYY-MM-DDTHH:mm:ss')),
        endTime: eventEndTime && new Date(eventEndTime.format('YYYY-MM-DDTHH:mm:ss')),
      };

      // TODO Change userID for organizerId
      dispatch(onCreateEventRequested({ ...body, userId: '0' }));
    }
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
      />
    </Layout>
  );
};
export default CreateEventContainer;
