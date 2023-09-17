"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import { pacifico } from "@/utils/fonts";
import DonarsSingle from "./DonarsSingle";
import useUsersData from "@/hooks/useUsersData";

const MeetOurDonnar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [userDatas] = useUsersData();
  const donors = userDatas
    ?.filter((datas) => datas?.role === "donar")
    .slice(0, 3);
  return (
    <section className="my-24  relative">
      <div
        className="absolute text-center -mt-16 md:-mt-0 md:text-left my_container left-0 lg:left-32 top-0  border-dashed  border-b-2 border-b-[#aa3b4c]"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="900"
      >
        <h2
          className={`${pacifico.className} text-2xl  md:text-3xl lg:text-5xl text-[#aa3b4c] p-2 `}
        >
          Meet Our Donars
        </h2>
      </div>

      <div
        className=" bg-[#dd445b] h-[550px] text-black text-end py-8 "
        style={{
          clipPath: "polygon(39.25% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="my_container">
          {" "}
          {donors?.map((items) => (
            <DonarsSingle items={items} key={items._id}></DonarsSingle>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurDonnar;
