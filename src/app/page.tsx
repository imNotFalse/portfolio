import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 border-t border-zinc-100 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm text-zinc-400 dark:text-zinc-600">
            © {new Date().getFullYear()} True Hall
          </p>
        </div>
      </footer>
    </>
  );
}
