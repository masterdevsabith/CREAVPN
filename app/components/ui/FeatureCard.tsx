import { FeatureCardProps } from "@/app/types/uiTypes";
import Image from "next/image";

export default function FeatureCard({
  image,
  heading,
  subtitle,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl bg-[#0d1525] text-white text-center p-10 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] ${className}`}
    >
      <div className="mb-4 flex items-center justify-center bg-[#141A2D] w-30 h-30 p-4 rounded-xl border-l border-r border-neutral-700">
        <Image
          src={image}
          alt={heading}
          width={150}
          height={150}
          className=""
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{heading}</h3>
      <p className="text-sm text-white/70">{subtitle}</p>
    </div>
  );
}
