
import {
  IconArrowRight,
  IconDownload,
  IconSparkles,
} from "@tabler/icons-react";

import { profile } from "@/lib/portfolio-content";
import { scrollToSection } from "./primitives";

const chips = [
  { label: "Generative AI", position: "top-6 -left-6", delay: "0s" },
  { label: "LLMs", position: "top-1/3 -right-6", delay: "1.5s" },
  { label: "NLP", position: "bottom-24 -left-5", delay: "3s" },
  { label: "Machine Learning", position: "bottom-8 -right-5", delay: "4.5s" },
];

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Violet background glow */}
      <div className="absolute inset-0 scale-90 rounded-full bg-violet-600/30 blur-3xl" />

      {/* Decorative rotating ring */}
      <div className="absolute -inset-5 animate-pf-spin-slow rounded-[3rem] border border-dashed border-violet-300/30" />

      {/* Profile photo */}
      <div className="animate-pf-float relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900 shadow-2xl shadow-violet-600/30">

        <img
          src="/images/Image.jpeg"
          alt="Sirivennela Akula"
          className="h-full w-full object-cover object-center"
        />

        {/* Bottom gradient overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/50 to-transparent" />
      </div>

      {/* Floating technology labels */}
      {chips.map((chip) => (
        <span
          key={chip.label}
          className={`animate-pf-float absolute ${chip.position} z-10 whitespace-nowrap rounded-full border border-white/10 bg-slate-900/90 px-3 py-2 text-xs text-violet-200 shadow-lg backdrop-blur-md`}
          style={{ animationDelay: chip.delay }}
        >
          {chip.label}
        </span>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-6xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

        {/* LEFT SIDE - Introduction */}
        <div>
          <p
            className="animate-pf-fade-up inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-200"
            style={{ animationDelay: "0s" }}
          >
            <IconSparkles size={16} />
            B.Tech CSE · GRIET, Hyderabad
          </p>

          <h1
            className="animate-pf-fade-up mt-6 text-5xl font-semibold tracking-tight text-white md:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            {profile.name}
          </h1>

          <p
            className="animate-pf-fade-up mt-4 bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-[length:200%_auto] bg-clip-text text-lg font-medium text-transparent animate-pf-shimmer md:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            {profile.headline}
          </p>

          <p
            className="animate-pf-fade-up mt-6 max-w-xl text-lg leading-relaxed text-slate-300"
            style={{ animationDelay: "0.3s" }}
          >
            {profile.intro}
          </p>

          <div
            className="animate-pf-fade-up mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-violet-600/30 transition hover:-translate-y-0.5 hover:bg-violet-400"
            >
              <IconDownload size={18} />
              Download Resume
            </button>

            <a
              href="#projects"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("projects");
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-white/10"
            >
              Explore My Projects
              <IconArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - Profile Photo */}
        <HeroVisual />

      </div>
    </section>
  );
}
