import React from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  children: JSX.Element;
}
const UserProtected: React.FC<IProps> = ({ children }) => {
  const role = localStorage.getItem("role");
  return role === "agent" || role === "admin" ? children : <Navigate to='/' />;
};

export default UserProtected;
