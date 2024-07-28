"use client"

import { useTheme } from "next-themes";
import {
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Markdown from "react-markdown";
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from "react-icons/tb";
import { Badge } from "./ui/badge";  
import { MagicCard } from "@/components/magicui/magic-card";
import Link from "next/link";

export function ProjectCard(props:
    {
        title: string;
        description: string;
        code_link: string;
		live_link: string;
    }) {
	const { theme } = useTheme();
	return (
		<div className="flex w-full flex-col gap-4 lg:h-[250px] lg:flex-row bg-background">
			<MagicCard
				className="flex flex-col border hover:shadow-lg transition-all duration-300 ease-out h-full"
				gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
			>	
				

				<CardHeader className="m-1 px-2">
					<CardTitle>{props.title}</CardTitle>
					<Markdown className="prose max-w-full text-pretty font-sans text-s text-muted-foreground dark:prose-invert">
			            {props.description}
					</Markdown>

				</CardHeader>
				<CardFooter className="mt-auto flex flex-col px-2 pb-2 inline-block group">
					<div className="flex flex-row flex-wrap items-start gap-1 m-1">
						{ (props.code_link != "#") && <Link
							href={props.code_link}
							target="_blank"
								>
							<Badge className="flex gap-2 px-2 py-1 text-[10px]">
								<FaGithub className="size-4" /> Source
							</Badge>
						</Link> }
						{ (props.live_link != "#") && <Link
							href={props.live_link}
							target="_blank"
								>
							<Badge className="flex gap-2 px-2 py-1 text-[10px]">
								<TbWorld className="size-4" /> Website
							</Badge>
						</Link> }
					</div>		


				</CardFooter>
					
			</MagicCard>
		</div>
	);
}
