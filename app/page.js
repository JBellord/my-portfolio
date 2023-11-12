"use client";

import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import {
  IconBrandNextjs,
  IconBrandPython,
  IconBrandTailwind,
  IconBrandTelegram,
  IconBrandVercel,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="relative w-full h-full m-0 p-0 bg-background text-foreground flex justify-center items-center">
      <Navbar />
      <div className="relative h-full w-2/3">
        <div
          id="bio"
          className="w-full h-screen border-b-2 py-18 space-x-4 flex items-center justify-center"
        >
          <div className="space-y-3 rounded-2xl p-6 h-4/5 w-1/2 flex flex-col items-start justify-center">
            <span>
              Hey 👋, my name is
              <br />
            </span>
            <h1 className="text-8xl font-bold">
              Jio<span className="text-amber-500">.</span>
            </h1>
            <span className="text-lg font-semibold text-amber-500 mb-6">
              Student & Web Developer
            </span>
            <div className="space-y-1 text-sm w-full">
              <div className="flex items-start space-x-2">
                <span className="font-semibold w-3/12">Full name: </span>
                <span className="w-9/12 font-light">John I. O. Bello-Oro</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-semibold w-3/12">School: </span>
                <span className="w-9/12 font-light">
                  De Montfort University
                </span>
              </div>
            </div>
            <span className="font-medium mt-6 mb-3">
              I'm a Nigerian web developer studying Mechatronics and Robotics
              Engineering at De Montfort University in Leicester. I'm passionate
              about coding, music, and food.
            </span>
            <span className="font-medium">
              Contact me if you've got some cool ideas 🤙📞!
            </span>
          </div>
          <div className="h-4/5 w-1/2 rounded-2xl flex justify-end items-center">
            <div className="w-[380px] h-[380px] rounded-full bg-amber-500 flex items-center justify-center">
              <Image
                className="rounded-full border-4 border-background"
                src={"/profile.jpg"}
                width={370}
                height={370}
                objectFit="fill"
              />
            </div>
          </div>
        </div>
        <div id="projects" className="h-screen w-full py-32 px-6">
          <h1 className="text-4xl font-semibold mb-10">
            Project<span className="text-amber-500">s</span>
          </h1>
          <div className="flex justify-start w-full items-center flex-wrap space-x-5">
            <Card className="w-full md:w-[310px]">
              <CardHeader>
                <CardTitle className="w-full font-bold text-2xl md:text-3xl">
                  Speedforms
                </CardTitle>
                <CardDescription>An AI survey creator</CardDescription>
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
                  Read More <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

function Navbar() {
  const [checked, setChecked] = useState(true);
  const { setTheme } = useTheme();

  const setThemeCheck = (checked) => {
    setChecked(checked);
    if (checked) {
      setTheme("light");
    } else setTheme("dark");
  };

  return (
    <div className="bg-transparent backdrop-blur-md z-10 fixed m-0 h-16 border-b w-full px-0 py-4 flex justify-center items-center top-0 left-0">
      <div className="relative z-20 w-2/3 h-full flex items-center justify-between">
        <span className="font-bold text-3xl">
          jio<span className="text-amber-500">.</span>
        </span>
        <div className="flex justify-start items-center h-full">
          <div className="flex justify-evenly items-center space-x-6">
            <div className="font-semibold">
              <Link href={"#bio"}>Bio</Link>
            </div>
            <div className="font-semibold">
              <Link href={"#projects"}>Projects</Link>
            </div>
            <div className="font-semibold">
              <Link href={"#contact"}>Contact</Link>
            </div>
          </div>
          <Separator orientation="vertical" className="m-6" />
          <Switch onCheckedChange={() => setThemeCheck(!checked)} />
          <span className="ml-4 font-semibold">
            {!checked ? "Dark" : "Light"}
          </span>
        </div>
      </div>
    </div>
  );
}
