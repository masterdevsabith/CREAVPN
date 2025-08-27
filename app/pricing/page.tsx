import Footer from "../components/includes/Footer";
import Navbar from "../components/includes/Navbar";
import PricingCard from "../components/ui/PricingCard";

const pricingPlans = [
  {
    plan: "basic",
    description: "desc",
    price: 24.99,
    features: ["hi"],
  },
  {
    plan: "basic",
    description: "desc",
    price: 24.99,
    features: ["hi"],
    isHighlighted: true,
  },
  {
    plan: "basic",
    description: "desc",
    price: 24.99,
    features: ["hi"],
  },
];
export default function PricingPage() {
  return (
    <>
      <Navbar />
      <section className="pricing_page px-30 py-12">
        <div className="top mb-16 flex flex-col items-center text-center">
          <h3 className="text-3xl font-semibold text-center flex flex-col items-center max-w-[40%] ">
            Kickstart your privacy journey by premium features
          </h3>
        </div>
        <div className="bottom px-30 flex w-full items-center gap-5">
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
