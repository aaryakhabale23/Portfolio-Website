"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, Check, Play, Sparkles } from "lucide-react";
import { projectsData } from "@/data/projects";
import { experienceData } from "@/data/experience";
import { playlistsData } from "@/data/playlists";
import { skillsData } from "@/data/skills";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const q = query.toLowerCase().trim();

  // Search matching projects
  const matchingProjects = projectsData.filter((p) => {
    return (
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.technologies.some((t) => t.toLowerCase().includes(q)) ||
      p.highlights.some((h) => h.toLowerCase().includes(q))
    );
  });

  // Search matching experiences
  const matchingExperience = experienceData.filter((e) => {
    return (
      e.role.toLowerCase().includes(q) ||
      e.company.toLowerCase().includes(q) ||
      e.overview.toLowerCase().includes(q) ||
      e.skillsGained.some((s) => s.toLowerCase().includes(q))
    );
  });

  // Search matching playlists
  const matchingPlaylists = playlistsData.filter((pl) => {
    return (
      pl.title.toLowerCase().includes(q) ||
      pl.description.toLowerCase().includes(q) ||
      pl.focus.toLowerCase().includes(q)
    );
  });

  // Search matching skills
  const matchingSkills = skillsData
    .flatMap((c) => c.skills)
    .filter((s) => s.toLowerCase().includes(q));

  const totalResults =
    matchingProjects.length + matchingExperience.length + matchingPlaylists.length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 select-none">
      {/* Search Header */}
      <div className="flex items-center gap-3 border-b border-yt-border/50 pb-4 mb-6">
        <Search className="w-5 h-5 text-yt-muted" />
        <div>
          <h1 className="text-lg font-bold text-white">
            Search results for <span className="text-yt-blue">"{query}"</span>
          </h1>
          <p className="text-xs text-yt-muted">
            Found {totalResults} result{totalResults === 1 ? "" : "s"} across channel portfolio
          </p>
        </div>
      </div>

      {/* Matching Skills Quick Bar */}
      {matchingSkills.length > 0 && (
        <div className="p-3 mb-6 rounded-xl bg-yt-surface border border-yt-border flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold text-yt-muted">Matching Competencies:</span>
          {matchingSkills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-full text-xs font-semibold bg-yt-surface2 text-yt-blue border border-yt-border/60"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Results List (YouTube Search Horizontal Card Style) */}
      {totalResults > 0 ? (
        <div className="space-y-4">
          {/* Projects */}
          {matchingProjects.map((project) => {
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
                className="flex flex-col sm:flex-row gap-4 p-3 rounded-xl hover:bg-yt-surface2/60 transition-colors group border border-transparent hover:border-yt-border/40"
              >
                <div className="relative w-full sm:w-72 md:w-80 aspect-video rounded-xl overflow-hidden bg-yt-surface shrink-0 border border-yt-border/40">
                  <img
                    src={thumbnailSrc}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-8 h-8 fill-white text-white" />
                  </div>
                  <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded text-[11px] font-bold bg-black/80 text-white">
                    {project.duration}
                  </div>
                </div>

                <div className="flex-1 min-w-0 space-y-1.5">
                  <h3 className="text-base font-bold text-white group-hover:text-yt-blue transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-yt-muted">
                    <span>Aarya Khabale</span>
                    <Check className="w-3 h-3 text-yt-muted" />
                    <span>•</span>
                    <span>{project.views}</span>
                    <span>•</span>
                    <span>{project.uploadDate}</span>
                  </div>

                  <p className="text-xs text-yt-text/80 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yt-surface2 text-yt-blue">
                      {project.categoryTag}
                    </span>
                    {project.technologies.slice(0, 3).map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[10px] bg-yt-surface text-yt-muted border border-yt-border/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}

          {/* Playlists */}
          {matchingPlaylists.map((pl) => (
            <Link
              key={pl.id}
              href={`/playlist/${pl.slug}`}
              className="flex flex-col sm:flex-row gap-4 p-3 rounded-xl hover:bg-yt-surface2/60 transition-colors group border border-transparent hover:border-yt-border/40"
            >
              <div className="relative w-full sm:w-72 md:w-80 aspect-video rounded-xl overflow-hidden bg-yt-surface shrink-0 border border-yt-border/40 flex items-center justify-center bg-purple-950/40">
                <div className="text-center">
                  <span className="text-sm font-bold text-purple-300 block mb-1">PLAYLIST</span>
                  <span className="text-xs text-white">{pl.videoCount} VIDEOS</span>
                </div>
              </div>

              <div className="flex-1 min-w-0 space-y-1.5">
                <h3 className="text-base font-bold text-white group-hover:text-yt-blue transition-colors">
                  {pl.title}
                </h3>
                <div className="text-xs text-yt-muted">{pl.subtitle}</div>
                <p className="text-xs text-yt-text/80 line-clamp-2 leading-relaxed">
                  {pl.description}
                </p>
                <div className="text-xs font-semibold text-yt-blue">VIEW FULL PLAYLIST →</div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-yt-surface2 flex items-center justify-center mx-auto text-yt-muted">
            <Search className="w-8 h-8" />
          </div>
          <h2 className="text-lg font-bold text-white">
            No results found for "{query}"
          </h2>
          <p className="text-xs text-yt-muted max-w-sm mx-auto">
            Try searching for another keyword like "BioLens", "PRD", "React Native", "FastAPI", "Reinforcement Learning", or "GDG".
          </p>
          <div className="pt-2">
            <Link
              href="/videos"
              className="px-5 py-2 rounded-full text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-colors"
            >
              Browse All Videos
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-8 text-white">Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}
