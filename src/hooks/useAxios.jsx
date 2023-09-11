import axios from "axios";

const useAxios = () => {
  const basicRoute = axios.create({
    baseURL: "https://re-zancharity-server-side.vercel.app/",
  });
  return basicRoute;
};

export default useAxios;
