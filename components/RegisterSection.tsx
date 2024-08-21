import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const RegisterSection = () => {
  return (
    <div className="w-full space-y-5">
      <div
        className="text-2xl sm:text-4xl font-bold bg-gradient-to-t from-zinc-600 to-zinc-100 text-transparent bg-clip-text"
        id="register"
      >
        Register for Competitions
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Card className="bg-foreground border-zinc-100/[0.3] text-background">
          <CardHeader className="mt-8 space-y-2.5">
            <CardTitle>Painting</CardTitle>
            <CardDescription className="font-semibold">
              Solo, School (class 8 and below) Event
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              The upcoming Painting Competition invites participants to explore
              the theme of &apos;Science Fiction on a Space Mission.&apos; The
              competition is open to students across various age groups, with
              categories for Nursery to 1, 2 to 5, and 6 to 8. All necessary
              papers will be provided for the creative journey. Get ready to
              launch your imagination into the cosmos and create your own
              visionary space mission!
            </p>
          </CardContent>
          <CardFooter>
            <Link href={"https://forms.gle/g5RaYsv8u7JCntsf8"} target="_blank">
              <button className="w-full px-4 py-2 bg-sky-600 rounded-md font-semibold transition hover:bg-sky-700">
                Register Now
              </button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="bg-foreground border-zinc-100/[0.3] text-background">
          <CardHeader className="mt-8 space-y-2.5">
            <CardTitle>Quiz</CardTitle>
            <CardDescription className="font-semibold">
              Team, School (class 9 - 12)/College Event
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              The quiz competition will be held separately for school and
              college students, with each team comprising two members. The theme
              will be <strong>Indian Space Mission & Space in General</strong>.
              This team-based event will test participants&apos; knowledge
              across various topics, offering a challenging and collaborative
              experience for all.
            </p>
          </CardContent>
          <CardFooter>
            <Link href={"https://forms.gle/jEqtUYMfi6YcExV27"} target="_blank">
              <button className="w-full px-4 py-2 bg-sky-600 rounded-md font-semibold transition hover:bg-sky-700">
                Register Now
              </button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="bg-foreground border-zinc-100/[0.3] text-background">
          <CardHeader className="mt-8 space-y-2.5">
            <CardTitle>Essay Writing</CardTitle>
            <CardDescription className="font-semibold">
              Solo, School Event
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              The essay writing competition will be a solo event open to both
              school and college students, with participants having the option
              to write in either Hindi or English. This format allows students
              to showcase their writing skills and express their ideas on
              various topics. The list of topics are: <br />
              <br />
              <ul className="font-semibold">
                <li>Future of Indian Space Program</li>
                <li> Origin and Fate of the Universe</li>
                <li> Beyond the known Universe</li>
                <li> Extraterrestrial Living Beings</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Link href={"https://forms.gle/ZCyiGJ8hpvHM1kND7"} target="_blank">
              <button className="w-full px-4 py-2 bg-sky-600 rounded-md font-semibold transition hover:bg-sky-700">
                Register Now
              </button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card className="bg-foreground border-zinc-100/[0.3] text-background">
          <CardHeader className="mt-8 space-y-2.5">
            <CardTitle>Udankhatola</CardTitle>
            <CardDescription className="font-semibold">
              Team Event, Only for students of IIT Mandi
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              On the occasion of National Space Day, STAC is organizing a rocket
              launching event for 2nd year and above. There will be a maximum of
              10 teams, which will be decided on a first-come first-serve basis.
              The team size will be of 3-4 students. The students will be making
              their rocket from scratch. The venue will be Hockey Ground, North
              Campus.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-foreground border-zinc-100/[0.3] text-background">
          <CardHeader className="mt-8 space-y-2.5">
            <CardTitle>Hackathon</CardTitle>
            <CardDescription className="font-semibold">
              Team, College Event
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Problem statement: <strong>Satellite Data Visualization</strong>.
              Develop a web or mobile app that visualizes real-time satellite
              data from ISRO. Integrate at least one type of dataset. Ensure a
              simple, user-friendly interface with basic map navigation. Include
              at least one basic data analysis feature, like trend analysis our
              data comparison. The app should update data in real-time.
            </p>
          </CardContent>
          <CardFooter>
            <Link href={"https://forms.gle/Bva5Ktn5ikd8oCn97"} target="_blank">
              <button className="w-full px-4 py-2 bg-sky-600 rounded-md font-semibold transition hover:bg-sky-700">
                Register Now
              </button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RegisterSection;
