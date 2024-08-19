import React from "react";
import HeaderPic from "@/public/header.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-full p-12 flex flex-col justify-center items-center relative">
      <Image
        src={HeaderPic}
        alt={"Header"}
        className="absolute top-0 w-full h-full -z-10 object-cover"
      />
      <div className="max-w-xl text-center space-y-5">
        <div className="text-4xl sm:text-6xl font-bold">National Space Day</div>
        <div>
          Join us for celebrating Bharat&apos;s space odyssey — Chandrayaan 3
          and beyond.
        </div>
        <div>
          <Link href={"#events"}>
            <button className="px-8 py-3 rounded-md text-lg bg-sky-700 transition hover:bg-sky-800">
              Browse Events
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
