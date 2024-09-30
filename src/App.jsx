import React from 'react'
import Home from './components/Home'
import SuccessfulUC from './components/SuccessfulUC'
import FailedUC from './components/FailUC'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/successfuluc' element={<SuccessfulUC />} />
          <Route path='/home/faileduc' element={<FailedUC />} />
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;