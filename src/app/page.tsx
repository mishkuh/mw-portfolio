import { ThemeToggle } from "@/app/components/theme-toggle";
import { Hero } from "@/app/components/hero";
import { About } from "@/app/components/about";
import { Projects } from "@/app/components/projects";
import { Skills } from "@/app/components/skills";
import { Contact } from "@/app/components/contact";
import { Footer } from "@/app/components/footer";

export default function Page() {
  return (
    <div className="size-full min-h-screen">
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}