import axios from "axios";

const useAxios = () => {
  const basicRoute = axios.create({
    baseURL: "http://localhost:5000/",
  });
  return basicRoute;
};

export default useAxios;
