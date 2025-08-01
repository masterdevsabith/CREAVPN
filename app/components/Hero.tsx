import { Download } from "lucide-react";
import Button from "./ui/Button";
import Statusbar from "./ui/Statusbar";

export default function Hero() {
  return (
    <section className="hero_section w-full flex flex-col items-center py-18">
      <div className="top text-center max-w-5xl flex flex-col items-center">
        <Statusbar
          content="CreaVPN version 2.0 is available"
          classname="mb-4"
        />
        <h1 className="text-7xl font-semibold mb-8">
          Fast, Reliable, & Secure <br /> VPN for Every Device
        </h1>
        <p className="max-w-2xl text-center mb-12">
          Enjoy uninterrupted browsing, streaming, and gaming with
          industry-leading security and blazing-fast connections on every
          platform only with CreaVPN.
        </p>
        <Button
          content=" Download CreaVPN"
          icon={<Download />}
          className="py-4 bg-blue-700 border-blue-600"
        />
      </div>
    </section>
  );
}
