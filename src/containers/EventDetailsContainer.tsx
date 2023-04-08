import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useTypedSelector from '../hooks/useTypedSelector';
import { onGetDetailsRequested } from '../redux/actions/event.actions';
import EventDetails from '../views/EventDetails/EventDetails';
import Layout from '../views/Layout/Layout';

const EventDetailsContainer: FunctionComponent = () => {
  const { eventData } = useTypedSelector((state) => state.event);
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const eventId = params.id;

  useEffect(() => {
    if (eventId) {
      dispatch(onGetDetailsRequested(eventId));
    }
  }, [dispatch, eventId]);

  return (
    <Layout>
      {eventData
        && <EventDetails event={eventData}
          scheduleModalOpen={scheduleModalOpen}
          setScheduleModalOpen={setScheduleModalOpen}
        />
      }
      </Layout>
  );
};
export default EventDetailsContainer;
