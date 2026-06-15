import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Services from "@/components/Services";
import LetsTalk from "@/components/LetsTalk";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Expertise />
      <Services />
      <LetsTalk />
      <Footer />
    </main>
  );
}
