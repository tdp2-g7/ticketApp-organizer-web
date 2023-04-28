import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../hooks/useTypedSelector';
import { onGetAllEventsByUserIdRequested, onGetDrafts, onGetLocations } from '../redux/actions/event.actions';
import EventsList from '../views/EventsList/EventsList';
import Layout from '../views/Layout/Layout';

const ITEMS_PER_PAGE = 10;

const CreateEventContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const {
    events, maxPage, drafts, locations, loading,
  } = useTypedSelector((state) => state.event);
  const { user } = useTypedSelector((state) => state.user);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    title: '',
    type: '',
    location: '',
    orderBy: '',
    sortBy: 'asc',
  });

  useEffect(() => {
    if (user) {
      dispatch(onGetDrafts(user.userId));
      dispatch(onGetLocations(user.userId));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user) {
      const data = {
        userId: user.userId.toString(),
        page: currentPage,
        offset: ITEMS_PER_PAGE,
      };
      dispatch(onGetAllEventsByUserIdRequested(data));
    }
  }, [dispatch, currentPage, user]);

  const handleFilters = () => {
    if (user) {
      const data = {
        userId: user.userId.toString(),
        page: currentPage,
        offset: ITEMS_PER_PAGE,
        title: filters.title,
        location: filters.location,
        type: filters.type,
        [filters.orderBy]: filters.sortBy,
      };
      dispatch(onGetAllEventsByUserIdRequested(data));
    }
  };

  useEffect(() => {
    if (user) {
      const data = {
        userId: user.userId.toString(),
        page: currentPage,
        offset: ITEMS_PER_PAGE,
        title: filters.title,
        type: filters.type,
        [filters.orderBy]: filters.sortBy,
      };
      dispatch(onGetAllEventsByUserIdRequested(data));
    }
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
          drafts={drafts}
          locations={locations}
          loading={loading}
        />
      )}
    </Layout>
  );
};
export default CreateEventContainer;
