import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 5000,
});

request.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    const { data } = error.response;
    return Promise.reject(data);
  }
);

export default request;
