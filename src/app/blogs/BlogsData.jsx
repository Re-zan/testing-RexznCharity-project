import CardDesign from "@/components/EventsAndBlogsCard/CardDesign";
import getBlogsData from "@/utils/getBlogsData";

import React from "react";

const BlogsData = async () => {
  const blogsData = await getBlogsData();

  return (
    <div className="grid  grid-cols-2 lg:grid-cols-4 gap-10 p-3 lg:p-0 my-20 my_container">
      {blogsData?.map((items) => (
        <CardDesign items={items} key={items._id}></CardDesign>
      ))}
    </div>
  );
};

export default BlogsData;
