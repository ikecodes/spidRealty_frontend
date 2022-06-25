import React from "react";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import Image from "../shared/Image";
import AboutImg1 from "../assets/images/spid2.jpeg";
import Dan from "../assets/images/dan.png";
import Justice from "../assets/images/justice.png";
import TeamCard from "../components/TeamCard";
import styled from "styled-components";
const About = () => {
  return (
    <Layout>
      <Section>
        <h1 className='text-capitalize m-0 p-0 mb-5 text-center'>about us</h1>
        <p>
          Spid Realty is redefining real estate marketing, advertising and sales
          to help real estate companies and agents achieve their marketing and
          sales goals while ensuring that our clients are happy and fulfilled
          through making secured purchases on our platform.
        </p>
        <p>
          As the most secured real estate website in Nigeria, Spid Realty and
          its partner companies and agents offer customers an on-demand
          experience for selling, buying, and renting with secured, transparent
          and seamless end-to-end service.
        </p>
        <div className='my-2'>
          <div className='row justify-content-start'>
            <div className='col-lg-6'>
              <Image src={AboutImg1} alt='about' h={50} unit='vh' />
            </div>
            <div className='col-lg-6'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                accusamus, corrupti praesentium, culpa quo magnam eum, eos
                consequatur blanditiis at deleniti enim doloremque quisquam
                neque eveniet repellendus? Assumenda, beatae nam!
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                laboriosam consequuntur et dolorum, debitis, doloribus inventore
                praesentium unde explicabo rerum est, aspernatur vero? Et
                maiores quaerat qui unde blanditiis commodi. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Dicta totam voluptates
                in, voluptatibus, animi qui quisquam voluptatum quis, vero porro
                neque error libero dolorum officiis. Recusandae accusamus
                quibusdam ducimus quaerat.
              </p>
            </div>
          </div>
        </div>
        <div className='my-3'>
          <p>
            Spid Realty offers a comprehensive list of for-sale and for-rent
            properties, as well as the information and tools to make informed
            real estate decisions.
          </p>
          <List>
            <li>
              <span>Property Availability Assurance </span> We use cutting-edge
              technology to check and double-check listings from our agents and
              partner companies to ensure that you access the most trusted,
              accurate property listings available anywhere.
            </li>
            <li>
              <span>New Property Listing</span> We are obsessed with providing
              the freshest listings because timing and accuracy mean everything
              when it comes to buying property. You can easily find the newest
              properties right here at Spideealty.com with the click of a
              button.
            </li>
            <li>
              <span>Dynamic Products and Services</span> Spidrealty.com offers
              dynamic products and services that walk first-time buyers
              step-by-step through the process of how to buy their first
              property. In addition to helpful information, laws and educational
              articles, our FREE property email alerts can deliver listings
              directly to your inbox so that you can learn about great deals in
              your area without even searching.
            </li>
            <li>
              <span>Seamless Search and Navigation </span> Spidrealty.com has an
              interface that is easy to search and navigate. You can search
              available listings by state, rejoin, category or property - all
              for free. We make searching easier!
            </li>
          </List>
        </div>
      </Section>

      <Section>
        <h1 className='text-capitalize m-0 p-0 mb-5 text-center'>
          meet the team
        </h1>
        <div className='row justify-content-center'>
          <TeamCard
            name='Justice Kay'
            title='Co-Founder'
            writeup=' Voluptatibus ex tempora eligendi vel iure distinctio veritatis rerum! Consectetur tempore cupiditate cumque repudiandae vitae. Ducimus alias ipsa asperiores aperiam, velit enim?'
            img={Justice}
          />
          <TeamCard
            name='Daniel Okpe'
            title='Co-Founder'
            writeup=' Voluptatibus ex tempora eligendi vel iure distinctio veritatis rerum! Consectetur tempore cupiditate cumque repudiandae vitae. Ducimus alias ipsa asperiores aperiam, velit enim?'
            img={Dan}
          />
        </div>
      </Section>
    </Layout>
  );
};

const List = styled.ul`
  padding-left: 1rem;
  list-style: upper-alpha;
  & li {
    margin-bottom: 0.8rem;
    & span {
      font-weight: 700;
      font-size: 1rem;
      display: block;
    }
  }
`;
export default About;
