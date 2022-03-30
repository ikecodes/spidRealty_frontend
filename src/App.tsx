import React from 'react';
import { Home } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
