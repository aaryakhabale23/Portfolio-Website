"use client";

import React, { useState } from "react";
import { TrendingUp, Flame, Award, Zap, Users, ShieldCheck, Check } from "lucide-react";
import { achievementsData } from "@/data/achievements";

export const MetricsGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "AI & ML", "Community & Leadership", "Operations"];

  const filtered =
    activeFilter === "All"
      ? achievementsData
      : achievementsData.filter((a) => a.category === activeFilter);

  return (
    <div className="w-full my-8 select-none">
      {/* Shelf Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-yt-red/15 text-yt-red">
            <Flame className="w-5 h-5 fill-yt-red" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Most Popular — Verified Achievements &amp; Impact
            </h3>
            <p className="text-xs text-yt-muted">
              Measurable milestones verified against production projects and official leadership roles
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                activeFilter === cat
                  ? "bg-white text-black"
                  : "bg-yt-surface2 text-yt-muted hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between p-4 rounded-xl bg-yt-surface border border-yt-border hover:border-yt-borderLight transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-yt-surface2 text-yt-muted border border-yt-border/50">
                  {item.projectOrOrg}
                </span>
                {item.badge && (
                  <span className="text-[10px] font-semibold text-yt-red">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Big YouTube-style metric stat */}
              <div className="text-2xl sm:text-3xl font-black text-white group-hover:text-yt-blue transition-colors mb-1 font-mono">
                {item.metric}
              </div>

              <div className="text-xs font-bold text-yt-text mb-1.5">
                {item.label}
              </div>

              <p className="text-[11px] text-yt-muted leading-relaxed">
                {item.context}
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-yt-border/40 flex items-center justify-between text-[10px] text-yt-muted font-mono">
              <span>{item.category}</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <Check className="w-3 h-3" />
                Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
