import BlurFade from "./magicui/blur-fade";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/public/content";

const BLUR_FADE_DELAY = 0.04;

export function Projects() {
    return (
        <div className="mx-auto w-full max-w-2xl space-y-4">
        
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 m-2 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter py-3 sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground pb-3 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              </BlurFade>
            ))}
          </div>
        </div>
    );
}