"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import { pacifico } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CardDesign = ({ items }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const pathName = usePathname();
  const { _id, title, image } = items;
  return (
    <>
      {" "}
      {pathName === "/blogs" && (
        <Link href={`/blogs/${_id}`}>
          <div className=" relative text-center  p-4  shadow-lg my-10 md:mt-0 z-0 ">
            {image && (
              <Image
                src={image}
                alt="Our Team "
                width={800}
                height={500}
                className=" object-cover w-full  h-56"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="700"
              ></Image>
            )}

            <div
              className=" space-y-2 p-3 bg-[#fdfdfd] w-[120px] md:w-[220px] mx-auto  z-30 absolute -bottom-3 md:-bottom-10  left-0 md:left-16 lg:left-9 hover_transtion_effect "
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              <h3 className={`${pacifico.className} text-xl text-[#7c276b]`}>
                {title}
              </h3>
            </div>
          </div>
        </Link>
      )}
      {pathName === "/events" && (
        <Link href={`/events/${_id}`}>
          <div className=" relative text-center  p-4  shadow-lg my-10 md:mt-0 z-0 ">
            {image && (
              <Image
                src={image}
                alt="Our Team "
                width={800}
                height={500}
                className=" object-cover w-full  h-56"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="700"
              ></Image>
            )}
            <div
              className=" space-y-2 p-3 bg-[#fdfdfd] w-[120px] md:w-[220px] mx-auto  z-30 absolute -bottom-3 md:bottom-8  left-0 md:left-16 lg:left-9 hover_transtion_effect "
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
            >
              <h3 className={`${pacifico.className} text-xl text-[#7c276b]`}>
                {title}
              </h3>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default CardDesign;
