import { NavigateFunction } from "react-router-dom";
import Toast from "./Toast";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "NGN",
});

export const logout = (navigate: NavigateFunction) => {
  localStorage.clear();
  navigate("/");
  Toast("Successful logout", "info");
};

export const currencyFormat = (price: any) => formatter.format(price);
