"use client"

import { useTheme } from "next-themes";
import {
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
  } from "@/components/ui/tooltip"
  
import { MagicCard } from "@/components/magicui/magic-card";
import Link from "next/link";

export function ProjectCard(props:
    {
        title: string;
        description: string;
        link: string;
    }) {
  const { theme } = useTheme();
  return (
    <div className="flex w-full flex-col gap-4 lg:h-[250px] lg:flex-row bg-background">
		<TooltipProvider>
			<MagicCard
				className="cursor-pointer flex-col shadow-2xl"
				gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
			>	
				<Tooltip>
					<TooltipTrigger asChild>

    	        		<Link href={props.link} target="_blank">
						    <CardHeader>
    	        		        <CardTitle>{props.title}</CardTitle>
    	        		    </CardHeader>
    	        		    <CardContent>
    	        		        <p>{props.description}</p>
    	        		    </CardContent>
							<CardFooter>
								
							</CardFooter>
						</Link>
					</TooltipTrigger>
					<TooltipContent>
						Link to the project
					</TooltipContent>
				</Tooltip>
        	</MagicCard>
		</TooltipProvider>
    </div>
  );
}
