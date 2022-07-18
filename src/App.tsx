/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  Home,
  About,
  Marketplace,
  RentalMarketplace,
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
  AdminEnquiries,
  PrivacyPolicy,
  TermsOfUse,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Loader from "./shared/Loader";
import { useDispatch, useSelector } from "react-redux";
import { PropertyState } from "./constants/interfaces";
import { onLoadProperty } from "../src/slices/propertySlice";
import AdminProtected from "./utils/AdminPropected";
import UserProtected from "./utils/UserProtected";
import { getAllArticles } from "./slices/adminSlice";

function App() {
  const dispatch = useDispatch();
  const { firstLoading } = useSelector(
    (state: PropertyState) => state.property
  );
  const stateSlug = "";
  const regionSlug = "";
  const categorySlug = "";
  const page = 1;
  const limit = 10;
  useEffect(() => {
    dispatch(
      onLoadProperty({ stateSlug, regionSlug, categorySlug, page, limit })
    );
    dispatch(getAllArticles());
  }, []);

  if (firstLoading) return <Loader />;
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/marketplace' element={<Marketplace />} />
          <Route path='/rental-marketplace' element={<RentalMarketplace />} />
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
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-of-use' element={<TermsOfUse />} />

          <Route path='/invest' element={<Invest />} />
          <Route path='/advertise' element={<Advertise />} />
          <Route path='/investment' element={<Investment />} />
          <Route path='/investment/:id' element={<InvestmentView />} />

          {/* // agent */}
          <Route
            path='/agent/dashboard'
            element={
              <UserProtected>
                <AgentDashboard />
              </UserProtected>
            }
          />
          <Route
            path='/agent/post'
            element={
              <UserProtected>
                <AgentPost />
              </UserProtected>
            }
          />
          <Route
            path='/agent/listings'
            element={
              <UserProtected>
                <AgentListings />
              </UserProtected>
            }
          />
          <Route
            path='/agent/profile'
            element={
              <UserProtected>
                <AgentProfile />
              </UserProtected>
            }
          />

          {/* // admin */}
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route
            path='/admin/dashboard'
            element={
              <AdminProtected>
                <AdminDashboard />
              </AdminProtected>
            }
          />
          <Route
            path='/admin/agents'
            element={
              <AdminProtected>
                <AdminAgents />
              </AdminProtected>
            }
          />
          <Route
            path='/admin/properties'
            element={
              <AdminProtected>
                <AdminProperties />
              </AdminProtected>
            }
          />
          <Route
            path='/admin/articles'
            element={
              <AdminProtected>
                <AdminArticles />
              </AdminProtected>
            }
          />
          <Route
            path='/admin/post-article'
            element={
              <AdminProtected>
                <AdminPostArticle />
              </AdminProtected>
            }
          />
          <Route
            path='/admin/enquiries'
            element={
              <AdminProtected>
                <AdminEnquiries />
              </AdminProtected>
            }
          />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
