"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Check, MoreVertical, Share2, Copy, ExternalLink, Play, CheckCircle2 } from "lucide-react";
import { ProjectCaseStudy } from "@/data/projects";

interface VideoCardProps {
  project: ProjectCaseStudy;
  onShare?: (project: ProjectCaseStudy) => void;
  showTags?: boolean;
}

export const VideoCard: React.FC<VideoCardProps> = ({ project, onShare, showTags = true }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/watch/${project.slug}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setShowMenu(false);
    }, 1500);
  };

  // Thumbnail fallback mapping
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
    <div className="group flex flex-col w-full select-none">
      {/* 16:9 Thumbnail Container */}
      <Link href={`/watch/${project.slug}`} className="relative block w-full aspect-video rounded-xl overflow-hidden bg-yt-surface2 border border-yt-border/40 shadow-sm transition-transform duration-200 group-hover:scale-[1.02]">
        <img
          src={thumbnailSrc}
          alt={project.title}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-95"
        />

        {/* Hover Dark Overlay & Play Icon */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yt-red/90 text-white shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
            <Play className="w-6 h-6 fill-white ml-0.5" />
          </div>
        </div>

        {/* Duration Badge Bottom Right */}
        <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[11px] font-bold tracking-wider bg-black/80 text-white backdrop-blur-sm">
          {project.duration}
        </div>

        {/* Simulated Disclaimer or Offline Tag */}
        {project.simulatedDisclaimer && (
          <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/90 text-black shadow">
            SIMULATED
          </div>
        )}
      </Link>

      {/* Video Details Bottom */}
      <div className="flex gap-3 pt-3 items-start">
        {/* Channel Avatar */}
        <Link href="/about" className="shrink-0 mt-0.5">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-yt-border bg-yt-surface">
            <img src="/avatar.svg" alt="Aarya Khabale" className="w-full h-full object-cover" />
          </div>
        </Link>

        {/* Title, Channel & Metadata */}
        <div className="flex-1 min-w-0 pr-1">
          <Link href={`/watch/${project.slug}`} className="block">
            <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-yt-blue transition-colors">
              {project.title}
            </h3>
          </Link>

          <Link href="/about" className="flex items-center gap-1.5 text-xs text-yt-muted hover:text-white transition-colors mt-1">
            <span>Aarya Khabale</span>
            <span className="flex items-center justify-center w-3 h-3 rounded-full bg-yt-muted text-yt-bg">
              <Check className="w-2 h-2 stroke-[3]" />
            </span>
          </Link>

          <div className="flex items-center gap-1.5 text-xs text-yt-muted mt-0.5">
            <span>{project.views}</span>
            <span>•</span>
            <span>{project.uploadDate}</span>
          </div>

          {/* Technology Badges */}
          {showTags && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-yt-surface2 text-yt-blue border border-yt-border/50">
                {project.categoryTag}
              </span>
              {project.technologies.slice(0, 2).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded text-[10px] font-medium bg-yt-surface text-yt-muted border border-yt-border/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Three Dot Options Menu */}
        <div ref={menuRef} className="relative shrink-0">
          <button
            onClick={() => setShowMenu((v) => !v)}
            aria-label="Options"
            className="p-1.5 text-yt-muted hover:text-white hover:bg-yt-surface2 rounded-full transition-colors opacity-0 group-hover:opacity-100"
          >
            <MoreVertical className="w-4 h-4" />
          </button>

          {showMenu && (
            <div className="absolute right-0 top-8 w-48 bg-yt-surface border border-yt-border rounded-xl shadow-2xl py-1.5 z-40">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowMenu(false);
                  if (onShare) onShare(project);
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-yt-text hover:bg-yt-surface2 transition-colors text-left"
              >
                <Share2 className="w-3.5 h-3.5 text-yt-muted" />
                <span>Share Case Study</span>
              </button>
              <button
                onClick={handleCopyLink}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-yt-text hover:bg-yt-surface2 transition-colors text-left"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                    <span className="text-green-400">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-yt-muted" />
                    <span>Copy Watch URL</span>
                  </>
                )}
              </button>
              <Link
                href={`/watch/${project.slug}`}
                onClick={() => setShowMenu(false)}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-yt-text hover:bg-yt-surface2 transition-colors text-left"
              >
                <Play className="w-3.5 h-3.5 text-yt-red" />
                <span>Watch Presentation</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
