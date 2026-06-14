import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Geographies from "@/components/Geographies";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Geographies />
      <Projects />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
