"use client";

import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Bio from "@/components/main/Bio";
import Projects from "@/components/main/Projects";
import background from "../public/pattern.svg";
import Footer from "@/components/main/Footer";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { MoonIcon } from "@radix-ui/react-icons";
import Contact from "@/components/main/Contact";

export default function Home() {
  return (
    <main className="relative w-full h-full m-0 p-0 bg-background text-foreground">
      <Navbar />
      <Image
        alt="background"
        src={background}
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="relative h-full w-full p-0 m-0 backdrop-blur-0 text-foreground flex justify-center items-center">
        <div className="relative h-full w-11/12 mt-16 py-8 px-2 md:p-0 md:mt-0 md:w-9/12">
          <Bio />
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
}

function Navbar() {
  const { setTheme } = useTheme();

  return (
    <div className="bg-transparent z-10 fixed m-0 h-24 w-full px-0 py-2 flex justify-center items-center top-0 left-0">
      <div className="relative z-20 w-11/12 h-9/12 bg-background/70 backdrop-blur-sm flex items-center justify-between px-5 py-2 rounded-full border md:px-10 md:w-10/12">
        <span className="ml-2 font-bold text-3xl">
          ji<span className="text-amber-500">o</span>.
        </span>
        <div className="flex justify-start items-center h-full">
          <div className="hidden md:flex md:justify-evenly md:items-center md:space-x-6">
            <Button variant="ghost" className="font-semibold">
              <Link href={"#bio"}>Bio</Link>
            </Button>
            <Button variant="ghost" className="font-semibold">
              <Link href={"#projects"}>Projects</Link>
            </Button>
            <Button variant="ghost" className="font-semibold">
              <Link href={"#contact"}>Contact</Link>
            </Button>
          </div>
          <Separator orientation="vertical" className="m-6 hidden md:block" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
