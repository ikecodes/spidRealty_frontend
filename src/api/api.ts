import axios from "axios";

let url;
if (window.location.protocol === "http:") {
  url = "http://localhost:3001/api/v1";
} else {
  url = "https://stockearners.herokuapp.com/api/v1";
}

const API = axios.create({
  baseURL: url,
});

API.interceptors.request.use((req: any) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

////AUTH
export const signup = (formdata: any) => API.post("/users", formdata);
export const sendEmail = (formdata: any) =>
  API.post("/users/sendEmail", formdata);
export const verifyToken = (formdata: any) =>
  API.post("/users/confirmEmail", formdata);
export const login = (formdata: any) => API.post("/users/session", formdata);
