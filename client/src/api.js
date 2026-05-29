import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/meetings", // backend URL
});

export default API;
