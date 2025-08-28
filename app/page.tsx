import Navbar from "./components/includes/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/includes/Footer";
import Preview from "./components/Preview";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <main className="relative">
      <section className=" min-h-screen  text-white">
        <Navbar />
        <Hero />
        <Preview />
        <TrustedBy />
        <Features />
        <FAQ />
        <Reviews />
        <Banner />
        <Footer />
      </section>
    </main>
  );
}
