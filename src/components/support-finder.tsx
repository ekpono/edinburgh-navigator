"use client";

import { useState, useRef } from "react";
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
  const inputRef = useRef<HTMLInputElement>(null);


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
    <div className="border-t-2 border-slate-900">
      {/* Header */}
      <div className="py-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="display text-xl text-slate-900">Ask the directory</h3>
          <p className="text-sm text-slate-700 mt-1 leading-relaxed">
            Housing law, NHS Lothian, Scottish benefits, transport — answered for Edinburgh specifically.
          </p>
        </div>
        {started && (
          <button onClick={reset} className="flex-shrink-0 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-slate-500 hover:text-slate-900 transition-colors">
            Clear
          </button>
        )}
      </div>

      {/* Messages */}
      {started ? (
        <div className="py-4 space-y-4 max-h-96 overflow-y-auto">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[82%] px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-slate-900 text-white"
                    : "bg-slate-50 border-l-2 border-amber-600 text-slate-900"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-slate-50 border-l-2 border-amber-600 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="size-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="size-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Welcome / suggestions */
        <div className="pb-2">
          <div className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-slate-500 pb-2 border-b border-slate-200">
            What people ask
          </div>
          <div className="entries">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="entry w-full text-left text-[0.9375rem] text-slate-900 py-2.5 hover:text-plum-700 transition-colors group"
              >
                <span className="group-hover:underline decoration-amber-600 decoration-2 underline-offset-4">{s}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="mt-4 pt-4 border-t border-slate-200">
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask anything about Edinburgh…"
            disabled={loading}
            className="flex-1 text-[0.9375rem] border border-slate-200 px-4 py-2.5 disabled:opacity-50 bg-white placeholder:text-slate-400"
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim() || loading}
            className="h-[2.875rem] px-5 bg-slate-900 text-white font-semibold text-sm flex items-center justify-center hover:bg-plum-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
            aria-label="Send"
          >
            Ask
          </button>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="font-mono text-[0.6875rem] text-slate-500">Enter to send · Scottish law applies</p>
          <Link href="/crisis" className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-red-700 font-semibold hover:underline">
            In crisis?
          </Link>
        </div>
      </div>
    </div>
  );
}
