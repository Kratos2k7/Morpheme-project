import axios from "axios";

//const token = localStorage.getItem("token");
export const http = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "access-control-allow-methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
  },
});
