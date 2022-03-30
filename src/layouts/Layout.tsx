import React from 'react';

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className='container'>{children}</div>
    </div>
  );
};

export default Layout;
