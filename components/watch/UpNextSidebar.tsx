"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Play } from "lucide-react";
import { projectsData, ProjectCaseStudy } from "@/data/projects";

interface UpNextSidebarProps {
  currentSlug: string;
}

export const UpNextSidebar: React.FC<UpNextSidebarProps> = ({ currentSlug }) => {
  const [activeChip, setActiveChip] = useState("All");

  const chips = ["All", "From Aarya", "Related"];

  // Filter out the current playing video
  const otherProjects = projectsData.filter((p) => p.slug !== currentSlug);

  return (
    <div className="w-full space-y-4 select-none">
      {/* Top Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {chips.map((chip) => (
          <button
            key={chip}
            onClick={() => setActiveChip(chip)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeChip === chip
                ? "bg-white text-black"
                : "bg-yt-surface2 text-yt-text hover:bg-yt-hover"
            }`}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Up Next Project Cards (Compact Horizontal YouTube Layout) */}
      <div className="space-y-3">
        {otherProjects.map((project) => {
          const thumbnailSrc =
            project.slug === "biolens"
              ? "/thumbnails/biolens.svg"
              : project.slug === "ecocontrol"
              ? "/thumbnails/ecocontrol.svg"
              : project.slug === "livix"
              ? "/thumbnails/livix.svg"
              : project.slug === "darukaa-product-features"
              ? "/thumbnails/darukaa.svg"
              : project.slug === "bird-inference"
              ? "/thumbnails/bird-api.svg"
              : project.slug === "product-design"
              ? "/thumbnails/product-design.svg"
              : "/thumbnails/trailer.svg";

          return (
            <Link
              key={project.id}
              href={`/watch/${project.slug}`}
              className="flex gap-2.5 group rounded-xl p-1.5 hover:bg-yt-surface2/60 transition-colors"
            >
              {/* Thumbnail Left */}
              <div className="relative w-40 aspect-video rounded-lg overflow-hidden bg-yt-surface2 shrink-0 border border-yt-border/40">
                <img
                  src={thumbnailSrc}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute bottom-1 right-1 px-1 rounded text-[10px] font-bold bg-black/80 text-white">
                  {project.duration}
                </div>
              </div>

              {/* Info Right */}
              <div className="flex-1 min-w-0 pr-1">
                <h4 className="text-xs sm:text-sm font-semibold text-white line-clamp-2 leading-snug group-hover:text-yt-blue transition-colors">
                  {project.title}
                </h4>

                <div className="flex items-center gap-1 text-[11px] text-yt-muted mt-1">
                  <span>Aarya Khabale</span>
                  <span className="flex items-center justify-center w-2.5 h-2.5 rounded-full bg-yt-muted text-yt-bg">
                    <Check className="w-1.5 h-1.5 stroke-[3]" />
                  </span>
                </div>

                <div className="text-[11px] text-yt-muted">
                  {project.views} • {project.uploadDate}
                </div>

                <div className="mt-1">
                  <span className="inline-block px-1.5 py-0.2 rounded text-[9px] font-semibold bg-yt-surface text-yt-blue border border-yt-border/40">
                    {project.categoryTag}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
