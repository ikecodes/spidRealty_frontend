import axios from "axios";

let url;
if (window.location.protocol === "http:") {
  url = "http://localhost:3001/api/v1";
} else {
  url = "https://enthusiastic-seal-long-underwear.cyclic.app/api/v1";
}

// https://spidrealty.herokuapp.com
// https://enthusiastic-seal-long-underwear.cyclic.app

const API = axios.create({
  baseURL: url,
});

API.interceptors.request.use((req: any) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

////AUTH (USERS)
export const signup = (formdata: any) => API.post("/users", formdata);
export const sendEmail = (formdata: any) =>
  API.post("/users/sendEmail", formdata);
export const verifyToken = (formdata: any) =>
  API.post("/users/confirmEmail", formdata);
export const login = (formdata: any) => API.post("/users/session", formdata);
export const getMe = () => API.get("/users/me");
export const uploadId = (formdata: any) =>
  API.patch("/users/uploadId", formdata);
export const updatePhoto = (formdata: any) =>
  API.patch("/users/updatePhoto", formdata);
export const updatePassword = (formdata: any) =>
  API.patch("/users/updatePassword", formdata);

////PROPERTYgetAllProperty
export const postProperty = (formdata: any) =>
  API.post("/properties", formdata);
export const getAllPropertyByUser = () =>
  API.get("/properties/getAllPropertyByUser");
export const getAllProperty = () => API.get("/properties");
export const getProperty = (id: any) => API.get(`/properties/${id}`);
