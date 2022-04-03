import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import Section from '../layouts/Section';
import Image from '../shared/Image';
import AboutImg1 from '../assets/images/family.jpg';
import styled from 'styled-components';
import colors from '../constants/colors';
import TeamCard from '../components/TeamCard';
import Loader from '../shared/Loader';
const About = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);
  if (loading) return <Loader />;
  return (
    <Layout>
      <Container>
        <Section>
          <h1 className='text-capitalize fw-bold m-0 p-0 my-5 text-center'>
            about us
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            deleniti voluptatem, facilis enim similique animi illum laudantium
            aliquam assumenda dolores delectus autem provident quod. Aliquid
            quia totam provident labore aliquam. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Voluptatem quis laudantium, suscipit
            culpa reprehenderit provident quaerat velit consequuntur molestias
            consectetur libero dicta similique nesciunt architecto magni
            incidunt nobis ratione? Quo. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Id fugiat vitae, quo nisi ratione veniam nihil
            odio laboriosam vero adipisci doloribus provident laudantium ab
            dicta inventore reprehenderit, odit iusto voluptas.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            unde dolorem excepturi fugit quidem, cumque doloremque. Quae minus
            mollitia explicabo, similique soluta corrupti sit a, dolore nesciunt
            in repellendus assumenda. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sequi laudantium deserunt pariatur corrupti ex.
            Quidem dicta obcaecati, provident repellendus exercitationem quia
            nobis veritatis alias eum laudantium inventore soluta, aliquam
            saepe.
          </p>
          <div className='my-2'>
            <Image src={AboutImg1} alt='about' h={50} unit='vh' />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            accusamus, corrupti praesentium, culpa quo magnam eum, eos
            consequatur blanditiis at deleniti enim doloremque quisquam neque
            eveniet repellendus? Assumenda, beatae nam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            laboriosam consequuntur et dolorum, debitis, doloribus inventore
            praesentium unde explicabo rerum est, aspernatur vero? Et maiores
            quaerat qui unde blanditiis commodi. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Dicta totam voluptates in,
            voluptatibus, animi qui quisquam voluptatum quis, vero porro neque
            error libero dolorum officiis. Recusandae accusamus quibusdam
            ducimus quaerat.
          </p>
        </Section>
      </Container>
      <Section>
        <h1 className='text-capitalize fw-bold m-0 p-0 my-5 text-center'>
          meet the team
        </h1>
        <div className='row'>
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </Section>
    </Layout>
  );
};

const Container = styled.div`
  background-color: ${colors.grey};
`;

export default About;
