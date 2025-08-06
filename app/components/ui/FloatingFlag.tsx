import { FloatingFlagProps } from "@/app/types/uiTypes";
import Image from "next/image";

export default function FloatingFlag({
  image,
  country,
  servers,
  top,
  right,
  bottom,
  left,
  classname,
  alignment,
}: FloatingFlagProps) {
  const position = (alignment: string) => {
    switch (alignment) {
      case "left":
        return "flex flex-row-reverse items-center";
      case "right":
        return "flex items-center";
      case "top":
        return "flex flex-col-reverse items-center";
      case "bottom":
        return "flex flex-col items-center";
      default:
        return "flex flex-col items-center";
    }
  };
  return (
    <div
      className={`floating_component absolute gap-3 group ${classname} ${
        alignment ? position(alignment) : ""
      }`}
    >
      <div className="flag_and_content  items-center gap-3 bg-[#172034] border border-neutral-600 p-3 rounded-md inline-flex">
        <div className="flag">
          <Image src={image} alt="flag_image" width={40} height={40} />
        </div>
        <div className="content">
          <h3 className="font-semibold">{country}</h3>
          <p className="text-neutral-400">{servers} servers</p>
        </div>
      </div>
      <div className="location_dot relative ">
        <Image
          src={"/icons/circle.svg"}
          alt="location circle"
          width={30}
          height={30}
        />
        <Image
          src={"/icons/circle.svg"}
          alt="location circle"
          width={30}
          height={30}
          className="group-hover:animate-ping absolute top-0 right-0"
        />
      </div>
    </div>
  );
}
