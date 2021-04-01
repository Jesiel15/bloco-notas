import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  baseURL: "http://192.168.0.244:8080"
});

export default api;
