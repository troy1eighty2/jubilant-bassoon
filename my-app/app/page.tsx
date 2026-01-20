"use client";
import Image from "next/image";
import About from "@/components/section/About";
import Services from "@/components/section/Services";
import Contact from "@/components/section/Contact";
import { motion, scroll, animate } from "motion/react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.querySelectorAll("div:not([data-skip-scroll])").forEach((item) => {
      scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
        target: item,
        offset: ["start end", "end end", "start start", "end start"],
      });
    });
  }, []);
  return (
    <main className="flex flex-col text-center h-full w-full">
      <div
        data-skip-scroll
        className=" h-screen w-full flex flex-col text-center bg-[url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.neighborhoods.com%2Fblog%2Fmedia%2Fkessler-375d668af95b39ada42100e85069503b.jpg&f=1&nofb=1&ipt=e5cd8879956d8bd56efe0c7077c6e930df887799d35c4c4966e12a569524906e)] bg-cover relative z-0 "
      >
        <div className="absolute flex md:text-9xl text-5xl justify-center p-50 backdrop-blur-xs h-full w-full text-white ">
          <motion.h1
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            Sample title right here
          </motion.h1>
        </div>
      </div>
      <Services />
      <About />
      <Contact />
      <footer className="p-2 bg-stone-300 text-s">
        Built by{" "}
        <a href="https://github.com/troy1eighty2" target="_blank">
          Troy
        </a>
      </footer>
    </main>
  );
}
