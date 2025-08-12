"use client";

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
import { MessageSquare, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="relative">
      <section className="special_bg min-h-screen bg-[radial-gradient(ellipse_at_center,_#0B172F,_#0a0f1c)] text-white">
        <Navbar />
        <Hero />
        <Cards />
        <Companies />
        <SecureBrowsing />
        <InnovativeFeature />
        <Map />
        <Pricing />
        <Faq />
        <Banner />
        <Footer />
      </section>
      <div
        className="chat_box fixed bottom-10 right-10 w-20 h-20 bg-[#155DFC] hover:bg-[#0c4bd2] rounded-full flex items-center justify-center z-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X size={40} fill="white" />
        ) : (
          <MessageSquare size={33} fill="white" />
        )}
        <div className="red_topple w-4 h-4 bg-red-600 rounded-full absolute top-0 right-0 flex items-center justify-center p-3">
          1
        </div>
      </div>
      <div
        className={`chat_area fixed bottom-16 right-16 w-100 h-140 bg-[#0A1325] z-1 rounded-md border ${
          isOpen ? "fixed" : "hidden"
        }`}
      >
        <div className="heading w-full flex items-center justify-center py-2 font-semibold bg-[#181f2e] rounded-md">
          <h2>CreaVPN AI</h2>
        </div>
        <div className="input_box p-4 absolute bottom-0 right-0 w-full">
          <input
            type="text"
            placeholder="what is your doubt ?"
            className="w-full bg-[#000001] px-5 py-4 rounded-md"
          />
        </div>
      </div>
    </main>
  );
}
