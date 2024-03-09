import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import AppLayout from './layouts/AppLayout';

// Public Routes
import Home from './pages/Home/Home'
import Info from './pages/Info/Info'
import Blog from './pages/Blog/Blog'

// Error 404
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='info' element={<Info />} />
        <Route path='blog' element={<Blog />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
