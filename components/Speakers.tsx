import React from "react";
import SpeakersCard from "@/components/SpeakersCard";
import HeaderPic from "@/public/header.png";

const speakerData = [
  {
    name: "Speaker 1",
    img: HeaderPic,
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda at atque beatae blanditiis consequuntur, ea earum explicabo, illum laboriosam, laborum nihil non nostrum obcaecati officiis suscipit tempore veritatis vero.",
  },
  {
    name: "Speaker 1",
    img: HeaderPic,
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda at atque beatae blanditiis consequuntur, ea earum explicabo, illum laboriosam, laborum nihil non nostrum obcaecati officiis suscipit tempore veritatis vero.",
  },
  {
    name: "Speaker 1",
    img: HeaderPic,
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda at atque beatae blanditiis consequuntur, ea earum explicabo, illum laboriosam, laborum nihil non nostrum obcaecati officiis suscipit tempore veritatis vero.",
  },
  {
    name: "Speaker 1",
    img: HeaderPic,
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda at atque beatae blanditiis consequuntur, ea earum explicabo, illum laboriosam, laborum nihil non nostrum obcaecati officiis suscipit tempore veritatis vero.",
  },
];

const Speakers = () => {
  return (
    <div className="w-full space-y-5">
      <div
        className="text-2xl sm:text-4xl font-bold bg-gradient-to-t from-zinc-600 to-zinc-100 text-transparent bg-clip-text"
        id="speakers"
      >
        Guest Speakers
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {speakerData.map((speaker) => (
          <SpeakersCard
            key={speaker.name}
            name={speaker.name}
            img={speaker.img}
          >
            {speaker.bio}
          </SpeakersCard>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
