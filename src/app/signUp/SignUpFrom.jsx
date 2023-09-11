"use client";
import useAxios from "@/hooks/useAxios";
import { useForm } from "react-hook-form";
import React from "react";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { toast, Toaster } from "react-hot-toast";
import GoogleLogIn from "@/components/GoogleLogIn";
import { useRouter } from "next/navigation";

const SignUpFrom = () => {
  //login route
  const logInRoute = "/logIn";
  //basicRoute
  const basicRoute = useAxios();

  //navigate
  const router = useRouter();

  //authData
  const { createUser, profile } = useAuth();

  //form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //create user
  const onSubmit = (data) => {
    // imageUpload
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
          const ImageUrl = imgData.data.display_url;

          //create user
          createUser(data.email, data.password)
            .then((userData) => {
              const user = userData.user;

              //create profile
              profile(user, data.name, ImageUrl);

              //userData store to db
              basicRoute
                .post("/users", {
                  name: data.name,
                  email: data.email,
                  password: data.password,
                  age: parseInt(data.age),
                  image: ImageUrl,
                })
                .then((res) => {
                  if (res.data.acknowledged) {
                    reset();
                    router.push("/");
                    toast.success("Reagistration succesffull");
                  }
                })
                .catch((error) => {
                  const errorMessage = error.message;
                  toast.error(errorMessage);
                });
            })

            .catch((error) => {
              const errorMessage = error.message;
              toast.error(errorMessage);
            });
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <div className="my-6 w-[300px] md:w-[500px] mx-auto">
      <Toaster></Toaster>
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
        {/* password  */}
        <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-6">
          <input
            type="password"
            placeholder="Enter Your password"
            className="input rounded-none w-full "
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/,
            })}
          />
        </div>
        {errors.password?.type === "required" && (
          <p className=" text-red-800 text-center py-3">
            This feild cann't be empty
          </p>
        )}
        {errors.password?.type === "minLength" && (
          <p className=" text-red-800 text-center py-3">
            Passowrd is less than 6 characters
          </p>
        )}
        {errors.password?.type === "pattern" && (
          <p className=" text-red-800 text-center py-3">
            Passowrd doesn't have a capital letter and a special character
          </p>
        )}
        <button
          type="submit"
          className=" w-full my-4 py-3 rounded-lg px-3 font-bold bg-[#963682] text-white flex justify-center items-center"
        >
          SignUp
        </button>
      </form>
      <p className="  text-center text-xl">Or</p>

      <GoogleLogIn></GoogleLogIn>
      <Link href={logInRoute} className="underline text-center">
        <span>Already Have An Account Then LogIn</span>
      </Link>
    </div>
  );
};

export default SignUpFrom;
