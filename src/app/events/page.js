import Banner from "@/components/CommonBanner/Banner";
import bannerImage from "@/assets/banner/events.png";
import React from "react";
import CommonText from "@/components/CommonText";
import getEventData from "@/utils/getEventData";
import CardDesign from "@/components/EventsAndBlogsCard/CardDesign";

//page title
export const metadata = {
  title: "Re-zanCharity | Events",
};
export const revalidate = 0;
const Eventpages = async () => {
  const data = await getEventData();
  const eventsData = data?.filter(
    (data) => data?.status === "upcoming" || data?.status === "canceled"
  );
  return (
    <main>
      <Banner
        title="Join the Movement: Our Inspiring Events"
        des="Discover Re-zanCharity's upcoming events, workshops, and fundraisers. Join us for inspiring gatherings that drive positive change. Be part of something greater – explore and engage now!"
        bannerImage={bannerImage}
      ></Banner>
      {/* event page start */}
      <section className=" my-20">
        {/* title part  */}
        <CommonText
          title="Our Events"
          description="Discover our exciting events and join us for meaningful experiences that drive positive change. Mark your calendar today!"
          postion="center"
        ></CommonText>

        <div className="grid  grid-cols-2 lg:grid-cols-4 gap-10 p-3 lg:p-0 my-20 my_container">
          {eventsData?.map((items) => (
            <CardDesign items={items} key={items._id}></CardDesign>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Eventpages;
