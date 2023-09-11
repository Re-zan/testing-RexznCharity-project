"use client";
import { FaEnvelopeOpen, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import fb from "@/assets/icons/fb.png";
import insta from "@/assets/icons/insta_.png";
import twitter from "@/assets/icons/twitter.png";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import { usePathname } from "next/navigation";

const Footer = () => {
  // main menu create
  const mainMenu = [
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

  //isactive pathname
  const pathname = usePathname();

  return (
    <div className="bg-gray-800  ">
      <footer className=" px-5 lg:px-0  py-20  my_container grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-16 lg:gap-28">
        <div>
          <Link
            href="/"
            className=" flex items-center italic text-lg font-bold mt-2"
          >
            <Image src={logoImg} alt="logo" width={65} height={65}></Image>

            <span className=" text-[#c94257] text-xl ">Re-zanCharity</span>
          </Link>
          <p className=" w-[200px] lg:w-[400px] my-3 text-sm text-white text-justify ">
            Re-zanCharity is a compassionate and impactful charity website
            dedicated to making the world a better place. Through our diverse
            charitable initiatives and global community, we strive to uplift
            disadvantaged lives, foster positive change, and inspire hope. Join
            us in our mission to create a brighter, more compassionate future
            for all.
          </p>

          <div className="  flex  w-44">
            <Link href="https://www.facebook.com/">
              <Image
                src={fb}
                alt="facebook"
                className="object-cover w-10 bg-slate-50 rounded-full mr-4 p-2"
              />
            </Link>
            <Link href="https://twitter.com/">
              <Image
                src={twitter}
                alt="facebook"
                className="object-cover w-10 bg-slate-50 rounded-full mr-4 p-2"
              />
            </Link>

            <Link href="https://www.instagram.com/">
              {" "}
              <Image
                src={insta}
                alt="facebook"
                className="object-cover w-12 bg-slate-50 rounded-full mr-4 p-3"
              />
            </Link>
          </div>
        </div>
        <div className=" text-left md:text-center">
          <h2 className="text-2xl font-semibold text-white  mt-6 mb-5">
            UseFul Links
          </h2>
          <ul>
            {" "}
            {mainMenu.map(({ path, title }) => {
              const isActive = pathname === path;
              return (
                <li key={path} className={`font-semibold text-[17px] `}>
                  <Link
                    href={path}
                    className={
                      isActive
                        ? "text-[#c94257]  block"
                        : "text-white block hover:text-[#c94257] py-2"
                    }
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mt-6 mb-5">
            Contact us
          </h2>

          <div className="flex items-center  text-white">
            <FaPhoneAlt className="text-[#c94257] mr-4 text-xl"></FaPhoneAlt>
            <p className="text-base">+ 018834344546</p>{" "}
          </div>
          <div className="flex items-center text-white my-3">
            <FaEnvelopeOpen className="text-[#c94257] mr-4 text-xl"></FaEnvelopeOpen>
            <p className="text-base">info@gamil.com</p>{" "}
          </div>
          <div className="flex items-center  text-white">
            <FaLocationArrow className="text-[#c94257] mr-4 text-xl"></FaLocationArrow>
            <p className="text-base">Oxygen Chittagong</p>{" "}
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 text-white bg-gray-900 py-8 ">
        <div className=" my_container text-center">
          <p className="text-lg">
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <span className=" text-xl text-[#863476] font-bold">
              {" "}
              Re-ZanCharity
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
