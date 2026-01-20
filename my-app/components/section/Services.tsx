import Image from "next/image";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import placeholder from "@/public/github.png";

export default function Services() {
  return (
    <div
      id="services"
      className=" flex flex-col h-screen p-10 gap-10 md:grid md:grid-cols-3 md:grid-rows-1"
    >
      <div className="flex flex-col gap-5 border">
        <div className="flex justify-center items-center gap-10 ">
          <Image src={placeholder} alt="service logo" height={70}></Image>
          <p className="md:text-3xl" >title of service</p>
        </div>
        <p className="md:text-2xl" >
          description of the service. description description description Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        </p>
      </div>
      <div className="flex flex-col gap-5 border">
        <div className="flex justify-center items-center gap-10 ">
          <Image src={placeholder} alt="service logo" height={70}></Image>
          <p className="md:text-3xl" >title of service</p>
        </div>
        <p className="md:text-2xl" >
          description of the service. description description description Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        </p>
      </div>
      <div className="flex flex-col gap-5 border">

        <div className="flex justify-center items-center gap-10 ">
          <Image src={placeholder} alt="service logo" height={70}></Image>
          <p className="md:text-3xl" >title of service</p>
        </div>
        <p className="md:text-2xl" >
          description of the service. description description description Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        </p>
      </div>
    </div>
  );
}
