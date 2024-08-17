import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full px-12 py-5 text-lg flex justify-center sm:justify-between items-center gap-12 bg-foreground/[0.5] backdrop-blur-md">
      <div className="hidden sm:block text-2xl font-bold">Brand</div>
      <div className="flex gap-5">
        <Link href={"#about"}>About</Link>
        <Link href={"#events"}>Schedule</Link>
        <Link href={"#speakers"}>Speakers</Link>
        <Link href={"#register"}>Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
