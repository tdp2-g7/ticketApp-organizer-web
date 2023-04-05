import { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useTypedSelector from '../hooks/useTypedSelector';
import { onGetDetailsRequested } from '../redux/actions/event.actions';
import EventDetails from '../views/EventDetails/EventDetails';
import Layout from '../views/Layout/Layout';

const EventDetailsContainer: FunctionComponent = () => {
  const { eventData } = useTypedSelector((state) => state.event);
  console.log('🚀 ~ eventData:', eventData);
  const dispatch = useDispatch();
  const params = useParams();
  const eventId = params.id;
  console.log('🚀 ~ eventId:', eventId);

  useEffect(() => {
    if (eventId) {
      dispatch(onGetDetailsRequested(eventId));
    }
  }, [dispatch]);

  return <Layout>{eventData && <EventDetails event={eventData} />}</Layout>;
};
export default EventDetailsContainer;
