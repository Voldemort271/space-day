import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  title: string;
  date: string;
  time: string;
  children: ReactNode;
}

const EventCard = ({ title, date, time, children }: Props) => {
  return (
    <Card className="bg-foreground border-zinc-100/[0.3] text-background">
      <CardContent className="mt-8 space-y-2.5">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="font-semibold">{`${time}, ${date}`}</CardDescription>
      </CardContent>
      <CardFooter>
        <p>{children}</p>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
