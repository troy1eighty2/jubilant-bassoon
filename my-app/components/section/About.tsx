import Image from "next/image";
import cat from "@/public/cat.jpeg";

export default function About() {
  return (
    <main id="about" className=" h-screen flex md:p-50 p-20">
      <div className="flex flex-col md:flex-row h-full w-full ">
        <div className="flex md:w-[50%] w-[100%] shrink-0">
          <Image
            src={cat}
            alt="pf pic"
            style={{objectFit: "contain"}}
          ></Image>
        </div>
        <div className="gap-5 flex flex-col md:p-10 p-5 justify-center bold">
          <p className="md:text-4xl text-xl">
            this is a blurb aboout me. where am i from. what i believe in. what
            kind of services do i offer
          </p>
          <p className="md:text-2xl">
            this is another blurb aboout me. where am i from. what i believe in.
            what kind of services do i offer but maybe a little bit longer and
            more in depth
          </p>
        </div>
      </div>
    </main>
  );
}
