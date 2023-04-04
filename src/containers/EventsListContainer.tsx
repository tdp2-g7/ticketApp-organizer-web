import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../hooks/useTypedSelector';
import { onGetAllEventsByUserIdRequested } from '../redux/actions/event.actions';
import EventsList from '../views/EventsList/EventsList';
import Layout from '../views/Layout/Layout';

const ITEMS_PER_PAGE = 10;

const CreateEventContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { events, maxPage } = useTypedSelector((state) => state.event);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // TODO change userId
    const organizerId = '0';
    const data = {
      organizerId,
      page: currentPage,
      offset: ITEMS_PER_PAGE,
    };
    dispatch(onGetAllEventsByUserIdRequested(data));
  }, [dispatch, currentPage]);

  return (
    <Layout>
      {events && (
        <EventsList
          events={events}
          maxPage={maxPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Layout>
  );
};
export default CreateEventContainer;
