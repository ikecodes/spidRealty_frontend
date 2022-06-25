import React from "react";
import Section from "../../layouts/Section";
import BgImage from "../../assets/images/spid1.jpeg";
import Image from "../../shared/Image";
import Button from "../../shared/Button";
import { Link } from "react-router-dom";

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
              Spid Realty is redefining real estate marketing, advertising and
              sales to help real estate companies and agents achieve their
              marketing and sales goals while ensuring that our clients are
              happy and fulfilled through making secured purchases on our
              platform.
            </p>
            <p>
              As the most secured real estate website in Nigeria, Spid Realty
              and its partner companies and agents offer customers an on-demand
              experience for selling, buying, and renting with secured,
              transparent and seamless end-to-end service.
            </p>
            <p>
              Spid Realty offers a comprehensive list of for-sale and for-rent
              properties, as well as the information and tools to make informed
              real estate decisions.
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
