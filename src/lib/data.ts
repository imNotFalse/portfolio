export const name = "True Hall";
export const firstName = "True";
export const title = "Full Stack Dev";

export const bio = `I'm a software engineer with experience building reliable, maintainable systems.
I care about writing clean code and shipping things that actually work.
When I'm not at my day job, I'm working on personal projects — like this site.`;

export const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
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
];

export const links = {
  github: "https://github.com/imNotFalse",
  linkedin: "https://www.linkedin.com/in/true-hall-851359197/",
  email: "truehall.dev@gmail.com",
};
