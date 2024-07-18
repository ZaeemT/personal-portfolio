"use client"

import { useTheme } from "next-themes";
import {
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Markdown from "react-markdown";
import { MagicCard } from "@/components/magicui/magic-card";

export function ProjectCard(props:
    {
        title: string;
        description: string;
        link: string;
    }) {
  const { theme } = useTheme();
  return (
    <div
      className={
        "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
      }
    >
        <MagicCard
            className="cursor-pointer flex-col shadow-2xl whitespace-nowrap"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
                <CardHeader>
                    <CardTitle>{props.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{props.description}</p>
                </CardContent>
        </MagicCard>
    </div>
  );
}
