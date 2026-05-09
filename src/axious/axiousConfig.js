import axios from "axios";



const axiosInstance = axios.create({
  baseURL:'https://ecommerce-website-mern-stack-e8jb.onrender.com',
  withCredentials: true,
});

export default axiosInstance;