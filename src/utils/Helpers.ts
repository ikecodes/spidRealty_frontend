import { NavigateFunction } from "react-router-dom";
import Toast from "./Toast";
export const logout = (navigate: NavigateFunction) => {
  localStorage.clear();
  navigate("/");
  Toast("Successful logout", "info");
};
