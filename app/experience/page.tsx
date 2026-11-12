"use client";

import React from "react";
import Link from "next/link";
import {
  Briefcase,
  Play,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Users,
  Award,
  ChevronRight,
} from "lucide-react";
import { ChannelHeader } from "@/components/layout/ChannelHeader";
import { ChannelTabs } from "@/components/channel/ChannelTabs";
import { MetricsGrid } from "@/components/channel/MetricsGrid";
import { experienceData } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="w-full min-h-screen bg-yt-bg select-none">
      <ChannelHeader />
      <ChannelTabs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        <div className="border-b border-yt-border/50 pb-3">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <Briefcase className="w-5 h-5 text-yt-red" />
            <span>Professional Journey &amp; Experience</span>
          </h2>
          <p className="text-xs text-yt-muted mt-1">
            Product feature ownership, artificial intelligence engineering, community leadership, and strategic operations
          </p>
        </div>

        {/* Video List of Experiences */}
        <div className="space-y-6">
          {experienceData.map((exp, idx) => {
            const thumbnailSrc =
              exp.id === "exp-1"
                ? "/thumbnails/darukaa.svg"
                : exp.id === "exp-2"
                ? "/thumbnails/gdg.svg"
                : "/thumbnails/solaris.svg";

            const watchLink =
              exp.id === "exp-1"
                ? "/watch/darukaa-product-features"
                : exp.id === "exp-2"
                ? "/watch/biolens" // or trailer
                : "/watch/product-design";

            return (
              <div
                key={exp.id}
                className={`flex flex-col md:flex-row gap-6 p-5 sm:p-6 rounded-2xl bg-yt-surface border transition-all ${
                  exp.featured
                    ? "border-yt-border shadow-lg"
                    : "border-yt-border/60 hover:border-yt-border"
                }`}
              >
                {/* 16:9 Experience Video Card on Left */}
                <Link
                  href={watchLink}
                  className="relative w-full md:w-80 lg:w-96 aspect-video rounded-xl overflow-hidden bg-black shrink-0 group border border-yt-border shadow-md"
                >
                  <img
                    src={thumbnailSrc}
                    alt={exp.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-yt-red flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[11px] font-bold bg-black/80 text-white">
                    {exp.duration}
                  </div>
                </Link>

                {/* Experience Content on Right */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="text-[10px] font-bold tracking-wider text-yt-red uppercase">
                        {exp.type.toUpperCase()}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-yt-blue">
                        {exp.company}
                      </div>
                    </div>

                    <div className="text-right text-xs text-yt-muted">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 justify-end mt-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-yt-text/90 leading-relaxed">
                    {exp.overview}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 text-xs text-yt-muted pt-1">
                    {exp.highlights.slice(0, 4).map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Verified Metrics Chips */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    {exp.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-lg bg-yt-bg border border-yt-border text-center"
                      >
                        <div className="text-sm sm:text-base font-black text-white font-mono">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-yt-muted truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.skillsGained.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-yt-surface2 text-yt-muted border border-yt-border/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Achievements Shelf */}
        <MetricsGrid />
      </div>
    </div>
  );
}
