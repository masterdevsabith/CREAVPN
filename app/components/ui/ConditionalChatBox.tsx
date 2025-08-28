"use client";

import { usePathname } from "next/navigation";
import ChatBox from "./ChatAndChatBox";

export function ConditionalChatbox() {
  const pathname = usePathname();
  if (pathname.startsWith("/dashboard")) return null;
  return <ChatBox />;
}
