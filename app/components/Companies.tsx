import { log } from "console";
import Image from "next/image";

const logos = [
  { src: "/icons/company-logo-1.svg" },
  { src: "/icons/company-logo-2.svg" },
  { src: "/icons/company-logo-3.svg" },
  { src: "/icons/company-logo-4.svg" },
  { src: "/icons/company-logo-5.svg" },
];

export default function Companies() {
  return (
    <section className="companies py-18 flex flex-col items-center">
      <div className="top mb-8">
        <h2 className="text-2xl text-neutral-400">Trusted By</h2>
      </div>
      <div className="bottom flex items-center gap-18">
        {logos.map((logo, idx) => (
          <Image
            key={idx}
            src={logo.src}
            alt={logo.src}
            width={200}
            height={200}
          />
        ))}
      </div>
    </section>
  );
}
