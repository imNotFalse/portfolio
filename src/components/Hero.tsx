import Image from "next/image";
import { firstName, title } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <span
        aria-hidden="true"
        className="absolute -left-8 top-1/2 -translate-y-1/2 text-[20rem] font-bold text-white opacity-[0.015] select-none pointer-events-none leading-none"
      >
        !false
      </span>
      <div className="max-w-4xl mx-auto px-6 py-24 w-full flex flex-col sm:flex-row items-center gap-12">
        <div className="flex-1">
          <p className="text-sm font-medium text-rose-600 dark:text-rose-400 mb-4 tracking-widest uppercase">
            {title}
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
            Hi, I&apos;m {firstName}.
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-xl mb-10 leading-relaxed">
            I build thoughtful software — clean, reliable, and built to last.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-medium transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg font-medium hover:border-rose-500 dark:hover:border-rose-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="relative w-44 h-44 sm:w-52 sm:h-52">
            <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-rose-500/30">
              <Image
                src="/headshot.jpeg"
                alt={`${firstName}'s headshot`}
                fill
                sizes="(max-width: 640px) 11rem, 13rem"
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="group/stevie absolute bottom-0 left-0 w-1/4 h-1/2 cursor-default">
              <div className="absolute bottom-full left-0 mb-2 px-3 py-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-xs font-medium whitespace-nowrap opacity-0 group-hover/stevie:opacity-100 transition-opacity duration-200 pointer-events-none">
                Hi Stevie ❤️
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
