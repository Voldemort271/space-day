import React from "react";
import SpeakersCard from "@/components/SpeakersCard";
import Speaker1 from "@/public/jsyadav.jpg";
import Speaker2 from "@/public/bsivaraman.jpg";
import Speaker3 from "@/public/artisarkar.jpg";
import Speaker4 from "@/public/tarunpant.jpg";

const speakerData = [
  {
    name: "Prof J S Yadav",
    img: Speaker1,
    bio: "Dr. J. S. Yadav is a distinguished researcher with extensive experience in space instrumentation. He worked at TIFR Mumbai from 1982 to 2018, contributing to key projects like the Anuradha instrument, the Gamma Ray Spectrometer on NASA's Mars Observer, and the Indian X-ray Astronomy Experiment. He led the development of the Large Area X-ray Proportional Counter (LAXPC) on India's AstroSat, launched by ISRO in 2015. The LAXPC has significantly advanced the study of neutron star and black hole X-ray binaries, leading to over 100 research publications.",
  },
  {
    name: "Prof Bhalamurugan Sivaraman",
    img: Speaker2,
    bio: "Dr. B. Sivaraman is a professor in the Atomic, Molecular, and Optical Physics Division at the Physical Research Laboratory in Ahmedabad. He holds a B.Tech in Chemical Engineering from the University of Madras and a Ph.D. in Astrochemistry from The Open University, UK. Dr. Sivaraman has made significant contributions to low-temperature astrochemistry and was awarded the INSA medal for young scientists in 2016. His research focuses on the physico-chemical changes in astrochemical ices and high-temperature astrochemistry. He also serves as a Visiting Lecturer at the International Space University in France.",
  },
  {
    name: "Ms Arti Sarkar",
    img: Speaker3,
    bio: "Ms. Arti Sarkar is a Senior Space Scientist and Group Director at ISRO with over three decades of service. Her career at ISRO has been marked by significant contributions to numerous pioneering space missions and advancements in remote sensing and planetary science. With a strong academic background in Applied Optics from IIT Roorkee and IIT Delhi, she has played a crucial role in the design and development of various electro-optical payloads for ISRO's Earth observation programs, including major missions like IRS, Oceansat, and Chandrayaan. Her work has been instrumental in enhancing the capabilities of space applications and exploration.",
  },
  {
    name: "Dr Tarun Kumar Pant",
    img: Speaker4,
    bio: "Scientist 'G' is the Head of the Ionosphere Thermosphere Magnetosphere Physics Division at the Space Physics Laboratory, Vikram Sarabhai Space Centre, ISRO. His research focuses on optical and radio remote sensing, aeronomy, airglow emissions, and various atmospheric processes. With a professional background spanning from postdoctoral fellowships at the University of Toronto and Physical Research Laboratory to a research student role at Uttar Pradesh State Observatory, he has received notable awards including ISRO’s Team Excellence Award for the SOUREX mission and the Hari Om Ashram Prerit Vikram Sarabhai Award.",
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
