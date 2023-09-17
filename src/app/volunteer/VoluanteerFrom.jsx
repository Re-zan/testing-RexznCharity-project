"use client";
import React from "react";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useForm } from "react-hook-form";
import useAxios from "@/hooks/useAxios";
import { Toaster, toast } from "react-hot-toast";

const VoluanteerFrom = () => {
  //animation
  useEffect(() => {
    AOS.init();
  }, []);

  //basicRoute
  const basicRoute = useAxios();

  //form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //ImageUpload
    const imageData = data.photo[0];
    const formData = new FormData();
    formData.append("image", imageData);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.status === 200) {
          const imageUrl = imgData.data.display_url;

          //create volunter
          basicRoute
            .post("/vlounters", {
              name: data.name,
              email: data.email,
              message: data.message,
              age: parseInt(data.age),
              phone_number: data.number,
              image: imageUrl,
            })
            .then((res) => {
              if (res.data.acknowledged) {
                reset();
                toast.success("Your Data Has Been Send Successfully!");
              }
            })
            .catch((error) => {
              console.log(error.message);
            });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      {" "}
      <Toaster></Toaster>
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

          {/* photo */}

          <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-1">
            <input
              type="file"
              placeholder="Enter Your photo url"
              className="input rounded-none w-full p-4"
              {...register("photo", { required: true })}
            />
          </div>

          {errors.photo?.type === "required" && (
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

          {/* age  */}

          <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-1">
            <input
              type="number"
              placeholder="Enter Your age"
              className="input rounded-none w-full p-4 "
              {...register("age", { required: true })}
            />
          </div>
          {errors.age?.type === "required" && (
            <p className=" text-red-800 text-center py-1">
              This feild cann't be empty
            </p>
          )}

          {/* phone number  */}

          <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-1">
            <input
              type="tel"
              placeholder="Enter Your phone number"
              className="input rounded-none w-full p-4 focus:border-0"
              {...register("number", {
                required: true,

                pattern:
                  /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
              })}
            />
          </div>
          {errors.number?.type === "required" && (
            <p className=" text-red-800 text-center py-1">
              This feild cann't be empty
            </p>
          )}

          {errors.number?.type === "pattern" && (
            <p className=" text-red-800 text-center py-3">
              Phone Number must be validated
            </p>
          )}

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
            className=" w-full my-4 py-3 rounded-lg px-3 font-bold bg-[#963682] text-white flex justify-center items-center"
          >
            Be A Volunteer
          </button>
        </form>
      </div>
    </div>
  );
};

export default VoluanteerFrom;
