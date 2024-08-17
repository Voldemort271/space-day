import React from "react";
import EventCard from "@/components/EventCard";

const eventData = [
  {
    title: "Good boy",
    date: "August 15, 2023",
    time: "10:00 AM",
    desc: "Join us for an exclusive online event to learn about the latest technological advancements and industry trends. This hands-on workshop will teach you how to build a successful and innovative product.",
  },
  {
    title: "Good boy",
    date: "August 15, 2023",
    time: "10:00 AM",
    desc: "Join us for an exclusive online event to learn about the latest technological advancements and industry trends. This hands-on workshop will teach you how to build a successful and innovative product.",
  },
  {
    title: "Good boy",
    date: "August 15, 2023",
    time: "10:00 AM",
    desc: "Join us for an exclusive online event to learn about the latest technological advancements and industry trends. This hands-on workshop will teach you how to build a successful and innovative product.",
  },
  {
    title: "Good boy",
    date: "August 15, 2023",
    time: "10:00 AM",
    desc: "Join us for an exclusive online event to learn about the latest technological advancements and industry trends. This hands-on workshop will teach you how to build a successful and innovative product.",
  },
  {
    title: "Good boy",
    date: "August 15, 2023",
    time: "10:00 AM",
    desc: "Join us for an exclusive online event to learn about the latest technological advancements and industry trends. This hands-on workshop will teach you how to build a successful and innovative product.",
  },
];

const HomeSchedule = () => {
  return (
    <div className="w-full space-y-5">
      <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-t from-zinc-600 to-zinc-100 text-transparent bg-clip-text">
        Event Schedule
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {eventData.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
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
