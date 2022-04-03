import React from 'react';
import { Link } from 'react-router-dom';
import colors from '../constants/colors';
import styled from 'styled-components';

interface Props {
  menu: {
    id: string;
    name: string;
    path: string;
  };
}
const NavItemLg: React.FC<Props> = ({ menu }) => {
  return (
    <div className='position-relative'>
      <NavItem role='button'>
        <Link to={menu.path}>{menu.name}</Link>
        <MenuLine></MenuLine>
      </NavItem>
    </div>
  );
};

const NavItem = styled.li`
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  &:hover div {
    width: 100%;
  }
  & a {
    color: ${colors.black};
    text-decoration: none;
    /* padding: 1rem; */
    transition: all 0.3s ease-in;
  }
  /* & a:hover,
  a:active {
    color: ${colors.white};
    background-color: ${colors.primary};
  } */
`;
const MenuLine = styled.div`
  height: 3px;
  border-radius: 5px;
  width: 0%;
  background-color: ${colors.primary};
  transition: all 0.2s linear;
`;
export default NavItemLg;
