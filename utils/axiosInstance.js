import axios from "axios";
const instance = axios.create({
  baseURL: "https://test-backend-yoph.onrender.com/api/v1",
});

export default instance;
