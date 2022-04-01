import React from 'react';
import NavbarLg from './NavLg';
import NavSm from './NavSm';
import styled from 'styled-components';
const Header = () => {
  return (
    <Container>
      <NavSm />
      <NavbarLg />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 60vh;
  margin-bottom: 5rem;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  overflow: hidden;
`;

export default Header;
