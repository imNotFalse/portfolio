import FadeIn from "@/components/FadeIn";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import { projects } from "@/lib/data";


export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 border-t border-zinc-100 dark:border-zinc-800 scroll-mt-16"
    >
      <FadeIn>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-sm font-medium text-rose-600 dark:text-rose-400 tracking-widest uppercase mb-10">
            Projects
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.repo ?? project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-rose-500 dark:hover:border-rose-500 hover:bg-rose-950/30 transition-colors flex flex-col"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}

            <CurrentlyBuilding />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
