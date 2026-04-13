"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type Message = {
  role: "user" | "assistant";
  text: string;
};

type HistoryItem = {
  role: "user" | "model";
  parts: Array<{ text: string }>;
};

const SUGGESTIONS = [
  "My landlord won't fix the heating",
  "I need emergency housing tonight",
  "How do I register with a GP?",
  "What Scottish benefits can I claim?",
  "My landlord hasn't protected my deposit",
  "How do I get to Edinburgh Airport?",
];

export default function SupportFinder() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [started, setStarted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setStarted(true);
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });

      const data = await res.json();
      const reply: string = data.reply ?? data.error ?? "Something went wrong. Please try again.";

      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
      setHistory((prev) => [
        ...prev,
        { role: "user", parts: [{ text: trimmed }] },
        { role: "model", parts: [{ text: reply }] },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Connection error. Please try again, or call Citizens Advice Edinburgh on **0131 557 1500**." },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  function reset() {
    setMessages([]);
    setHistory([]);
    setStarted(false);
    setInput("");
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="font-bold text-slate-900 text-base">AI Assistant</h3>
            <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">Powered by Gemini</span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">Ask anything about living in Edinburgh — housing, health, benefits, transport</p>
        </div>
        {started && (
          <button onClick={reset} className="text-xs text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0 ml-3">
            Clear chat
          </button>
        )}
      </div>

      {/* Messages */}
      {started ? (
        <div className="px-5 py-4 space-y-4 max-h-96 overflow-y-auto">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && (
                <div className="size-7 rounded-full bg-slate-900 flex items-center justify-center text-xs flex-shrink-0 mr-2 mt-0.5">
                  🏰
                </div>
              )}
              <div
                className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-slate-900 text-white rounded-br-sm"
                    : "bg-slate-50 border border-slate-200 text-slate-800 rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="size-7 rounded-full bg-slate-900 flex items-center justify-center text-xs flex-shrink-0 mr-2 mt-0.5">
                🏰
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="size-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="size-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      ) : (
        /* Welcome / suggestions */
        <div className="px-5 py-5">
          <p className="text-sm text-slate-600 mb-4">
            I know Edinburgh's housing law, NHS Lothian, Scottish benefits, transport, and more.
            What do you need help with?
          </p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-xs bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full hover:bg-slate-100 hover:border-slate-300 transition-all text-left"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="px-4 py-3 border-t border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask anything about Edinburgh…"
            disabled={loading}
            className="flex-1 text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-slate-900 disabled:opacity-50 bg-white placeholder:text-slate-400"
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim() || loading}
            className="size-10 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
            aria-label="Send"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs text-slate-400">Press Enter to send · Scottish law applies</p>
          <Link href="/crisis" className="text-xs text-red-500 font-semibold hover:underline">
            In crisis? →
          </Link>
        </div>
      </div>
    </div>
  );
}
