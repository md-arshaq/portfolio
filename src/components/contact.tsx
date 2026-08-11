"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Trophy, Flame, Copy, Check, ExternalLink, Send, FileText } from "lucide-react";

const socials = [
  {
    label: "Email",
    value: "arshaq2312@gmail.com",
    href: "mailto:arshaq2312@gmail.com",
    icon: Mail,
    isCopyable: true,
  },
  {
    label: "Resume",
    value: "View Resume",
    href: "https://drive.google.com/file/d/1SAFGN7iEH5fl-QciYmAc5vVxwZBQVX4P/view?usp=sharing",
    icon: FileText,
  },
  {
    label: "GitHub",
    value: "md-arshaq",
    href: "https://github.com/md-arshaq",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "mohammedarshaq7",
    href: "https://www.linkedin.com/in/mohammedarshaq7/",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  }
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("arshaq2312@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    const mailtoUrl = `mailto:arshaq2312@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(
      name || "Visitor"
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-left space-y-3 mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Get in Touch
        </h2>
        <p className="text-zinc-400 text-sm max-w-xl">
          Feel free to reach out for technical collaborations, job opportunities, or questions about G2P speech research.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Social Grid */}
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {socials.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900 border border-white/5 hover:border-accent-steel/30 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-zinc-800 border border-white/5 text-zinc-300 group-hover:text-accent-steel group-hover:border-accent-steel/20 transition-all">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-500">{item.label}</div>
                      <div className="text-xs font-bold text-white mt-0.5 max-w-[130px] truncate group-hover:text-accent-steel transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </div>

                  {item.isCopyable ? (
                    <button
                      onClick={copyEmail}
                      className="p-1.5 rounded-lg bg-zinc-800 border border-white/5 text-zinc-400 hover:text-white hover:border-accent-steel/20 transition-all"
                      title="Copy Email"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-zinc-800 border border-white/5 text-zinc-400 hover:text-white hover:border-accent-steel/20 transition-all"
                      title={`Open ${item.label}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-zinc-900 border border-white/5 hover:border-accent-steel/20 flex items-center justify-between text-xs font-mono transition-colors group">
            <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">arshaq2312@gmail.com</span>
            <button
              onClick={copyEmail}
              className="px-3 py-1 rounded bg-white hover:bg-accent-steel hover:text-zinc-950 text-zinc-950 font-bold transition-all shadow-[0_4px_12px_rgba(255,255,255,0.05)]"
            >
              {copied ? "Copied" : "Copy Address"}
            </button>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-6">
          <div className="minimal-card p-6">
            <h3 className="text-sm font-bold text-white mb-4">
              Send Email Draft
            </h3>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Alex Mercer"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/5 focus:border-accent-steel/30 text-white text-xs font-mono outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/5 focus:border-accent-steel/30 text-white text-xs font-mono outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-zinc-500 mb-1">
                  Message Body
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Arshaq, I'd like to collaborate..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/5 focus:border-accent-steel/30 text-white text-xs font-mono outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-white hover:bg-accent-steel hover:text-zinc-950 text-zinc-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-[0_4px_12px_rgba(255,255,255,0.05)] hover:scale-[1.01]"
              >
                <span>{sent ? "Opening..." : "Prepare Email"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}