"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Hero = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  const BLUR_FADE_DELAY = 0.04;

  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-10 pb-5 px-4">
        <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
          <div className="gap-2 flex flex-col order-2 md:order-1">
            <BlurFade
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
              yOffset={8}
            >
              <span className="pointer-events-none text-6xl font-semibold tracking-tighter">
                Hi, I&apos;m Zaeem
              </span>
            </BlurFade>

            <BlurFade
              className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
              delay={BLUR_FADE_DELAY}
            >
              <p>
                I&apos;m a software engineer with a passion for creating innovative solutions.
              </p>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
            <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
              <AvatarImage alt={"zaeem"} src={"/avatar.JPG"} className="object-cover" />
              <AvatarFallback>{"ZT"}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};
