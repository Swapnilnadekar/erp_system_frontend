import axios from "axios";
import store from "./store";

const token = window.localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: "http://localhost:2000/",
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

axiosInstance.interceptors.request.use((req) => {
  const { teacher, student } = store.getState();
  if (teacher.token) {
    req.headers.Authorization = `Bearer ${teacher.token}`;
  } else if (student.token) {
    req.headers.Authorization = `Bearer ${student.token}`;
  }
  return req;
});

export default axiosInstance;
