import React, { useState } from 'react';
import {
  BsBookmark,
  BsCalendarDate,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsShare,
} from 'react-icons/bs';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import Section from '../layouts/Section';
import Loader from '../shared/Loader';
import BlogImg from '../assets/images/family.jpg';
import Image from '../shared/Image';
import SimilarPostCard from '../components/SimilarPostCard';

const BlogView = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);
  if (loading) return <Loader />;
  return (
    <Layout>
      <Section>
        <h1 className='text-capitalize  m-0 p-0 mb-5 text-center'>
          How to Create a Productive Work-From-Home Office
        </h1>
        <ArticleDetail className='text-dark p-2 d-flex justify-content-around mb-3 gap-2 flex-wrap'>
          <div className='d-flex align-items-center '>
            <BsShare size={15} className='me-1' />
            <span className='mt-1 me-3'>Share</span>
            <BsFacebook color='#3b5998' size={15} className='me-3' />
            <BsTwitter color='#00acee' size={15} className='me-3' />
            <BsLinkedin color='#0e76a8' size={15} className='me-3' />
          </div>
          <div className='d-flex align-items-center'>
            <BsCalendarDate size={15} className='me-1' />
            <span className='mt-1'>22-20-2022</span>
          </div>
          <div className='d-flex align-items-center'>
            <BsBookmark size={15} className='me-1' />
            <span className='mt-1'>4 minutes read</span>
          </div>
        </ArticleDetail>

        <div className='row'>
          <div className='col-lg-8'>
            <Image src={BlogImg} h={25} unit='rem' alt='blog' />
            <div className='my-3'>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt corporis saepe molestias sequi sunt ducimus nesciunt
                dolores quia obcaecati recusandae consectetur iste natus, quasi
                quam, debitis iusto suscipit. Voluptas, voluptatum.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt corporis saepe molestias sequi sunt ducimus nesciunt
                dolores quia obcaecati recusandae consectetur iste natus, quasi
                quam, debitis iusto suscipit. Voluptas, voluptatum.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt corporis saepe molestias sequi sunt ducimus nesciunt
                dolores quia obcaecati recusandae consectetur iste natus, quasi
                quam, debitis iusto suscipit. Voluptas, voluptatum. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Eveniet, molestias
                totam illum dicta consequuntur culpa recusandae earum dolores
                hic esse soluta, praesentium quisquam quidem ea accusantium
                harum molestiae quo! Quis.
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <h4 className='text-capitalize text dark'>similar posts</h4>
            <div>
              <SimilarPostCard />
              <SimilarPostCard />
              <SimilarPostCard />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

const ArticleDetail = styled.div`
  & span {
    font-size: 0.8rem;
  }
`;
export default BlogView;
