import React from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  children: JSX.Element;
}
const AdminProtected: React.FC<IProps> = ({ children }) => {
  const role = localStorage.getItem("role");
  return role === "admin" ? children : <Navigate to='/' />;
};

export default AdminProtected;
