import React from "react";

import { pacifico, zila } from "@/utils/fonts";

const TheirSingleStory = ({ items }) => {
  const { name, story } = items;
  return (
    <div className="pb-6 md:pb-0">
      {" "}
      <div className=" rounded-lg text-center border  bg-[#fdfdfd] shadow-lg mt-5 md:mt-0 p-6">
        <div className=" space-y-3 px-3">
          <h3 className={`${pacifico.className} text-2xl text-[#7c276b]`}>
            {name}
          </h3>
          <p className={`${pacifico.zila}  text-[#616061] text-sm`}>
            {" "}
            {story}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheirSingleStory;
