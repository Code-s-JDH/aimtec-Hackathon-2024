import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Public Routes
import Home from './pages/home/Home'
import Info from './pages/info/Info'
import Blog from './pages/blog/Blog'

// Error 404
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='info' element={<Info />} />
      <Route path='blog' element={<Blog />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
