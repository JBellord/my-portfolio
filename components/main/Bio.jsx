import React from "react";
import { Button } from "../ui/button";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Separator } from "../ui/separator";
import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export default function Bio() {
  return (
    <div
      id="bio"
      className="w-full h-full px-12 py-18 space-x-4 flex items-start justify-end flex-col md:h-screen md:px-0"
    >
      <div className="space-y-4 rounded-2xl p-0 h-4/5 w-full flex flex-col items-center text-center justify-center md:w-1/2 md:p-6 md:text-left md:items-start">
        <span>
          Hey 👋, I'm <br />
        </span>
        <h1 className={`${roboto_mono.className} text-8xl font-bold`}>
          JI<span className="text-amber-500">0</span>.
        </h1>
        <span className="text-lg font-semibold text-amber-500 mb-6">
          Student & Web Developer
        </span>
        {/* <div className="space-y-1 text-sm w-full">
          <div className="flex items-start space-x-2">
            <span className="font-semibold w-3/12">Full name: </span>
            <span className="w-9/12 font-light">John I. O. Bello-Oro</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="font-semibold w-3/12">School: </span>
            <span className="w-9/12 font-light">De Montfort University</span>
          </div>
        </div> */}
        <span className="font-medium mt-6 mb-3">
          I'm a Nigerian web developer studying Mechatronics and Robotics
          Engineering at De Montfort University in Leicester. I'm passionate
          about coding, music, and books.
        </span>
        <span className="font-medium">
          Contact me if you've got some cool ideas 🤙📞!
        </span>
        <br />
        <Separator className="mt-4 mb-0" />
        <br />
        <div className="flex items-center space-x-3 text-foreground">
          <Button size="icon" className="rounded-full bg-amber-500">
            <GitHubLogoIcon className="h-5 w-5" />
          </Button>
          <Button size="icon" className="rounded-full bg-amber-500">
            <TwitterLogoIcon className="h-5 w-5" />
          </Button>
          <Button size="icon" className="rounded-full bg-amber-500">
            <LinkedInLogoIcon className="h-5 w-5" />
          </Button>
          <Button size="icon" className="rounded-full bg-amber-500">
            <EnvelopeClosedIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {/* <div className="h-4/5 w-1/2 rounded-2xl flex justify-end items-center">
            <div className="w-[380px] h-[380px] rounded-full bg-amber-500 flex items-center justify-center">
              <Image
                className="rounded-full border-4 border-background"
                src={"/profile.jpg"}
                width={370}
                height={370}
                objectFit="fill"
              />
            </div>
          </div> */}
    </div>
  );
}
