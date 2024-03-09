import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='info' element={<Info />} />
      <Route path='blog' element={<Blog />} />
    </Routes>
  );
}

export default App;
