"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, X } from "lucide-react";

export const ChannelTabs: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [showInChannelSearch, setShowInChannelSearch] = useState(false);
  const [inlineQuery, setInlineQuery] = useState("");

  const tabs = [
    { label: "HOME", href: "/" },
    { label: "VIDEOS", href: "/videos" },
    { label: "PLAYLISTS", href: "/playlists" },
    { label: "EXPERIENCE", href: "/experience" },
    { label: "ABOUT", href: "/about" },
  ];

  const handleInlineSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inlineQuery.trim()) return;
    router.push(`/search?q=${encodeURIComponent(inlineQuery.trim())}`);
  };

  return (
    <div className="w-full bg-yt-bg border-b border-yt-border/50 sticky top-14 z-30 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar">
          {/* Channel Tabs */}
          <nav className="flex items-center gap-1 sm:gap-6 min-w-max">
            {tabs.map((tab) => {
              const isActive =
                tab.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(tab.href);

              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`relative py-3.5 px-3 text-xs sm:text-sm font-bold tracking-wider transition-colors ${
                    isActive ? "text-white" : "text-yt-muted hover:text-yt-text"
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <div className="absolute bottom-0 inset-x-0 h-0.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* In-Channel Search Icon / Input */}
          <div className="flex items-center ml-4 shrink-0">
            {showInChannelSearch ? (
              <form onSubmit={handleInlineSearch} className="flex items-center gap-1 bg-yt-surface2 border border-yt-border rounded-full px-3 py-1">
                <Search className="w-3.5 h-3.5 text-yt-muted" />
                <input
                  type="text"
                  autoFocus
                  value={inlineQuery}
                  onChange={(e) => setInlineQuery(e.target.value)}
                  placeholder="Search channel..."
                  className="bg-transparent text-xs text-white focus:outline-none w-32 sm:w-44 placeholder-yt-muted"
                />
                <button
                  type="button"
                  onClick={() => {
                    setShowInChannelSearch(false);
                    setInlineQuery("");
                  }}
                  className="text-yt-muted hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setShowInChannelSearch(true)}
                title="Search this channel"
                aria-label="Search channel"
                className="p-2 text-yt-muted hover:text-white hover:bg-yt-surface2 rounded-full transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
