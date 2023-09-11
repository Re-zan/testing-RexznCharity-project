import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxios from "@/hooks/useAxios";

const MakeEventFrom = ({ refetch }) => {
  //route
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
            .post("/events", {
              title: data.title,
              short_title: data.short_title,
              description: data.description,
              location: data.location,
              date: data.date,
              image: imageUrl,
            })
            .then((res) => {
              if (res.data.acknowledged) {
                reset();
                refetch();
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
    <section>
      {/* title part  */}
      <Toaster></Toaster>

      {/* form start */}
      <div className="mb-10 w-[300px] md:w-[500px] mx-auto">
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* title */}
          <div className=" form-control w-full  rounded-xl border border-[#999999] p-1">
            <input
              type="text"
              placeholder="Enter Your Event title"
              className="input rounded-none w-full p-2"
              {...register("title", { required: true })}
            />
          </div>
          {errors.title?.type === "required" && (
            <p className=" text-red-800 text-center py-1">
              This feild cann't be empty
            </p>
          )}

          {/* photo */}

          <div className=" form-control w-full my-6  rounded-xl border border-[#999999] p-1">
            <input
              type="file"
              placeholder="Enter Your photo url"
              className="input rounded-none w-full p-2"
              {...register("photo", { required: true })}
            />
          </div>

          {errors.photo?.type === "required" && (
            <p className=" text-red-800 text-center py-1">
              This feild cann't be empty
            </p>
          )}

          {/* short_title  */}

          <div className=" form-control w-full my-6  rounded-xl border border-[#999999] p-1">
            <input
              type="text"
              placeholder="Enter Your short_title"
              className="input rounded-none w-full p-2 "
              {...register("short_title", { required: true })}
            />
          </div>
          {errors.short_title?.type === "required" && (
            <p className=" text-red-800 text-center py-1">
              This feild cann't be empty
            </p>
          )}

          {/* date  */}

          <div className=" form-control w-full my-6  rounded-xl border border-[#999999] p-1">
            <input
              type="data"
              min="2018-01-01"
              max="2050-12-31"
              placeholder="Enter Your date"
              className="input rounded-none w-full p-2 "
              {...register("date", { required: true })}
            />
          </div>
          {errors.date?.type === "required" && (
            <p className=" text-red-800 text-center py-1">
              This feild cann't be empty
            </p>
          )}

          {/* location  */}

          <div className=" form-control w-full my-6  rounded-xl border border-[#999999] p-1">
            <input
              type="text"
              placeholder="Enter Your location"
              className="input rounded-none w-full p-2 "
              {...register("location", { required: true })}
            />
          </div>
          {errors.location?.type === "required" && (
            <p className=" text-red-800 text-center py-1">
              This feild cann't be empty
            </p>
          )}

          <div className=" form-control w-full my-4  rounded-xl border border-[#999999] p-1">
            <textarea
              className="input rounded-none w-full p-2"
              {...register("description", { required: true })}
            ></textarea>
          </div>
          {errors.description?.type === "required" && (
            <p className=" text-red-800 text-center py-1">
              This feild cann't be empty
            </p>
          )}
          <button
            type="submit"
            className=" w-full my-4 py-3 rounded-lg px-3 font-bold bg-[#963682] text-white flex justify-center items-center"
          >
            Create A Event
          </button>
        </form>
      </div>
    </section>
  );
};

export default MakeEventFrom;
