"use client";

import React, { useState } from "react";
import { X, Send, Mail, Linkedin, Github, FileDown, CheckCircle2 } from "lucide-react";
import { useChannel } from "../context/ChannelContext";
import { socialLinks } from "@/data/social-links";

export const ContactModal: React.FC = () => {
  const { isContactModalOpen, closeContactModal } = useChannel();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (!isContactModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill out all required fields.");
      return;
    }
    setError("");

    // Simulate successful submission and prepare direct mailto fallback
    setSubmitted(true);

    const mailtoUrl = `mailto:${socialLinks.email}?subject=${encodeURIComponent(
      form.subject || `Message from ${form.name}`
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;

    // Optional mailto dispatch for guaranteed contact
    setTimeout(() => {
      window.open(mailtoUrl, "_blank");
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="w-full max-w-xl bg-yt-surface border border-yt-border rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-yt-border shrink-0">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-white">
              LET'S BUILD SOMETHING MEANINGFUL.
            </h3>
            <p className="text-xs text-yt-muted mt-0.5">
              "Interested in building products, exploring AI, or solving interesting problems together? Let's connect."
            </p>
          </div>
          <button
            onClick={closeContactModal}
            className="p-1.5 text-yt-muted hover:text-white rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* Quick Contact Links Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <a
              href={`mailto:${socialLinks.email}`}
              className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-yt-bg border border-yt-border hover:border-yt-blue transition-colors text-center"
            >
              <Mail className="w-4 h-4 text-yt-blue mb-1" />
              <span className="text-[11px] font-semibold text-white">Email</span>
              <span className="text-[9px] text-yt-muted truncate w-full">aaryakhabale</span>
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-yt-bg border border-yt-border hover:border-[#0A66C2] transition-colors text-center"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2] mb-1" />
              <span className="text-[11px] font-semibold text-white">LinkedIn</span>
              <span className="text-[9px] text-yt-muted truncate w-full">Connect</span>
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-yt-bg border border-yt-border hover:border-white transition-colors text-center"
            >
              <Github className="w-4 h-4 text-white mb-1" />
              <span className="text-[11px] font-semibold text-white">GitHub</span>
              <span className="text-[9px] text-yt-muted truncate w-full">@aaryak</span>
            </a>

            <a
              href={socialLinks.resumePath}
              download="Aarya_Khabale_Resume.pdf"
              className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-yt-bg border border-yt-border hover:border-yt-red transition-colors text-center"
            >
              <FileDown className="w-4 h-4 text-yt-red mb-1" />
              <span className="text-[11px] font-semibold text-white">Resume</span>
              <span className="text-[9px] text-yt-muted truncate w-full">PDF 2026/27</span>
            </a>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="p-8 text-center bg-yt-bg rounded-2xl border border-yt-border space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
              <h4 className="text-lg font-bold text-white">Message Ready to Send!</h4>
              <p className="text-xs text-yt-muted max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out! Opening your default email client to send this directly to{" "}
                <span className="text-yt-blue font-mono font-medium">{socialLinks.email}</span>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  closeContactModal();
                }}
                className="mt-4 px-5 py-2 text-xs font-semibold bg-white text-black rounded-full hover:bg-zinc-200"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-2.5 rounded-lg bg-red-950/50 border border-red-800 text-xs text-red-200">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-yt-muted mb-1">
                    Your Name <span className="text-yt-red">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Sarah Connor"
                    className="w-full px-3 py-2 text-xs text-white bg-yt-bg border border-yt-border rounded-xl focus:border-yt-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-yt-muted mb-1">
                    Your Email <span className="text-yt-red">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="e.g. sarah@company.com"
                    className="w-full px-3 py-2 text-xs text-white bg-yt-bg border border-yt-border rounded-xl focus:border-yt-blue focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-yt-muted mb-1">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="e.g. Product Internship / Collaboration / AI Engineering"
                  className="w-full px-3 py-2 text-xs text-white bg-yt-bg border border-yt-border rounded-xl focus:border-yt-blue focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-yt-muted mb-1">
                  Message <span className="text-yt-red">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Write your note or question here..."
                  className="w-full px-3 py-2 text-xs text-white bg-yt-bg border border-yt-border rounded-xl focus:border-yt-blue focus:outline-none resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeContactModal}
                  className="px-4 py-2 text-xs font-semibold text-yt-muted hover:text-white rounded-full transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2 text-xs font-semibold bg-yt-blue hover:bg-sky-400 text-black rounded-full transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
