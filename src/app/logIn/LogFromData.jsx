"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import GoogleLogIn from "@/components/GoogleLogIn";
import { toast, Toaster } from "react-hot-toast";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const LogFromData = () => {
  //signUp
  const signUp = "/signUp";

  //navigate
  const router = useRouter();

  //authData
  const { logIn } = useAuth();

  //form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    logIn(data.email, data.password)
      .then(() => {
        reset();
        router.push("/");
        toast.success("LogIn succesffull");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="my-6 w-[300px] md:w-[500px] mx-auto">
      <Toaster></Toaster>
      {/* form start */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* email  */}

        <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-1">
          <input
            type="email"
            placeholder="Enter Your email"
            className="input rounded-none w-full p-4 "
            {...register("email", { required: true })}
          />
        </div>
        {errors.email?.type === "required" && (
          <p className=" text-red-800 text-center py-1">
            This feild cann't be empty
          </p>
        )}

        {/* password  */}

        <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-1">
          <input
            type="password"
            placeholder="Enter Your password"
            className="input rounded-none w-full p-4 focus:border-0"
            {...register("password", {
              required: true,
            })}
          />
        </div>
        {errors.password?.type === "required" && (
          <p className=" text-red-800 text-center py-1">
            This feild cann't be empty
          </p>
        )}

        <button
          type="submit"
          className=" w-full my-4 py-3 rounded-lg px-3 font-bold bg-[#963682] text-white flex justify-center items-center"
        >
          LogIn
        </button>
      </form>
      <p className="  text-center text-xl">Or</p>
      <GoogleLogIn></GoogleLogIn>
      <Link href={signUp} className="underline text-center">
        <span>Don't Have An Account Then SignUp</span>
      </Link>
    </div>
  );
};

export default LogFromData;
