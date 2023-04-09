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
  const [filters, setFilters] = useState({
    title: '', type: '', orderBy: '', sortBy: 'asc',
  });

  useEffect(() => {
    // TODO change userId
    const userId = '0';
    const data = {
      userId,
      page: currentPage,
      offset: ITEMS_PER_PAGE,
    };
    dispatch(onGetAllEventsByUserIdRequested(data));
  }, [dispatch, currentPage]);

  const handleFilters = () => {
    const userId = '0';
    const data = {
      userId,
      page: currentPage,
      offset: ITEMS_PER_PAGE,
      title: filters.title,
      type: filters.type,
      [filters.orderBy]: filters.sortBy,
    };
    dispatch(onGetAllEventsByUserIdRequested(data));
  };

  useEffect(() => {
    const userId = '0';
    const data = {
      userId,
      page: currentPage,
      offset: ITEMS_PER_PAGE,
      title: filters.title,
      type: filters.type,
      [filters.orderBy]: filters.sortBy,
    };
    dispatch(onGetAllEventsByUserIdRequested(data));
  }, [filters.orderBy, filters.sortBy]);

  return (
    <Layout>
      {events && (
        <EventsList
          events={events}
          maxPage={maxPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          filters={filters}
          setFilters={setFilters}
          handleFilters={handleFilters}
        />
      )}
    </Layout>
  );
};
export default CreateEventContainer;
