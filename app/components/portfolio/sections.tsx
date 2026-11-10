import {
  IconArrowRight,
  IconBriefcase,
  IconCertificate,
  IconCheck,
  IconChevronDown,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSchool,
  IconTrophy,
} from "@tabler/icons-react";
import { useState } from "react";

import {
  achievement,
  aboutParagraphs,
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
  stats,
  type Project,
} from "@/lib/portfolio-content";

import { Reveal } from "./primitives";

const sectionClass = "mx-auto max-w-6xl scroll-mt-24 px-6 py-24";
const glass = "rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl";
const glassHover =
  "transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-violet-600/10";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-14">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about" className={sectionClass}>
      <SectionHeading eyebrow="About Me" title="Engineering intelligent software" />
      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="space-y-5 text-lg leading-relaxed text-slate-300 lg:col-span-3">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100}>
              <div className={`${glass} ${glassHover} h-full p-6`}>
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className={sectionClass}>
      <SectionHeading eyebrow="Technical Skills" title="Tools and technologies I work with" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.title} delay={index * 80}>
              <div className={`${glass} ${glassHover} h-full p-6`}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-semibold text-white">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const Icon = project.icon;

  return (
    <div className={`${glass} overflow-hidden`}>
      <div className="grid lg:grid-cols-5">
        <div className="relative flex min-h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-violet-600/40 via-indigo-900/50 to-slate-950 lg:col-span-2">
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="animate-pf-float relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/15 bg-white/10 text-violet-100 shadow-2xl backdrop-blur-xl">
            <Icon size={44} />
          </div>
        </div>

        <div className="p-8 lg:col-span-3">
          <p className="text-sm text-violet-400">{project.subtitle}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
          <p className="mt-4 leading-relaxed text-slate-300">{project.summary}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-200"
              >
                {tag}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition hover:text-violet-200"
          >
            {open ? "Hide project details" : "View project details"}
            <IconChevronDown
              size={16}
              className={`transition duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <div className="mt-6 grid gap-6 border-t border-white/10 pt-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
                  Key Features
                </h4>
                <ul className="space-y-2.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm text-slate-300">
                      <IconCheck size={16} className="mt-0.5 shrink-0 text-violet-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
                  Technical Highlights
                </h4>
                <ul className="space-y-2.5">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2.5 text-sm text-slate-300">
                      <IconArrowRight size={16} className="mt-0.5 shrink-0 text-violet-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className={sectionClass}>
      <SectionHeading eyebrow="Featured Projects" title="Applied AI and software engineering" />
      <div className="space-y-8">
        {projects.map((project) => (
          <Reveal key={project.id}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className={sectionClass}>
      <SectionHeading eyebrow="Experience" title="Professional journey" />
      <Reveal>
        <div className="relative border-l border-violet-400/30 pl-8 md:pl-12">
          <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full bg-violet-400 shadow-lg shadow-violet-500/60" />
          <div className={`${glass} ${glassHover} p-6 md:p-8`}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                  <IconBriefcase size={22} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                  <p className="text-violet-300">{experience.organization}</p>
                </div>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-slate-300">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <IconCheck size={18} className="mt-1 shrink-0 text-violet-400" />
                  {bullet}
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className={sectionClass}>
      <SectionHeading eyebrow="Education" title="Academic background" />
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((item, index) => (
          <Reveal
            key={item.degree}
            delay={index * 100}
            className={item.highlight ? "md:col-span-2" : ""}
          >
            <div
              className={`${glassHover} h-full rounded-2xl p-6 md:p-8 ${
                item.highlight
                  ? "border border-violet-400/40 bg-gradient-to-br from-violet-600/25 via-white/[0.04] to-slate-950"
                  : glass
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                  <IconSchool size={22} />
                </span>
                <div>
                  <h3
                    className={`font-semibold text-white ${
                      item.highlight ? "text-2xl" : "text-lg"
                    }`}
                  >
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-slate-300">{item.institution}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                    <span className="text-slate-400">{item.period}</span>
                    <span className="rounded-full bg-violet-500/20 px-3 py-0.5 text-violet-200">
                      {item.score}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className={sectionClass}>
      <SectionHeading eyebrow="Achievements" title="Recognition and certifications" />
      <div className="space-y-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-amber-300/20 bg-gradient-to-br from-amber-400/15 via-violet-500/10 to-slate-950 p-8 md:p-12">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-400/15 blur-3xl" />
            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center">
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-amber-300/30 bg-amber-300/10 text-amber-300 shadow-xl shadow-amber-400/20">
                <IconTrophy size={40} />
              </span>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
                  {achievement.place}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                  {achievement.title}
                </h3>
                <p className="mt-2 text-slate-300">{achievement.detail}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <Reveal key={certification} delay={index * 100}>
              <div className={`${glass} ${glassHover} flex h-full items-center gap-4 p-6`}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                  <IconCertificate size={22} />
                </span>
                <p className="font-medium text-slate-100">{certification}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className={sectionClass}>
      <SectionHeading eyebrow="Contact" title="Let's connect" />
      <Reveal>
        <div className={`${glass} p-8 text-center md:p-12`}>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
            Thank you for visiting. If you would like to discuss AI, machine learning or
            software development, I would be glad to hear from you.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-violet-600/30 transition hover:-translate-y-0.5 hover:bg-violet-400"
          >
            <IconMail size={18} />
            Email Me
          </a>

          <ul className="mt-10 grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
            <li className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <IconMapPin size={20} className="text-violet-300" />
              {profile.location}
            </li>
            <li className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <IconMail size={20} className="text-violet-300" />
              <a href={`mailto:${profile.email}`} className="break-all hover:text-white">
                {profile.email}
              </a>
            </li>
            <li className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <IconPhone size={20} className="text-violet-300" />
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {profile.phone}
              </a>
            </li>
          </ul>
        </div>
      </Reveal>

      <footer className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </section>
  );
}
