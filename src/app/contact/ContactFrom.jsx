"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useForm } from "react-hook-form";
import CommonText from "@/components/CommonText";
import { Toaster, toast } from "react-hot-toast";

const ContactFrom = () => {
  //animation
  useEffect(() => {
    AOS.init();
  }, []);

  //form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
    toast.success("Your Data Has Been Send Successfully!");
  };

  return (
    <section className=" my-20">
      <Toaster></Toaster>
      {/* title part  */}
      <CommonText
        title="Get in Touch"
        description="Reach out to us for inquiries, collaborations, or feedback. Let's connect and work together towards a brighter future."
        postion="center"
      ></CommonText>

      {/* form start */}
      <div className="my-10 w-[300px] md:w-[500px] mx-auto">
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-1">
            <input
              type="text"
              placeholder="Enter Your name"
              className="input rounded-none w-full p-4"
              {...register("name", { required: true })}
            />
          </div>
          {errors.name?.type === "required" && (
            <p className=" text-red-800 text-center py-1">
              This feild cann't be empty
            </p>
          )}

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
          {/* messages  */}
          <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-1">
            <textarea
              className="input rounded-none w-full p-4"
              {...register("message", { required: true })}
            ></textarea>
          </div>
          {errors.name?.type === "required" && (
            <p className=" text-red-800 text-center py-1">
              This feild cann't be empty
            </p>
          )}
          <button
            type="submit"
            className=" w-full my-4 py-2 rounded-lg px-3 font-bold bg-[#963682] text-white flex justify-center items-center"
          >
            Contact Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFrom;
