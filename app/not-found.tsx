"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center select-none">
      {/* YouTube Error Illustration / Telescope Icon */}
      <div className="relative mb-6">
        <div className="w-28 h-28 rounded-full bg-yt-surface2 border border-yt-border flex items-center justify-center shadow-xl">
          <div className="w-16 h-12 bg-yt-red rounded-lg flex items-center justify-center">
            <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-white ml-0.5" />
          </div>
        </div>
        <div className="absolute -top-1 -right-1 px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-white text-black shadow">
          404
        </div>
      </div>

      <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">
        This page isn't available. Sorry about that.
      </h1>
      <p className="text-xs sm:text-sm text-yt-muted max-w-md mb-6 leading-relaxed">
        Try searching for projects, experiences, or playlists from Aarya's channel.
      </p>

      {/* In-page Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex items-center w-full max-w-md h-10 rounded-full border border-yt-border bg-yt-surface overflow-hidden mb-6 focus-within:border-yt-blue focus-within:ring-1 focus-within:ring-yt-blue transition-all"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search this channel"
          className="flex-1 h-full px-4 text-xs text-white bg-transparent placeholder-yt-muted focus:outline-none"
        />
        <button
          type="submit"
          className="flex items-center justify-center w-14 h-full bg-yt-surface2 hover:bg-yt-hover border-l border-yt-border text-white transition-colors"
        >
          <Search className="w-4 h-4" />
        </button>
      </form>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-colors shadow"
        >
          <Home className="w-4 h-4" />
          <span>Go to Channel Home</span>
        </Link>
        <Link
          href="/videos"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-yt-surface2 hover:bg-yt-hover text-white border border-yt-border transition-colors"
        >
          <span>Browse All Videos</span>
        </Link>
      </div>
    </div>
  );
}
