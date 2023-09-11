"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import bannerImage from "@/assets/banner/Charity_Hands_bg.jpg";
import styles from "@/components/CommonBanner/banner.module.css";
import { pacifico } from "@/utils/fonts";
import VolunterSingleData from "./VolunterSingleData";
import useVolunteerData from "@/hooks/useVolunteerData";

const MeetOurVlouantre = () => {
  //animation
  useEffect(() => {
    AOS.init();
  }, []);

  //voluanterrsData
  const [voluanterrsData] = useVolunteerData();
  const onlyVoluanteers = voluanterrsData
    .filter((data) => data?.role === "voluanteer")
    .slice(0, 4);

  return (
    <section
      style={{
        backgroundImage: `url(${bannerImage.src})`,
      }}
      className={`${styles.banner} bg-cover bg-no-repeat h-[1120px] md:h-[1500px] lg:h-[750px] bg-center mt-20`}
    >
      <div className={`${styles.banner_content}  my_container  pt-16`}>
        <h2
          className={`${pacifico.className} text-2xl  md:text-3xl lg:text-5xl text-[#aa3b4c] p-2 border-dashed  border-b-2 border-b-[#aa3b4c]`}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
        >
          Meet Our Volunater Team
        </h2>
        <div className="grid  grid-cols-2 lg:grid-cols-4 gap-10 p-3 lg:p-0 my-12">
          {onlyVoluanteers?.map((items) => (
            <VolunterSingleData
              items={items}
              key={items.id}
            ></VolunterSingleData>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurVlouantre;
