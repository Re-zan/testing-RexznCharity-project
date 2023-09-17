import Banner from "@/components/CommonBanner/Banner";
import bannerImage from "@/assets/banner/volunteer.jpg";
import React from "react";
import CommonText from "@/components/CommonText";
import VoluanteerFrom from "./VoluanteerFrom";

//page title
export const metadata = {
  title: "Re-zanCharity | Events",
};

const VolunteerPage = () => {
  return (
    <main>
      {/* banner part  */}
      <Banner
        title="Join Our Team: Volunteer Opportunities"
        des="Become a part of our mission by volunteering with Re-zanCharity. Explore rewarding opportunities that empower you to make a positive impact. Join us in creating change today!"
        bannerImage={bannerImage}
      ></Banner>

      {/* volunterr part  */}
      <section className=" my-20">
        {/* title part  */}
        <CommonText
          title="Becoming a Volunteer"
          description=" Explore opportunities to make a difference. Join Re-zanCharity as a volunteer and be part of positive change today!"
          postion="center"
        ></CommonText>

        <VoluanteerFrom></VoluanteerFrom>
      </section>
    </main>
  );
};

export default VolunteerPage;
