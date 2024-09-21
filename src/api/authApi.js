import axios from "axios";

export const authApiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: false,
});
