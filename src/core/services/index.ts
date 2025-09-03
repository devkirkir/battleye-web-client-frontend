import axios from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL, withCredentials: true });

// api.interceptors.request.use(
//   async (config) => {
//     if (config.url !== "/auth/check" && config.url !== "/auth/login") {
//       const res = await api({
//         url: "/auth/check",
//         method: "get",
//         withCredentials: true,
//       });

//       console.log(res);

//       if (!res.data.success) {

//       }
//     }

//     return config;
//   },
//   function (error) {
//     console.log(error);

//     return Promise.reject(error);
//   },
// );

export default api;
