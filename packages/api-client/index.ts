import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3002",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.BACKEND_API_KEY,
  },
});

export default api;
