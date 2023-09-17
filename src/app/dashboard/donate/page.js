import React from "react";
import DonateForm from "./DonateForm";

export const metadata = {
  title: "Dashboard | Doante",
};
const DonatePage = () => {
  return (
    <div className="max-w-screen-xl  px-4 md:px-8 mx-auto mt-5">
      <div className="max-w-lg">
        <h3 className="text-[#aa3b4c] text-xl font-bold sm:text-2xl text-center">
          Donate Now
        </h3>
      </div>
      <DonateForm></DonateForm>
    </div>
  );
};

export default DonatePage;
