import BlurFade from "./magicui/blur-fade";

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
                    I am <span className="font-bold text-foreground">Muhammad Zaeem Tauqir</span>, a <em>Computer Engineering</em> graduate from <span className="font-semibold text-foreground">Ghulam Ishaq Khan Institute (GIKI)</span> and an experienced <span className="font-bold text-foreground">Full-Stack Engineer</span> with a proven track record in developing robust solutions. My technical expertise covers the full spectrum of <em>Software Development</em>, <em>DevOps</em>, and <em>Artificial Intelligence</em>, allowing me to deliver innovative and scalable products. A <span className="font-semibold text-foreground">Dean&apos;s Honors recipient</span> and recognized <span className="font-semibold text-foreground">top performer</span>, I bring dedicated leadership and active collaboration to every project, aiming to leverage cutting-edge technology for enhanced user experiences.
                  </div>
                </BlurFade>
            </div>
        </section>
    )
}