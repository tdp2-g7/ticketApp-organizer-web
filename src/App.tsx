import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateEventContainer from './containers/CreateEventContainer';
import EventDetailsContainer from './containers/EventDetailsContainer';
import EditEventContainer from './containers/EditEventContainer';
import EventsListContainer from './containers/EventsListContainer';
import LoginContainer from './containers/LoginContainer';
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
        <Route path="/event/edit/:id" element={<EditEventContainer />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
