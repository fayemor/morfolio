import About from "@/components/About";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Interests from "@/components/Interests";
import Languages from "@/components/Languages";
import Modals from "@/components/Modals";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import RevealObserver from "@/components/RevealObserver";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Gallery />
        <Articles />
        <Experience />
        <Education />
        <Languages />
        <Interests />
      </main>
      <Contact />
      <Modals />
      <RevealObserver />
    </>
  );
}
