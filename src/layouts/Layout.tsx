import React from 'react';
import Footer from './Footer';
import Header from './Header';
interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='container'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
