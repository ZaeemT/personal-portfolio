import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Hero />
      <About />
    </main>
  );
}
