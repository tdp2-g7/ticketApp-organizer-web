import React, { FunctionComponent } from 'react';
import { gapi } from 'gapi-script';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateEventContainer from './containers/CreateEventContainer';
import EventDetailsContainer from './containers/EventDetailsContainer';
import EventsListContainer from './containers/EventsListContainer';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import { GlobalHistory } from './helpers/history';

const App: FunctionComponent = () => {
  gapi.load('client:auth2', () => {
    gapi.client.init({
      clientId:
        '391050283783-gfmsthbi7j78ac4ulc1okug7o1p225ih.apps.googleusercontent.com',
      plugin_name: 'chat',
    });
  });
  return (
    <>
      <BrowserRouter>
        <GlobalHistory />
        <Routes>
          <Route path='/login' element={<LoginContainer />} />
          <Route path='/createEvent' element={<CreateEventContainer />} />
          <Route path='/' element={<EventsListContainer />} />
          <Route path='/events/:id' element={<EventDetailsContainer />} />
          <Route path='/register' element={<RegisterContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
