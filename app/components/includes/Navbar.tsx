"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { ChevronDown, ChevronUp, Globe, Menu, X } from "lucide-react";

import { useRouter } from "next/navigation";
import { useState } from "react";

const navlinks = [
  { label: "About Us", url: "/about" },
  { label: "Features", url: "#" },
  { label: "Our Missions", url: "/our-missions" },
  { label: "Pricing", url: "/pricing" },
  { label: "Articles", url: "/articles" },
  { label: "Contact", url: "/contact-us" },
];
const features = [
  {
    category: "Security",
    items: [
      "AES-256 Encryption",
      "Kill Switch",
      "DNS Leak Protection",
      "Two-Factor Authentication",
    ],
  },
  {
    category: "Performance",
    items: [
      "Unlimited Bandwidth",
      "Optimized Streaming Servers",
      "Low-Latency Gaming Mode",
      "Split Tunneling",
    ],
  },
  {
    category: "Privacy",
    items: [
      "No-Log Policy",
      "Anonymous Browsing",
      "Private DNS",
      "Tracker Blocker",
    ],
  },
  {
    category: "Accessibility",
    items: [
      "Cross-Platform Apps",
      "One Account for All Devices",
      "Global Server Network",
      "24/7 Customer Support",
    ],
  },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [featureOpen, setFeatureOpen] = useState(false);

  const router = useRouter();
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
    setFeatureOpen(false);
  };

  return (
    <header className="relative flex items-center justify-between px-12 py-12">
      <div className="left">
        <Link href={"/"}>
          <Image src={"/icons/logo.svg"} alt="logo" width={150} height={150} />
        </Link>
      </div>
      <div className="mid flex items-center justify-center sm:hidden lg:block">
        <ul className="flex items-center gap-8">
          {navlinks.map((navlink, idx) => {
            const isFeatures = navlink.label === "Features";

            return (
              <li
                key={idx}
                className="relative flex items-center gap-2 text-[var(--text-dim-color)] hover:text-white"
                onClick={() => isFeatures && setFeatureOpen(!featureOpen)}
              >
                <Link href={navlink.url} className="flex">
                  {navlink.label}{" "}
                  {isFeatures && featureOpen ? (
                    <ChevronUp />
                  ) : (
                    isFeatures && <ChevronDown />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right sm:hidden lg:flex  items-center gap-2">
        <Globe />
        <Button
          content="Get CreaVPN"
          className="border-neutral-600 hover:bg-white/20"
          onClick={() => router.push("/auth/signup")}
        />
      </div>
      <div className="hamburger_menu sm:block lg:hidden">
        <Menu className="text-white" size={30} onClick={handleOpen} />
      </div>

      {featureOpen && (
        <div
          onMouseEnter={() => setFeatureOpen(true)}
          onMouseLeave={() => setFeatureOpen(false)}
          className="absolute left-0 top-24 sm:w-1/2  lg:w-full mt-2 bg-[#0A0A0A] shadow-lg rounded-bl-2xl rounded-br-2xl p-6 sm:grid-cols-1 grid lg:grid-cols-4 gap-8 z-50"
        >
          {features.map((feature, index) => (
            <div key={index} className="sm:mb-9 lg:mb-0">
              <h3 className="font-bold mb-3">{feature.category}</h3>
              <ul className="space-y-2 text-[var(--text-dim-color)]">
                {feature.items.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-[var(--text-color)] cursor-pointer text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {isOpen ? (
        <div className="small_screen_menu border-l-1 border-neutral-700 absolute top-0 right-0 bg-[#000]/80 backdrop-blur-sm sm:w-1/2 md:w-1/3 h-screen flex items-center justify-center z-50 ">
          <X className="absolute top-5 left-5" onClick={handleClose} />
          <div className="navs flex flex-col items-center gap-12">
            <ul className="flex flex-col items-start gap-4 ">
              {navlinks.map((navlink, idx) => {
                const isFeatures = navlink.label === "Features";

                return (
                  <li
                    key={idx}
                    className="relative flex items-center gap-2 text-[var(--text-dim-color)] hover:text-white"
                    onClick={() => isFeatures && setFeatureOpen(!featureOpen)}
                  >
                    <Link href={navlink.url} className="flex">
                      {navlink.label}{" "}
                      {isFeatures && featureOpen ? (
                        <ChevronUp />
                      ) : (
                        isFeatures && <ChevronDown />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Button
              content="Get Started"
              className="border-neutral-600 hover:bg-white/20"
              onClick={() => router.push("/auth/signup")}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
