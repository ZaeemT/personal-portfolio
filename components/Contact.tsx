import BlurFade from "./magicui/blur-fade";
import Link from "next/link";
import { linkedin, email, github } from "@/public/content";

const BLUR_FADE_DELAY = 0.04;

export function Contact() {
    return (
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 m-2 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just dm on{" "}
                <Link
                  href={linkedin.link}
                  target="_blank"                    
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on LinkedIn
                </Link>{" "}
                or shoot me {" "}
                <Link
                    href={'mailto:' + email.link}
                    target="_blank"                    
                    className="text-blue-500 hover:underline"
                >
                    an email on zaeemtauqir@hotmail.com
                </Link>{" "}
                I&apos;ll respond whenever I can.
              </p>
            </div>
          </BlurFade>
        </div>
    )
}