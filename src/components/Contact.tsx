import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { links } from "@/lib/data";

const contacts = [
  {
    label: "Email",
    handle: links.email.handle,
    href: links.email.url,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    handle: links.linkedin.handle,
    href: links.linkedin.url,
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    handle: links.github.handle,
    href: links.github.url,
    icon: FaGithub,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 border-t border-zinc-100 dark:border-zinc-800 scroll-mt-16"
    >
      <FadeIn>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-sm font-medium text-rose-600 dark:text-rose-400 tracking-widest uppercase mb-10">
          Contact
        </h2>
        <pre className="text-xs md:text-base font-mono md:text-sm mb-10 max-w-md leading-relaxed overflow-x-scroll">
          <span className="text-zinc-600">{"// status:         "}</span>
          <span className="text-rose-400">{"open"}</span>{"\n"}
          <span className="text-zinc-600">{"// available_for:  "}</span>
          <span className="text-zinc-400">{"new builds, collabs, hellos"}</span>{"\n"}
          <span className="text-zinc-600">{"// response_time:  "}</span>
          <span className="text-zinc-400">{"probably too fast"}</span>{"\n"}
          <span className="text-zinc-600">{"// hesitation:     "}</span>
          <span className="text-rose-400">{"unnecessary"}</span>
        </pre>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contacts.map(({ label, handle, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex flex-col gap-4 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-rose-500 dark:hover:border-rose-500 hover:bg-rose-950/30 transition-colors duration-200"
            >
              <Icon
                size={22}
                className="text-zinc-400 group-hover:text-rose-500 transition-colors duration-200"
              />
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">
                  {label}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors duration-200 truncate">
                  {handle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
      </FadeIn>
    </section>
  );
}
