"use client";

import React from "react";
import Link from "next/link";
import { Play, Sparkles, Check, ArrowRight } from "lucide-react";
import { useChannel } from "../context/ChannelContext";
import { profileData } from "@/data/profile";

export const FeaturedTrailer: React.FC = () => {
  const { openTrailerModal } = useChannel();

  return (
    <div className="w-full bg-yt-surface border border-yt-border rounded-2xl p-4 sm:p-6 mb-8 shadow-sm select-none">
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* Left: 16:9 Trailer Thumbnail with Play Button */}
        <div
          onClick={openTrailerModal}
          className="relative w-full lg:w-[480px] aspect-video rounded-xl overflow-hidden bg-black shrink-0 cursor-pointer group shadow-lg border border-yt-border/50"
        >
          <img
            src="/thumbnails/trailer.svg"
            alt="Get to know Aarya"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Hover Play Button */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-yt-red text-white shadow-2xl group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 fill-white ml-1" />
            </div>
          </div>

          {/* Badge */}
          <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-yt-red text-white tracking-widest uppercase">
            CHANNEL TRAILER
          </div>

          <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[11px] font-bold bg-black/80 text-white backdrop-blur-sm">
            03:30
          </div>
        </div>

        {/* Right: Trailer Details & Copy */}
        <div className="flex-1 space-y-3 w-full">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold tracking-widest text-yt-red uppercase px-2 py-0.5 rounded bg-yt-red/10 border border-yt-red/20">
              FEATURED PRESENTATION
            </span>
            <span className="text-xs text-yt-muted">• 18.4K views • 2 weeks ago</span>
          </div>

          <h2
            onClick={openTrailerModal}
            className="text-xl sm:text-2xl font-black text-white hover:text-yt-blue transition-colors cursor-pointer"
          >
            GET TO KNOW AARYA
          </h2>

          <p className="text-sm text-yt-muted italic font-medium">
            "An introduction to what I build, how I think, and what I'm exploring."
          </p>

          <p className="text-xs sm:text-sm text-yt-text/80 leading-relaxed line-clamp-3">
            {profileData.positioning} My experience spans product feature ownership, AI/ML engineering, full-stack and mobile development, and community leadership at NMIMS and Darukaa.earth.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={openTrailerModal}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-white text-black hover:bg-zinc-200 transition-colors active:scale-95 shadow"
            >
              <Play className="w-3.5 h-3.5 fill-black" />
              <span>Watch Introduction</span>
            </button>

            <Link
              href="/about"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-yt-surface2 hover:bg-yt-hover text-yt-text border border-yt-border transition-colors"
            >
              <span>Read Full Channel Bio</span>
              <ArrowRight className="w-3.5 h-3.5 text-yt-muted" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
