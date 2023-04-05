import React, { FunctionComponent } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CreateEventContainer from './containers/CreateEventContainer';
import EventDetailsContainer from './containers/EventDetailsContainer';
import EventsListContainer from './containers/EventsListContainer';
import LoginContainer from './containers/LoginContainer';

const App: FunctionComponent = () => (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/createEvent" element={<CreateEventContainer />} />
          <Route path="/" element={<EventsListContainer />} />
          <Route path="/events/:id" element={<EventDetailsContainer />} />

        </Routes>
      </BrowserRouter>
    </>
);

export default App;
