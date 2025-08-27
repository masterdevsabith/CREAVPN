"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { ChevronDown, Globe, Menu, X } from "lucide-react";

import { useRouter } from "next/navigation";
import { useState } from "react";

const navlinks = [
  { label: "About Us", url: "/about" },
  { label: "Features", url: "#" },
  { label: "Our Missions", url: "#" },
  { label: "Pricing", url: "/pricing" },
  { label: "Articles", url: "/articles" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const handleOpen = () => {
    setIsOpen(!isOpen);
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
          {navlinks.map((navlink, idx) => (
            <Link href={navlink.url} key={idx}>
              <li className="flex items-center gap-2 text-[var(--text-dim-color)] hover:text-white">
                {navlink.label}{" "}
                {navlink.label == "Features" ? <ChevronDown /> : ""}
              </li>
            </Link>
          ))}
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

      {isOpen ? (
        <div className="small_screen_menu border-l-1 border-neutral-700 absolute top-0 right-0 bg-[#0A1327]/10 backdrop-blur-2xl sm:w-1/2 md:w-1/3 h-screen flex items-center justify-center z-50 ">
          <X className="absolute top-5 left-5" onClick={handleOpen} />
          <div className="navs flex flex-col items-center gap-12">
            <ul className="flex flex-col items-start gap-4 ">
              {navlinks.map((navlink, idx) => (
                <Link href={navlink.url} key={idx} className="inline-block">
                  <li className="flex items-center gap-2 text-white font-semibold">
                    {navlink.label}{" "}
                    {navlink.label == "Features" ? <ChevronDown /> : ""}
                  </li>
                </Link>
              ))}
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
