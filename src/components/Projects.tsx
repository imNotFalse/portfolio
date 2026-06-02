import FadeIn from "@/components/FadeIn";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-zinc-100 dark:border-zinc-800">
      <FadeIn>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-sm font-medium text-rose-600 dark:text-rose-400 tracking-widest uppercase mb-10">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{project.title}</h3>
                <div className="flex gap-3 ml-4">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                    >
                      Repo ↗
                    </a>
                  )}
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </FadeIn>
    </section>
  );
}
