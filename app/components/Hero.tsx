import { Download } from "lucide-react";
import Button from "./ui/Button";
import Statusbar from "./ui/Statusbar";

export default function Hero() {
  return (
    <section className="hero_section w-full flex flex-col items-center py-8">
      <div className="top">
        <Statusbar content="CreaVPN version 2.0 is available" />
        <h1>Fast, Reliable, & Secure VPN for Every Device</h1>
        <p>
          Enjoy uninterrupted browsing, streaming, and gaming with
          industry-leading security and blazing-fast connections on every
          platform only with CreaVPN.
        </p>
        <Button content=" Download CreaVPN" icon={<Download />} />
      </div>
    </section>
  );
}
