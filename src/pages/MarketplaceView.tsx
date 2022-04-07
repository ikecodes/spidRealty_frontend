import React, { useState } from 'react';
import Loader from '../shared/Loader';

const MarketplaceView = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);
  if (loading) return <Loader />;
  return <div>MarketplaceView</div>;
};

export default MarketplaceView;
