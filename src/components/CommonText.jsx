"use client";
import React from "react";
import { pacifico, zila } from "@/utils/fonts";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CommonText = ({ title, description, postion }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`text-${postion} space-y-4`}>
      <h2
        className={`${pacifico.className}  text-5xl text-[#aa3b4c] p-2`}
        data-aos="flip-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400"
      >
        {title}
      </h2>
      <p
        className={`${zila.className}  text-xl  text-[#5c5b5c] md:w-[500px] lg:w-[800px] mx-auto p-2`}
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        {description}
      </p>
    </div>
  );
};

export default CommonText;
