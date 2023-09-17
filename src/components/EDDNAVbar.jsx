"use client";
import React from "react";

import Nabvar from "./Nabvar";
import { useRouter } from "next/navigation";

const EDDNAVbar = () => {
  const router = useRouter();
  return <> {router.pathname !== "/404" && <Nabvar></Nabvar>}</>;
};

export default EDDNAVbar;
