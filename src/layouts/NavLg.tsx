import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/images/logo-placeholder.png';
import NavItemLg from './NavItemLg';
import menus from '../constants/menus';
import colors from '../constants/colors';

const NavbarLg = () => {
  return (
    <NavContainer className='px-2'>
      <div className='row p-0 m-0 align-items-ceenter'>
        <div className='col-lg-4'>
          <Link to='/'>
            <Image src={Logo} />
          </Link>
        </div>
        <div className='col-lg-8 align-self-center'>
          <NavMenu>
            <ul className='d-flex justify-content-evenly align-items-center'>
              {menus.map((menu) => (
                <NavItemLg key={menu.id} menu={menu} />
              ))}
              <Link to='/login'>
                <LoginBtn className='mx-2'>login</LoginBtn>
              </Link>
              <Link to='/signup'>
                <SignUpBtn className='mx-2'>Sign Up</SignUpBtn>
              </Link>
            </ul>
          </NavMenu>
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 100%;
  background-color: ${colors.white};
`;
const NavMenu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const Image = styled.img`
  height: auto;
  width: 9rem;
`;

const LoginBtn = styled.button`
  background-color: ${colors.white};
  color: ${colors.black};
  border: 1px solid ${colors.primary};
  padding: 0.3rem 1.2rem;
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.white};
    transform: scale(1.05);
  }
`;
const SignUpBtn = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  border: 1px solid ${colors.primary};
  padding: 0.3rem 1.2rem;
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${colors.white};
    color: ${colors.black};
    transform: scale(1.05);
  }
`;

export default NavbarLg;
