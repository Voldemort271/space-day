import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface Props {
  name: string;
  img: string | StaticImport;
  children: ReactNode;
}

const SpeakersCard = ({ name, img, children }: Props) => {
  return (
    <Card className="bg-foreground border-zinc-100/[0.3] text-background">
      <CardHeader>
        <Image
          src={img}
          alt={"Profile pic"}
          className="rounded-md max-w-sm mx-auto"
        />
      </CardHeader>
      <CardContent className="mt-8 space-y-2.5">
        <CardTitle>{name}</CardTitle>
      </CardContent>
      <CardFooter>
        <p>{children}</p>
      </CardFooter>
    </Card>
  );
};

export default SpeakersCard;
