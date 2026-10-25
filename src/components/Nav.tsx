"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { name } from "@/lib/data";

const sections = ["about", "projects", "contact"];

export default function Nav() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const pendingScroll = useRef<string | null>(null);

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

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const linkClass = (section: string) =>
    `capitalize transition-colors ${
      active === section
        ? "text-clay-500 dark:text-clay-400"
        : "text-stone-600 dark:text-stone-400 hover:text-clay-600 dark:hover:text-clay-400"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-clay-100/70 via-clay-50/40 dark:from-clay-950/40 dark:via-clay-900/20 to-transparent backdrop-blur-sm border-b border-clay-200/60 dark:border-clay-900/30">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-stone-800 text-clay-400 border border-stone-700">
            !false
          </span>
        </div>
        <div className="hidden sm:flex gap-8 text-sm">
          {sections.map((section) => (
            <a key={section} href={`#${section}`} className={linkClass(section)}>
              {section}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="sm:hidden -mr-2 p-2 text-stone-700 dark:text-stone-300 hover:text-clay-600 dark:hover:text-clay-400 transition-colors"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence
        onExitComplete={() => {
          const id = pendingScroll.current;
          pendingScroll.current = null;
          if (!id) return;
          history.pushState(null, "", `#${id}`);
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="sm:hidden overflow-hidden bg-background/95 border-t border-clay-200/60 dark:border-clay-900/30"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    // The close animation interrupts scrolling, so scroll
                    // once the menu has finished closing.
                    e.preventDefault();
                    pendingScroll.current = section;
                    setMenuOpen(false);
                  }}
                  className={`py-3 text-lg ${linkClass(section)}`}
                >
                  {section}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
