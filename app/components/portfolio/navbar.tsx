import { IconMenu2, IconX } from "@tabler/icons-react";
import { useEffect, useState, type MouseEvent } from "react";

import { navItems } from "@/lib/portfolio-content";

import { scrollToSection } from "./primitives";

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <a
          href="#home"
          onClick={handleClick("home")}
          className="text-lg font-semibold tracking-tight text-white"
        >
          SA<span className="text-violet-400">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={handleClick(id)}
                aria-current={active === id ? "true" : undefined}
                className={`rounded-full px-3 py-1.5 text-sm transition duration-200 ${
                  active === id
                    ? "bg-violet-500/20 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-lg border border-white/10 p-2 text-slate-200 lg:hidden"
        >
          {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-white/10 px-6 py-3 lg:hidden">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={handleClick(id)}
                className={`block rounded-lg px-3 py-2.5 text-sm transition ${
                  active === id
                    ? "bg-violet-500/20 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
