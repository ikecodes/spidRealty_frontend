import React, { useState } from 'react';
import HomeAbout from '../components/Home/HomeAbout';
import HomeArticles from '../components/Home/HomeArticles';
import HomeChoose from '../components/Home/HomeChoose';
import HomeFeatured from '../components/Home/HomeFeatured';
import HomeSubscription from '../components/Home/HomeSubscription';
import HomeTestimonials from '../components/Home/HomeTestimonials';
import Slider from '../components/Slider';
import Footer from '../layouts/Footer';
import Loader from '../shared/Loader';
const Home = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);
  if (loading) return <Loader />;
  return (
    <div>
      <Slider />
      <HomeAbout />
      <HomeChoose />
      <HomeFeatured />
      <HomeTestimonials />
      <HomeArticles />
      <HomeSubscription />
      <Footer />
    </div>
  );
};

export default Home;
