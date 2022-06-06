import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AuthState } from "../constants/interfaces";

interface IProps {
  children: JSX.Element;
}
const UserProtected: React.FC<IProps> = ({ children }) => {
  const user = useSelector((state: AuthState) => state.auth.user);
  return user?.role === "user" || user?.role === "admin" ? (
    children
  ) : (
    <Navigate to='/' />
  );
};

export default UserProtected;
