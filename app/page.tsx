import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Services from "@/components/Services";
import Writing from "@/components/Writing";
import LetsTalk from "@/components/LetsTalk";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Expertise />
      <Services />
      <Writing />
      <LetsTalk />
      <Footer />
    </main>
  );
}
