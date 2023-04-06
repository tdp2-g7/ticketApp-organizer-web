import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../hooks/useTypedSelector';
import { onEditRequested } from '../redux/actions/event.actions';
import CreateEvent from '../views/CreateEvent/CreateEvent';
import { ICreateEventFormData } from '../views/CreateEvent/types';
import Layout from '../views/Layout/Layout';

const EditEventContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [reserveDate, setReserveDate] = useState(new Date());
  const { eventData } = useTypedSelector((state) => state.event);

  const getBase64Picture = async (file: any) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // eslint-disable-next-line func-names
    reader.onload = function () {
      resolve(reader.result);
    };
  });

  const onSubmit = async (formData: ICreateEventFormData) => {
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
      dispatch(onEditRequested({ ...body, userId: '0' }));
    }
  };
  return (
    <Layout>
      <CreateEvent
        onSubmit={onSubmit}
        setReserveDate={setReserveDate}
        reserveDate={reserveDate}
        eventInitialValues={eventData}
        isEdit={true}
      />
    </Layout>
  );
};
export default EditEventContainer;
