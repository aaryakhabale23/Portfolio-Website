"use client";

import React, { useState } from "react";
import { ChannelHeader } from "@/components/layout/ChannelHeader";
import { ChannelTabs } from "@/components/channel/ChannelTabs";
import { VideoCard } from "@/components/youtube/VideoCard";
import { ShareModal } from "@/components/youtube/ShareModal";
import { projectsData, ProjectCaseStudy } from "@/data/projects";
import { ArrowUpDown } from "lucide-react";

export default function VideosPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState<"latest" | "popular">("latest");
  const [selectedShareProject, setSelectedShareProject] = useState<ProjectCaseStudy | null>(null);

  const filterChips = [
    "All",
    "Artificial Intelligence",
    "Product Management",
    "Mobile Development",
    "Full Stack",
    "Sustainability",
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Artificial Intelligence")
      return p.category.toLowerCase().includes("ai") || p.technologies.some((t) => t.toLowerCase().includes("learning") || t.toLowerCase().includes("vision"));
    if (activeFilter === "Product Management")
      return p.category.toLowerCase().includes("product") || p.slug === "product-design" || p.slug === "darukaa-product-features";
    if (activeFilter === "Mobile Development")
      return p.category.toLowerCase().includes("mobile") || p.technologies.includes("React Native") || p.technologies.includes("Android SDK");
    if (activeFilter === "Full Stack")
      return p.category.toLowerCase().includes("backend") || p.technologies.includes("FastAPI") || p.technologies.includes("Cloud Firestore");
    if (activeFilter === "Sustainability")
      return p.category.toLowerCase().includes("sustainability") || p.slug === "ecocontrol";
    return true;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "popular") {
      const viewsA = parseFloat(a.views) || 0;
      const viewsB = parseFloat(b.views) || 0;
      return viewsB - viewsA;
    }
    return 0; // retain default order
  });

  return (
    <div className="w-full min-h-screen bg-yt-bg select-none">
      <ChannelHeader />
      <ChannelTabs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Filter Chips & Sort Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-yt-border/50 pb-4">
          {/* Horizontal Chips Carousel */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {filterChips.map((chip) => (
              <button
                key={chip}
                onClick={() => setActiveFilter(chip)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeFilter === chip
                    ? "bg-white text-black font-bold"
                    : "bg-yt-surface2 text-yt-text hover:bg-yt-hover"
                }`}
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Sort By Toggle */}
          <div className="flex items-center gap-2 shrink-0 text-xs text-yt-muted">
            <ArrowUpDown className="w-3.5 h-3.5" />
            <span>Sort by:</span>
            <button
              onClick={() => setSortBy("latest")}
              className={`font-semibold hover:text-white transition-colors ${
                sortBy === "latest" ? "text-white underline" : "text-yt-muted"
              }`}
            >
              Latest
            </button>
            <span>•</span>
            <button
              onClick={() => setSortBy("popular")}
              className={`font-semibold hover:text-white transition-colors ${
                sortBy === "popular" ? "text-white underline" : "text-yt-muted"
              }`}
            >
              Popular
            </button>
          </div>
        </div>

        {/* Video Grid (Authentic 3-4 columns on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
          {sortedProjects.map((project) => (
            <VideoCard
              key={project.id}
              project={project}
              onShare={(p) => setSelectedShareProject(p)}
            />
          ))}
        </div>

        {sortedProjects.length === 0 && (
          <div className="py-16 text-center space-y-2">
            <p className="text-base text-yt-muted">No projects found for "{activeFilter}".</p>
            <button
              onClick={() => setActiveFilter("All")}
              className="text-xs text-yt-blue hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

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
