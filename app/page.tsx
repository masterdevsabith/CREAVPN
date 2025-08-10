import Image from "next/image";
import Navbar from "./components/includes/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Companies from "./components/Companies";
import SecureBrowsing from "./components/SecureBrowsing";
import InnovativeFeature from "./components/InnovativeFeature";
import Map from "./components/Map";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Banner from "./components/Banner";
import Footer from "./components/includes/Footer";

export default function Home() {
  return (
    <main className="">
      <section className="special_bg min-h-screen bg-[radial-gradient(ellipse_at_center,_#0B172F,_#0a0f1c)] text-white">
        <Navbar />
        <Hero />
        {/* <Cards /> */}
        {/* <Companies /> */}
        {/* <SecureBrowsing /> */}
        {/* <InnovativeFeature /> */}
        {/* <Map /> */}
        {/* <Pricing /> */}
        {/* <Faq /> */}
        {/* <Banner /> */}
        {/* <Footer /> */}
      </section>
    </main>
  );
}
