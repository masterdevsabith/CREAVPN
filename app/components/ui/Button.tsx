import { ButtonProps } from "@/app/types/uiTypes";

export default function Button({
  content,
  icon,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full font-medium  text-white border-2  transition duration-300 flex items-center gap-3 ${className}`}
    >
      {icon ? icon : ""}
      {content}
    </button>
  );
}
