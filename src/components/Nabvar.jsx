"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthContext } from "@/Provider/AuthProviders";
import { useRouter } from "next/navigation";

const Nabvar = () => {
  //user
  const { user, logOut } = useContext(AuthContext);

  //navigete
  const router = useRouter();

  //logout
  const handleLogOut = () => {
    logOut();
    router.push("/");
  };
  //states
  const [state, setState] = useState(false);

  // main menu create
  const beforeLogINMenu = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/causes",
      title: "Causes",
    },
    {
      path: "/events",
      title: "Events",
    },
    {
      path: "/blogs",
      title: "Blogs",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ];

  const afterLogInMenu = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/causes",
      title: "Causes",
    },
    {
      path: "/events",
      title: "Events",
    },
    {
      path: "/blogs",
      title: "Blogs",
    },
    {
      path: "/contact",
      title: "Contact",
    },
    {
      path: "/dashboard",
      title: "Dashboard",
    },
  ];

  const mainMenu = user ? afterLogInMenu : beforeLogINMenu;

  //active pathname
  const pathname = usePathname();

  //resposive menu start
  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between py-3 md:block">
      <Link href="/" className=" flex items-center italic text-lg font-bold">
        <Image src={logoImg} alt="logo" width={65} height={65}></Image>
        <span className="text-[#702461]  md:text-sm lg:text-xl">Re-zan</span>
        <span className=" text-[#c94257] md:text-sm lg:text-xl">Charity</span>
      </Link>
      <div className="md:hidden">
        <button
          className="menu-btn text-[#531a48] hover:text-[#9e404e]"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
  //resposive menu end

  return (
    <header
      className={` ${
        pathname === "/logIn" || "/signUp" ? "shadow-2xl" : "shadow-none"
      } `}
    >
      <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
        <Brand />
      </div>
      <nav
        className={` md:text-sm ${
          state
            ? "absolute z-20 top-0 inset-x-0 bg-white rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent"
            : ""
        }`}
      >
        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8 lg:px-0">
          <Brand />
          <div
            className={`flex-1 items-center mt-8 md:mt-0 md:flex  ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {mainMenu?.map(({ path, title }) => {
                const isActive = pathname === path;
                return (
                  <li key={path} className={`font-semibold text-[17px] `}>
                    <Link
                      href={path}
                      className={
                        isActive
                          ? "text-[#702461]  block"
                          : "text-[#b83d4f] block hover:text-[#8b387b]"
                      }
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
              <li>
                {user ? (
                  <>
                    <button
                      onClick={handleLogOut}
                      className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-[#702461] active:bg-[#702461] duration-150 rounded-full md:inline-flex"
                    >
                      LogOut
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </>
                ) : (
                  <Link
                    href="/logIn"
                    className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-[#702461] active:bg-[#702461] duration-150 rounded-full md:inline-flex"
                  >
                    LogIn
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nabvar;
