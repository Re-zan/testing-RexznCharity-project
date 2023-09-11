"use client";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useUsersData = () => {
  const basicRoute = useAxios();
  const { data: userDatas = [], refetch } = useQuery({
    queryKey: ["userDatas"],
    queryFn: async () => {
      const data = await basicRoute.get("/users");
      return data.data;
    },
  });
  return [userDatas, refetch];
};

export default useUsersData;
