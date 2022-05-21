import React, { useEffect } from "react";
import Layout from "../../layouts/Layout";
import styled from "styled-components";
import colors from "../../constants/colors";
import { MdDashboard, MdUpload, MdHome } from "react-icons/md";
import { TiUser } from "react-icons/ti";
import Section from "../../layouts/Section";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../slices/authSlice";
import { AuthState } from "../../constants/interfaces";

interface Props {
  children: React.ReactNode;
}

const AgentLayout: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: AuthState) => state.auth.user);
  useEffect(() => {
    // @ts-ignore
    const token = localStorage.getItem("token");
    if (token) dispatch(getMe());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Container className='d-flex flex-wrap flex-md-row-reverse justify-content-between align-items-center'>
        <div className='d-flex  align-items-center mb-2'>
          <ProfileBox>
            <Profile src={user?.photo} className='rounded-circle' />
          </ProfileBox>
          <h6 className='m-0 ms-1'>Hello, {user?.firstName}</h6>
        </div>

        <div className='d-flex gap-4'>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to='/agent/dashboard'
          >
            <div className='d-flex flex-column align-items-center text-center px-1 py-3'>
              <MdDashboard size={20} />
              <h6 className='m-0 ms-1'>dashboard</h6>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to='/agent/post'
          >
            <div className='d-flex flex-column align-items-center text-center px-1 py-3'>
              <MdUpload size={20} />
              <h6 className='m-0 ms-1'>post property</h6>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to='/agent/listings'
          >
            <div className='d-flex flex-column align-items-center text-center px-1 py-3'>
              <MdHome size={20} />
              <h6 className='m-0 ms-1'>listings</h6>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to='/agent/profile'
          >
            <div className='d-flex flex-column align-items-center text-center px-1 py-3'>
              <TiUser size={20} />
              <h6 className='m-0 ms-1'>profile</h6>
            </div>
          </NavLink>
        </div>
      </Container>
      <Section>
        <div className='bg-light py-2'>{children}</div>
      </Section>
    </Layout>
  );
};

const Container = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 0.5rem 5rem;
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
    padding: 0.5rem 0.5rem;
  }
`;

const ProfileBox = styled.div`
  width: 2.5rem;
  height: 2.5rem;
`;
const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export default AgentLayout;
