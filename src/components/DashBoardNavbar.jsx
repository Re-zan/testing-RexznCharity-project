"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const DashBoardNavbar = () => {
  // main menu create
  const mainMenu = [
    {
      path: "/dashboard/event",
      title: "Event",
    },
    {
      path: "/dashboard/voluanteer",
      title: "Voluanteer",
    },
    {
      path: "/dashboard/users",
      title: "Users",
    },
  ];

  //isactive pathname
  const pathname = usePathname();
  return (
    <aside className="shadow-lg min-h-screen ">
      {" "}
      <ul className=" pt-10 w-[80px] md:w-[160px] text-center">
        {" "}
        {mainMenu.map(({ path, title }) => {
          const isActive = pathname === path;
          return (
            <li key={path} className={`font-semibold text-xs md:text-xl `}>
              <Link
                href={path}
                className={
                  isActive
                    ? "text-white  block bg-[#7c276b] px-1 md:px-6 py-3"
                    : "text-[#c94257] block hover:text-[#c94257] py-2"
                }
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default DashBoardNavbar;
