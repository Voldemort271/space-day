import React from "react";
import Image from "next/image";
import RocketPic from "@/public/rocket.png";

const HomeAbout = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between lg:flex-row gap-12">
      <div className="space-y-5">
        <div
          className="text-2xl sm:text-4xl font-bold bg-gradient-to-t from-zinc-600 to-zinc-100 inline-block text-transparent bg-clip-text"
          id="about"
        >
          National Space Day 2024, IIT Mandi
        </div>
        <div>
          This is the first ever National Space Day, after the Government of
          India declared August 23rd as the &apos;National Space Day&apos; to
          honour the success of the Chandrayaan-3 mission, which achieved a soft
          landing of the Vikram Lander at the &apos;Shiv Shakti&apos; point and
          deployed the Pragyaan Rover on the lunar surface on August 23, 2023.
          The celebration will take place on 23rd August 2024 at the beautiful
          campus of IIT Mandi, located in the serene Himalayan region of
          Himachal Pradesh, India.
        </div>
      </div>
      <Image
        src={RocketPic}
        alt={"Nice"}
        className="w-full max-w-96 aspect-video object-cover"
      />
    </div>
  );
};

export default HomeAbout;
