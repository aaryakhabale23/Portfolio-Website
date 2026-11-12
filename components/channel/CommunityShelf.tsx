"use client";

import React from "react";
import { Compass, Sparkles, Flame, CheckCircle, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";
import { useChannel } from "../context/ChannelContext";

export const CommunityShelf: React.FC = () => {
  const { openContactModal } = useChannel();

  return (
    <div className="w-full my-8 select-none">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-yt-surface2 text-yt-red">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Currently Exploring
            </h3>
            <p className="text-xs text-yt-muted">
              Active engineering investigations, product frameworks &amp; emerging technologies
            </p>
          </div>
        </div>

        <button
          onClick={openContactModal}
          className="text-xs font-semibold text-yt-blue hover:underline hidden sm:block"
        >
          Suggest a topic / Collaborate →
        </button>
      </div>

      {/* Grid of Exploring Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {profileData.currentlyExploring.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-4 rounded-xl bg-yt-surface border border-yt-border/70 hover:border-yt-border transition-all hover:bg-yt-surface2/60 group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-yt-surface2 text-yt-blue border border-yt-border/50">
                  {item.category}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {item.status}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-yt-blue transition-colors mb-1.5">
                {item.topic}
              </h4>
              <p className="text-xs text-yt-muted leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-yt-border/40 flex items-center justify-between text-[11px] text-yt-muted">
              <span>Channel Shelf</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-yt-muted group-hover:text-white transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
