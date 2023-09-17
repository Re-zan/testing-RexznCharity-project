"use client";
import { Donatebutton, Volanterbutton } from "@/components/Buttons";
import React from "react";
import { pacifico, zila } from "@/utils/fonts";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./their_story_styles.css";

// import required modules

import { Pagination } from "swiper/modules";
import TheirSingleStory from "./TheirSingleStory";

//aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import useStoryData from "@/hooks/useStoryData";

const TheirStory = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const storyDatas = useStoryData();
  return (
    <section className="my_container my-20 grid grid-cols-1 md:grid-cols-2 gap-20">
      <div
        className=" swiperData"
        data-aos="fade-up-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="900"
      >
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {storyDatas?.map((items, index) => (
            <SwiperSlide key={index}>
              <TheirSingleStory items={items} key={items.id}></TheirSingleStory>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center justify-end pr-3 lg:pr-0">
        <div
          className="space-y-5 text-end"
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
        >
          <h2 className={`${pacifico.className}  text-5xl text-[#aa3b4c]`}>
            Their Story Is Our Story
          </h2>
          <p className={`${zila.className}  text-xl  text-[#5c5b5c]  `}>
            At Re-zanCharity, 'Their Story Is Our Story.' We're committed to
            sharing the journeys of hope and resilience from the individuals we
            serve, forging a collective narrative of compassion and positive
            change.
          </p>
          <div className="flex justify-center md:justify-end ">
            <Donatebutton></Donatebutton>
            <div className="ml-5">
              <Volanterbutton></Volanterbutton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheirStory;
