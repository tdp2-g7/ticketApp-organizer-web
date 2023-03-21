import React, { FunctionComponent } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';

const App: FunctionComponent = () => (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </BrowserRouter>
    </>
);

export default App;
