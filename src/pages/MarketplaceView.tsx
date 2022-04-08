import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import Section from '../layouts/Section';
import Loader from '../shared/Loader';
import ImageGallery from 'react-image-gallery';
import colors from '../constants/colors';
import styled from 'styled-components';
import {
  BsClock,
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsHeart,
} from 'react-icons/bs';
import { MdOutlineBathroom, MdOutlineBedroomParent } from 'react-icons/md';
import { MdLocationPin } from 'react-icons/md';
import Button from '../shared/Button';
import PropertyCard from '../components/PropertyCard';

const MarketplaceView = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  if (loading) return <Loader />;
  return (
    <Layout>
      <Section>
        <div className='mb-5 d-flex align-items-center justify-content-between border-bottom flex-wrap'>
          <div>
            <h4 className='text-capitalize text-dark'>
              Very Clean 3 Bedroom Detached Bungalow
            </h4>
            <Container className='d-flex gap-3 text-secondary mb-2'>
              <span className='border p-1 text-capitalize'>promoted</span>
              <div className='d-flex align-items-center'>
                <BsClock size={15} className='me-1' />
                <span>Posted 1 hour ago</span>
              </div>
              <div className='d-flex align-items-center'>
                <MdLocationPin size={15} />
                <span className='text-capitalize'>ikeja, lagos</span>
              </div>
            </Container>
          </div>
          <h2>₦50,0000,000</h2>
        </div>

        <div className='row'>
          <div className='col-lg-8'>
            <div
              style={{
                display: 'block',
                minHeight: '1px',
                overflow: 'auto',
                background: `${colors.grey}`,
              }}
            >
              <ImageGallery
                items={images}
                thumbnailPosition='bottom'
                showPlayButton={false}
                showBullets={true}
                showIndex={true}
              />
            </div>
            <Disclaimer className='shadow p-3 mt-2'>
              <h5 className='text-capitalize text-dark'>disclaimer</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium repellendus perferendis odit nisi, dolores voluptas
                mollitia aut. Praesentium placeat eligendi, dolorum earum, a
                culpa iure nam quisquam vero laboriosam ipsa?
              </p>
            </Disclaimer>
          </div>
          <div className='col-lg-4'>
            <DescriptionHeader className='mb-3 p-2'>
              description
            </DescriptionHeader>
            <p className='text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              quibusdam at totam, cupiditate cum maxime magni tempore voluptas
              ab et sint ratione adipisci dicta soluta saepe minima. Repellat,
              unde veniam! Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Dolore quasi eligendi accusantium veritatis molestias
              dignissimos suscipit consequuntur odit assumenda excepturi ab
              eius, ipsam officiis? Rerum illum fugiat veritatis illo maxime.
            </p>
            <div className='text-dark d-flex my-3 gap-3'>
              <div>
                <MdOutlineBedroomParent size={25} />
                <span className='ms-1'>3 bedroom</span>
              </div>
              <div>
                <MdOutlineBathroom size={25} />
                <span className='ms-1'>2 bathroom</span>
              </div>
            </div>
            <h6 className='text-dark mb-3 bg-light p-2 text-center'>
              key features
            </h6>
            <ul>
              <li className='my-1'>Parking Space</li>
              <li className='my-1'>Water Treatment</li>
              <li className='my-1'>Security</li>
              <li className='my-1'>Street lights</li>
              <li className='my-1'>Street lights</li>
              <li className='my-1'>Street lights</li>
              <li className='my-1'>Free WiFi</li>
              <li className='my-1'>Parking Space</li>
              <li className='my-1'>Parking Space</li>
              <li className='my-1'>Electric Fence</li>
            </ul>
            <div className='d-flex justify-content-between mt-3'>
              <Button title='purchase property' />
              <BsHeart size={25} role='button' color={colors.primary} />
            </div>
            <div className='d-flex align-items-center justify-content-center gap-2 border-top border-bottom py-2 my-3 '>
              <BsFacebook color='#3b5998' size={20} className='me-3' />
              <BsTwitter color='#00acee' size={20} className='me-3' />
              <BsLinkedin color='#0e76a8' size={20} className='me-3' />
            </div>
          </div>
        </div>
        {/* // similar posts */}
        <div className='row mt-3'>
          <h4 className='text-capitalize text dark mb-3'>similar posts</h4>
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </Section>
    </Layout>
  );
};

const Disclaimer = styled.div`
  background-color: ${colors.secondary};
`;
const DescriptionHeader = styled.h6`
  background-color: ${colors.primary};
  color: ${colors.white};
  text-transform: capitalize;
  text-align: center;
`;

const Container = styled.div`
  & span {
    font-size: 0.8rem;
  }
`;

export default MarketplaceView;
