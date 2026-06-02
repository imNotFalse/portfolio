import FadeIn from "@/components/FadeIn";
import { bio, skills } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-zinc-100 dark:border-zinc-800 scroll-mt-16">
      <FadeIn>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-sm font-medium text-rose-600 dark:text-rose-400 tracking-widest uppercase mb-10">
          About
        </h2>
        <div className="grid sm:grid-cols-2 gap-12">
          <div>
            {bio.split("\n").map((line, i) => (
              <p key={i} className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 last:mb-0">
                {line}
              </p>
            ))}
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-4">Technologies</p>
            <ul className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-rose-500 flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </FadeIn>
    </section>
  );
}
