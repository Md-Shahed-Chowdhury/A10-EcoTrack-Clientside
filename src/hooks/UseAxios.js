import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";

export const axiosInstance = axios.create({
  baseURL: "https://a-10-eco-track-server.vercel.app",
});

// const useAxios = () => {
//   const { user } = useAuth();

//  useEffect(() => {
//    axiosInstance.interceptors.request.use((config) => {
//     if(user?.email)
//     {
//       config.headers.authorization = `bearer  ${user.email}`;
//     }

//     return config;
//   });
//  },[user])
//   return axiosInstance;
// };
const useAxios = () => {
  const { user } = useAuth();

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.request.use((config) => {
      config.headers.authorization = `bearer ${user?.email || ""}`;
      return config;
    });

    return () => {
      axiosInstance.interceptors.request.eject(interceptor);
    };
  }, [user]);

  return axiosInstance;
};

export default useAxios;
