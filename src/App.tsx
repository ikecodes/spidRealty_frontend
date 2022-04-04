import React from 'react';
import { Home, About, Marketplace, Blog } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/marketplace' element={<Marketplace />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
