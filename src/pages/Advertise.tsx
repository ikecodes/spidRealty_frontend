import React from "react";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import Image from "../shared/Image";
import AdvertiseImg from "../assets/images/family.jpg";
import styled from "styled-components";
import colors from "../constants/colors";
import { Link } from "react-router-dom";

const Advertise = () => {
  return (
    <Layout>
      <Section>
        <h1 className='text-capitalize m-0 mb-5 text-center'>
          Sell your property with confidence
        </h1>
        <div>
          <p>
            Spidrealty.com is making it simpler to sell your real estate
            property and achieve your dreams.
          </p>
          <Bg>
            <h3 className='my-3 text-capitalize text-center'>
              Why post on Spidrealty.com?
            </h3>
            <List>
              <li>
                <span>Free listings</span> - Post a listing for free, including
                video and unlimited photos.
              </li>
              <li>
                <span>Market your property to buyers</span> - Your property will
                be listed on Spidrealty.com, our partner platforms and all our
                media channels, reaching the largest audience of home shoppers
                on the internet.
              </li>
              <li>
                <span>Sell successfully</span> - Property shoppers receive
                instant emails about new listings.
              </li>
            </List>
          </Bg>

          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            consectetur aliquam, nesciunt excepturi architecto suscipit labore
            officia atque repellat impedit sit facilis corrupti a voluptas
            blanditiis dolorem ipsa! Illum, commodi?Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officiis saepe consequuntur laboriosam
            itaque minima aperiam, assumenda commodi voluptate nostrum
            repellendus earum eaque alias temporibus hic sequi, iure expedita
            mollitia laudantium!
          </p> */}
        </div>
        <div className='row mt-5'>
          <div className='col-lg-6'>
            <Image src={AdvertiseImg} alt='about' h={100} unit='%' rounded />
          </div>
          <div className='col-lg-6'>
            <h2 className='my-3 text-capitalize'>fulfilling a legacy</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              pariatur odio odit ipsam perspiciatis quisquam iure in qui
              distinctio maxime, voluptates cupiditate tempora consequuntur.
              Deleniti nesciunt perferendis cumque officia ipsam? Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ipsum quas maxime
              totam natus animi ratione accusantium illum quo sit quam, nisi
              dolores! Amet rem dolore expedita dolorum libero esse nisi.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              facilis est dignissimos quis ex, aliquid pariatur corrupti
              laudantium fugit unde vel doloremque itaque, minima labore ipsa,
              ad debitis. Hic, eveniet!
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className='row flex-md-row-reverse'>
          <div className='col-lg-6'>
            <Image src={AdvertiseImg} alt='about' h={100} unit='%' rounded />
          </div>
          <div className='col-lg-6'>
            <h2 className='my-3 text-capitalize'>fulfilling a legacy</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              pariatur odio odit ipsam perspiciatis quisquam iure in qui
              distinctio maxime, voluptates cupiditate tempora consequuntur.
              Deleniti nesciunt perferendis cumque officia ipsam? Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ipsum quas maxime
              totam natus animi ratione accusantium illum quo sit quam, nisi
              dolores! Amet rem dolore expedita dolorum libero esse nisi.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              facilis est dignissimos quis ex, aliquid pariatur corrupti
              laudantium fugit unde vel doloremque itaque, minima labore ipsa,
              ad debitis. Hic, eveniet!
            </p>
          </div>
        </div>
      </Section>
      <div className='text-center my-5'>
        <Link to='/signup'>
          <Button>Advertise Now</Button>
        </Link>
      </div>
    </Layout>
  );
};

const Bg = styled.div`
  background-color: ${colors.secondary};
  padding: 2rem 1rem;
`;

const List = styled.ul`
  list-style: upper-alpha;
  & li {
    margin-bottom: 0.8rem;
    & span {
      font-weight: 700;
    }
  }
`;
const Button = styled.button`
  text-transform: capitalize;
  font-size: 1rem;
  padding: 0.8rem 2rem;
  border: 1px solid ${colors.primary};
  color: ${colors.primary};
  background: ${colors.white};
  border-radius: 5rem;
  transform-origin: bottom;
  transition: all 0.3s linear;
  &:hover {
    color: ${colors.tertiary};
    border: 1px solid ${colors.tertiary};
  }
`;
export default Advertise;
