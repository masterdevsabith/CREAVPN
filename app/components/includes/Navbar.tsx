import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { ChevronDown } from "lucide-react";

const navlinks = [
  { label: "About Us", url: "#" },
  { label: "Features", url: "#" },
  { label: "Our Missions", url: "#" },
  { label: "Articles", url: "#" },
];
export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-12 py-12">
      <div className="left">
        <Image src={"/icons/logo.svg"} alt="logo" width={150} height={150} />
      </div>
      <div className="mid flex items-center justify-center sm:hidden md:block">
        <ul className="flex items-center gap-8">
          {navlinks.map((navlink, idx) => (
            <Link href={navlink.url} key={idx}>
              <li className="flex items-center gap-2">
                {navlink.label}{" "}
                {navlink.label == "Features" ? <ChevronDown /> : ""}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="right sm:hidden md:block">
        <Button content="Get Started" className="border-neutral-600" />
      </div>
      <div className="hamburger_menu"></div>
    </header>
  );
}
