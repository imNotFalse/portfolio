"use client";

import { name } from "@/lib/data";

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-rose-950/40 via-rose-900/20 to-transparent backdrop-blur-sm border-b border-rose-900/30">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-zinc-900 dark:text-zinc-100">{name}</span>
        <div className="flex gap-8 text-sm text-zinc-500 dark:text-zinc-400">
          <a href="#about" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
