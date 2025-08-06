import { PricingCardProps } from "@/app/types/uiTypes";

export default function PricingCard({
  plan,
  description,
  price,
  features,
  isHighlighted = false,
  className = "",
}: PricingCardProps) {
  return (
    <div
      className={`rounded-2xl bg-[#0d1525] text-white p-6 border border-white/10 shadow-md ${className}`}
    >
      <span className="inline-block mb-4 px-4 py-1 text-sm bg-white/10 rounded-full">
        {plan}
      </span>
      <p className="mb-4 text-white/70">{description}</p>
      <div className="mb-6 text-4xl font-bold">
        ${price} <span className="text-base font-normal">/month</span>
      </div>
      <button
        className={`w-full py-2 rounded-full font-semibold ${
          isHighlighted ? "bg-blue-600" : "bg-white text-black"
        }`}
      >
        Choose This Plan
      </button>
      <div className="mt-6">
        <h4 className="text-left mb-2 font-semibold">Features include:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-white/80"
            >
              <span
                className={`w-4 h-4 inline-block rounded-full border ${
                  feature.available
                    ? "bg-white border-white"
                    : "border-white/30"
                }`}
              ></span>
              <span
                className={`${
                  feature.available ? "" : "text-white/40 line-through"
                }`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
