import React from "react";
import Banner from "@/components/CommonBanner/Banner";
import bannerImage from "@/assets/banner/blogs.png";
import CommonText from "@/components/CommonText";
import BlogsData from "./BlogsData";

//page title
export const metadata = {
  title: "Re-zanCharity | Blogs",
};
const Blogspage = () => {
  return (
    <main>
      <Banner
        title="Exploring Insights and Impact: Our Blog Hub"
        des="Explore our blog hub for thought-provoking articles, success stories, and actionable tips related to our causes. Stay informed, inspired, and engaged with our mission. Explore now!"
        bannerImage={bannerImage}
      ></Banner>

      {/* blog page start */}
      <section className=" my-20">
        {/* title part  */}
        <CommonText
          title="Read Our Blog"
          description="Explore our insightful articles, stories, and tips. Stay informed and engaged with our mission. Dive into knowledge and inspiration."
          postion="center"
        ></CommonText>

        <div className="my-16">
          <BlogsData></BlogsData>
        </div>
      </section>
    </main>
  );
};

export default Blogspage;
