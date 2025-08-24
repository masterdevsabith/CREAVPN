import Image from "next/image";

const companies = [
  { name: "google", url: "/icons/company-logo-1.svg" },
  { name: "shopify", url: "/icons/company-logo-2.svg" },
  { name: "google", url: "/icons/company-logo-3.svg" },
  { name: "shopify", url: "/icons/company-logo-4.svg" },
  { name: "google", url: "/icons/company-logo-5.svg" },
  { name: "google", url: "/icons/company-logo-1.svg" },
  { name: "shopify", url: "/icons/company-logo-2.svg" },
  { name: "google", url: "/icons/company-logo-3.svg" },
  { name: "shopify", url: "/icons/company-logo-4.svg" },
  { name: "google", url: "/icons/company-logo-5.svg" },
  { name: "google", url: "/icons/company-logo-1.svg" },
  { name: "shopify", url: "/icons/company-logo-2.svg" },
  { name: "google", url: "/icons/company-logo-3.svg" },
  { name: "shopify", url: "/icons/company-logo-4.svg" },
  { name: "google", url: "/icons/company-logo-5.svg" },
  { name: "google", url: "/icons/company-logo-1.svg" },
  { name: "shopify", url: "/icons/company-logo-2.svg" },
  { name: "google", url: "/icons/company-logo-3.svg" },
  { name: "shopify", url: "/icons/company-logo-4.svg" },
  { name: "google", url: "/icons/company-logo-5.svg" },
];

export default function TrustedBy() {
  return (
    <section className="trusted_by relative pb-18 overflow-hidden">
      <div className="top mb-16">
        <h3 className="text-3xl font-semibold text-center flex flex-col items-center ">
          Trusted by Companies around <br /> the world
        </h3>
      </div>
      <div className="absolute left-0 top-0 h-full w-60 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-60 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />
      <div className="whitespace-nowrap animate-scroll flex items-center space-x-12 px-24">
        {companies.map((item, idx) => (
          <Image
            key={idx}
            src={item.url}
            alt={`logo-${idx}`}
            width={260}
            height={260}
            className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </section>
  );
}
