"use client";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useVolunteerData = () => {
  const basicRoute = useAxios();
  const { data: volunterrsData = [], refetch } = useQuery({
    queryKey: ["volunterrsData"],
    queryFn: async () => {
      const data = await basicRoute.get("/vlounters");
      return data.data;
    },
  });

  return [volunterrsData, refetch];
};

export default useVolunteerData;
