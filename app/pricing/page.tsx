import Footer from "../components/includes/Footer";
import Navbar from "../components/includes/Navbar";
import PricingCard from "../components/ui/PricingCard";

const pricingPlans = [
  {
    plan: "Basic",
    description: "Perfect for individuals getting started with our service.",
    price: 9.99,
    features: [
      { text: "Access to core features", available: true },
      { text: "Email support", available: true },
      { text: "Analytics dashboard", available: false },
      { text: "Custom integrations", available: false },
    ],
  },
  {
    plan: "Pro",
    description: "For professionals who need advanced tools and support.",
    price: 24.99,
    features: [
      { text: "Access to all features", available: true },
      { text: "Priority email & chat support", available: true },
      { text: "Analytics dashboard", available: true },
      { text: "Custom integrations", available: false },
    ],
    isHighlighted: true,
  },
  {
    plan: "Enterprise",
    description: "Best for teams and organizations requiring scalability.",
    price: 49.99,
    features: [
      { text: "Unlimited access to features", available: true },
      { text: "Dedicated account manager", available: true },
      { text: "Advanced analytics & reporting", available: true },
      { text: "Custom integrations", available: true },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <section className="pricing_page min-h-screen lg:h-[700px] px-5 xl:px-30 py-8 flex flex-col  justify-center">
        <div className="top mb-8 flex flex-col items-center text-center">
          <h3 className="text-3xl font-semibold text-center flex flex-col items-center max-w-[60%] xl:max-w-[40%] ">
            Kickstart your privacy journey by premium features
          </h3>
        </div>
        <div className="bottom sm:px-8 2xl:px-30 flex w-full items-center flex-col lg:flex-row gap-5">
          {pricingPlans.map((pricingplan, idx) => (
            <PricingCard
              key={idx}
              plan={pricingplan.plan}
              description={pricingplan.description}
              price={pricingplan.price}
              features={pricingplan.features}
              isHighlighted={pricingplan.isHighlighted}
              className="w-full"
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
