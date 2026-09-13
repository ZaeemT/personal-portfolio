"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BlurFade from "./magicui/blur-fade";
import ShimmerButton from "./magicui/shimmer-button";
import { FaFilePdf, FaLinkedinIn } from "react-icons/fa";
import { ChevronDown, ChevronRight } from "lucide-react";
import { exp, linkedin, resume } from "@/public/content";

const BLUR_FADE_DELAY = 0.04;

function LogoImage({ src, alt }: { src: any; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border ring-offset-2 ring-offset-background bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow bg-white ring-2 ring-border ring-offset-2 ring-offset-background overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export function Work() {
  return (
    <div className="mx-auto w-full max-w-2xl space-y-6 pt-8 px-4">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-3xl font-bold tracking-tighter">Work Experience</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Accordion type="single" collapsible className="grid gap-6 my-8">
          {exp.map((work) => (
            <AccordionItem
              key={work.company}
              value={work.company}
              className="w-full border-b-0 grid gap-2"
            >
              <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
                <div className="flex items-center gap-x-3 justify-between w-full text-left">
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    <LogoImage src={work.logoUrl} alt={work.company} />
                    <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {work.company}
                        <span className="relative inline-flex items-center w-3.5 h-3.5">
                          <ChevronRight
                            className={cn(
                              "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                              "translate-x-0 opacity-0",
                              "group-hover:translate-x-1 group-hover:opacity-100",
                              "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0",
                            )}
                          />
                          <ChevronDown
                            className={cn(
                              "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                              "opacity-0 rotate-0",
                              "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180",
                            )}
                          />
                        </span>
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {work.title}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>{work.period}</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-0 ml-11 md:ml-[3.25rem] text-xs sm:text-sm text-muted-foreground">
                <ul className="list-disc space-y-2 mx-3">
                  {work.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="inline-block group my-3">
                  {work.skills.map((label, i) => {
                    return (
                      <Badge variant="secondary" key={i} className="m-1">
                        {label}
                      </Badge>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <div className="flex flex-col content-center item-center md:flex-row lg:flex-row">
          <Link href={resume.link} target="_blank">
            <ShimmerButton className="shadow-2xl" borderRadius="50px">
              <FaFilePdf className="size-3 text-white mr-2" />
              <span className="whitespace-pre-wrap text-center text-xs font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-md">
                View my Resume
              </span>
            </ShimmerButton>
          </Link>
          <div className="text-sm self-center font-semibold mx-3">OR</div>
          <Link href={linkedin.link} target="_blank">
            <ShimmerButton>
              <FaLinkedinIn className="size-3 text-white mr-2" />
              <span className="whitespace-pre-wrap text-center text-xs font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-md">
                View my LinkedIn profile
              </span>
            </ShimmerButton>
          </Link>
        </div>
      </BlurFade>
    </div>
  );
}
