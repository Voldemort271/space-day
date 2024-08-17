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
        <div className="text-4xl sm:text-6xl font-bold">Space Day '24</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          culpa est ipsa iusto porro quae quas repellendus reprehenderit sunt,
          voluptatem. Commodi dignissimos ducimus et in iusto nemo numquam sit
          tenetur?
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
