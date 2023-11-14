import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  IconBrandNextjs,
  IconBrandPython,
  IconBrandTailwind,
  IconBrandTelegram,
  IconBrandVercel,
} from "@tabler/icons-react";
import {
  ArrowRightIcon,
  ArrowTopRightIcon,
  ShadowNoneIcon,
} from "@radix-ui/react-icons";

import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export default function Projects() {
  return (
    <div
      id="projects"
      className="h-full w-full py-16 px-12 text-center md:min-h-screen md:px-6 md:py-24 md:text-left"
    >
      <h1 className={`${roboto_mono.className} text-4xl font-semibold mb-10`}>
        Projec<span className="text-amber-500">t</span>s
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ListItem
          name={"Speedforms"}
          description={
            "A smart and simple way to create engaging and effective surveys with the power of artificial intelligence."
          }
        />
        <ListItem
          name={"Wryte"}
          description={
            "A smart and simple way to create engaging and effective surveys with the power of artificial intelligence."
          }
        />
        <ListItem
          name={"Comic Client"}
          description={
            "A smart and simple way to create engaging and effective surveys with the power of artificial intelligence."
          }
        />
        <ListItem
          name={"Wallter"}
          description={
            "A smart and simple way to create engaging and effective surveys with the power of artificial intelligence."
          }
        />
        <ListItem
          name={"Portfolio"}
          description={
            "A smart and simple way to create engaging and effective surveys with the power of artificial intelligence."
          }
        />
        <ListItem
          name={"Pajer (Concept)"}
          description={
            "A smart and simple way to create engaging and effective surveys with the power of artificial intelligence."
          }
        />
        <ListItem
          name={"Movify"}
          description={
            "A smart and simple way to create engaging and effective surveys with the power of artificial intelligence."
          }
        />
        <div className="w-6/12 px-8 text-lg flex items-start font-semibold">
          <span className="flex items-center border-b border-amber-500 ">
            Others
            <ArrowRightIcon className="ml-2" />
          </span>
        </div>
      </div>
    </div>
  );
}

function ListItem({ name, description }) {
  return (
    <div className="border p-8 rounded-2xl w-full space-y-2 flex flex-col justify-start items-start">
      <div className="w-full space-y-3">
        <span className="cursor-pointer mb-1 flex items-center justify-start text-lg font-semibold underline underline-offset-4 decoration-amber-500">
          {name}
          <ArrowTopRightIcon />
        </span>
        <span className="font-light text-sm">{description}</span>
      </div>
      <div className="h-full w-full p-0 flex flex-wrap justify-start items-start">
        <Badge className="bg-foreground mr-1 mt-2">
          <IconBrandNextjs className="stroke-background h-4 w-4 mr-1" />
          <span>Nextjs</span>
        </Badge>
        <Badge className="bg-foreground mr-1 mt-2">
          <IconBrandPython className="stroke-background h-4 w-4 mr-1" />
          <span>Python</span>
        </Badge>
        <Badge className="bg-foreground mr-1 mt-2">
          <IconBrandVercel className="stroke-background h-4 w-4 mr-1" />
          <span>Vercel</span>
        </Badge>
        <Badge className="bg-foreground mr-1 mt-2">
          <IconBrandTelegram className="stroke-background h-4 w-4 mr-1" />
          <span>Telegram</span>
        </Badge>
      </div>
    </div>
  );
}

function PCard({ name, description, tools }) {
  return (
    <Card className="w-full md:w-[310px]">
      <CardHeader>
        <CardTitle className="w-full font-bold text-2xl md:text-3xl">
          {name}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <div className="rounded-full bg-foreground border-2 border-card-foreground p-1">
            <IconBrandPython className="stroke-background h-5 w-5" />
          </div>
          <div className="rounded-full bg-foreground border-2 border-card-foreground p-1">
            <IconBrandTelegram className="stroke-background h-5 w-5" />
          </div>
          <div className="rounded-full bg-foreground border-2 border-card-foreground p-1">
            <IconBrandVercel className="stroke-background h-5 w-5" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full font-semibold">
          Read More <ArrowTopRightIcon className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}