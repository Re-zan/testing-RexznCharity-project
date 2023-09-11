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

const TheirStory = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const heartwarmingStories = [
    {
      id: 1,
      name: "Sophia's Journey to Education",
      age: 8,
      story:
        "Sophia, a bright 8-year-old, dreamed of going to school. With your support, she now attends school daily and aspires to become a teacher.",
    },
    {
      id: 2,
      name: "Daniel's Nutritious Meals",
      age: 6,
      story:
        "Daniel, a 6-year-old, used to go hungry. Thanks to our nutrition programs, he now enjoys healthy meals, growing strong and full of energy.",
    },
    {
      id: 3,
      name: "Lina's Journey to Health",
      age: 5,
      story:
        "Lina, a 5-year-old, struggled with health issues. Our healthcare services provided her with medical care, and she's now thriving and full of smiles.",
    },
    {
      id: 4,
      name: "Raj's Dream Come True",
      age: 10,
      story:
        "Raj, a 10-year-old with a passion for art, received art supplies through our programs. He now creates beautiful artwork and dreams big.",
    },
    {
      id: 5,
      name: "Ella's Safe Shelter",
      age: 7,
      story:
        "Ella, a 7-year-old, and her family were homeless. Your support provided them with shelter, and Ella now has a safe and warm home.",
    },
    {
      id: 6,
      name: "Ahmed's Hope for the Future",
      age: 9,
      story:
        "Ahmed, a 9-year-old, faced adversity but found hope through our programs. He's now determined to build a better future for himself.",
    },
  ];

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
          {heartwarmingStories?.map((items, index) => (
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
