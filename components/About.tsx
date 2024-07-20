import BlurFade from "./magicui/blur-fade";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export function About() {
    return (

        <section id="about">
            <div className="mx-auto w-full max-w-2xl space-y-4 px-4">
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                  <h2 className="text-3xl font-bold tracking-tighter">About</h2>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                  <div className="prose max-w-full text-pretty text-justify font-sans text-md text-muted-foreground dark:prose-invert">
                    My name is <span className="text-foreground">Muhammad Zaeem Tauqir</span>, I am a recent Computer Engineering graduate of Ghulam Ishaq Khan Institute (GIKI), with expertise in <span className="text-foreground">Software Development (Web/Mobile), DevOps and Artificial Intelligence</span>. Proven skills in designing and implementing robust solutions using a diverse set of technologies. Eager to contribute innovative ideas and technical proficiency to dynamic projects in the field of technology. Demonstrates strong leadership and communication skills through active collaboration with cross-functional teams.
                  </div>
                </BlurFade>
            </div>
        </section>
    )
}