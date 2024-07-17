import Link from "next/link";
import BlurFade from "./magicui/blur-fade";
import ShimmerButton from "./magicui/shimmer-button";
import ShinyButton from "@/components/magicui/shiny-button";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FaLinkedin } from 'react-icons/fa';


import { WorkCard } from "./WorkCard";

import { exp1, exp2, exp3, linkedin, resume } from "@/public/content";

  

const BLUR_FADE_DELAY = 0.04;

export function Work() {

  return (
    <div className="mx-auto w-full max-w-2xl space-y-4">

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-3xl font-bold">Work Experience</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <WorkCard company={exp1.company} title={exp1.title} period={exp1.period} description={exp1.description} skills={exp1.skills}/>
            <WorkCard company={exp2.company} title={exp2.title} period={exp2.period} description={exp2.description} skills={exp2.skills}/>
            <WorkCard company={exp3.company} title={exp3.title} period={exp3.period} description={exp3.description} skills={exp3.skills}/>            
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
			<div className="flex flex-col content-center item-center md:flex-row lg:flex-row">

				<Link
					href={resume.link}
					target="_blank"
					>
					<ShimmerButton className="shadow-2xl" borderRadius="50px">
						<span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-md">
							View my Resume
						</span>
					</ShimmerButton>	
				</Link>
				<div className="text-xl self-center font-semibold mx-3">
					OR
				</div>
				<Link
					href={linkedin.link}
					target="_blank"
					>
					<ShimmerButton className="shadow-2xl" borderRadius="50px">
						<span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-md">
							View my LinkedIn profile
						</span>
					</ShimmerButton>	
				</Link>
			</div>

        </BlurFade>
    </div>
  );
}

