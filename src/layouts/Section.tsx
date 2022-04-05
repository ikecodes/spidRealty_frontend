import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

interface Props {
  children: React.ReactNode;
}
const Section: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <div className='container'>{children}</div>
    </Container>
  );
};
const Container = styled.section`
  padding: 2.5rem 0;
  color: ${colors.primary};
`;
export default Section;
