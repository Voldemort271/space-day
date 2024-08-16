import React from "react";
import HeaderPic from "@/public/header.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full h-full p-12 flex flex-col justify-center items-center relative">
      <Image
        src={HeaderPic}
        alt={"Header"}
        className="absolute top-0 w-full h-full -z-10"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      hedrr
    </div>
  );
};

export default Header;
