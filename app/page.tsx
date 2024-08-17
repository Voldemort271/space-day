import HomeAbout from "@/components/HomeAbout";
import HomeDesc from "@/components/HomeDesc";
import HomeSchedule from "@/components/HomeSchedule";
import Speakers from "@/components/Speakers";

export default function Home() {
  return (
    <main className="flex flex-col items-center my-24 px-5 sm:px-12 space-y-24">
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
    </main>
  );
}
