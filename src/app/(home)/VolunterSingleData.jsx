"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import { pacifico, zila } from "@/utils/fonts";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
const VolunterSingleData = ({ items }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { name, age, image, phone_number } = items;
  return (
    <>
      <div className=" relative text-center  p-4  shadow-lg mt-5 md:mt-0 z-0 ">
        {image && (
          <Image
            src={image}
            alt="Our Team "
            width={500}
            height={500}
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
          ></Image>
        )}

        <div
          className=" space-y-2 p-3 bg-[#fdfdfd] w-[120px] md:w-[220px] mx-auto  z-30 absolute -bottom-3 md:-bottom-10  left-0 md:left-16 lg:left-9 hover_transtion_effect "
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
        >
          <h3 className={`${pacifico.className} text-2xl text-[#7c276b]`}>
            {name}
          </h3>
          <p className={`${pacifico.zila}  text-[#616061]  text-sm`}>
            Age: {age} years old{" "}
          </p>
          <p
            className={`${pacifico.zila}  text-[#616061]  text-sm flex items-center justify-center gap-2 pb-3`}
          >
            <FaPhoneAlt />

            {phone_number}
          </p>
        </div>
      </div>
    </>
  );
};

export default VolunterSingleData;
