import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoaderCircle, MessageCircle, Send, X } from "lucide-react";

const starterQuestions = [
  "What is Ascend?",
  "What does NextStep do?",
  "How much is exam prep?",
  "How can a school work with PNS?"
];

const welcomeMessage = {
  role: "assistant",
  content: "Hi! I can answer questions about Pragma Novus Systems, Ascend Homework & Tutoring Center and NextStep. What would you like to know?"
};

function ChatMessage({ message }) {
  const isUser = message.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-6 ${isUser ? "bg-pns-ink text-white" : "border border-pns-lilac bg-white text-pns-ink"}`}>
        {message.content}
      </div>
    </div>
  );
}

export default function PnsAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([welcomeMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const visibleStarters = useMemo(() => starterQuestions.slice(0, messages.length > 1 ? 2 : 4), [messages.length]);

  async function sendMessage(text) {
    const question = text.trim();
    if (!question || isLoading) return;

    const nextMessages = [...messages, { role: "user", content: question }];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/pns-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-8) })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "The assistant could not respond right now.");
      setMessages((current) => [...current, { role: "assistant", content: data.reply }]);
    } catch (caughtError) {
      console.error("PNS Assistant request failed", caughtError);
      setError("The assistant isn't available right now. Please call +27 67 033 6452 or email frontdesk@pragmansystems.co.za.");
    } finally {
      setIsLoading(false);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-[80] sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen ? (
          <motion.section
            key="assistant-panel"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-3 bottom-24 mx-auto flex max-h-[min(640px,calc(100vh-120px))] max-w-[400px] flex-col overflow-hidden rounded-3xl border border-pns-lilac bg-white shadow-lift sm:inset-x-auto sm:right-6 sm:mx-0 sm:w-[400px]"
            aria-label="PNS Assistant chat"
          >
            <div className="flex items-center justify-between gap-4 bg-pns-ink p-5 text-white">
              <div className="flex items-center gap-3">
                <img src="/logos/pns-mark.png" alt="" className="h-10 w-10 rounded-xl bg-white p-1" />
                <div>
                  <p className="font-display text-sm font-bold">PNS Assistant</p>
                  <p className="text-xs text-white/70">Quick answers about our services</p>
                </div>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} className="rounded-full bg-white/10 p-2 transition hover:bg-white/20" aria-label="Close chat">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto bg-pns-mist p-4">
              {messages.map((message, index) => <ChatMessage key={`${message.role}-${index}`} message={message} />)}
              {isLoading ? (
                <div className="inline-flex items-center gap-2 rounded-2xl border border-pns-lilac bg-white px-4 py-3 text-sm font-semibold">
                  <LoaderCircle className="animate-spin text-pns-violet" size={17} /> Thinking…
                </div>
              ) : null}
            </div>

            <div className="border-t border-pns-lilac bg-white p-4">
              <div className="mb-3 flex flex-wrap gap-2">
                {visibleStarters.map((question) => (
                  <button key={question} type="button" onClick={() => sendMessage(question)} disabled={isLoading}
                    className="rounded-full border border-pns-lilac bg-pns-mist px-3 py-1.5 text-xs font-bold text-pns-ink transition hover:border-pns-violet disabled:opacity-60">
                    {question}
                  </button>
                ))}
              </div>
              {error ? <p className="mb-3 rounded-2xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">{error}</p> : null}
              <form onSubmit={(event) => { event.preventDefault(); sendMessage(input); }} className="flex items-end gap-2">
                <label htmlFor="pns-assistant-message" className="sr-only">Ask a question</label>
                <textarea
                  id="pns-assistant-message"
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      sendMessage(input);
                    }
                  }}
                  rows={2}
                  placeholder="Type your question…"
                  className="min-h-[52px] flex-1 resize-none rounded-2xl border border-pns-lilac bg-pns-mist px-4 py-3 text-sm outline-none focus:border-pns-violet focus:bg-white"
                  disabled={isLoading}
                />
                <button type="submit" disabled={isLoading || !input.trim()} aria-label="Send"
                  className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-pns-ink text-white transition hover:bg-pns-violet disabled:opacity-50">
                  <Send size={19} />
                </button>
              </form>
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>

      <button type="button" onClick={() => setIsOpen((open) => !open)} aria-label="Ask PNS a question"
        className="flex min-h-14 items-center gap-3 rounded-full bg-pns-ink px-5 font-bold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-pns-violet">
        <MessageCircle size={20} />
        <span className="hidden sm:inline">Ask us a question</span>
      </button>
    </div>
  );
}
