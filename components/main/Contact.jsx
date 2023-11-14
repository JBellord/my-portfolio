import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Image from "next/image";

export default function Contact() {
  return (
    <div
      id="contact"
      className="relative border rounded-2xl bg-background/75 backdrop-blur-sm h-full w-full my-16 p-8 md:h-[85vh] md:p-20 md:my-24 md:text-left"
    >
      <h1 className={`text-2xl font-semibold mb-10 md:text-4xl`}>
        Conta<span className="text-amber-500">c</span>t
      </h1>
      <div className="relative overflow-hidden flex flex-col items-center justify-center space-y-10 md:space-x-4 md:flex-row">
        <div className="h-full w-full flex items-center justify-center md:w-1/2">
          <Image
            src={"/profile.jpg"}
            className="rounded-full border-8 border-amber-500"
            height={385}
            width={385}
          />
        </div>
        <div className="h-full w-full space-y-4 px-4 flex flex-col items-start md:w-1/2">
          <Input
            className="h-12 p-4 text-md w-full"
            type="text"
            placeholder="Name"
          />
          <Input
            className="h-12 p-4 text-md w-full"
            type="email"
            placeholder="Email"
          />
          <Textarea
            className="relative p-4 h-64 text-md w-full"
            placeholder="Type your message here"
          />
          <Button size="lg" className="font-semibold">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
