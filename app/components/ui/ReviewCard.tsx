"use client";
import Image from "next/image";

interface ReviewCardProps {
  reviewText: string;
  name: string;
  status: string;
  initial: string;
  socialIcon: string;
}

export default function ReviewCard({
  reviewText,
  name,
  status,
  initial,
  socialIcon,
}: ReviewCardProps) {
  return (
    <div className="bg-black text-white border border-neutral-800 rounded-lg overflow-hidden min-w-md shadow-lg">
      <div className="p-6">
        <p className="text-lg leading-relaxed">"{reviewText}"</p>
      </div>

      <div className="flex items-center justify-between border-t border-neutral-800 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-lg font-bold">
            {initial}
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-neutral-400">{status}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Image src={socialIcon} alt="social" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
