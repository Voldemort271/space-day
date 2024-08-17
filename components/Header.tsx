import React from "react";
import HeaderPic from "@/public/header.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full h-full p-12 flex flex-col justify-center items-center relative">
      <Image
        src={HeaderPic}
        alt={"Header"}
        className="absolute top-0 w-full h-full -z-10 object-cover"
      />
      <div className="max-w-lg text-center space-y-5">
        <div className="text-4xl sm:text-6xl font-bold">Space Day &apos;24</div>
        <div>
          Celebrate the wonders of the universe and the spirit of exploration
          that drives us to reach for the stars.
        </div>
        <div>
          <button className="px-8 py-3 rounded-md text-lg bg-sky-700 transition hover:bg-sky-800">
            Browse Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
