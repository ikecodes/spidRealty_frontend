import React, { useState } from "react";
import { ImShare } from "react-icons/im";
import styled from "styled-components";

interface Props {
  url: any;
}
const ShareButton: React.FC<Props> = ({ url }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const runAnimation = async () => {
    await navigator.clipboard.writeText(url);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };
  return (
    <div
      role='button'
      className='text-capitalize d-flex align-items-center gap-1'
      onClick={runAnimation}
    >
      <ImShare size={20} />
      <span className='p-0 m-0'>share</span>
      <Shared
        className={`p-1 m-0 text-light bg-secondary rounded ${
          isAnimating ? "animate" : ""
        }`}
        onClick={() => console.log("fuck off")}
      >
        share url copied!
      </Shared>
    </div>
  );
};

const Shared = styled.div`
  font-size: 0.6rem;
  opacity: 0;
  transition: all 0.1s ease-in;
  &.animate {
    opacity: 1;
  }
`;
export default ShareButton;
