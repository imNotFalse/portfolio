import FadeIn from "@/components/FadeIn";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import { projects } from "@/lib/data";


export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-sand-100 dark:bg-transparent border-t border-stone-200/70 dark:border-stone-800 scroll-mt-16"
    >
      <FadeIn>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-sm font-medium text-clay-600 dark:text-clay-400 tracking-widest uppercase mb-10">
            Projects
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.repo ?? project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl border border-stone-200 dark:border-stone-800 bg-white/70 dark:bg-transparent shadow-sm shadow-stone-900/5 dark:shadow-none hover:border-clay-500 dark:hover:border-clay-500 hover:bg-clay-50 dark:hover:bg-clay-950/30 transition-colors flex flex-col"
              >
                <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-base text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-clay-100/70 dark:bg-stone-800 text-clay-800 dark:text-stone-400"
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
