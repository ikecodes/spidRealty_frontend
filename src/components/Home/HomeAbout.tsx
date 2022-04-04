import React from 'react';
import Section from '../../layouts/Section';
import BgImage from '../../assets/images/family.jpg';
import Image from '../../shared/Image';
import Button from '../../shared/Button';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
  return (
    <Section>
      <div className='container'>
        <h1 className='text-capitalize  my-5 '>about us</h1>
        <div className='row flex-md-row-reverse'>
          <div className='col-lg-6'>
            <Image src={BgImage} alt='chairman' h={100} unit='%' />
          </div>
          <div className='col-lg-6'>
            <p>
              iusto, temporibus dolore ab error doloremque quia nobis laborum
              quas eum quod at. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sequi, voluptatum atque? Reiciendis assumenda,
              magni, fuga ab, cupiditate aperiam optio ducimus incidunt quis
              fugit beatae qui quisquam est possimus numquam tempore!
            </p>
            <p>
              iusto, temporibus dolore ab error doloremque quia nobis laborum
              quas eum quod at. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sequi, voluptatum atque? Reiciendis assumenda,
              magni, fuga ab, cupiditate aperiam optio ducimus incidunt quis
              fugit beatae qui quisquam est possimus numquam tempore!
            </p>
            <Link to='/about-us'>
              <Button title='learn more' primary loading={false} />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeAbout;
