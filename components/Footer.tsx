import BlurFade from "./magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export function Footer() {
    return (
        <div className="mx-auto w-full pb-12 space-y-4 max-w-2xl text-sm prose text-pretty text-center font-sans text-muted-foreground dark:prose-invert">
            <BlurFade delay={BLUR_FADE_DELAY * 18}>
                <div className="pb-12">
                    <div>
                        Built with Next.js and TypeScript. Coded in VS Code.
                    </div>
                    <div>
                        Copyright Ⓒ Muhammad Zaeem Tauqir
                    </div>
                </div>
            </BlurFade>
        </div>
    )
}