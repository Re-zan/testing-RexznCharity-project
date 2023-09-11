"use client";
import React from "react";
import { pacifico, zila } from "@/utils/fonts";
import { FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

const OurSingleEvents = ({ items }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { _id, title, date, location, short_title } = items;
  return (
    <Link href={`/events/${_id}`}>
      <div className="text-white mb-5 space-y-2">
        <h2
          className={`${pacifico.className} text-sm md:text-2xl `}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
        >
          {title}
        </h2>
        <p
          className={`${pacifico.zila}  hidden md:block  text-md`}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="900"
        >
          {short_title}
        </p>
        <div
          className="md:flex gap-5 text-xs md:text-lg "
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
        >
          <span className="flex items-center gap-2">
            <FaCalendarAlt></FaCalendarAlt> {date}
          </span>{" "}
          <span className="flex items-center gap-1">
            <span>
              <FaLocationArrow></FaLocationArrow>
            </span>{" "}
            {location}
          </span>
        </div>
        <hr
          className=" bg-white mt-1"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="900"
        />
      </div>
    </Link>
  );
};

export default OurSingleEvents;
