import { Hero } from "@/components/Hero";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
        <ModeToggle />
    </main>
  );
}
