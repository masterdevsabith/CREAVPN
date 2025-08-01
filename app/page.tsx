import Image from "next/image";
import Navbar from "./components/includes/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <section className="special_bg">
        <Navbar />
        <Hero />
      </section>
    </main>
  );
}
