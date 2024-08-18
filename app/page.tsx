import HomeAbout from "@/components/HomeAbout";
import HomeDesc from "@/components/HomeDesc";
import HomeSchedule from "@/components/HomeSchedule";
import Speakers from "@/components/Speakers";
import RegisterSection from "@/components/RegisterSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center my-24 px-5 sm:px-12 space-y-24">
      <div className="hidden sm:block">
        <iframe
          width="600"
          height="400"
          src="https://www.youtube.com/embed/rrTtLze5Ydk?si=jJ8GyJXoyVV9HqfO"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="block sm:hidden">
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/rrTtLze5Ydk?si=jJ8GyJXoyVV9HqfO"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="max-w-screen-xl space-y-12">
        <HomeAbout />
        <HomeDesc />
      </div>
      <div className="max-w-screen-lg">
        <HomeSchedule />
      </div>
      <div className="max-w-screen-xl">
        <Speakers />
      </div>
      <div className="max-w-screen-lg">
        <RegisterSection />
      </div>
    </main>
  );
}
