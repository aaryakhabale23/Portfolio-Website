"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Play,
  Shuffle,
  ListVideo,
  Check,
  ArrowLeft,
} from "lucide-react";
import { PlaylistItem } from "@/data/playlists";
import { ProjectCaseStudy } from "@/data/projects";

interface PlaylistClientProps {
  playlist: PlaylistItem;
  playlistProjects: ProjectCaseStudy[];
}

export const PlaylistClient: React.FC<PlaylistClientProps> = ({
  playlist,
  playlistProjects,
}) => {
  const router = useRouter();
  const firstVideoSlug = playlistProjects[0]?.slug || "biolens";

  const thumbnailSrc =
    firstVideoSlug === "biolens"
      ? "/thumbnails/biolens.svg"
      : firstVideoSlug === "ecocontrol"
      ? "/thumbnails/ecocontrol.svg"
      : firstVideoSlug === "livix"
      ? "/thumbnails/livix.svg"
      : firstVideoSlug === "darukaa-product-features"
      ? "/thumbnails/darukaa.svg"
      : firstVideoSlug === "bird-inference"
      ? "/thumbnails/bird-api.svg"
      : firstVideoSlug === "product-design"
      ? "/thumbnails/product-design.svg"
      : "/thumbnails/trailer.svg";

  return (
    <div className="w-full min-h-screen bg-yt-bg select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Back Link */}
        <Link
          href="/playlists"
          className="inline-flex items-center gap-2 text-xs font-semibold text-yt-muted hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Playlists</span>
        </Link>

        {/* YouTube Playlist Dual Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column: Playlist Showcase Banner & Controls */}
          <div className="w-full lg:w-[380px] shrink-0 p-6 rounded-2xl bg-gradient-to-b from-yt-surface to-yt-surface2 border border-yt-border shadow-xl space-y-5 lg:sticky lg:top-20">
            {/* Playlist 16:9 Cover Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-yt-border">
              <img
                src={thumbnailSrc}
                alt={playlist.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm text-xs font-bold text-white">
                  <ListVideo className="w-4 h-4" />
                  <span>{playlist.videoCount} VIDEOS</span>
                </div>
              </div>
            </div>

            {/* Title & Metadata */}
            <div className="space-y-2">
              <h1 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {playlist.title}
              </h1>
              <p className="text-xs font-semibold text-yt-blue">
                {playlist.subtitle}
              </p>

              <div className="flex items-center gap-2 text-xs text-yt-muted pt-1">
                <Link href="/about" className="font-semibold text-white hover:underline flex items-center gap-1">
                  <span>Aarya Khabale</span>
                  <Check className="w-3 h-3 text-yt-muted" />
                </Link>
                <span>•</span>
                <span>{playlist.videoCount} videos</span>
                <span>•</span>
                <span>{playlist.updatedDate}</span>
              </div>
            </div>

            {/* Play All & Shuffle Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href={`/watch/${firstVideoSlug}`}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-colors shadow"
              >
                <Play className="w-4 h-4 fill-black" />
                <span>Play all</span>
              </Link>
              <button
                onClick={() => {
                  const randomSlug =
                    playlist.videoSlugs[Math.floor(Math.random() * playlist.videoSlugs.length)];
                  router.push(`/watch/${randomSlug}`);
                }}
                className="flex items-center justify-center p-2.5 rounded-full bg-yt-surface hover:bg-yt-hover text-white border border-yt-border transition-colors"
                title="Shuffle playlist"
              >
                <Shuffle className="w-4 h-4" />
              </button>
            </div>

            {/* Description & Focus */}
            <div className="pt-3 border-t border-yt-border/50 space-y-2 text-xs text-yt-muted">
              <p className="leading-relaxed text-yt-text/90">
                {playlist.description}
              </p>
              <div className="p-2.5 rounded-lg bg-yt-bg border border-yt-border">
                <span className="font-bold text-white text-[11px] uppercase tracking-wider block mb-1">
                  Playlist Focus
                </span>
                <p className="text-[11px] text-zinc-300 leading-relaxed">
                  {playlist.focus}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Numbered Tracklist of Projects */}
          <div className="flex-1 min-w-0 w-full space-y-2">
            <div className="text-xs font-bold text-yt-muted uppercase tracking-wider mb-3 px-2">
              Tracklist ({playlistProjects.length} items)
            </div>

            {playlistProjects.map((project, idx) => {
              const trackThumb =
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
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-yt-surface2/70 transition-colors group border border-transparent hover:border-yt-border/40"
                >
                  {/* Track Number */}
                  <span className="text-sm font-mono text-yt-muted w-6 text-center shrink-0 group-hover:text-white">
                    {idx + 1}
                  </span>

                  {/* Thumbnail */}
                  <div className="relative w-36 sm:w-44 aspect-video rounded-lg overflow-hidden bg-yt-surface shrink-0 border border-yt-border/40">
                    <img
                      src={trackThumb}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="w-6 h-6 fill-white text-white" />
                    </div>
                    <div className="absolute bottom-1 right-1 px-1 rounded text-[10px] font-bold bg-black/80 text-white">
                      {project.duration}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <h3 className="text-sm font-semibold text-white group-hover:text-yt-blue transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-yt-muted line-clamp-1">
                      {project.summary}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-yt-muted">
                      <span>Aarya Khabale</span>
                      <span>•</span>
                      <span>{project.views}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
