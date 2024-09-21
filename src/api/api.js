import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: false,
});

apiClient.interceptors.request.use((config) => {
  config.headers = {
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
  };
  console.log("TOKEN: ", localStorage.getItem("accessToken"));
  return config;
});
