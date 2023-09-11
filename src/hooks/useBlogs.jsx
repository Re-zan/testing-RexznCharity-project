"use client";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useBlogs = () => {
  const basicRoute = useAxios();
  const { data: blogsData = [] } = useQuery({
    queryKey: ["blogsData"],
    queryFn: async () => {
      const data = await basicRoute.get("/blogs");
      return data.data;
    },
  });

  return blogsData;
};

export default useBlogs;
