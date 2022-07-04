import axios from "axios";

let apiSingleton = null;

const useApi = () => {
  if (!apiSingleton)
    apiSingleton = axios.create({
      baseURL: import.meta.env.VITE_BACKEND_URL,
    });
  return apiSingleton;
};

export default useApi;
