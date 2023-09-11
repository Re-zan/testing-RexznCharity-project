"use client";
import React from "react";
import styles from "./banner.module.css";
import { pacifico, zila } from "@/utils/fonts";
import { Donatebutton, Volanterbutton } from "../Buttons";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Banner = ({ title, des, bannerImage }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      style={{
        backgroundImage: `url(${bannerImage.src})`,
      }}
      className={`${styles.banner} bg-cover bg-no-repeat h-[850px] lg:h-[750px] bg-center flex-col align-middle `}
    >
      <div
        className={`${styles.banner_content}  my_container text-center lg:text-left  py-[240px] space-y-6`}
      >
        <h2
          className={`${pacifico.className}  text-4xl text-[#bd4355] `}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          {title}
        </h2>
        <p
          className={`${zila.className}  text-2xl  text-white  mx-auto lg:mx-0 w-[300px] md:w-[700px] lg:w-[800px]`}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          {des}
        </p>
        <div
          className="flex justify-center lg:justify-start "
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <Donatebutton></Donatebutton>
          <div className="ml-5">
            <Volanterbutton></Volanterbutton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
