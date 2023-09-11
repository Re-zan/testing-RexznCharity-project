"use client";
import React from "react";
import { pacifico } from "@/utils/fonts";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SingleService = ({ items }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { name, description, icon: Icon } = items || {};
  return (
    <div className=" rounded-lg text-center space-y-11 border p-4 relative bg-[#fdfdfd] shadow-lg mt-5 md:mt-0  hover_transtion_effect ">
      <span className=" bg-[#e04d63] rounded-full w-20 h-20 p-3  absolute left-1/2 transform -translate-x-1/2 -top-10 mb-5 flex items-center justify-center text-white text-3xl">
        <Icon />
      </span>
      <div
        className=" space-y-3 px-3"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="900"
      >
        <h3 className={`${pacifico.className} text-xl text-[#7c276b]`}>
          {name}
        </h3>
        <p
          className={`${pacifico.zila}  text-[#616061] hover:text-black text-sm`}
        >
          {" "}
          {description}{" "}
        </p>
      </div>
    </div>
  );
};

export default SingleService;
