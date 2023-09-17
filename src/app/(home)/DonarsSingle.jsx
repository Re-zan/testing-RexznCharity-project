"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import { pacifico, zila } from "@/utils/fonts";
import Image from "next/image";
const DonarsSingle = ({ items }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { name, image, donation_amount, message } = items;
  return (
    <div>
      <div
        className=" text-white mb-5 space-y-2  flex justify-end gap-4"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="820"
      >
        <div className="flex items-center">
          <div>
            {" "}
            <h2 className={`${pacifico.className} text-sm md:text-2xl `}>
              Name: {name}
            </h2>
            <p
              className={`${pacifico.zila}  hidden lg:block text-md w-[750px]`}
            >
              {message}
            </p>
            <p className={`${pacifico.zila}  md:text-md`}>
              Donated : $ {donation_amount}
            </p>
          </div>
        </div>
        {image && (
          <Image alt="Donars" src={image} width={90} height={50}></Image>
        )}
      </div>
      <hr
        className=" bg-white my-4"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="820"
      />
    </div>
  );
};

export default DonarsSingle;
