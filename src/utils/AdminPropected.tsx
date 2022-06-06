import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AuthState } from "../constants/interfaces";

interface IProps {
  children: JSX.Element;
}
const AdminProtected: React.FC<IProps> = ({ children }) => {
  const user = useSelector((state: AuthState) => state.auth.user);
  return user?.role === "admin" ? children : <Navigate to='/' />;
};

export default AdminProtected;
