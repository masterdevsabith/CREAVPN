import Image from "next/image";
import Navbar from "./components/includes/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <section className="special_bg min-h-screen bg-[radial-gradient(ellipse_at_center,_#132145,_#0a0f1c)] text-white">
        <Navbar />
        <Hero />
      </section>
    </main>
  );
}
