import HomeAbout from "@/components/HomeAbout";

export default function Home() {
  return (
    <main className="flex flex-col items-center my-24 px-5 sm:px-12 space-y-24">
      <div className="max-w-screen-xl">
        <HomeAbout />
      </div>
      <div>hi</div>
    </main>
  );
}
