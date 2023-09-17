"use client";
import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxios from "@/hooks/useAxios";
import useAuth from "@/hooks/useAuth";
import CheckOutFrom from "./CheckOutFrom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const DonateForm = () => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_payment_key);
  //route
  const basicRoute = useAxios();

  //user
  const { user } = useAuth();
  //form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // const onSubmit = (data) => {
  //   basicRoute.get(`/users/${user?.email}`).then((res) => {
  //     if (res.data.donation_amount) {
  //       const total = res.data.donation_amount + parseInt(data.donation_amount);
  //       //donate
  //       basicRoute
  //         .patch(`/users/donated/${user?.email}`, {
  //           donation_amount: total,
  //           message: data.message,
  //         })
  //         .then((res) => {
  //           if (res.data.modifiedCount > 0) {
  //             reset();
  //             toast.success(
  //               `Thank you for your donation and your total donation is $ ${total}`
  //             );
  //           }
  //         });
  //     } else {
  //       //donate
  //       basicRoute
  //         .patch(`/users/donated/${user?.email}`, {
  //           donation_amount: parseInt(data.donation_amount),
  //           message: data.message,
  //         })
  //         .then((res) => {
  //           if (res.data.modifiedCount > 0) {
  //             reset();
  //             toast.success(`Thank you for your donation`);
  //           }
  //         });
  //     }
  //   });
  // };
  return (
    <section>
      {/* title part  */}
      <Toaster></Toaster>

      {/* form start */}
      <div className="mb-10 w-[300px] md:w-[500px] mx-auto">
        {" "}
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" form-control w-full my-6  rounded-xl border border-[#999999] p-1">
            <input
              type="number"
              placeholder="Enter Your Amount"
              className="input rounded-none w-full p-2 "
              {...register("donation_amount", { required: true })}
            />
          </div>
          {errors.donation_amount?.type === "required" && (
            <p className=" text-red-800 text-center py-1">
              This feild cann't be empty
            </p>
          )}

          <div className=" form-control w-full my-6  rounded-xl border border-[#999999] p-3"></div>

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
            Donate Now
          </button>
        </form> */}
        <Elements stripe={stripePromise}>
          <CheckOutFrom></CheckOutFrom>
        </Elements>
      </div>
    </section>
  );
};

export default DonateForm;
