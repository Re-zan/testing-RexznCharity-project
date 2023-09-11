import SingleData from "@/components/EventsAndBlogsCard/SingleData";
import getSingleEventsData from "@/utils/getSingleEventsData";
import React from "react";

//meta data create
export const generateMetadata = async ({ params }) => {
  const { title } = await getSingleEventsData(params.id);
  return {
    title: `Event | ${title}`,
  };
};
const SingleEventPage = async ({ params }) => {
  //get data
  const { title, short_title, description, image, date, location } =
    await getSingleEventsData(params.id);

  return (
    //datas
    <SingleData
      title={title}
      short_title={short_title}
      description={description}
      image={image}
      date={date}
      location={location}
    ></SingleData>
  );
};

export default SingleEventPage;
