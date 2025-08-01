import { ButtonProps } from "@/app/types/uiTypes";

export default function Button({ content, className }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-full font-medium  text-white border-2 border-neutral-400 transition duration-300 ${className}`}
    >
      {content}
    </button>
  );
}
