"use client";
import React from "react";
import Img from "@/assets/banner/banner-bottom.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BannerBottomtext = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className=" hidden lg:block bg-[#db495f]"
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 92.94% 99.97%, 6.32% 99.97%)",
      }}
    >
      <div className="h-36 items-center  mb-5 flex text-white  justify-around">
        <p
          className=" pl-10 text-justify"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="650"
        >
          At Re-zanCharity, we're dedicated to creating a brighter world by{" "}
          empowering <br></br> hope, fostering kindness, and inspiring positive
          change in communities.
        </p>

        <div className=" h-[120px]  w-[4px] bg-white py-4 relative "></div>
        <Image
          src={Img}
          alt="Charity"
          width={70}
          className=" bg-white rounded-full absolute ml-[50px] p-1 animate-bounce"
        ></Image>

        <p
          className=" px-10 text-justify"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="650"
        >
          Join our compassionate mission today and help us make a lasting{" "}
          <br></br> impact through acts of love and generosity worldwide.
        </p>
      </div>
    </section>
  );
};

export default BannerBottomtext;
