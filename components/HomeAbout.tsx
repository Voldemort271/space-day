import React from "react";
import Image from "next/image";
import HeaderPic from "@/public/header.png";

const HomeAbout = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between lg:flex-row gap-12">
      <div className="space-y-5">
        <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-t from-zinc-600 to-zinc-100 inline-block text-transparent bg-clip-text">
          National Space Day 2024, IIT Mandi
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
          aut deleniti dolores error laboriosam nobis perferendis perspiciatis
          repellat, sint tempore, velit voluptatum. A dolorem est eveniet
          excepturi id sunt. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ab at blanditiis eius est explicabo impedit magni nulla, optio
          perferendis quaerat quibusdam repellat ut! Consequatur eius ipsum
          itaque minima suscipit totam?
        </div>
      </div>
      <Image
        src={HeaderPic}
        alt={"Nice"}
        className="w-full max-w-96 aspect-video object-cover"
      />
    </div>
  );
};

export default HomeAbout;
