import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import {
  About,
  Achievements,
  Contact,
  Education,
  Experience,
  Projects,
  Skills,
} from "@/components/portfolio/sections";

export function meta() {
  return [
    { title: "Sirivennela Akula | AI/ML Enthusiast & Software Developer" },
    {
      name: "description",
      content:
        "Portfolio of Sirivennela Akula, Computer Science graduate building AI/ML and software solutions.",
    },
  ];
}

export default function HomeRoute() {
  return (
    <div className="relative min-h-full overflow-hidden bg-slate-950 text-slate-200 selection:bg-violet-500/30">
      <Navbar />
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
}
