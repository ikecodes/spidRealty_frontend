/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeAbout from "../components/Home/HomeAbout";
import HomeArticles from "../components/Home/HomeArticles";
import HomeChoose from "../components/Home/HomeChoose";
import HomeFeatured from "../components/Home/HomeFeatured";
import HomeSubscription from "../components/Home/HomeSubscription";
import HomeTestimonials from "../components/Home/HomeTestimonials";
import Slider from "../components/Slider";
import { PropertyState } from "../constants/interfaces";
import Footer from "../layouts/Footer";
import Loader from "../shared/Loader";
import { getAllProperty } from "../slices/propertySlice";
const Home = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: PropertyState) => state.property);
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

  if (loading) return <Loader />;
  return (
    <div>
      <Slider />
      <HomeFeatured />
      <HomeAbout />
      <HomeChoose />
      <HomeTestimonials />
      <HomeArticles />
      <HomeSubscription />
      <Footer />
    </div>
  );
};

export default Home;
