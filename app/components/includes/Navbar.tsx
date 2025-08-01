import Image from "next/image";
import Link from "next/link";

const navlinks = [
  { label: "About Us", url: "#" },
  { label: "Features", url: "#" },
  { label: "Our Missions", url: "#" },
  { label: "Articles", url: "#" },
];
export default function Navbar() {
  return (
    <header>
      <div className="left">
        <Image src={"/icons/logo.svg"} alt="logo" width={150} height={150} />
      </div>
      <div className="mid">
        <ul>
          {navlinks.map((navlink, idx) => (
            <Link href={navlink.url} key={idx}>
              <li>{navlink.label}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="right"></div>
    </header>
  );
}
