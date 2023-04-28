import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useTypedSelector from '../hooks/useTypedSelector';
import { onGetDetailsRequested } from '../redux/actions/event.actions';
import EventDetails from '../views/EventDetails/EventDetails';
import Layout from '../views/Layout/Layout';

const EventDetailsContainer: FunctionComponent = () => {
  const { eventData, loading } = useTypedSelector((state) => state.event);
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [mapsModalOpen, setMapsModalOpen] = useState(false);
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
      {eventData && <EventDetails event={eventData}
          scheduleModalOpen={scheduleModalOpen}
          setScheduleModalOpen={setScheduleModalOpen}
          mapsModalOpen={mapsModalOpen}
          setMapsModalOpen={setMapsModalOpen}
          loading={loading}
        />
      }
      </Layout>
  );
};
export default EventDetailsContainer;
