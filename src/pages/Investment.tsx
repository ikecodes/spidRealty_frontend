import React, { useState } from 'react';
import InvestmentCard from '../components/InvestmentCard';
import Layout from '../layouts/Layout';
import Section from '../layouts/Section';
import Loader from '../shared/Loader';

const Investment = () => {
  const [loading, setloading] = useState<boolean>(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);
  if (loading) return <Loader />;
  return (
    <Layout>
      <Section>
        <h1 className='text-capitalize  m-0 p-0 mb-5 text-center'>
          active properties for investment
        </h1>
        <div className='row'>
          <InvestmentCard />
          <InvestmentCard />
          <InvestmentCard />
          <InvestmentCard />
          <InvestmentCard />
          <InvestmentCard />
        </div>
      </Section>
    </Layout>
  );
};

export default Investment;
