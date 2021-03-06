import React from "react";
import HomeAbout from "../components/Home/HomeAbout";
import HomeArticles from "../components/Home/HomeArticles";
import HomeChoose from "../components/Home/HomeChoose";
import HomeFeatured from "../components/Home/HomeFeatured";
import HomeInfo from "../components/Home/HomeInfo";
import HomeSubscription from "../components/Home/HomeSubscription";
import HomeTestimonials from "../components/Home/HomeTestimonials";
import Slider from "../components/Slider";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <div>
      <Slider />
      <HomeFeatured />
      <HomeAbout />
      <HomeInfo />
      <HomeChoose />
      <HomeTestimonials />
      <HomeArticles />
      <HomeSubscription />
      <Footer />
    </div>
  );
};

export default Home;
