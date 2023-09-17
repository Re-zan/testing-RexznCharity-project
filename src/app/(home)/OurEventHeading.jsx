"use client";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { pacifico } from "@/utils/fonts";

const OurEventHeading = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="  overflow-x-hidden">
      <div
        className="absolute text-center -mt-16 md:-mt-0 md:text-right top-0 right-0 lg:right-36 border-dashed  border-b-2 border-b-[#aa3b4c]"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="700"
      >
        <h2
          className={`${pacifico.className} text-2xl  md:text-3xl lg:text-5xl text-[#aa3b4c] p-2`}
        >
          Our Upcoming Events
        </h2>
      </div>
    </div>
  );
};

export default OurEventHeading;
