"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Message = {
  role: "user" | "assistant";
  text: string;
};

type HistoryItem = {
  role: "user" | "model";
  parts: Array<{ text: string }>;
};

function getPageLabel(pathname: string): string {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (!segment) return "Home";
  return segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
}

const MAX_HISTORY = 6;

export default function Sherlock() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [wiggling, setWiggling] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Periodic wiggle when closed to draw attention
  useEffect(() => {
    if (open) return;
    const interval = setInterval(() => {
      setWiggling(true);
      setTimeout(() => setWiggling(false), 700);
    }, 5000);
    return () => clearInterval(interval);
  }, [open]);

  const send = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history,
          page: getPageLabel(pathname),
        }),
      });

      const data = await res.json();
      const reply: string = data.reply ?? data.error ?? "Something went wrong. Please try again.";

      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
      setHistory((prev) => {
        const updated = [
          ...prev,
          { role: "user" as const, parts: [{ text: trimmed }] },
          { role: "model" as const, parts: [{ text: reply }] },
        ];
        return updated.slice(-MAX_HISTORY);
      });
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Connection error. Please try again, or call Citizens Advice Edinburgh on 0131 557 1500.",
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }, [loading, history, pathname]);

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  function reset() {
    setMessages([]);
    setHistory([]);
    setInput("");
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-0">
      {/* Chat panel */}
      {open && (
        <div className="panel-slide-up w-[92vw] sm:w-[520px] bg-white rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden mb-2">
          {/* Header */}
          <div className="px-5 pt-3 pb-4 bg-slate-900 flex items-end justify-between flex-shrink-0">
            <div className="flex items-end gap-3">
              <div className="relative w-24 h-24 flex-shrink-0 -mb-1">
                <Image
                  src="/sherlock.png"
                  alt="Sherlock"
                  fill
                  className="object-contain object-bottom drop-shadow-md"
                />
              </div>
              <div className="pb-1">
                <div className="text-white font-bold text-lg leading-tight">Sherlock</div>
                <div className="text-slate-400 text-sm">Edinburgh Navigator AI</div>
              </div>
            </div>
            <div className="flex items-center gap-3 pb-1">
              {messages.length > 0 && (
                <button
                  onClick={reset}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Close Sherlock"
              >
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 min-h-[260px] max-h-[520px]">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center py-4 gap-4">
                <div className="sherlock-entrance relative w-56 h-56">
                  <Image
                    src="/sherlock.png"
                    alt="Sherlock"
                    fill
                    className="object-contain drop-shadow-sm"
                  />
                </div>
                <div className="text-center">
                  <p className="text-base font-semibold text-slate-800">Ask me anything about Edinburgh</p>
                  <p className="text-sm text-slate-400 mt-1">
                    Housing, health, transport, benefits, things to do…
                  </p>
                </div>
                {pathname !== "/" && (
                  <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-full px-4 py-1.5">
                    <span className="size-2 rounded-full bg-emerald-400" />
                    <span className="text-sm text-slate-500">
                      Context: <span className="font-medium text-slate-700">{getPageLabel(pathname)}</span>
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <>
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.role === "assistant" && (
                      <div className="size-8 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 mr-2.5 mt-0.5">
                        <span className="text-white text-xs font-bold">S</span>
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] rounded-3xl px-4 py-3 text-base leading-relaxed whitespace-pre-wrap ${
                        msg.role === "user"
                          ? "bg-slate-900 text-white rounded-br-md"
                          : "bg-slate-50 border border-slate-200 text-slate-800 rounded-bl-md"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex justify-start">
                    <div className="size-8 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 mr-2.5 mt-0.5">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl rounded-bl-md px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="size-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="size-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-4 border-t border-slate-100 bg-slate-50/60 flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask Sherlock…"
                disabled={loading}
                className="flex-1 text-base border border-slate-200 rounded-full px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-slate-900 disabled:opacity-50 bg-white placeholder:text-slate-400"
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim() || loading}
                className="size-11 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
                aria-label="Send"
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-2 text-center">Scottish law applies · Enter to send</p>
          </div>
        </div>
      )}

      {/* Floating trigger — character stands in the corner */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className={`relative w-48 h-48 cursor-pointer active:scale-95 transition-transform ${wiggling ? "sherlock-wiggle" : "sherlock-float"}`}
          aria-label="Open Sherlock"
        >
          <Image
            src="/sherlock.png"
            alt="Open Sherlock"
            fill
            className="object-contain drop-shadow-xl"
          />
        </button>
      )}

      {/* Close button when panel is open */}
      {open && (
        <button
          onClick={() => setOpen(false)}
          className="size-10 rounded-full bg-white/90 hover:bg-white text-slate-600 flex items-center justify-center transition-colors shadow-lg border border-slate-200"
          aria-label="Close Sherlock"
        >
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
