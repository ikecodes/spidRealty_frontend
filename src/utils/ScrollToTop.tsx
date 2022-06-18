import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { PropertyState } from "../constants/interfaces";

interface Props {
  children: React.ReactNode;
}

const ScrollToTop: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const { properties } = useSelector((state: PropertyState) => state.property);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location, properties]);

  return <>{children}</>;
};

export default ScrollToTop;
