import getSinlgeBlogData from "@/utils/getSinlgeBlogData";
import React from "react";
import SingleData from "@/components/EventsAndBlogsCard/SingleData";

//meta data create
export const generateMetadata = async ({ params }) => {
  const { title } = await getSinlgeBlogData(params.id);
  return {
    title: `Blog | ${title}`,
  };
};

const SingleBlogPage = async ({ params }) => {
  //get data
  const { title, short_title, description, image, date, published_by } =
    await getSinlgeBlogData(params.id);

  return (
    //data
    <SingleData
      title={title}
      short_title={short_title}
      description={description}
      image={image}
      date={date}
      published_by={published_by}
    ></SingleData>
  );
};

export default SingleBlogPage;
