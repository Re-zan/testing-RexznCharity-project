"use client";
import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxios from "@/hooks/useAxios";

const FeedbackFrom = () => {
  //form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.success(`Thank you for your feedback`);
    reset();
  };
  return (
    <section>
      {/* title part  */}
      <Toaster></Toaster>

      {/* form start */}
      <div className="mb-10 w-[280px] md:w-[500px] mx-auto">
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* danated  */}

          <div className=" form-control w-full my-6  rounded-xl border border-[#999999] p-1">
            <input
              placeholder="Enter Your rating"
              className="input rounded-none w-full p-2 "
              {...register("rating", {
                required: true,
                pattern: /^(?:[1-4](\.[0-9])?|5)$/,
              })}
            />
          </div>
          {errors.rating?.type === "required" && (
            <span className="text-red-800">This field is required</span>
          )}

          {errors.rating?.type === "pattern" && (
            <span className="text-red-800">
              Please enter a valid toy rating between 1 and 5.
            </span>
          )}
          <div className=" form-control w-full my-4  rounded-xl border border-[#999999] p-1">
            <textarea
              placeholder="Why do you want to donate?"
              className="input rounded-none w-full p-2"
              {...register("message", { required: true })}
            ></textarea>
          </div>
          {errors.message?.type === "required" && (
            <p className=" text-red-800 text-center py-1">
              This feild cann't be empty
            </p>
          )}
          <button
            type="submit"
            className=" w-full my-4 py-3 rounded-lg px-3 font-bold bg-[#963682] text-white flex justify-center items-center"
          >
            Give us feedback
          </button>
        </form>
      </div>
    </section>
  );
};

export default FeedbackFrom;
