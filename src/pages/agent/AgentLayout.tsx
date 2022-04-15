import React from "react";
import Layout from "../../layouts/Layout";
import styled from "styled-components";
import colors from "../../constants/colors";
import { MdDashboard, MdUpload, MdHome } from "react-icons/md";
import Section from "../../layouts/Section";
import { NavLink } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}
const AgentPage: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Container className='d-flex flex-wrap flex-md-row-reverse justify-content-between align-items-center'>
        <Profile className='m-0 ms-1 mb-3'>Hello, mary</Profile>
        <div className='d-flex gap-4'>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to='/agent/dashboard'
          >
            <div className='d-flex flex-column align-items-center p-1'>
              <MdDashboard size={20} />
              <h6 className='m-0 ms-1'>dashboard</h6>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to='/agent/post'
          >
            <div className='d-flex flex-column align-items-center p-1'>
              <MdUpload size={20} />
              <h6 className='m-0 ms-1'>post property</h6>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to='/agent/listings'
          >
            <div className='d-flex flex-column align-items-center p-1'>
              <MdHome size={20} />
              <h6 className='m-0 ms-1'>listings</h6>
            </div>
          </NavLink>
        </div>
      </Container>
      <Section>
        <div className='bg-light py-5'>{children}</div>
      </Section>
    </Layout>
  );
};

const Container = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 1rem 5rem;
  text-transform: capitalize;

  & a,
  a:link {
    color: ${colors.white};
    text-decoration: none;
  }
  & a.active {
    background-color: ${colors.white};
    /* border-radius: 0.5rem; */
    color: ${colors.primary};
  }

  @media (max-width: 576px) {
    padding: 1rem 0.5rem;
  }
`;

const Profile = styled.h6`
  color: ${colors.secondary};
  font-weight: bold;
  margin-left: 2rem;
  justify-self: end;
  white-space: nowrap;
`;
export default AgentPage;
