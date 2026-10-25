import Image from "next/image";
import { firstName, title } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div aria-hidden="true" className="dark:hidden pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full bg-clay-200/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-forest-100/70 blur-3xl" />
      </div>
      <span
        aria-hidden="true"
        className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[20rem] font-bold text-clay-700 dark:text-white opacity-[0.06] dark:opacity-[0.015] select-none pointer-events-none leading-none"
      >
        !false
      </span>
      <div className="relative max-w-4xl text-center md:text-left mx-auto px-6 py-24 w-full flex flex-col sm:flex-row items-center gap-12">
        <div className="flex-1 order-2 md:order-1">
          <p className="text-sm font-medium text-clay-600 dark:text-clay-400 mb-4 tracking-widest uppercase">
            {title}
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-6 tracking-tight">
            Hi, I&apos;m {firstName}.
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-xl mb-10 leading-relaxed">
            I build thoughtful software. Clean, reliable, and built to last.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-clay-600 hover:bg-clay-500 text-white shadow-md shadow-clay-900/20 dark:shadow-none rounded-lg font-medium transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-stone-300 dark:border-stone-700 bg-white/60 dark:bg-transparent text-stone-700 dark:text-stone-300 rounded-lg font-medium hover:border-clay-500 dark:hover:border-clay-500 hover:text-clay-600 dark:hover:text-clay-400 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 order-1 md:order-2">
          <div className="relative w-44 h-44 sm:w-52 sm:h-52">
            <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white/80 shadow-xl shadow-clay-900/20 dark:ring-2 dark:ring-clay-500/30 dark:shadow-none">
              <Image
                src="/headshot-eiffel.jpg"
                alt={`${firstName}'s headshot`}
                fill
                sizes="(max-width: 640px) 11rem, 13rem"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
