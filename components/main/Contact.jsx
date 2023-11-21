import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Image from "next/image";
import snazzy from "../../public/snazzy.png";

export default function Contact() {
  return (
    <div
      id="contact"
      className="relative border rounded-2xl bg-background/75 backdrop-blur-sm h-full w-full my-16 p-6 md:h-auto md:p-20 md:my-24 md:text-left"
    >
      <h1 className={`text-2xl font-semibold mb-5 md:text-4xl`}>
        Conta<span className="text-amber-500">c</span>t
      </h1>
      <div className="relative overflow-hidden flex flex-col items-center justify-center md:space-x-4 md:flex-row md:items-start">
        <div className="h-full w-full flex items-center justify-center md:w-1/2">
          <Image
            src={snazzy}
            x
            alt="snazzy-map"
            sizes="100vw"
            style={{
              height: "auto",
              width: "100%",
            }}
          />
        </div>
        <div className="h-full w-full px-1 space-y-4 flex flex-col items-start md:px-4 md:w-1/2">
          <Input
            className="h-16 p-4 text-lg w-full m-0"
            type="text"
            placeholder="Name"
          />
          <Input
            className="h-16 p-4 text-lg w-full"
            type="email"
            placeholder="Email"
          />
          <Textarea
            className="relative p-4 h-96 text-lg w-full"
            placeholder="Type your message here"
          />
          <Button size="lg" className="font-semibold px-10 py-6 text-lg w-full">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
