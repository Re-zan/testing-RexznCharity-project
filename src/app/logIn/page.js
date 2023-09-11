import CommonText from "@/components/CommonText";
import React from "react";
import LogFromData from "./LogFromData";

//page title
export const metadata = {
  title: "Re-zanCharity | LogIn",
};

const LogInpage = () => {
  return (
    <section className="my-20 shadow-2xl my_container py-16">
      <CommonText title="LogIn Now" postion="center"></CommonText>
      <LogFromData></LogFromData>
    </section>
  );
};

export default LogInpage;
