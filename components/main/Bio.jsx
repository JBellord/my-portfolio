import React from "react";
import { Button } from "../ui/button";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Image from "next/image";
import profile from "../../public/profile.jpg";

export default function Bio() {
  return (
    <div
      id="bio"
      className="border rounded-2xl bg-background/75 backdrop-blur-sm w-full h-full p-6 flex items-center justify-start flex-col-reverse md:flex-row md:border-none md:bg-transparent md:h-screen md:px-0"
    >
      <div className="backdrop-blur-sm space-y-4 rounded-2xl p-0 h-11/12 w-full flex flex-col items-center text-center justify-center md:w-1/2 md:text-left md:items-start md:border md:rounded-4xl md:bg-background/75 md:p-20 md:backdrop-blur-sm">
        <span>
          Hey 👋, I'm <br />
        </span>
        <h1 className={`text-8xl font-bold`}>
          ji<span className="text-amber-500">o</span>.
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
          <Link href={"https://github.com/JBellord"}>
            <Button size="icon" className="rounded-full bg-amber-500">
              <GitHubLogoIcon className="h-5 w-5" />
            </Button>
          </Link>
          <Link href={"https://twitter.com/JBelloOro"}>
            <Button size="icon" className="rounded-full bg-amber-500">
              <TwitterLogoIcon className="h-5 w-5" />
            </Button>
          </Link>
          <Link href={"https://www.linkedin.com/in/john-bello-oro-9545311b4"}>
            <Button size="icon" className="rounded-full bg-amber-500">
              <LinkedInLogoIcon className="h-5 w-5" />
            </Button>
          </Link>
          <Link href={"mailto:ifeoluwatomijohn@gmail.com"}>
            <Button size="icon" className="rounded-full bg-amber-500">
              <EnvelopeClosedIcon className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-0 m-0 h-full w-full flex items-center justify-center flex-col mb-10 md:w-1/2 md:mb-0">
        <div className="w-64 h-64 md:w-96 md:h-96">
          <Image
            src={profile}
            alt="profile"
            className="rounded-full border-8 border-amber-500 p-0 m-0"
            placeholder="blur"
            sizes={"100vw"}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}
