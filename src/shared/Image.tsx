import React from "react";
import styled from "styled-components";

interface Props {
  src: string;
  h: number;
  unit: string;
  alt: string;
  rounded?: boolean;
}

interface ImageContainerProps {
  h: number;
  unit: string;
}
interface ImgProps {
  src: string;
  alt: string;
  rounded?: boolean;
}

const Image: React.FC<Props> = ({ src, h, unit, alt, rounded }) => {
  return (
    <ImageContainer h={h} unit={unit}>
      <Img src={src} alt={alt} rounded={rounded} />
    </ImageContainer>
  );
};
const ImageContainer = styled.div<ImageContainerProps>`
  height: ${(props) => `${props.h}${props.unit}`};
  width: 100%;
`;
const Img = styled.img<ImgProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${(props) => (props.rounded ? "1rem" : "0")};
`;
export default Image;
