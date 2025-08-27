"use client";

import { MessageSquare, Send, X } from "lucide-react";
import { useState } from "react";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="chat_box fixed bottom-20 right-10 w-16 h-16 bg-[var(--bg-premium)] hover:bg-[var(--bg-premium-hover)] rounded-full flex items-center justify-center z-500"
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
        className={`chat_area fixed bottom-30 right-10 w-100 h-140 bg-[var(--element-bg)] z-500 rounded-md border border-[var(--bg-premium)] ${
          isOpen ? "fixed" : "hidden"
        }`}
      >
        <div className="heading w-full flex items-center justify-between py-5 px-4 font-semibold bg-[var(--element-bg2)] rounded-md border-b border-[var(--bg-premium)]">
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
                    ? "bg-[var(--bg-premium)] rounded-bl-none"
                    : "bg-[var(--bg-premium)]/40 rounded-br-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="input_box p-4 absolute bottom-0 right-0 w-full flex items-center gap-2">
          <input
            type="text"
            placeholder="ask me anything related to privacy..."
            className="w-full bg-[#000] px-5 py-4 rounded-md border border-[var(--bg-premium)] outline-none"
          />
          <button className="p-4 bg-[var(--bg-premium)] rounded-sm">
            <Send />
          </button>
        </div>
      </div>
    </>
  );
}
