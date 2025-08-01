import { StatusProps } from "@/app/types/uiTypes";

export default function Statusbar({ content, classname }: StatusProps) {
  return (
    <div
      className={`${classname} flex items-center gap-3 border-1 border-neutral-50 px-4 py-2 rounded-full font-sans `}
    >
      <div className="circle w-3 h-3 bg-white rounded-full"></div>
      <h5>{content}</h5>
    </div>
  );
}
