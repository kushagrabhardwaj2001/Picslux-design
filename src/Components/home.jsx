import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Design from './design';

function home() {
  return (
    <Router>
      <Routes>
        <Route path="/Design" element={<Design />} />
      </Routes>
    </Router>
  );
}

export default home;
