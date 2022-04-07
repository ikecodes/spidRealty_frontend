import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import InvestSummary from '../components/Invest/InvestSummary';
// import WhyInvest from '../components/Invest/WhyInvest';
import InvestmentCard from '../components/InvestmentCard';
import colors from '../constants/colors';
import Layout from '../layouts/Layout';
import Section from '../layouts/Section';
import Loader from '../shared/Loader';

const Invest = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);
  if (loading) return <Loader />;
  return (
    <Layout>
      <Section>
        <h1 className='text-capitalize m-0 mb-5 text-center'>
          investment opportunities
        </h1>
        <div className='row'>
          <InvestmentCard />
          <InvestmentCard />
          <InvestmentCard />
        </div>
        <div className='text-center my-3'>
          <Link to='/investment'>
            <Button>explore all investments</Button>
          </Link>
        </div>
        <h2 className='text-capitalize m-0 mt-5 mb-3 text-center'>
          The most convenient way to build wealth through real estate
        </h2>
        <div className='text-center mb-5'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            magnam rerum magni vitae, dicta excepturi? Nulla nam a tenetur
            laudantium maxime voluptatem, harum totam voluptates quidem minima
            quod nihil velit!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            debitis similique magnam itaque facilis in quidem libero adipisci
            harum ratione nobis, dicta recusandae sit, perferendis fugit
            assumenda, nostrum quia quis?
          </p>
        </div>
        {/* Investment summary component */}
        <InvestSummary />
        {/* Why Invest with us component */}
        {/* <WhyInvest /> */}
      </Section>
      <div className='bg-light'>
        <Section>
          <h3 className='text-capitalize m-0 mb-3 text-center'>
            what does spid realty do for its investors?
          </h3>
          <p>
            Our team is made of specialized experts who handle every detail of
            your real estate investment, including:
          </p>
          <List>
            <li className='mb-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              hic modi nemo dolores provident reiciendis. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. At praesentium doloribus unde
              dolor ipsa voluptatibus sunt, aut ex aperiam eum, harum quo. Quia
              culpa facilis ratione magnam deserunt quos quod?
            </li>
            <li className='mb-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              hic modi nemo dolores provident reiciendis. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. At praesentium doloribus unde
              dolor ipsa voluptatibus sunt, aut ex aperiam eum, harum quo. Quia
              culpa facilis ratione magnam deserunt quos quod?
            </li>
            <li className='mb-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              hic modi nemo dolores provident reiciendis. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. At praesentium doloribus unde
              dolor ipsa voluptatibus sunt, aut ex aperiam eum, harum quo. Quia
              culpa facilis ratione magnam deserunt quos quod?
            </li>
            <li className='mb-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              hic modi nemo dolores provident reiciendis. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. At praesentium doloribus unde
              dolor ipsa voluptatibus sunt, aut ex aperiam eum, harum quo. Quia
              culpa facilis ratione magnam deserunt quos quod?
            </li>
            <li className='mb-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              hic modi nemo dolores provident reiciendis. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. At praesentium doloribus unde
              dolor ipsa voluptatibus sunt, aut ex aperiam eum, harum quo. Quia
              culpa facilis ratione magnam deserunt quos quod?
            </li>
            <li className='mb-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              hic modi nemo dolores provident reiciendis. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. At praesentium doloribus unde
              dolor ipsa voluptatibus sunt, aut ex aperiam eum, harum quo. Quia
              culpa facilis ratione magnam deserunt quos quod?
            </li>
          </List>
        </Section>
      </div>
      <div className='text-center my-5'>
        <Link to='/signup'>
          <Button>Join us today</Button>
        </Link>
      </div>
    </Layout>
  );
};

const List = styled.ul`
  list-style-type: square;
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
export default Invest;
