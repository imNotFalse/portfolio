export const name = "True Hall";
export const firstName = "True";
export const title = "Full Stack Dev";

export const bio = `I'm a software engineer with experience building reliable, maintainable systems.
I care about writing clean code and shipping things that actually work and make sense.
When I'm not at my day job, I'm either spoiling my dog, taking care of my lawn, in the gym, gaming, or working on personal projects — like this site.`;

export const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Go",
  "Claude Code",
  "HTMX",
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Site",
    description:
      "This site. Built with Next.js, TypeScript, and Tailwind CSS. My first personal project.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com/imNotFalse/portfolio",
  },
  {
    title: "NiceLawn",
    description:
      "A one stop shop for DIY lawn owners. Everything you need to take care of your lawn yourself.",
    tech: ["Bun", "Vite", "Hono", "React", "TypeScript"],
    href: "https://nicelawn.up.railway.app",
  },
];

export const links = {
  email: {
    url: "mailto:truehall.dev@gmail.com",
    handle: "truehall.dev@gmail.com",
  },
  github: { url: "https://github.com/imNotFalse", handle: "imNotFalse" },
  linkedin: {
    url: "https://www.linkedin.com/in/true-hall-851359197/",
    handle: "true-hall",
  },
};
