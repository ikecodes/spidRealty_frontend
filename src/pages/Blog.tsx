import React, { useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import Layout from '../layouts/Layout';
import Section from '../layouts/Section';
import Loader from '../shared/Loader';

const Blog = () => {
  const [loading, setloading] = useState<boolean>(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);
  if (loading) return <Loader />;
  return (
    <Layout>
      <Section>
        <h1 className='text-capitalize fw-bold m-0 p-0 mb-5 text-center'>
          latest news and articles
        </h1>
        <div className='row'>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </Section>
    </Layout>
  );
};

export default Blog;
