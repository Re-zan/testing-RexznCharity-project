import Banner from "@/components/CommonBanner/Banner";
import React from "react";
import bannerImage from "@/assets/banner/contact.jpg";
import ContactFrom from "./ContactFrom.jsx";
//page title
export const metadata = {
  title: "Re-zanCharity | Contact",
};

const Contactpage = () => {
  return (
    <main>
      {/* banner part */}
      <Banner
        title="Connect with Us: Let's Make a Difference Together"
        des="Reach out to us through our Contact Page. We welcome your inquiries, feedback, and collaboration opportunities. Let's make a difference together. Contact us today!"
        bannerImage={bannerImage}
      ></Banner>

      {/* contact  part  */}
      <ContactFrom></ContactFrom>
    </main>
  );
};

export default Contactpage;
