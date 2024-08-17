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
          The event will feature insightful keynote addresses by experts,
          informative exhibitions and videos, ingenious models and prototypes
          and exciting competitions for school and college students. We shall
          also arrange space for students to display their own posters and
          models to convey their interest and enthusiasm in space sciences and
          technology to the other attendees. It will provide a unique
          opportunity for the students to become aware of the importance and
          benefits of space exploration, recognize the significant achievements
          of India in space exploration and space technology and be inspired to
          contribute to our country&apos;s efforts to reach for the stars
        </div>
      </div>
    </div>
  );
};

export default HomeDesc;
