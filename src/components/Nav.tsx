"use client";

import { useState, useEffect } from "react";
import { name } from "@/lib/data";

const sections = ["about", "projects", "contact"];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-rose-950/40 via-rose-900/20 to-transparent backdrop-blur-sm border-b border-rose-900/30">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
          {name}
        </span>
        <div className="flex gap-8 text-sm">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`capitalize transition-colors ${
                active === section
                  ? "text-rose-500 dark:text-rose-400"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400"
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
