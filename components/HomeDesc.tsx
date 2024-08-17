import React from "react";
import Image from "next/image";
import HeaderPic from "@/public/header.png";

const HomeDesc = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between lg:flex-row gap-12">
      <Image
        src={HeaderPic}
        alt={"Nice"}
        className="w-full max-w-96 aspect-video object-cover"
      />
      <div className="space-y-5">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
          aut deleniti dolores error laboriosam nobis perferendis perspiciatis
          repellat, sint tempore, velit voluptatum. A dolorem est eveniet
          excepturi id sunt. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ab at blanditiis eius est explicabo impedit magni nulla, optio
          perferendis quaerat quibusdam repellat ut! Consequatur eius ipsum
          itaque minima suscipit totam? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ab aliquam aliquid illo impedit, mollitia nam sunt
          vitae! Eligendi illo in, maxime nostrum quasi quidem quod similique!
          Amet nemo nobis rem!
        </div>
      </div>
    </div>
  );
};

export default HomeDesc;
