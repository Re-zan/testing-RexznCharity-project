"use client";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";

//Donatebutton
export const Donatebutton = () => {
  const { user } = useAuth();
  return (
    <Link href={`${user ? "/dashboard/donate" : "/logIn"}`}>
      <button className="btn bg-[#7c276b] text-white px-4 py-3 hover:bg-[#c94257] shadow-lg  transition transform duration-500 hover:translate-x-2">
        Donate Now
      </button>
    </Link>
  );
};

//Volanterbutton
export const Volanterbutton = () => {
  return (
    <Link href="/volunteer">
      <button className="btn bg-[#c94257] text-white px-4 py-3 hover:bg-[#7c276b] shadow-lg  transition transform duration-500 hover:translate-x-2">
        Make Volunteer
      </button>
    </Link>
  );
};
