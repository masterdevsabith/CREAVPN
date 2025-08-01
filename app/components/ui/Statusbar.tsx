import { StatusProps } from "@/app/types/uiTypes";

export default function Statusbar({ content, classname }: StatusProps) {
  return (
    <div
      className={`${classname}  inline-flex items-center gap-3 px-4 py-2 rounded-full font-sans text-white bg-gradient-to-r from-white/10 to-white/5 border border-white/20 shadow-sm backdrop-blur-sm`}
    >
      <div className="w-2.5 h-2.5 bg-white rounded-full shadow-md" />
      <h5 className="text-sm font-medium">{content}</h5>
    </div>
  );
}
