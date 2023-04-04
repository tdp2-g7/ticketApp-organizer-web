import { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onCreateEventRequested } from '../redux/actions/event.actions';
import CreateEvent from '../views/CreateEvent/CreateEvent';
import { ICreateEventFormData } from '../views/CreateEvent/types';
import Layout from '../views/Layout/Layout';

const CreateEventContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [reserveDate, setReserveDate] = useState(new Date());

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
      />
    </Layout>
  );
};
export default CreateEventContainer;
