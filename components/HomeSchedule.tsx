import React from "react";
import EventCard from "@/components/EventCard";

const eventData = [
  {
    title: "Exhibition",
    time: "All day",
    desc: "The event will feature a vibrant display of student posters, showcasing their creativity and knowledge in space science. Alongside these, various exhibitions, including the Swan spacecraft and the Mars Rover, will offer an immersive experience into the fascinating world of space exploration.",
  },
  {
    title: "Opening Ceremony",
    time: "09:30 to 10:00 am",
    desc: "The ceremony will begin with the traditional lamp lighting, symbolizing the dispelling of darkness and the pursuit of knowledge. This will be followed by Sarasvati Vandana, invoking the blessings of the goddess of wisdom and learning, setting a reverent tone for the event.",
  },
  {
    title: "Expert Talk",
    time: "10:00 to 10:30 am",
    desc: "The event will also include a talk by Prof. Arti Sarkar, an esteemed expert in the field. Her insights and experiences will provide valuable perspectives, inspiring both students and attendees with her knowledge and passion for space science.",
  },
  {
    title: "Expert Talk",
    time: "10:45 to 11:15 am",
    desc: "The event will feature an enlightening talk by Prof. J.S. Yadav, a renowned figure in the scientific community. His presentation will delve into advanced topics in space research, offering attendees a deeper understanding of the complexities and innovations driving the field forward.",
  },
  {
    title: "Expert Talk",
    time: "11:30 to 12:00 pm",
    desc: "The event will feature an engaging talk by Prof. Balamurugan, who will share his expertise and insights on current advancements and future directions in the field. His presentation promises to enrich the audience's understanding and inspire new perspectives.",
  },
  {
    title: "Expert Talk",
    time: "12:15 to 12:45 pm",
    desc: "The event will feature an enlightening talk by Dr. Tarun Pant, who will delve into his specialized research and share valuable insights. His presentation is expected to offer a deep understanding of his field and inspire attendees with his expertise.",
  },
  {
    title: "Competitions",
    time: "02:00 to 05:00 pm",
    desc: "The event will host a variety of engaging activities, including quiz competitions that test participants' knowledge and skills. Hackathon presentations will showcase innovative solutions and creative projects developed by students. Additionally, there will be essay and painting competitions, offering platforms for students to express their ideas and artistic talents. Student posters will be displayed, highlighting their research and creative work, while the Udankhatola project will provide an intriguing glimpse into its unique contributions.",
  },
  {
    title: "Closing Ceremony",
    time: "05:00 to 05:30 pm",
    desc: "The event will culminate in a grand prize distribution ceremony, celebrating the achievements of participants across various competitions and presentations. This ceremony will honor the outstanding contributions and performances, recognizing excellence and innovation in a festive and rewarding conclusion.",
  },
  {
    title: "Stargazing",
    time: "08:00 to 10:00 pm",
    desc: "The event will include a stargazing session at the fountain area behind the auditorium. Attendees will have the opportunity to explore the night sky through telescopes, guided by experts who will share fascinating insights about celestial objects and constellations.",
  },
];

const HomeSchedule = () => {
  return (
    <div className="w-full space-y-5">
      <div
        className="text-2xl sm:text-4xl font-bold bg-gradient-to-t from-zinc-600 to-zinc-100 text-transparent bg-clip-text"
        id="events"
      >
        Event Schedule
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {eventData.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={"23 Aug, 2024"}
            time={event.time}
          >
            {event.desc}
          </EventCard>
        ))}
      </div>
    </div>
  );
};

export default HomeSchedule;
