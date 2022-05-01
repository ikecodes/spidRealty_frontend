import React from "react";
import {
  Home,
  About,
  Marketplace,
  MarketplaceView,
  Blog,
  BlogView,
  Invest,
  Advertise,
  Investment,
  InvestmentView,
  PurchaseForm,
  RegisterAs,
  SignUp,
  Login,
  ForgotPassword,
  ResetPassword,
  AgentDashboard,
  AgentPost,
  AgentListings,
  AgentProfile,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

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
          <Route path='/registerAs' element={<RegisterAs />} />
          <Route path='/purchase-form' element={<PurchaseForm />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />

          <Route path='/invest' element={<Invest />} />
          <Route path='/advertise' element={<Advertise />} />
          <Route path='/investment' element={<Investment />} />
          <Route path='/investment/:id' element={<InvestmentView />} />

          {/* // agent */}
          <Route path='/agent/dashboard' element={<AgentDashboard />} />
          <Route path='/agent/post' element={<AgentPost />} />
          <Route path='/agent/listings' element={<AgentListings />} />
          <Route path='/agent/profile' element={<AgentProfile />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
