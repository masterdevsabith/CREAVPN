import PricingCard from "./ui/PricingCard";

export default function Pricing() {
  return (
    <section className="pricing_section py-10">
      <div className="top mb-12">
        <h2 className="text-5xl text-white font-light text-center">
          Premium Features,
          <br /> Budget-Friendly Pricing
        </h2>
        <p className="text-md text-neutral-300 text-center mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          doloribus nam atque totam?{" "}
        </p>
      </div>
      <div className="bottom flex items-center justify-center gap-6">
        <PricingCard
          plan="Basic Plan"
          description="Perfect for those who need simple"
          price={5}
          isHighlighted={false}
          features={[
            { text: "AES-256 bit encryption", available: true },
            { text: "No-logs policy", available: true },
            { text: "Global server access in 50+ countries", available: true },
            { text: "Kill switch for extra protection", available: true },
            { text: "Ad and tracker blocking", available: true },
            { text: "DNS leak protection", available: false },
            { text: "Multi-protocol support", available: false },
          ]}
        />

        <PricingCard
          plan="Standard Plan"
          description="Perfect for everyday users who need secure"
          price={8}
          isHighlighted={true}
          features={[
            { text: "AES-256 bit encryption", available: true },
            { text: "No-logs policy", available: true },
            { text: "Global server access in 50+ countries", available: true },
            { text: "Kill switch for extra protection", available: true },
            { text: "Ad and tracker blocking", available: true },
            { text: "Dedicated IP option", available: true },
            { text: "Malware & phishing protection", available: false },
          ]}
        />

        <PricingCard
          plan="Personal Plan"
          description="Designed for power users that need more"
          price={12}
          isHighlighted={false}
          features={[
            { text: "AES-256 bit encryption", available: true },
            { text: "No-logs policy", available: true },
            { text: "Global server access in 50+ countries", available: true },
            { text: "Kill switch for extra protection", available: true },
            { text: "Ad and tracker blocking", available: true },
            { text: "DNS leak protection", available: true },
            { text: "Unlimited bandwidth", available: true },
          ]}
        />
      </div>
    </section>
  );
}
