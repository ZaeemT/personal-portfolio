import React from "react";
import Link from "next/link";


import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dock, DockIcon } from "@/components/magicui/dock";

import { github, email, linkedin } from "@/public/content";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { ModeToggle } from "./mode-toggle";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";

export function Navbar() {
  return (
    <div className="fixed inset-x-0 bottom-8 z-30 mx-auto mb-5 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <TooltipProvider>

        <Dock direction="middle">

            <DockIcon>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href={linkedin.link}
                            target="_blank"
                            className={cn(
                                buttonVariants({ variant: "ghost", size: "icon" }),
                                "size-12 rounded-full",
                                )}
                                >
                            <FaLinkedin className="size-6" />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>LinkedIn</p>
                    </TooltipContent>
                </Tooltip>
            </DockIcon>

            <DockIcon>
                <Tooltip>
                    <TooltipTrigger>
                        <Link
                            href={github.link}
                            target="_blank"
                            className={cn(
                            buttonVariants({ variant: "ghost", size: "icon" }),
                            "size-12 rounded-full",
                            )}
                        >
                            <FaGithub className="size-6" />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Github</p>
                    </TooltipContent>
                </Tooltip>

            </DockIcon>

            <DockIcon>
                <Tooltip>
                    <TooltipTrigger>
                        <Link
                            href={'mailto:' + email.link}
                            target="_blank"
                            className={cn(
                            buttonVariants({ variant: "ghost", size: "icon" }),
                            "size-12 rounded-full",
                            )}
                        >
                            <FaEnvelope className="size-6" />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Email</p>
                    </TooltipContent>
                </Tooltip>

            </DockIcon>

            <Separator orientation="vertical" className="h-full py-2" />
                    
            <DockIcon>
                <ModeToggle />
            </DockIcon>
                    
        </Dock>
      </TooltipProvider>

    </div>
  );
}
