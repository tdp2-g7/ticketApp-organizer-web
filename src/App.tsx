import React, { FunctionComponent } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CreateEventContainer from './containers/CreateEventContainer';
import LoginContainer from './containers/LoginContainer';

const App: FunctionComponent = () => (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/createEvent" element={<CreateEventContainer />} />
        </Routes>
      </BrowserRouter>
    </>
);

export default App;
