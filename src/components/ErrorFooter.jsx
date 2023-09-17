import React from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";

const ErrorFooter = () => {
  const router = useRouter();
  return <div>{router.pathname !== "/404" && <Footer></Footer>}</div>;
};

export default ErrorFooter;
