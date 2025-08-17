import Image from "next/image";
import Navbar from "../components/includes/Navbar";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Footer from "../components/includes/Footer";
import Button from "../components/ui/Button";

const achievements = [
  { label: "35M+", for: "App downloads" },
  { label: "400+", for: "Employees" },
  { label: "35+", for: "Awards" },
];

const infoCards = [
  {
    title: "Trust Center",
    paragraph:
      "Delve deeper into the details of how we maintain the highest quality, privacy, and transparency standards in our company.",
    link: "/trust-center",
  },
  {
    title: "Corporate social responsibility",
    paragraph:
      "We are mindful of our environmental impact. Take a look at our initiatives toward corporate social responsibility (CSR) at Surfshark and read our Impact Report.",
    link: "/csr",
  },
  {
    title: "Research Hub",
    paragraph:
      "Learn about internet censorship, cyberattacks, and privacy breaches. Here, our research team provides educational studies highlighting critical issues.",
    link: "/research-hub",
  },
  {
    title: "Annual reports",
    paragraph:
      "Read our Wrap-up, which is filled with information on Surfshark's operations and significant highlights that happened throughout the years.",
    link: "/annual-reports",
  },
];

const quotations = [
  {
    image: "/images/internet-society.svg",
    quote:
      "Internet Society is dedicated to ensuring universal internet access, as it is a tool for empowerment, offering significant social and economic opportunities. Surfshark and Internet Society are passionate about assuring this information reaches everyone to improve their lives.",
  },
  {
    image: "/images/vpn-trust-initiative.svg",
    quote:
      "We are proud to work alongside Surfshark on the VPN Trust Initiative (VTI), collaborating on important issues that enhance transparency, accountability, and trust within the VPN industry. Together, we are helping shape a safer and more secure online environment.",
  },
];

export default function AboutPage() {
  return (
    <section className="about_page special_bg bg-[radial-gradient(ellipse_at_center,_#0B172F,_#0a0f1c)] ">
      <Navbar />
      <section className="about_hero flex flex-col items-center justify-center py-20">
        <div className="top mb-12 flex items-start justify-center">
          <Image src={"/icons/logo.svg"} alt="logo" width={300} height={300} />
          <span>&trade;</span>
        </div>
        <div className="mid flex flex-col items-center">
          <h1 className="max-w-4xl text-center text-5xl mb-4">
            We build the most beloved security products for everyone
          </h1>
          <p className="max-w-5xl text-center text-lg text-neutral-400 mb-8">
            Our goal is to empower people to take full control of their digital
            lives, raise awareness about evolving online threats, and champion
            the accessibility and future of the internet. We envision a future
            where the internet remains an open, inclusive, and invaluable global
            resource for all.
          </p>
        </div>
        <div className="cover_img mb-12">
          <Image
            src={"/images/cover_image.webp"}
            alt="cover_image"
            width={1000}
            height={1000}
          />
        </div>
        <div className="small_achievements flex items-center justify-between gap-33">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="single_achievement text-center">
              <h2 className="text-4xl font-semibold">{achievement.label}</h2>
              <span className="text-neutral-400 ">{achievement.for}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="transparency_and_responsibility flex flex-col items-center justify-center py-12">
        <div className="top flex flex-col items-center text-center ">
          <h2 className="max-w-4xl text-center text-5xl mb-4">
            Transparency & social responsibility
          </h2>
          <p className="max-w-5xl text-center text-lg text-neutral-400 mb-8">
            Over the years, we&apos;ve put together various resources
            highlighting our operations, commitment to social responsibility,
            and our dedication to transparency. We&apos;ve also conducted
            research and published annual reviews. Explore our collection.
          </p>
        </div>
        <div className="mid grid grid-cols-1 md:grid-cols-2 gap-6">
          {infoCards.map((card, idx) => (
            <div
              key={idx}
              className="infocard min-h-50 min-w-[500px] bg-neutral-200/10 hover:bg-neutral-200/14 backdrop-blur-lg p-5 rounded-md flex flex-col items-start justify-between"
            >
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-sm text-neutral-300 max-w-sm">
                {card.paragraph}
              </p>
              <Link href={card.link} className="flex items-center gap-2">
                Learn More <ChevronRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="open_internet flex flex-col items-center justify-center py-12">
        <div className="top flex flex-col items-center text-center ">
          <h2 className="max-w-4xl text-center text-5xl mb-4">
            Our support for an open internet
          </h2>
          <p className="max-w-5xl text-center text-lg text-neutral-400 mb-8">
            Free, open, and secure internet is the essence of our cause. That is
            why we proactively support the works of non-profit organizations
            that advocate for safeguarding online freedom and transparency.
          </p>
        </div>
        <div className="bottom flex items-center justify-center gap-20">
          {quotations.map((quotation, idx) => (
            <div
              key={idx}
              className="quote_box relative bg-neutral-100/10 backdrop-blur-lg flex flex-col items-center p-5 rounded-md hover:shadow-xl/30"
            >
              <Image
                src={quotation.image}
                alt="quotation"
                width={200}
                height={200}
                className="mb-5"
              />
              <p className="text-md text-neutral-400 max-w-lg text-center">
                " {quotation.quote}"
              </p>
              <Image
                src={"/images/quote-icon.svg"}
                alt="qoute icon"
                width={50}
                height={50}
                className="absolute -top-5 right-10"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="join_our_team flex items-center justify-center mt-30 py-12">
        <div className="container relative flex items-center justify-between  bg-blue-950/90 p-12 max-w-6xl rounded-2xl">
          <div className="left flex flex-col items-start justify-between">
            <h2 className="text-3xl font-semibold mb-2">Join our team</h2>
            <p className="text-md text-neutral-200 max-w-lg mb-6">
              Become a part of our mission to build the most beloved security
              products for everyone.
            </p>
            <Button
              content="Join Now"
              className="text-black bg-white/20 hover:bg-white/26"
            />
          </div>
          <div className="right">
            <Image
              src={"/images/team-modal-cover.webp"}
              alt="a_person"
              width={700}
              height={700}
              className="absolute bottom-0 -right-16"
            />
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
