"use client";

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

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="faq px-12 py-18">
      <div className="three_feature_top flex items-center justify-center">
        <div className="left w-1/2 px-20 border-r border-neutral-500">
          <h4 className="text-4xl mb-12">Most VPNs are</h4>
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className={`text-2xl ml-5 mb-2 transition-colors duration-300 ${
                  index === activeIndex
                    ? "text-[var(--text-dim-color)] font-semibold"
                    : "text-[var(--text-premium)]"
                }`}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="right w-1/2 px-20">
          <p className="text-md text-[var(--text-premium)]">
            {items[activeIndex].description}
          </p>
        </div>
      </div>
      <div className="faq_bottom"></div>
    </section>
  );
}
