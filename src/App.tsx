import React, { FunctionComponent } from 'react';
import { gapi } from 'gapi-script';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CreateEventContainer from './containers/CreateEventContainer';
import EventDetailsContainer from './containers/EventDetailsContainer';
import EditEventContainer from './containers/EditEventContainer';
import EventsListContainer from './containers/EventsListContainer';
import AuthContainer from './containers/AuthContainer';
import { GlobalHistory } from './helpers/history';
import { getCookie } from './helpers/cookies';
import { onLoginRequested } from './redux/actions/user.actions';
import { GOOGLE_CLIENT_ID } from './configs/configs';
import PrivateRoute from './containers/PrivateRoute';

const App: FunctionComponent = () => {
  const dispatch = useDispatch();

  gapi.load('client:auth2', () => {
    gapi.client.init({
      clientId: { GOOGLE_CLIENT_ID },
      plugin_name: 'chat',
    });
  });

  const accessToken = getCookie('accessToken');
  const email = getCookie('email');
  const userId = getCookie('userId');
  const cookieObject = { accessToken, email, userId };
  if (userId) {
    dispatch(onLoginRequested(cookieObject));
  }

  return (
    <>
      <BrowserRouter>
        <GlobalHistory />
        <Routes>
          <Route
            path='/createEvent'
            element={
              <PrivateRoute>
                <CreateEventContainer />
              </PrivateRoute>
            }
          />
          <Route
            path='/home'
            element={
              <PrivateRoute>
                <EventsListContainer />
              </PrivateRoute>
            }
          />
          <Route
            path='/events/:id'
            element={
              <PrivateRoute>
                <EventDetailsContainer />
              </PrivateRoute>
            }
          />
          <Route path='/auth' element={<AuthContainer />} />
          <Route
            path='/event/edit/:id'
            element={
              <PrivateRoute>
                <EditEventContainer />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
