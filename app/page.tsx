import Image from "next/image";
import Navbar from "./components/includes/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Companies from "./components/Companies";
import SecureBrowsing from "./components/SecureBrowsing";
import InnovativeFeature from "./components/InnovativeFeature";

export default function Home() {
  return (
    <main>
      <section className="special_bg min-h-screen bg-[radial-gradient(ellipse_at_center,_#0B172F,_#0a0f1c)] text-white">
        <Navbar />
        <Hero />
        <Cards />
        <Companies />
        <SecureBrowsing />
        <InnovativeFeature />
      </section>
    </main>
  );
}
