import { BaseCardProps } from "@/app/types/uiTypes";
import { stat } from "fs";
import { ArrowUpRight, Divide } from "lucide-react";
import Image from "next/image";
import Statusbar from "./Statusbar";

export default function BaseCard({
  flag,
  location,
  cordinate,
  status,
  classname,
}: BaseCardProps) {
  return (
    <div
      className={`base_card border-2 border-neutral-500 rounded-3xl p-5 flex flex-col justify-between   ${classname}`}
    >
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
          <h4 className="text-2xl font-semibold">{location} </h4>
          <p className="text-md text-neutral-400">{cordinate}</p>
        </div>
        <div className="status">
          {status ? (
            <Statusbar content="Available" />
          ) : (
            <Statusbar content="Not Available" />
          )}
        </div>
      </div>
    </div>
  );
}
