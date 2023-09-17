"use client";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxios from "@/hooks/useAxios";
import useAuth from "@/hooks/useAuth";

const CheckOutFrom = () => {
  const stripe = useStripe();
  const elements = useElements();

  //states
  const [errosShow, setErrosShow] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

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

  const onSubmit = async (data) => {
    const price = parseFloat(data?.donation_amount);

    // Fetch the clientSecret from your server
    basicRoute
      .post("/create-payment-intent", {
        price: price,
      })
      .then((res) => {
        const receivedClientSecret = res.data.clientSecret;
        setClientSecret(receivedClientSecret); // Check if you receive the clientSecret

        if (!receivedClientSecret) {
          // Handle the case where the clientSecret is missing or invalid
          console.error("Invalid clientSecret");
          return;
        }

        // Now you can proceed with creating a PaymentMethod
        if (!stripe || !elements) {
          return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }

        // Use your card Element with other Stripe.js APIs
        stripe
          .createPaymentMethod({
            type: "card",
            card,
          })
          .then((result) => {
            if (result.error) {
              console.log("[error]", result.error);
              setErrosShow(result.error.message);
            } else {
              setErrosShow("");

              // After creating PaymentMethod, you can proceed with confirming the payment
              stripe
                .confirmCardPayment(receivedClientSecret, {
                  payment_method: result.paymentMethod.id,
                })
                .then((confirmationResult) => {
                  if (confirmationResult.error) {
                    console.log("[error]", confirmationResult.error);
                  } else {
                    // Payment succeeded, handle success here
                    console.log(confirmationResult.paymentIntent);
                    setTransactionId(confirmationResult.paymentIntent.id);

                    // Make a request to your server to update user data with donation
                    if (
                      confirmationResult.paymentIntent.status === "succeeded"
                    ) {
                      basicRoute.get(`/users/${user?.email}`).then((res) => {
                        if (res.data.donation_amount) {
                          const total =
                            res.data.donation_amount +
                            parseInt(data.donation_amount);
                          //donate
                          basicRoute
                            .patch(`/users/donated/${user?.email}`, {
                              donation_amount: total,
                              message: data.message,
                            })
                            .then((res) => {
                              if (res.data.modifiedCount > 0) {
                                reset();
                                toast.success(
                                  `Thank you for your donation and your total donation is $ ${total}`
                                );
                              }
                            });
                        } else {
                          //donate
                          basicRoute
                            .patch(`/users/donated/${user?.email}`, {
                              donation_amount: parseInt(data.donation_amount),
                              message: data.message,
                            })
                            .then((res) => {
                              if (res.data.modifiedCount > 0) {
                                reset();
                                toast.success(`Thank you for your donation`);
                              }
                            });
                        }
                      });
                    }
                  }
                });
            }
          });
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" form-control w-full my-6  rounded-xl border border-[#999999] p-1">
          <input
            type="number"
            placeholder="Enter Your Amount"
            className="input rounded-none w-full p-2 "
            {...register("donation_amount", {
              required: true,
              pattern: {
                value: /^[1-9]\d*$/,
                message:
                  "Please enter a valid positive number greater than zero.",
              },
            })}
          />
        </div>
        {errors.donation_amount?.type === "required" && (
          <p className=" text-red-800 text-center py-1">
            This feild cann't be empty
          </p>
        )}
        {errors.donation_amount?.type === "pattern" && (
          <p className="text-red-800 text-center py-1">
            {errors.donation_amount.message}
          </p>
        )}

        <div className=" form-control w-full my-6  rounded-xl border border-[#999999] p-3">
          {" "}
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        {errosShow && <p className="text-red-800">{errosShow}</p>}

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
          disabled={!stripe}
          className=" w-full my-4 py-3 rounded-lg px-3 font-bold bg-[#963682] text-white flex justify-center items-center"
        >
          Donate Now
        </button>
      </form>
    </>
  );
};

export default CheckOutFrom;
