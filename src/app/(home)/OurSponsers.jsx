import CommonText from "@/components/CommonText";
import Image from "next/image";
import React from "react";

const OurSponsers = () => {
  const sponsers = [
    {
      id: 1,
      image: "/sponsers/1-2.png",
    },
    {
      id: 2,
      image: "/sponsers/6.png",
    },
    {
      id: 3,
      image: "/sponsers/2.png",
    },
    {
      id: 4,
      image: "/sponsers/3.png",
    },
    {
      id: 5,
      image: "/sponsers/4.png",
    },
  ];
  return (
    <section className=" mt-20">
      <div className="my_container">
        {/* section heading part */}
        <CommonText
          title="Our Friends & Sponsers"
          postion="center"
          description="Our cherished Friends & Sponsors are the heart of Re-zanCharity, igniting hope and transformation through their dedicated partnership."
        ></CommonText>

        {/* our sponsers part */}
        <div className="md:flex justify-around items-center my-14 ">
          {sponsers?.map(({ image, id }) => (
            <Image
              src={image}
              alt="Our Friends & Sponsers"
              key={id}
              width={150}
              height={150}
              className=" mx-auto  my-4 md:my-0 md:mx-0 p-4 lg:p-0 "
            ></Image>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSponsers;
