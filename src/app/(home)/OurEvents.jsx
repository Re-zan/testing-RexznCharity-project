"use client";
import React from "react";
import OurSingleEvents from "./OurSingleEvents";

import useEventsData from "@/hooks/useEventsData";
import OurEventHeading from "./OurEventHeading";
// import getEventData from "@/utils/getEventData";

export const revalidate = 0;
const OurEvents = () => {
  const [events] = useEventsData();

  // const events = await getEventData();
  const upcomingEvents = events?.filter((data) => data?.status === "upcoming");

  return (
    <section className="  my-24  relative ">
      <div
        className=" bg-[#dd445b] h-[450px] "
        style={{
          clipPath: "polygon(0% 3%, 54% 3%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="my_container py-10 pl-2 lg:pl-0 text-white">
          {upcomingEvents?.slice(0, 3).map((items) => (
            <OurSingleEvents items={items} key={items._id}></OurSingleEvents>
          ))}
        </div>
      </div>
      {/* section heading part */}
      <OurEventHeading></OurEventHeading>
    </section>
  );
};

export default OurEvents;
