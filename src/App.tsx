/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
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
  EmailConfirmation,
  Login,
  ForgotPassword,
  ResetPassword,
  AgentDashboard,
  AgentPost,
  AgentListings,
  AgentProfile,
  AdminLogin,
  AdminDashboard,
  AdminAgents,
  AdminProperties,
  AdminArticles,
  AdminPostArticle,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
// import Loader from "./shared/Loader";
import { useDispatch } from "react-redux";
// import { PropertyState } from "./constants/interfaces";
import { getAllProperty } from "../src/slices/propertySlice";

function App() {
  const dispatch = useDispatch();
  // const { loading } = useSelector((state: PropertyState) => state.property);
  const stateSlug = "";
  const regionSlug = "";
  const categorySlug = "";
  const page = 1;
  const limit = 10;
  useEffect(() => {
    dispatch(
      getAllProperty({ stateSlug, regionSlug, categorySlug, page, limit })
    );
  }, []);

  // if (loading) return <Loader />;
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
          <Route path='/emailConfirmation' element={<EmailConfirmation />} />
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

          {/* // admin */}
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/agents' element={<AdminAgents />} />
          <Route path='/admin/properties' element={<AdminProperties />} />
          <Route path='/admin/articles' element={<AdminArticles />} />
          <Route path='/admin/post-article' element={<AdminPostArticle />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
