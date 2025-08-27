"use client";

import { Plus, Minus } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  {
    text: "Complex And Hard",
    description:
      "Most VPNs are complex, with clunky UIs and bloated features that slow you down.",
  },
  {
    text: "Stupid And Slow",
    description:
      "They sacrifice speed for poor encryption choices, leaving you frustrated.",
  },
  {
    text: "Vulnerable And Creepy",
    description:
      "Many track your data, log activity, and expose you to vulnerabilities.",
  },
];

const faqs = [
  {
    question: "What is a VPN and why do I need it?",
    answer:
      "A VPN (Virtual Private Network) encrypts your internet traffic and hides your IP address, giving you privacy, security, and unrestricted access online.",
  },
  {
    question: "Does using a VPN slow down my internet?",
    answer:
      "A premium VPN is optimized for speed and security. While there may be minimal speed loss, good providers ensure fast browsing and streaming.",
  },
  {
    question: "Can my VPN provider see what I do online?",
    answer:
      "A trustworthy VPN follows a strict no-logs policy, meaning it does not store or track your browsing history or personal data.",
  },
  {
    question: "Is it legal to use a VPN?",
    answer:
      "VPNs are legal in most countries. However, some regions regulate or restrict their use, so it’s important to check your local laws.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq px-0 xl:px-12 py-18">
      <div className="three_feature_top flex items-center justify-center">
        <div className="left w-1/2 px-12 md:px-20 border-r border-neutral-500">
          <h4 className="sm:text-3xl lg:text-4xl mb-12 italic">
            Most VPNs are
          </h4>
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className={`text-xl lg:text-2xl ml-5 mb-2 transition-colors duration-300 ${
                  index === activeIndex
                    ? "text-[var(--text-dim-color)] font-semibold"
                    : "text-[#5c5c5c]"
                }`}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="right w-1/2 px-12 md:px-20">
          <p className="text-xl xl:text-md text-[var(--text-premium)]">
            {items[activeIndex].description}
          </p>
        </div>
      </div>
      <div className="faq_bottom px-20">
        <h2 className="text-5xl md:text-6xl w-full xl:max-w-[60%] text-left mt-20 mb-12">
          Questions we think you might like answers to
        </h2>
        <div className="faqs">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq_item py-6 cursor-pointer border-b border-neutral-500"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl ">{faq.question}</h3>
                {openIndex === index ? (
                  <Minus size={24} className="text-white" />
                ) : (
                  <Plus size={24} className="text-white" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-3 text-md text-[var(--text-premium)]">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
