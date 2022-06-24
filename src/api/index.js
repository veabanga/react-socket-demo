import axios from "axios";


const BASE_URL =
  "http://127.0.0.1:5002";



const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// api.interceptors.request.use(
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// api.interceptors.response.use(null, (error) => { 
//   return Promise.reject(error);
// });

export default api;
