import React, { useEffect, useState } from 'react';
import { Check, Copy, FileText, Mail, MapPin, Phone, Send, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CONTACT_EMAIL = 'sourovchowdhury177@gmail.com';
const CONTACT_PHONE = '+880 1839373953';

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState('Product Design');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
          onClick={resetAndClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="w-full max-w-xl rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/80 bg-[#0C0C0C] p-6 sm:p-8 md:p-10 text-[#D7E2EA] my-auto"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 mb-1">
                  Sourov Chowdhury · Product Designer
                </p>
                <h2
                  id="contact-modal-title"
                  className="hero-heading text-3xl sm:text-4xl font-black uppercase tracking-tight leading-none"
                >
                  Let&apos;s Collaborate
                </h2>
              </div>
              <button
                type="button"
                onClick={resetAndClose}
                aria-label="Close contact dialog"
                className="w-10 h-10 rounded-full border border-[#D7E2EA]/30 flex items-center justify-center text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-2.5 py-3.5 px-4 mb-5 rounded-2xl border border-[#D7E2EA]/15 bg-[#141414]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2.5 text-sm text-[#D7E2EA] hover:underline"
                >
                  <Mail className="w-4 h-4 text-[#D7E2EA]/60 shrink-0" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#D7E2EA]/80 hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-[#D7E2EA]/70">
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#D7E2EA]/55" />
                  {CONTACT_PHONE}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D7E2EA]/55" />
                  Dhaka, Bangladesh
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1 border-t border-[#D7E2EA]/10 text-xs uppercase tracking-wider">
                <a
                  href="https://linkedin.com/in/sourov-chowdhury"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D7E2EA]/80 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://dribbble.com/Sourov_c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D7E2EA]/80 hover:text-white transition-colors"
                >
                  Dribbble
                </a>
                <a
                  href="/assets/aistudio/Sourov_Chowdhury_971723bb.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#BBCCD7] hover:text-white transition-colors ml-auto"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume PDF</span>
                </a>
              </div>
            </div>

            {submitted ? (
              <div className="py-10 text-center flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#D7E2EA] flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#D7E2EA]" />
                </div>
                <h3 className="text-xl font-medium uppercase tracking-wide">
                  Inquiry Received
                </h3>
                <p className="text-sm text-[#D7E2EA]/70 max-w-sm leading-relaxed">
                  Thank you, {name}. Your brief for {scope} has been noted and Sourov will get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="mt-2 rounded-full border-2 border-[#D7E2EA] px-8 py-2.5 text-xs font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-1.5 text-xs uppercase tracking-wider text-[#D7E2EA]/70">
                    Name
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="rounded-xl border border-[#D7E2EA]/25 bg-[#141414] px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/35 focus:outline-none focus:border-[#D7E2EA]"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-xs uppercase tracking-wider text-[#D7E2EA]/70">
                    Email
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="rounded-xl border border-[#D7E2EA]/25 bg-[#141414] px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/35 focus:outline-none focus:border-[#D7E2EA]"
                    />
                  </label>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/70">
                    Scope
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Product Design',
                      'UI/UX Design',
                      'Design Systems',
                      'SaaS / Web App',
                      'Project Coordination',
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setScope(item)}
                        className={`rounded-full px-3.5 py-1.5 text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                          scope === item
                            ? 'bg-[#D7E2EA] text-[#0C0C0C] font-medium'
                            : 'border border-[#D7E2EA]/25 text-[#D7E2EA]/75 hover:border-[#D7E2EA]/60'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="flex flex-col gap-1.5 text-xs uppercase tracking-wider text-[#D7E2EA]/70">
                  Project Brief
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your product goals, timeline, and scope..."
                    className="rounded-xl border border-[#D7E2EA]/25 bg-[#141414] px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/35 focus:outline-none focus:border-[#D7E2EA] resize-none"
                  />
                </label>

                <button
                  type="submit"
                  className="contact-btn mt-2 rounded-full py-3.5 px-8 text-xs sm:text-sm font-medium uppercase tracking-widest text-white inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
