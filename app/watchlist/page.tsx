"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  console.log(pathname);
  return <div>Watchlist</div>;
};
export default Page;
