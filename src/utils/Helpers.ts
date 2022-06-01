import { NavigateFunction } from "react-router-dom";
import Toast from "./Toast";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "NGN",
});

export const logout = (navigate: NavigateFunction, to: string) => {
  localStorage.clear();
  navigate(to);
  Toast("Successful logout", "info");
};

export const currencyFormat = (price: any) => formatter.format(price);
