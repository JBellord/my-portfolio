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
  IconApi,
  IconBrandCss3,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandNextjs,
  IconBrandOpenai,
  IconBrandPython,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTelegram,
  IconBrandVercel,
  IconSlashes,
} from "@tabler/icons-react";
import {
  ArrowRightIcon,
  ArrowTopRightIcon,
  ShadowNoneIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const stack = {
  python: (
    <Badge className="bg-foreground mr-1 mt-2">
      <IconBrandPython className="stroke-background h-4 w-4 mr-1" />
      <span>Python</span>
    </Badge>
  ),
  telegram: (
    <Badge className="bg-foreground mr-1 mt-2">
      <IconBrandTelegram className="stroke-background h-4 w-4 mr-1" />
      <span>Telegram</span>
    </Badge>
  ),
  nextjs: (
    <Badge className="bg-foreground mr-1 mt-2">
      <IconBrandNextjs className="stroke-background h-4 w-4 mr-1" />
      <span>NextJS</span>
    </Badge>
  ),
  javascript: (
    <Badge className="bg-foreground mr-1 mt-2">
      <IconBrandJavascript className="stroke-background h-4 w-4 mr-1" />
      <span>JavaScript</span>
    </Badge>
  ),
  openai: (
    <Badge className="bg-foreground mr-1 mt-2">
      <IconBrandOpenai className="stroke-background h-4 w-4 mr-1" />
      <span>OpenAI</span>
    </Badge>
  ),
  tailwind: (
    <Badge className="bg-foreground mr-1 mt-2">
      <IconBrandTailwind className="stroke-background h-4 w-4 mr-1" />
      <span>Tailwind</span>
    </Badge>
  ),
  vercel: (
    <Badge className="bg-foreground mr-1 mt-2">
      <IconBrandVercel className="stroke-background h-4 w-4 mr-1" />
      <span>Vercel</span>
    </Badge>
  ),
  github: (
    <Badge className="bg-foreground mr-1 mt-2">
      <IconBrandGithub className="stroke-background h-4 w-4 mr-1" />
      <span>Github</span>
    </Badge>
  ),
  shadcn: (
    <Badge className="bg-foreground mr-1 mt-2">
      <IconSlashes className="stroke-background h-4 w-4 mr-1" />
      <span>shadcn-ui</span>
    </Badge>
  ),
  mantine: (
    <Badge className="bg-foreground mr-1 mt-2">
      <IconBrandMantine className="stroke-background h-4 w-4 mr-1" />
      <span>Mantine</span>
    </Badge>
  ),
  css: (
    <Badge className="bg-foreground mr-1 mt-2">
      <IconBrandCss3 className="stroke-background h-4 w-4 mr-1" />
      <span>CSS</span>
    </Badge>
  ),
  react: (
    <Badge className="bg-foreground mr-1 mt-2">
      <IconBrandReact className="stroke-background h-4 w-4 mr-1" />
      <span>React</span>
    </Badge>
  ),
  api: (
    <Badge className="bg-foreground mr-1 mt-2">
      <IconApi className="stroke-background h-4 w-4 mr-1" />
      <span>APIs</span>
    </Badge>
  ),
};

export default function Projects() {
  return (
    <div
      id="projects"
      className="relative border rounded-2xl bg-background/75 backdrop-blur-sm h-full w-full my-16 p-6 md:min-h-screen md:p-20 md:my-24 md:text-left"
    >
      <h1 className={`text-2xl font-semibold mb-5 md:text-4xl`}>
        Projec<span className="text-amber-500">t</span>s
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ListItem
          name={"Speedforms"}
          link={"https://github.com/JBellord/Speedforms"}
          description={
            "A smart and simple way to create engaging and effective surveys with the power of artificial intelligence."
          }
          tools={[
            stack.javascript,
            stack.nextjs,
            stack.openai,
            stack.tailwind,
            stack.api,
          ]}
        />
        <ListItem
          name={"Wryte"}
          link={"https://wryte.onrender.com/editor"}
          description={
            "A smart and simple way to create engaging and effective surveys with the power of artificial intelligence."
          }
          tools={[
            stack.javascript,
            stack.nextjs,
            stack.openai,
            stack.tailwind,
            stack.mantine,
            stack.api,
          ]}
        />
        <ListItem
          name={"Comic Client"}
          link={"https://github.com/JBellord/Comic-Client"}
          description={
            "A smart and simple way to create engaging and effective surveys with the power of artificial intelligence."
          }
          tools={[stack.python, stack.github]}
        />
        <ListItem
          name={"Wallter"}
          link={"https://github.com/JBellord/Telegram-Bot"}
          description={
            "A smart and simple way to create engaging and effective surveys with the power of artificial intelligence."
          }
          tools={[stack.python, stack.telegram, stack.openai, stack.api]}
        />
        <ListItem
          name={"Portfolio"}
          link={"https://jiob.xyz"}
          description={
            "A smart and simple way to create engaging and effective surveys with the power of artificial intelligence."
          }
          tools={[stack.javascript, stack.nextjs, stack.tailwind, stack.shadcn]}
        />
        <ListItem
          name={"Pajer (Concept)"}
          link={"https://pajer.vercel.app"}
          description={
            "A smart and simple way to create engaging and effective surveys with the power of artificial intelligence."
          }
          tools={[stack.nextjs, stack.vercel, stack.javascript, stack.css]}
        />
        <ListItem
          name={"Movify"}
          link={"https://movify-app.vercel.app"}
          description={
            "A smart and simple way to create engaging and effective surveys with the power of artificial intelligence."
          }
          tools={[
            stack.react,
            stack.javascript,
            stack.css,
            stack.vercel,
            stack.api,
          ]}
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

function ListItem({ name, description, tools, link }) {
  return (
    <div className="border p-8 rounded-2xl w-full space-y-2 flex flex-col justify-start items-start">
      <div className="w-full space-y-3">
        <Link href={link}>
          <span className="cursor-pointer mb-1 flex items-center justify-start text-lg font-semibold underline underline-offset-4 decoration-amber-500">
            {name}
            <ArrowTopRightIcon />
          </span>
        </Link>
        <span className="text-left font-light text-sm">{description}</span>
      </div>
      <div className="h-full w-full p-0 flex flex-wrap justify-start items-start">
        {tools?.map((e, i) => e)}
      </div>
    </div>
  );
}
