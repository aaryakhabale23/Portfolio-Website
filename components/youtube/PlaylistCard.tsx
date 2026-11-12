"use client";

import React from "react";
import Link from "next/link";
import { ListVideo, Play } from "lucide-react";
import { PlaylistItem } from "@/data/playlists";

interface PlaylistCardProps {
  playlist: PlaylistItem;
}

export const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  // Get representative thumbnail
  const firstVideoSlug = playlist.videoSlugs[0] || "biolens";
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
    <div className="group flex flex-col w-full select-none">
      {/* Stacked Thumbnail Effect */}
      <Link href={`/playlist/${playlist.slug}`} className="relative block w-full mb-3">
        {/* Top dummy stacked layer */}
        <div className="absolute -top-1.5 inset-x-3 h-2 rounded-t-xl bg-yt-surface border-t border-yt-border/50 opacity-60" />
        {/* Middle dummy stacked layer */}
        <div className="absolute -top-3 inset-x-6 h-3 rounded-t-xl bg-yt-surface2 border-t border-yt-border/60 opacity-40" />

        {/* Main 16:9 Thumbnail */}
        <div className="relative aspect-video rounded-xl overflow-hidden bg-yt-surface border border-yt-border shadow-md group-hover:scale-[1.02] transition-transform duration-200">
          <img
            src={thumbnailSrc}
            alt={playlist.title}
            className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
          />

          {/* Right Overlay Bar showing Video Count (Authentic YouTube Playlist look) */}
          <div className="absolute inset-y-0 right-0 w-28 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center text-white border-l border-yt-border/40">
            <span className="text-lg font-bold">{playlist.videoCount}</span>
            <ListVideo className="w-5 h-5 mt-1" />
          </div>

          {/* Play All Hover Badge */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-bold text-xs shadow-2xl">
              <Play className="w-4 h-4 fill-black" />
              <span>PLAY ALL</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Playlist Details */}
      <div className="space-y-1">
        <Link href={`/playlist/${playlist.slug}`}>
          <h3 className="text-sm font-bold text-white group-hover:text-yt-blue transition-colors line-clamp-1">
            {playlist.title}
          </h3>
        </Link>
        <p className="text-xs text-yt-muted line-clamp-1">
          {playlist.subtitle}
        </p>
        <div className="flex items-center justify-between text-xs text-yt-muted pt-1">
          <span>{playlist.updatedDate}</span>
          <Link
            href={`/playlist/${playlist.slug}`}
            className="font-semibold text-yt-text hover:text-yt-blue text-[11px] uppercase tracking-wider"
          >
            View Full Playlist
          </Link>
        </div>
      </div>
    </div>
  );
};
