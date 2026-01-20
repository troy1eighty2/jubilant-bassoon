"use client";
import Image from "next/image";
import About from "@/components/section/About";
import Services from "@/components/section/Services";
import Contact from "@/components/section/Contact";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main className=" flex flex-col align-center text-center h-full w-full">
      <div className=" h-screen w-full flex flex-col align-center text-center bg-[url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.neighborhoods.com%2Fblog%2Fmedia%2Fkessler-375d668af95b39ada42100e85069503b.jpg&f=1&nofb=1&ipt=e5cd8879956d8bd56efe0c7077c6e930df887799d35c4c4966e12a569524906e)] bg-cover relative z-0 ">
        <div className="absolute flex text-9xl justify-center p-50 backdrop-blur-xs h-full w-full text-white">
          <motion.h1 animate={{opacity:1}} initial={{opacity:0}} transition={{duration:2}}>
            Sample title right here
          </motion.h1>
        </div>
      </div>
      <About />
      <Services />
      <Contact />
    </main>
  );
}
