import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Loading from 'src/components/Loading/Loading';
import useTypedSelector from 'src/hooks/useTypedSelector';
import {
  onGetByMonthRequested,
  onGetByStateRequested,
} from 'src/redux/actions/event.actions';
import Layout from 'src/views/Layout/Layout';
import Metrics from 'src/views/Metrics/Metrics';

const MetricsContainer: FunctionComponent = () => {
  const { loading, eventsByState, eventsByMonth } = useTypedSelector(
    (state) => state.event,
  );
  const { user } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    if (user) {
      dispatch(onGetByStateRequested(user.userId));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user) {
      dispatch(onGetByMonthRequested(user.userId, year));
    }
  }, [dispatch, user, year]);

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <Metrics
          eventsByStatus={eventsByState}
          eventsByMonth={eventsByMonth}
          year={year}
          setYear={setYear}
        />
      )}
    </Layout>
  );
};

export default MetricsContainer;
