"use client";

import React from "react";
import { ChannelHeader } from "@/components/layout/ChannelHeader";
import { ChannelTabs } from "@/components/channel/ChannelTabs";
import { PlaylistCard } from "@/components/youtube/PlaylistCard";
import { playlistsData } from "@/data/playlists";
import { ListVideo } from "lucide-react";

export default function PlaylistsPage() {
  return (
    <div className="w-full min-h-screen bg-yt-bg select-none">
      <ChannelHeader />
      <ChannelTabs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <div className="flex items-center gap-2.5 border-b border-yt-border/50 pb-3">
          <div className="p-1.5 rounded-lg bg-yt-red/15 text-yt-red">
            <ListVideo className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Created Playlists
            </h2>
            <p className="text-xs text-yt-muted">
              Curated collections organizing Aarya's professional capabilities across AI, Product, Engineering &amp; Community
            </p>
          </div>
        </div>

        {/* Playlists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {playlistsData.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </div>
    </div>
  );
}
