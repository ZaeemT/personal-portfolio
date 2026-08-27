import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Education } from "@/components/Education";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Hero />
      <About />
      <Work />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
