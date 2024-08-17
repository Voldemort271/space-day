import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RegisterSection = () => {
  return (
    <div className="w-full space-y-5">
      <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-t from-zinc-600 to-zinc-100 text-transparent bg-clip-text">
        Register for Competitions
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Card className="bg-foreground border-zinc-100/[0.3] text-background">
          <CardHeader className="mt-8 space-y-2.5">
            <CardTitle>Contest 1</CardTitle>
            <CardDescription className="font-semibold">
              Solo, School Event
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis dolores eius fugiat magnam minus, nesciunt rerum
              tenetur. Necessitatibus possimus praesentium quasi. A expedita
              fugiat incidunt laboriosam, nesciunt quidem vel voluptatum!
            </p>
          </CardContent>
          <CardFooter>
            <button className="w-full px-4 py-2 bg-sky-600 rounded-md font-semibold">
              Register Now
            </button>
          </CardFooter>
        </Card>
        <Card className="bg-foreground border-zinc-100/[0.3] text-background">
          <CardHeader className="mt-8 space-y-2.5">
            <CardTitle>Contest 1</CardTitle>
            <CardDescription className="font-semibold">
              Solo, School Event
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis dolores eius fugiat magnam minus, nesciunt rerum
              tenetur. Necessitatibus possimus praesentium quasi. A expedita
              fugiat incidunt laboriosam, nesciunt quidem vel voluptatum!
            </p>
          </CardContent>
          <CardFooter>
            <button className="w-full px-4 py-2 bg-sky-600 rounded-md font-semibold">
              Register Now
            </button>
          </CardFooter>
        </Card>
        <Card className="bg-foreground border-zinc-100/[0.3] text-background">
          <CardHeader className="mt-8 space-y-2.5">
            <CardTitle>Contest 1</CardTitle>
            <CardDescription className="font-semibold">
              Solo, School Event
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis dolores eius fugiat magnam minus, nesciunt rerum
              tenetur. Necessitatibus possimus praesentium quasi. A expedita
              fugiat incidunt laboriosam, nesciunt quidem vel voluptatum!
            </p>
          </CardContent>
          <CardFooter>
            <button className="w-full px-4 py-2 bg-sky-600 rounded-md font-semibold">
              Register Now
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RegisterSection;
