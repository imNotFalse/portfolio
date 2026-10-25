"use client";

import { useState, useEffect } from "react";
import { name } from "@/lib/data";

const sections = ["about", "projects", "contact"];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const atBottom =
        window.innerHeight + scrollY >= document.body.scrollHeight - 50;

      if (atBottom) {
        setActive(sections[sections.length - 1]);
        return;
      }

      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 120 <= scrollY) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-clay-100/70 via-clay-50/40 dark:from-clay-950/40 dark:via-clay-900/20 to-transparent backdrop-blur-sm border-b border-clay-200/60 dark:border-clay-900/30">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-stone-800 text-clay-400 border border-stone-700">
            !false
          </span>
        </div>
        <div className="flex gap-8 text-sm">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`capitalize transition-colors ${
                active === section
                  ? "text-clay-500 dark:text-clay-400"
                  : "text-stone-600 dark:text-stone-400 hover:text-clay-600 dark:hover:text-clay-400"
              }`}
            >
              {section}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
