import React from "react";
import Banner from "@/components/CommonBanner/Banner";
import bannerImage from "@/assets/banner/Memory_walk_3.jpg";
import Services from "../(home)/Services";

//page title
export const metadata = {
  title: "Re-zanCharity | Caueses",
};

const Causespage = () => {
  return (
    <main>
      <Banner
        title="Empowering Change, One Cause at a Time"
        des="Dive into the heart of Re-zanCharity's diverse causes. From education to healthcare, join us in making a difference. Explore, engage, and help create a better world."
        bannerImage={bannerImage}
      ></Banner>
      <Services></Services>
    </main>
  );
};

export default Causespage;
