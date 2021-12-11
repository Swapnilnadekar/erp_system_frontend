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
  const { teacher } = store.getState();
  if (teacher.token) {
    req.headers.Authorization = `Bearer ${teacher.token}`;
  }
  return req;
});


// axiosInstance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (error) => {
//     const { status } = error;

//     if (status === 500) {
//       localStorage.clear();
//       store.dispatch({ type: authConstants.USER_LOGOUT_SUCCESS });
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
