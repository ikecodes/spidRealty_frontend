import React from 'react';
import {
  Home,
  About,
  Marketplace,
  MarketplaceView,
  Blog,
  BlogView,
  Invest,
  Investment,
  PurchaseForm,
  RegisterAs,
  SignUp,
  Login,
} from './pages';
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
          <Route path='/marketplace/:id' element={<MarketplaceView />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<BlogView />} />
          <Route path='/invest' element={<Invest />} />
          <Route path='/investment' element={<Investment />} />
          <Route path='/investment/:id' element={<Investment />} />
          <Route path='/purchase-form' element={<PurchaseForm />} />
          <Route path='/registerAs' element={<RegisterAs />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
