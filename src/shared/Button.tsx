import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

interface Props {
  title: string;
  primary?: boolean;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  rounded?: boolean;
  loading?: boolean;
  disabled?: boolean;
  inverse?: boolean;
}
interface BProps {
  primary?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  inverse?: boolean;
}

const Button: React.FC<Props> = ({
  title,
  primary,
  inverse,
  handleClick,
  rounded,
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
      rounded={rounded}
      disabled={disabled}
      inverse={inverse}
      onClick={handleClick}
    >
      {loading ? Loader : title}
    </B>
  );
};

const B = styled.button<BProps>`
  background-color: ${(props) =>
    props.primary
      ? colors.primary
      : props.inverse
      ? "transparent"
      : colors.tertiary};
  text-transform: capitalize;
  color: ${colors.white};
  padding: 5px 20px;
  border-radius: ${(props) => (props.rounded ? "5px" : "0")};
  border: ${(props) => (props.inverse ? "1px solid #fff" : 0)};
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.05);
  }
`;
export default Button;
