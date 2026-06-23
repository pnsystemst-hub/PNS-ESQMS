import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, LoaderCircle, MessageCircle, Send, Sparkles, X } from "lucide-react";

const starterQuestions = [
  "What is ASCEND?",
  "How does PNS support learners?",
  "How can a school partner with PNS?",
  "What makes PNS-ESQMS different?"
];

const welcomeMessage = {
  role: "assistant",
  content:
    "Hello, I am ASCEND Assistant. I can help you understand PNS, PNS-ESQMS, ASCEND, learner support, diagnostics at a public level, and how to start a serious enquiry."
};

function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
          isUser
            ? "bg-gradient-to-r from-pns-blue to-pns-bright text-white"
            : "border border-sky-100 bg-white text-slate-700"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}

export default function AscendAssistant() {
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
      const response = await fetch("/api/ascend-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-8) })
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || "The assistant could not respond right now.");
      }

      setMessages((current) => [...current, { role: "assistant", content: data.reply }]);
    } catch (caughtError) {
      setError(caughtError.message || "Something went wrong. Please try again, or contact PNS directly.");
    } finally {
      setIsLoading(false);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="fixed bottom-4 right-4 z-[80] sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen ? (
          <motion.section
            key="assistant-panel"
            initial={{ opacity: 0, y: 22, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-3 bottom-24 mx-auto flex max-h-[min(720px,calc(100vh-120px))] max-w-[430px] flex-col overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-[0_28px_90px_rgba(6,26,53,0.22)] sm:inset-x-auto sm:right-6 sm:mx-0 sm:w-[430px]"
            aria-label="ASCEND Assistant chat panel"
          >
            <div className="bg-gradient-to-br from-pns-navy via-pns-blue to-pns-bright p-5 text-white">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/14 text-white shadow-inner">
                    <Bot size={25} />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-blue-100">ASCEND Assistant</p>
                    <h2 className="mt-1 text-xl font-black">Ask about PNS and ASCEND</h2>
                  </div>
                </div>
                <button type="button" onClick={() => setIsOpen(false)} className="rounded-full bg-white/12 p-2 transition hover:bg-white/20" aria-label="Close ASCEND Assistant">
                  <X size={19} />
                </button>
              </div>
              <p className="mt-4 text-sm leading-6 text-blue-50">
                Public guidance only. Internal PNS frameworks, protected methods, and confidential implementation details stay private.
              </p>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto bg-gradient-to-b from-sky-50/70 to-white p-4">
              {messages.map((message, index) => (
                <ChatMessage key={`${message.role}-${index}`} message={message} />
              ))}
              {isLoading ? (
                <div className="flex justify-start">
                  <div className="inline-flex items-center gap-2 rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm font-bold text-slate-600 shadow-sm">
                    <LoaderCircle className="animate-spin text-pns-blue" size={17} /> Thinking...
                  </div>
                </div>
              ) : null}
            </div>

            <div className="border-t border-sky-100 bg-white p-4">
              <div className="mb-3 flex flex-wrap gap-2">
                {visibleStarters.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => sendMessage(question)}
                    className="rounded-full border border-sky-100 bg-sky-50 px-3 py-2 text-left text-xs font-extrabold text-pns-blue transition hover:-translate-y-0.5 hover:border-amber-200 hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={isLoading}
                  >
                    {question}
                  </button>
                ))}
              </div>
              {error ? <p className="mb-3 rounded-2xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">{error}</p> : null}
              <form onSubmit={handleSubmit} className="flex items-end gap-2">
                <label htmlFor="ascend-assistant-message" className="sr-only">Ask ASCEND Assistant</label>
                <textarea
                  id="ascend-assistant-message"
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
                  placeholder="Ask a question about PNS, ASCEND, schools, parents, funders, or learner support..."
                  className="min-h-[52px] flex-1 resize-none rounded-2xl border border-sky-100 bg-slate-50 px-4 py-3 text-sm leading-6 text-pns-ink outline-none transition placeholder:text-slate-400 focus:border-pns-bright focus:bg-white focus:ring-4 focus:ring-sky-100"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-pns-navy text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-pns-blue disabled:cursor-not-allowed disabled:opacity-55"
                  aria-label="Send message to ASCEND Assistant"
                >
                  <Send size={19} />
                </button>
              </form>
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="group flex min-h-14 items-center gap-3 rounded-full bg-gradient-to-r from-pns-navy via-pns-blue to-pns-bright px-5 font-extrabold text-white shadow-[0_20px_60px_rgba(22,135,255,0.34)] transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-sky-200"
        aria-label="Talk to ASCEND Assistant"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/14 transition group-hover:scale-105">
          <MessageCircle size={20} />
        </span>
        <span className="hidden sm:inline">Talk to ASCEND Assistant</span>
        <Sparkles size={17} className="text-amber-200" />
      </button>
    </div>
  );
}