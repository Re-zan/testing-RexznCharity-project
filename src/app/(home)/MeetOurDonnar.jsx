"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import { pacifico } from "@/utils/fonts";
import DonarsSingle from "./DonarsSingle";

const MeetOurDonnar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const donors = [
    {
      id: 1,
      name: "John Doe",
      age: 35,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      donation_amount: 500,
      small_info:
        "Dedicated to improving healthcare access for children in underserved communities.",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      donation_amount: 1000,
      small_info:
        "Believes in making a difference in the lives of underprivileged kids.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      age: 45,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      donation_amount: 750,
      small_info: "Passionate about supporting education for children in need.",
    },
  ];
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
            <DonarsSingle items={items} key={items.id}></DonarsSingle>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurDonnar;
