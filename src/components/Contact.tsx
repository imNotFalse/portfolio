import { links } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-sm font-medium text-zinc-400 dark:text-zinc-500 tracking-widest uppercase mb-10">
          Contact
        </h2>
        <div className="max-w-md">
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            I&apos;m always open to interesting conversations and opportunities.
            Feel free to reach out.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${links.email}`}
              className="group flex items-center justify-between p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-rose-500 dark:hover:border-rose-700 transition-colors"
            >
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</span>
              <span className="text-sm text-zinc-400 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                {links.email} ↗
              </span>
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-rose-500 dark:hover:border-rose-700 transition-colors"
            >
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">GitHub</span>
              <span className="text-sm text-zinc-400 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                github.com ↗
              </span>
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-rose-500 dark:hover:border-rose-700 transition-colors"
            >
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">LinkedIn</span>
              <span className="text-sm text-zinc-400 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                linkedin.com ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
