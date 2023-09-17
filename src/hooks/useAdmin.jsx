"use client";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useAdmin = () => {
  const { user, loader } = useAuth();
  const basicRoute = useAxios();
  const {
    data: isAdmin = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loader && !!user?.email,
    queryFn: async () => {
      const data = await basicRoute.get(`/users/admin/${user?.email}`);
      return data.data;
    },
  });

  return [isAdmin, refetch, isLoading];
};

export default useAdmin;
