import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import HashScroll from "@/components/HashScroll";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <HashScroll />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="h-16 bg-gradient-to-l from-rose-950/40 via-rose-900/20 to-transparent border-t border-rose-900/30">
        <div className="max-w-4xl mx-auto px-6 h-full flex items-center justify-center">
          <p className="text-sm text-zinc-300">
            © {new Date().getFullYear()} True Hall
          </p>
        </div>
      </footer>
    </>
  );
}
