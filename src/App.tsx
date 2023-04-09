import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateEventContainer from './containers/CreateEventContainer';
import EventDetailsContainer from './containers/EventDetailsContainer';
import EventsListContainer from './containers/EventsListContainer';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import { GlobalHistory } from './helpers/history';

const App: FunctionComponent = () => (
  <>
    <BrowserRouter>
      <GlobalHistory />
      <Routes>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/createEvent" element={<CreateEventContainer />} />
        <Route path="/" element={<EventsListContainer />} />
        <Route path="/events/:id" element={<EventDetailsContainer />} />
        <Route path="/register" element={<RegisterContainer />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
