import { Download } from "lucide-react";
import Button from "./ui/Button";
import Statusbar from "./ui/Statusbar";
import LinkButton from "./ui/LinkButton";

export default function Hero() {
  return (
    <section className="hero_section w-full h-140 md:h-160  flex items-center lg:items-start flex-col lg:flex-row px-12 pt-18">
      <div className="left text-center  lg:text-left flex flex-col items-center lg:items-start">
        <Statusbar
          content="CreaVPN version 2.0 is available"
          classname="mb-4"
        />
        <h1 className="text-6xl md:text-7xl font-semibold mb-4">
          Fast, Reliable, & Secure{" "}
          <span className="text-[var(--text-premium)] text-7xl font-semibold">
            VPN
          </span>{" "}
          for Every Device
        </h1>
        <p className="text-center lg:text-left mb-8">
          Enjoy uninterrupted browsing, streaming, and gaming with
          industry-leading security and blazing-fast connections on every
          platform only with CreaVPN.
        </p>

        <LinkButton
          content="Download CreaVPN"
          href="/downloads/creavpn.exe"
          icon={<Download />}
          className="py-4 bg-[var(--bg-premium)] border-[var(--bg-premium)] bg-[radial-gradient(circle_at_center,_#111,_#333)]"
        />
      </div>
      <div className="special_bg right w-full h-full hidden lg:block"></div>
    </section>
  );
}
