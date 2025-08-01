import { BaseCardProps } from "@/app/types/uiTypes";
import { stat } from "fs";
import { ArrowUpRight, Divide } from "lucide-react";
import Image from "next/image";

export default function BaseCard({
  flag,
  location,
  cordinate,
  status,
}: BaseCardProps) {
  return (
    <div className="base_card border-2 border-neutral-500 rounded-3xl p-5 flex flex-col justify-between w-[31%] min-h-90">
      <div className="top flex items-center justify-between">
        <div className="flag">
          <Image
            src={flag}
            alt={location}
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
        <div className="arrow">
          <ArrowUpRight size={50} />
        </div>
      </div>
      <div className="bottom flex items-center justify-between">
        <div className="location_and_cordinates">
          <h4>{location} </h4>
          <p>{cordinate}</p>
        </div>
        <div className="status">
          {status ? <div>Available</div> : <div>Not Available</div>}
        </div>
      </div>
    </div>
  );
}
