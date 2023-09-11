"use client";
import useAuth from "@/hooks/useAuth";
import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/navigation";
import React from "react";

const GoogleLogIn = () => {
  //authData
  const { googleLogin } = useAuth();

  //basicRoute
  const basicRoute = useAxios();

  const router = useRouter();

  //googleLogIn
  const handleGoogleLogIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;

        basicRoute
          .post("/users", {
            name: user.displayName,
            email: user.email,
          })
          .then((res) => router.push("/"))
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <button
      onClick={handleGoogleLogIn}
      className=" w-full my-4   py-3 rounded-lg px-3 font-bold bg-[#963682] text-white flex justify-center items-center"
    >
      Google
    </button>
  );
};

export default GoogleLogIn;
