// @ts-nocheck
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
export const forgotPassword = (formdata: any) =>
  API.post("/users/forgotPassword", formdata);
export const resetPassword = (formdata: any, resetToken: any) =>
  API.patch(`/users/resetPassword/${resetToken}`, formdata);
export const getMe = () => API.get("/users/me");
export const uploadId = (formdata: any) =>
  API.patch("/users/uploadId", formdata);
export const updatePhoto = (formdata: any) =>
  API.patch("/users/updatePhoto", formdata);
export const updatePassword = (formdata: any) =>
  API.patch("/users/updatePassword", formdata);

////PROPERTY
export const postProperty = (formdata: any) =>
  API.post("/properties", formdata);
export const getAllPropertyByUser = () =>
  API.get("/properties/getAllPropertyByUser");
export const getAllProperty = (
  stateSlug: any,
  regionSlug: any,
  categorySlug: any,
  page: number,
  limit: number
) =>
  API.get("/properties", {
    params: {
      ...(stateSlug && {
        stateSlug,
      }),
      ...(regionSlug && {
        regionSlug,
      }),
      ...(categorySlug && {
        categorySlug,
      }),
      page,
      limit,
    },
  });
export const getProperty = (id: any) => API.get(`/properties/${id}`);

//ADMIN
export const getStats = () => API.get("/users/getStats");
export const getAgents = () => API.get("/users");
export const getAgent = (id: any) => API.get(`/users/${id}`);
export const activeStatus = (id: any) => API.patch(`/users/activeStatus/${id}`);
export const verifyUser = (id: any) => API.patch(`/users/verifyUser/${id}`);
export const getPropertiesByAdmin = () =>
  API.get("/properties/admin/getAllPropertyByAdmin");
export const verifyProperty = (id: any) =>
  API.patch(`/properties/verifyProperty/${id}`);
export const markAsSold = (id: any) =>
  API.patch(`/properties/markAsSold/${id}`);

export const createArticle = (formdata) => API.post("/articles", formdata);
export const getAllArticles = () => API.get("/articles");
export const getArticle = (id) => API.get(`/articles/${id}`);
export const deleteArticle = (id) => API.delete(`/articles/${id}`);
export const updateArticle = (formdata, id) =>
  API.patch(`/articles/${id}`, formdata);
