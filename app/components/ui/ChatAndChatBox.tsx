"use client";

import { MessageSquare, Send, X } from "lucide-react";
import {
  useState,
  useRef,
  useEffect,
  FC,
  KeyboardEvent,
  ChangeEvent,
} from "react";
import Markdown from "react-markdown";

interface Message {
  sender: "user" | "ai";
  text: string;
}

const ChatBox: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (): Promise<void> => {
    if (input.trim() === "") return;

    const userMessage: Message = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const apiKey: string = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
      const apiUrl: string = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

      const systemInstruction = {
        role: "user",
        parts: [
          {
            text: `
You are CREAVPN AI, a helpful assistant that answers questions only about VPNs, privacy, and cybersecurity. 
CreaVPN is a privacy-first VPN service that provides:
- Military-grade AES-256 encryption
- No logs policy
- IP masking for streaming and browsing
- Secure global servers
- Focus on protecting user privacy and anonymity

Always answer in a professional but simple tone, focusing on CreaVPN’s features and benefits. 
If asked something unrelated to privacy or VPNs, politely redirect the conversation back.
            `,
          },
        ],
      };

      const chatHistory = [
        systemInstruction,
        ...messages.map((msg) => ({
          role: msg.sender === "user" ? "user" : "model",
          parts: [{ text: msg.text }],
        })),
        { role: "user", parts: [{ text: userMessage.text }] },
      ];

      const payload = {
        contents: chatHistory,
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      const aiResponseText: string =
        result?.candidates?.[0]?.content?.parts?.[0]?.text;

      const aiMessage: Message = {
        sender: "ai",
        text: aiResponseText || "Sorry, I couldn't get a response.",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Failed to fetch from Gemini API:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Oops! Something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  return (
    <>
      <div
        className="chat_box fixed bottom-10 right-10 w-16 h-16 bg-[var(--bg-premium)] hover:bg-[var(--bg-premium-hover)] rounded-full flex items-center justify-center z-500 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X size={40} className="text-white" />
        ) : (
          <MessageSquare size={28} className="text-white" />
        )}
      </div>

      <div
        className={`chat_area fixed bottom-32 right-10 w-[400px] h-[550px] bg-[var(--element-bg)] z-500 rounded-lg border border-[var(--bg-premium)] flex flex-col transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="heading w-full flex items-center justify-between py-5 px-4 font-semibold bg-[var(--element-bg2)] rounded-t-lg border-b border-[var(--bg-premium)]">
          <div className="left flex items-center gap-2">
            <div className="active_green relative w-3 h-3 p-1 rounded-full bg-green-400 ">
              <div className="active_green absolute inset-0 w-3 h-3 p-1 rounded-full bg-green-400 animate-ping"></div>
            </div>
            <div className="content">
              <h2>CREAVPN AI</h2>
              <p className="text-sm text-neutral-400 font-light">online</p>
            </div>
          </div>
          <div className="right">
            <X
              className="text-white cursor-pointer"
              size={30}
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>

        <div className="messages no-scroll-bar flex-grow overflow-y-scroll p-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-neutral-400 mt-20">
              <p>Hello! How can I help you today?</p>
              <p className="text-xs mt-2 ">
                Ask me anything related to privacy, cybersecurity, or VPNs.
              </p>
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] px-4 py-2 rounded-lg text-white ${
                  msg.sender === "user"
                    ? "bg-[var(--bg-premium)] rounded-br-none"
                    : "bg-[var(--bg-premium)]/40 rounded-bl-none"
                }`}
              >
                <Markdown>{String(msg.text ?? "")}</Markdown>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[75%] px-4 py-2 rounded-lg text-white bg-[var(--bg-premium)]/40 rounded-bl-none">
                <div className="dot-flashing"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="input_box p-4 flex-none w-full flex items-center gap-2 border-t border-[var(--bg-premium)]">
          <input
            type="text"
            placeholder="ask me anything related to privacy..."
            className="w-full bg-[#000] px-5 py-4 rounded-md border border-[var(--bg-premium)] outline-none text-white"
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <button
            className="p-4 bg-[var(--bg-premium)] rounded-sm text-white disabled:opacity-50"
            onClick={handleSendMessage}
            disabled={isLoading}
          >
            <Send />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
