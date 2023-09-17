import React from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useStoryData = () => {
  const basicRoute = useAxios();
  const { data: storyDatas = [] } = useQuery({
    queryKey: ["storyDatas"],
    queryFn: async () => {
      const data = await basicRoute.get("/stories");
      return data.data;
    },
  });
  return storyDatas;
};

export default useStoryData;
