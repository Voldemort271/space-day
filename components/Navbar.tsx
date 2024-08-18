import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full px-12 py-5 text-lg flex justify-center items-center gap-5 sm:gap-12 lg:gap-24 bg-foreground/[0.5] backdrop-blur-md">
      <Link href={"#about"}>About</Link>
      <Link href={"#events"}>Schedule</Link>
      <Link href={"#speakers"}>Speakers</Link>
      <Link href={"#register"}>Register</Link>
    </div>
  );
};

export default Navbar;
