"use client";

import React, { useState } from "react";
import { X, Copy, Check, Linkedin, Twitter, QrCode } from "lucide-react";

interface ShareModalProps {
  title: string;
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ title, url, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `Check out ${title} by Aarya Khabale:`
      )}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-yt-surface border border-yt-border rounded-2xl p-6 shadow-2xl space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-yt-border">
          <h3 className="text-base font-bold text-white">Share Case Study</h3>
          <button
            onClick={onClose}
            className="p-1 text-yt-muted hover:text-white rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Social Share Buttons */}
        <div className="flex items-center justify-around py-2">
          <button
            onClick={shareLinkedIn}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#0A66C2]/20 border border-[#0A66C2]/40 flex items-center justify-center text-[#0A66C2] group-hover:scale-110 transition-transform">
              <Linkedin className="w-5 h-5" />
            </div>
            <span className="text-xs text-yt-muted group-hover:text-white">LinkedIn</span>
          </button>

          <button
            onClick={shareTwitter}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-12 h-12 rounded-full bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
              <Twitter className="w-5 h-5" />
            </div>
            <span className="text-xs text-yt-muted group-hover:text-white">Twitter / X</span>
          </button>

          <button
            onClick={() => setShowQr((v) => !v)}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-12 h-12 rounded-full bg-yt-surface2 border border-yt-border flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <QrCode className="w-5 h-5" />
            </div>
            <span className="text-xs text-yt-muted group-hover:text-white">QR Code</span>
          </button>
        </div>

        {/* QR Code view toggle */}
        {showQr && (
          <div className="flex flex-col items-center justify-center p-4 bg-yt-bg rounded-xl border border-yt-border">
            <div className="w-36 h-36 bg-white p-2 rounded-lg flex items-center justify-center">
              <div className="text-center font-mono text-[10px] text-black">
                [QR Preview: {url}]
              </div>
            </div>
            <span className="text-[11px] text-yt-muted mt-2">Scan to view on mobile</span>
          </div>
        )}

        {/* Copy Link Input Bar */}
        <div className="flex items-center gap-2 p-1.5 bg-yt-bg border border-yt-border rounded-xl">
          <input
            type="text"
            readOnly
            value={url}
            className="flex-1 px-3 py-1 bg-transparent text-xs text-yt-muted focus:outline-none"
          />
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-yt-blue hover:bg-sky-400 text-black font-semibold text-xs rounded-lg transition-colors"
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
      </div>
    </div>
  );
};
