import React from 'react';
import HomeSubscription from '../components/Home/HomeSubscription';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <HomeSubscription />
      <Footer />
    </>
  );
};

export default Layout;
