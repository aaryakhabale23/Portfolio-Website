"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Play,
  Flame,
  ChevronRight,
  Briefcase,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  ListVideo,
} from "lucide-react";
import { ChannelHeader } from "@/components/layout/ChannelHeader";
import { ChannelTabs } from "@/components/channel/ChannelTabs";
import { FeaturedTrailer } from "@/components/channel/FeaturedTrailer";
import { CommunityShelf } from "@/components/channel/CommunityShelf";
import { MetricsGrid } from "@/components/channel/MetricsGrid";
import { VideoCard } from "@/components/youtube/VideoCard";
import { PlaylistCard } from "@/components/youtube/PlaylistCard";
import { ShareModal } from "@/components/youtube/ShareModal";
import { projectsData, ProjectCaseStudy } from "@/data/projects";
import { experienceData } from "@/data/experience";
import { playlistsData } from "@/data/playlists";

export default function ChannelHomePage() {
  const [selectedShareProject, setSelectedShareProject] = useState<ProjectCaseStudy | null>(null);

  // Featured 3 projects: BioLens, EcoControl, Livix
  const featuredProjects = projectsData.filter((p) =>
    ["biolens", "ecocontrol", "livix"].includes(p.slug)
  );

  // Darukaa experience item
  const darukaaExp = experienceData.find((e) => e.id === "exp-1");

  // GDG experience item
  const gdgExp = experienceData.find((e) => e.id === "exp-2");

  return (
    <div className="w-full min-h-screen bg-yt-bg select-none">
      {/* 1. Channel Header & Identity */}
      <ChannelHeader />

      {/* 2. Channel Navigation Tabs */}
      <ChannelTabs />

      {/* 3. Main Home Channel Content Stream */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
        {/* A. Channel Trailer */}
        <FeaturedTrailer />

        {/* B. Featured Projects Shelf (BioLens, EcoControl, Livix) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-yt-border/50 pb-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-yt-red/20 text-yt-red">
                <Flame className="w-5 h-5 fill-yt-red" />
              </div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/videos"
              className="text-xs font-semibold text-yt-blue hover:underline flex items-center gap-1"
            >
              <span>View all projects</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((project) => (
              <VideoCard
                key={project.id}
                project={project}
                onShare={(p) => setSelectedShareProject(p)}
              />
            ))}
          </div>
        </section>

        {/* C. Featured Professional Experience Spotlight (Darukaa.earth) */}
        {darukaaExp && (
          <section className="p-5 sm:p-6 rounded-2xl bg-yt-surface border border-yt-border space-y-4">
            <div className="flex items-center justify-between border-b border-yt-border/40 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                    FEATURED PROFESSIONAL EXPERIENCE
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {darukaaExp.company} — {darukaaExp.role}
                  </h3>
                </div>
              </div>
              <span className="text-xs text-yt-muted hidden sm:block">
                {darukaaExp.period}
              </span>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Thumbnail Left */}
              <Link
                href="/watch/darukaa-product-features"
                className="relative w-full lg:w-96 aspect-video rounded-xl overflow-hidden bg-black shrink-0 group border border-yt-border shadow-md"
              >
                <img
                  src="/thumbnails/darukaa.svg"
                  alt="Darukaa Experience"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-yt-red flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[11px] font-bold bg-black/80 text-white">
                  {darukaaExp.duration}
                </div>
              </Link>

              {/* Overview & Highlights Right */}
              <div className="flex-1 space-y-3">
                <div className="text-xs text-yt-blue font-semibold">
                  "FROM PRODUCT REQUIREMENTS TO PRODUCTION"
                </div>
                <p className="text-xs sm:text-sm text-yt-text/90 leading-relaxed">
                  {darukaaExp.overview} Owned 3 production features (User-Guided Flow, Plant Identification, and Tree DBH Measurement) alongside machine learning inference endpoints.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  {darukaaExp.metrics.map((m, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-yt-bg border border-yt-border text-center">
                      <div className="text-base font-black text-white font-mono">{m.value}</div>
                      <div className="text-[10px] text-yt-muted truncate">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href="/watch/darukaa-product-features"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-colors"
                  >
                    <span>Watch Darukaa Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* D. Leadership Highlight (GDG on Campus NMIMS) */}
        {gdgExp && (
          <section className="p-5 sm:p-6 rounded-2xl bg-yt-surface border border-yt-border space-y-4">
            <div className="flex items-center justify-between border-b border-yt-border/40 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">
                    COMMUNITY &amp; LEADERSHIP SPOTLIGHT
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {gdgExp.company} — {gdgExp.role}
                  </h3>
                </div>
              </div>
              <span className="text-xs text-yt-muted hidden sm:block">
                {gdgExp.period}
              </span>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Thumbnail Left */}
              <Link
                href="/experience"
                className="relative w-full lg:w-96 aspect-video rounded-xl overflow-hidden bg-black shrink-0 group border border-yt-border shadow-md"
              >
                <img
                  src="/thumbnails/gdg.svg"
                  alt="GDG on Campus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-yt-red flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[11px] font-bold bg-black/80 text-white">
                  {gdgExp.duration}
                </div>
              </Link>

              {/* Highlights Right */}
              <div className="flex-1 space-y-3">
                <div className="text-xs text-amber-400 font-semibold">
                  "BUILDING A TECH COMMUNITY FROM THE GROUND UP"
                </div>
                <p className="text-xs sm:text-sm text-yt-text/90 leading-relaxed">
                  Led a 25-member organizing committee, directed NMIMS's flagship 24-hour hackathon (HackX) with 600+ registrations, 50+ shortlisted teams, and ₹2L+ sponsorships, scaling a 350+ member community.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  {gdgExp.metrics.slice(0, 4).map((m, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-yt-bg border border-yt-border text-center">
                      <div className="text-base font-black text-white font-mono">{m.value}</div>
                      <div className="text-[10px] text-yt-muted truncate">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href="/experience"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-colors"
                  >
                    <span>Explore Leadership Journey</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* E. Currently Exploring Shelf */}
        <CommunityShelf />

        {/* F. Curated Playlists Shelf */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-yt-border/50 pb-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                <ListVideo className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                Curated Channel Playlists
              </h2>
            </div>
            <Link
              href="/playlists"
              className="text-xs font-semibold text-yt-blue hover:underline flex items-center gap-1"
            >
              <span>View all playlists</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {playlistsData.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </section>

        {/* G. Verified Achievements / Most Popular Metrics */}
        <MetricsGrid />
      </div>

      {/* Share Modal */}
      {selectedShareProject && (
        <ShareModal
          title={selectedShareProject.title}
          url={typeof window !== "undefined" ? `${window.location.origin}/watch/${selectedShareProject.slug}` : ""}
          isOpen={!!selectedShareProject}
          onClose={() => setSelectedShareProject(null)}
        />
      )}
    </div>
  );
}
