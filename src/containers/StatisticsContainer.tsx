import { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useTypedSelector from 'src/hooks/useTypedSelector';
import {
  onGetDetailsRequested,
  onGetStatisticsRequested,
} from 'src/redux/actions/event.actions';
import Layout from 'src/views/Layout/Layout';
import Statistics from 'src/views/Statistics/Statistics';

const StatisticsContainer: FunctionComponent = () => {
  const { loading, eventData, statisticsData } = useTypedSelector(
    (state) => state.event,
  );
  const dispatch = useDispatch();

  const params = useParams();
  const eventId = params.id;

  useEffect(() => {
    if (eventId) {
      dispatch(onGetDetailsRequested(eventId));
      dispatch(onGetStatisticsRequested(eventId));
    }
  }, [dispatch, eventId]);

  return (
    <Layout>
      <Statistics
        loading={loading}
        eventData={eventData}
        statisticsData={statisticsData}
      />
    </Layout>
  );
};
export default StatisticsContainer;
