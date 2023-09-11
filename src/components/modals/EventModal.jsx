import React, { forwardRef, useRef } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import useAxios from "@/hooks/useAxios";
import Image from "next/image";

const EventModal = ({ closeModal, updateData, refetch, modalRef }, ref) => {
  //route
  const basicRoute = useAxios();

  //frf
  const formRef = useRef();
  //form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    //update events
    basicRoute
      .put(`/events/${updateData?._id}`, {
        title: data.title,
        short_title: data.short_title,
        description: data.description,
        location: data.location,
        date: data.date,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          reset();
          refetch();
          toast.success("Your Data Has Been Updated Successfully!");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
    //ImageUpload
    // const imageData = data.photo[0];
    // const formData = new FormData();
    // formData.append("image", imageData);
    // const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE}`;
    // fetch(url, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((imgData) => {
    //     if (imgData.status === 200) {
    //       const imageUrl = imgData.data.display_url;
    //       //update events
    //       basicRoute
    //         .put(`/events/${updateData?._id}`, {
    //           title: data.title,
    //           short_title: data.short_title,
    //           description: data.description,
    //           location: data.location,
    //           date: data.date,
    //           image: imageUrl,
    //         })
    //         .then((res) => {
    //           if (res.data.modifiedCount > 0) {
    //             reset();
    //             refetch();
    //             toast.success("Your Data Has Been Updated Successfully!");
    //           }
    //         })
    //         .catch((error) => {
    //           console.log(error.message);
    //         });
    //     } else {
    //       //update events
    //       basicRoute
    //         .put(`/events/${updateData?._id}`, {
    //           title: data.title,
    //           short_title: data.short_title,
    //           description: data.description,
    //           location: data.location,
    //           date: data.date,
    //         })
    //         .then((res) => {
    //           if (res.data.modifiedCount > 0) {
    //             reset();
    //             refetch();
    //             toast.success("Your Data Has Been Updated Successfully!");
    //           }
    //         })
    //         .catch((error) => {
    //           console.log(error.message);
    //         });
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  };
  return (
    <dialog ref={modalRef} className=" w-[98%] max-w-[500px] rounded-md p-5">
      <Toaster></Toaster>
      <div className="text-right mb-4 text-red-500  ">
        {/* <button
          onClick={() => {
            closeModal();
            forwardRef.current.reset();
          }}
        >
          Close
        </button> */}
        <button onClick={closeModal}>Close</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* title */}
        <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-1">
          <input
            type="text"
            placeholder="Enter Your Event title"
            defaultValue={updateData ? updateData.title : ""}
            className="input rounded-none w-full p-4"
            {...register("title")}
          />
        </div>

        {/* photo */}
        {/* <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-1">
          <input
            type="file"
            placeholder="Enter Your photo url"
            className="input rounded-none w-full p-4"
            {...register("photo")}
          />
          {updateData?.image && (
            <Image
              src={updateData?.image}
              alt="sg"
              width={150}
              height={50}
              layout="responsive"
            ></Image>
          )}
        </div> */}
        {/* short_title  */}
        <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-1">
          <input
            type="text"
            placeholder="Enter Your short_title"
            className="input rounded-none w-full p-4 "
            defaultValue={updateData?.short_title}
            {...register("short_title")}
          />
        </div>

        {/* date  */}
        <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-1">
          <input
            type="data"
            min="2018-01-01"
            max="2050-12-31"
            placeholder="Enter Your date"
            defaultValue={updateData?.date || ""}
            className="input rounded-none w-full p-4 "
            {...register("date")}
          />
        </div>

        {/* location  */}
        <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-1">
          <input
            type="text"
            placeholder="Enter Your location"
            className="input rounded-none w-full p-4 "
            defaultValue={updateData?.location || ""}
            {...register("location")}
          />
        </div>

        <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-1">
          <textarea
            className="input rounded-none w-full p-4"
            defaultValue={updateData?.description || ""}
            {...register("description")}
          ></textarea>
        </div>

        <button
          type="submit"
          className=" w-full my-4 py-3 rounded-lg px-3 font-bold bg-[#963682] text-white flex justify-center items-center"
        >
          Update A Event
        </button>
      </form>
    </dialog>
  );
};

export default forwardRef(EventModal);
