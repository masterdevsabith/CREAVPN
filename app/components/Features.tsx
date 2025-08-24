import { Shield, Eye, Leaf, Feather, Database, Wallet } from "lucide-react";

export const vpnFeatures = [
  {
    icon: Shield,
    title: "Privacy First Approach",
    description:
      "Your online activity stays private with strong encryption and zero-logs policy.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "We operate with open policies and clear practices you can trust.",
  },
  {
    icon: Leaf,
    title: "Energy Efficient",
    description:
      "Optimized servers and protocols designed to reduce energy consumption.",
  },
  {
    icon: Feather,
    title: "Lightweight",
    description:
      "Minimal resource usage ensures blazing speed without slowing your device.",
  },
  {
    icon: Database,
    title: "Data Ownership",
    description: "You stay in control of your data—never stored, never sold.",
  },
  {
    icon: Wallet,
    title: "Affordable Plans",
    description: "Premium security at a cost that fits every budget.",
  },
];

export default function Features() {
  return (
    <section className="features px-12  py-18">
      <div className="top mb-12 text-left">
        <h3 className="text-5xl font-semibold">
          <span className="text-[var(--text-premium)] text-5xl font-semibold">
            Everything you need to{" "}
          </span>
          protect <br />
          your privacy
        </h3>
      </div>

      <section className="features grid grid-cols-1 md:grid-cols-3 gap-12 p-8">
        {vpnFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center group min-h-100 text-center p-6 rounded-2xl bg-black/80 border border-gray-800 hover:border-gray-600 shadow-lg hover:shadow-xl transition"
          >
            <feature.icon className="w-26 h-26 text-neutral-400 group-hover:text-white transition-all duration-200 mb-12 p-5 border border-[var(--bg-premium)] rounded-sm" />
            <h3 className="text-4xl font-semibold mb-6">{feature.title}</h3>
            <p className="text-gray-400 text-sm max-w-[80%]">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
}
