"use client";

import Navbar from "./components/includes/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/includes/Footer";
import { MessageSquare, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // bg-[radial-gradient(ellipse_at_center,_#0B172F,_#0a0f1c)]
    <main className="relative">
      <section className=" min-h-screen  text-white">
        <Navbar />
        <Hero />
      </section>
      <div
        className="chat_box fixed bottom-10 right-10 w-16 h-16 bg-[var(--bg-premium)] hover:bg-[var(--bg-premium-hover)] rounded-full flex items-center justify-center z-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X size={40} fill="white" />
        ) : (
          <MessageSquare size={28} fill="white" />
        )}
        {/* <div className="red_topple w-2 h-2 bg-red-600 rounded-full absolute top-0 right-0 flex items-center justify-center p-3">
          1
        </div> */}
      </div>
      <div
        className={`chat_area fixed bottom-30 right-10 w-100 h-140 bg-[#0A1325] z-1 rounded-md border ${
          isOpen ? "fixed" : "hidden"
        }`}
      >
        <div className="heading w-full flex items-center justify-between py-5 px-4 font-semibold bg-[#181f2e] rounded-md">
          <div className="left flex items-center gap-2">
            <div className="active_green relative w-3 h-3 p-1 rounded-full bg-green-400 ">
              <div className="active_green absolute inset-0 w-3 h-3 p-1 rounded-full bg-green-400 animate-ping"></div>
            </div>
            <div className="content">
              <h2>CREAVPN AI</h2>
              <p className="text-sm text-neutral-400 font-light">online</p>
            </div>
          </div>
          <div className="right">
            <X
              className="text-white"
              size={30}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
        <div className="messages space-y-4 p-4 overflow-y-scroll h-[394px] no-scroll-bar">
          {[
            { sender: "user", text: "Hi, I’m looking for a secure VPN." },
            {
              sender: "ai",
              text: "Hello! Our VPN offers military-grade encryption and zero logs.",
            },
            {
              sender: "user",
              text: "Nice! Can it hide my IP while streaming?",
            },
            {
              sender: "ai",
              text: "Absolutely. You can stream securely from anywhere in the world.",
            },
            { sender: "user", text: "Cool, how do I start?" },
            {
              sender: "ai",
              text: "Just sign up on our website, download the app, and connect.",
            },
          ].map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "user" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg text-white ${
                  msg.sender === "user"
                    ? "bg-blue-700 rounded-bl-none"
                    : "bg-green-700 rounded-br-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="input_box p-4 absolute bottom-0 right-0 w-full">
          <input
            type="text"
            placeholder="ask me anything related to privacy..."
            className="w-full bg-[#0A0F1A] px-5 py-4 rounded-md border border-neutral-600 outline-none"
          />
        </div>
      </div>
    </main>
  );
}
