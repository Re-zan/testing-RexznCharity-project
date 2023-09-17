import DashBoardNavbar from "@/components/DashBoardNavbar";

import React from "react";

export const metadata = {
  title: "Re-zanCharity | Dashboard",
};

const DashboardLayout = ({ children }) => {
  return (
    <div className=" my_container my-4 flex ">
      <DashBoardNavbar></DashBoardNavbar>
      {children}
    </div>
  );
};

export default DashboardLayout;
