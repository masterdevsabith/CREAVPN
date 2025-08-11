"use client";

import Button from "./ui/Button";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How does CreaVPN work?",
    answer:
      "CreaVPN encrypts your internet connection and routes your data through our secure servers, masking your IP address and preventing anyone from tracking your online activities.",
  },
  {
    question: "Is CreaVPN easy to use?",
    answer:
      "Yes, CreaVPN is designed for simplicity. Just install the app, log in, and with one tap, you're protected.",
  },
  {
    question: "Can I use CreaVPN on multiple devices?",
    answer:
      "Absolutely! CreaVPN supports usage across multiple devices including smartphones, tablets, laptops, and desktops.",
  },
  {
    question: "What kind of encryption does CreaVPN use?",
    answer:
      "We use AES-256 bit encryption, the industry standard for top-tier security and privacy.",
  },
  {
    question: "In how many countries is CreaVPN available?",
    answer:
      "CreaVPN has servers in over 50 countries, allowing you to browse securely and access content from around the world.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq_section py-30 px-30 flex xl:items-start justify-between xl:flex-row sm:flex-col sm:items-center">
      <div className="left 2xl:w-1/3 xl:w-1/2 sm:w-full xl:mb-0 flex xl:items-start sm:flex-col sm:items-center sm:mb-12">
        <h2 className="text-5xl text-white font-light xl:text-left mb-2 sm:text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-neutral-300 mb-4">
          Have another question? Please contact our team!
        </p>
        <Button
          content="Contact Our Team"
          className="border-blue-700 bg-blue-700"
        />
      </div>
      <div className="right 2xl:w-2/3 xl:w-1/2 sm:w-full space-y-3 ">
        {faqData.map((item, index) => {
          const isOpen = index === openIndex;

          return (
            <div
              key={index}
              onClick={() => toggleIndex(index)}
              className={`transition-all duration-300 rounded-3xl p-5 w-full ${
                isOpen
                  ? "bg-[#0D1424]  text-white border-1 border-white/40 "
                  : "bg-[#0D1424]/60  backdrop-blur-2xl text-zinc-200 hover:bg-[#0D1424] border-2 border-neutral-800"
              }`}
            >
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className=" font-medium text-xl">{item.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              {isOpen && (
                <p className="mt-3 text-sm leading-relaxed text-neutral-300 transition-all duration-300">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
