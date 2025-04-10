import axios from "axios";

const API_BASE_URL = "http://localhost:8000/"; 


//https://api-web.prepacademy.in/


const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;