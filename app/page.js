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
      <div className="relative h-full w-full p-0 m-0 backdrop-blur-sm text-foreground flex justify-center items-center">
        <div className="relative h-full w-full mt-16 py-8 md:p-0 md:mt-0 md:w-8/12">
          <Bio />
          <Projects />
        </div>
      </div>
      <Footer />
    </main>
  );
}

function Navbar() {
  const { setTheme } = useTheme();

  return (
    <div className="bg-transparent z-10 fixed m-0 h-16 w-full px-0 py-4 flex justify-center items-center top-0 left-0">
      <div className="relative z-20 w-full h-full flex items-center justify-between md:w-10/12">
        <span className=" font-bold text-3xl">
          ji<span className="text-amber-500">o</span>.
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
