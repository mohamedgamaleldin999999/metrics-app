import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Navbar from './components/Nav';
import City from './components/City';
import Cities from './components/Cities';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route
            path="/city"
            exact
            element={<City />}
          />
          <Route
            path="/"
            exact
            element={<Cities />}
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
