import { LinkButtonProps } from "@/app/types/uiTypes";
import Link from "next/link";

export default function LinkButton({
  content,
  href,
  icon,
  className,
  onClick,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      download
      className={`flex items-center justify-center gap-3 px-4 py-2 rounded-2xl font-medium  text-white border-2  transition duration-300 bg-[var(--bg-premium)] border-[var(--text-premium)] ${className}`}
    >
      {icon ? icon : ""}
      {content}
    </a>
  );
}
