import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

interface Props {
  title: string;
  primary?: boolean;
  handleClick: () => void;
  norounded?: boolean;
  loading: boolean;
  disabled?: boolean;
}
interface BProps {
  primary?: boolean;
  norounded?: boolean;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  title,
  primary,
  handleClick,
  norounded,
  loading,
  disabled,
}) => {
  const Loader = (
    <div className='spinner'>
      <div className='bounce1'></div>
      <div className='bounce2'></div>
      <div className='bounce3'></div>
    </div>
  );
  return (
    <B
      primary={primary}
      norounded={norounded}
      disabled={disabled}
      onClick={handleClick}
    >
      {loading ? Loader : title}
    </B>
  );
};

const B = styled.button<BProps>`
  background-color: ${(props) =>
    props.primary ? colors.primary : colors.tertiary};
  text-transform: capitalize;
  color: ${colors.white};
  padding: 5px 20px;
  border-radius: ${(props) => (props.norounded ? '0' : '5px')};
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.05);
  }
`;
export default Button;
