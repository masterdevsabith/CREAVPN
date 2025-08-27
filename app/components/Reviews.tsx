import ReviewCard from "./ui/ReviewCard";

const reviews = [
  {
    reviewText: "Hands down one of the sexiest analytic tools out there 😍",
    name: "Dominik",
    status: "Founder, Rivo.gg",
    initial: "D",
    socialIcon: "/icons/instagram-logo.svg",
  },
  {
    reviewText: "Super intuitive and fast, makes my workflow so much easier!",
    name: "Alice",
    status: "Product Manager, FlowHQ",
    initial: "A",
    socialIcon: "/icons/youtube-logo.svg",
  },
  {
    reviewText: "Finally, a tool that balances privacy with performance.",
    name: "Marcus",
    status: "CTO, SecureNet",
    initial: "M",
    socialIcon: "/icons/x-logo.svg",
  },
  {
    reviewText:
      "The support team is incredible, they genuinely care about users.",
    name: "Sophia",
    status: "Engineer, CloudWorks",
    initial: "S",
    socialIcon: "/icons/instagram-logo.svg",
  },
  {
    reviewText: "Setup took less than 5 minutes. Impressive speed and UX.",
    name: "Liam",
    status: "Developer, DevCore",
    initial: "L",
    socialIcon: "/icons/x-logo.svg",
  },
  {
    reviewText:
      "Reliable, lightweight, and affordable. Exactly what we needed.",
    name: "Emma",
    status: "Founder, ScaleTech",
    initial: "E",
    socialIcon: "/icons/x-logo.svg",
  },
  {
    reviewText:
      "Clean UI with powerful features. Love the attention to detail.",
    name: "Noah",
    status: "Designer, PixelForge",
    initial: "N",
    socialIcon: "/icons/youtube-logo.svg",
  },
  {
    reviewText: "One of the rare tools that actually delivers on its promises.",
    name: "Olivia",
    status: "CEO, DataBridge",
    initial: "O",
    socialIcon: "/icons/instagram-logo.svg",
  },
];
const reviews2 = [
  {
    reviewText: "Blazing fast performance, I switched from three other tools.",
    name: "Ethan",
    status: "Lead Engineer, HyperSoft",
    initial: "E",
    socialIcon: "/icons/instagram-logo.svg",
  },
  {
    reviewText: "A VPN that actually respects my privacy — rare these days.",
    name: "Mia",
    status: "Security Analyst, NetShield",
    initial: "M",
    socialIcon: "/icons/youtube-logo.svg",
  },
  {
    reviewText:
      "The dashboard is so clean, I don’t waste time figuring things out.",
    name: "James",
    status: "Product Designer, NovaUI",
    initial: "J",
    socialIcon: "/icons/x-logo.svg",
  },
  {
    reviewText: "We integrated it across our team in hours, not days.",
    name: "Isabella",
    status: "Team Lead, CollabX",
    initial: "I",
    socialIcon: "/icons/instagram-logo.svg",
  },
  {
    reviewText:
      "Pricing is transparent and fair. Huge plus for startups like us.",
    name: "Henry",
    status: "Founder, LaunchPad",
    initial: "H",
    socialIcon: "/icons/youtube-logo.svg",
  },
  {
    reviewText:
      "The lightweight design is impressive. Doesn’t slow down my system.",
    name: "Grace",
    status: "Developer, CodeBase",
    initial: "G",
    socialIcon: "/icons/x-logo.svg",
  },
  {
    reviewText:
      "Their transparency reports give me confidence to use it daily.",
    name: "Daniel",
    status: "Data Scientist, InsightAI",
    initial: "D",
    socialIcon: "/icons/instagram-logo.svg",
  },
  {
    reviewText: "Affordable, secure, and simple. Couldn’t ask for more.",
    name: "Sophia",
    status: "Entrepreneur, StartLab",
    initial: "S",
    socialIcon: "/icons/youtube-logo.svg",
  },
];

export default function Reviews() {
  return (
    <section className="reviews  pt-18 pb-20 overflow-hidden">
      <div className="top mb-16 text-center">
        <h3 className="text-4xl  text-center flex flex-col items-center ">
          Trusted by People around <br /> the world
        </h3>
        <p className="text-center mt-4 text-[var(--text-dim-color)]">
          Join thousands of people who trust CreaVPN for their privacy needs.
        </p>
      </div>
      <div className="bottom relative px-12">
        <div className="absolute left-0 top-0 h-full w-60 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-60 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        <div className=" animate-scroll flex items-center space-x-8 px-24 mb-8">
          {[...reviews, ...reviews].map((review, idx) => (
            <div key={idx} className="inline-block ">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>

        <div className=" animate-scroll-reverse flex items-center space-x-8 px-24">
          {[...reviews2, ...reviews2].map((review, idx) => (
            <div key={idx} className="inline-block ">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
