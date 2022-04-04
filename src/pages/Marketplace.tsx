import React, { useState } from 'react';
import MarketFilter from '../components/MarketFilter';
import PropertyCard from '../components/PropertyCard';
import Layout from '../layouts/Layout';
import Section from '../layouts/Section';
import Loader from '../shared/Loader';

const Marketplace = () => {
  const [loading, setloading] = useState<boolean>(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);
  if (loading) return <Loader />;
  return (
    <Layout>
      <Section>
        <h1 className='text-capitalize fw-bold m-0 p-0 mb-5 text-center'>
          all listings
        </h1>
        <div className='position-relative'>
          <MarketFilter />
          <div className='row'>
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Marketplace;
