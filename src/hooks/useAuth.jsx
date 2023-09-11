import { AuthContext } from "@/Provider/AuthProviders";
import React, { useContext } from "react";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
