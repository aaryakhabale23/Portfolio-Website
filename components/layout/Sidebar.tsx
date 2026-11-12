"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  PlaySquare,
  ListVideo,
  Briefcase,
  User,
  Linkedin,
  Github,
  FileDown,
  Mail,
  ChevronRight,
  Flame,
  Sparkles,
  Layers,
} from "lucide-react";
import { useChannel } from "../context/ChannelContext";
import { playlistsData } from "@/data/playlists";
import { socialLinks } from "@/data/social-links";

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const { isSidebarOpen, openContactModal } = useChannel();

  const mainNav = [
    { label: "Home", href: "/", icon: Home },
    { label: "Videos", href: "/videos", icon: PlaySquare },
    { label: "Playlists", href: "/playlists", icon: ListVideo },
    { label: "Experience", href: "/experience", icon: Briefcase },
    { label: "About", href: "/about", icon: User },
  ];

  // Collapsed Rail View (When sidebar is toggled closed on desktop)
  if (!isSidebarOpen) {
    return (
      <aside className="hidden md:flex flex-col items-center w-[72px] shrink-0 bg-yt-bg border-r border-yt-border/40 py-3 select-none h-[calc(100vh-56px)] sticky top-14">
        {mainNav.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center w-16 py-3 rounded-xl mb-1 transition-colors ${
                isActive
                  ? "bg-yt-surface2 text-white font-bold"
                  : "text-yt-text hover:bg-yt-surface2/60 text-yt-muted"
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 ${isActive ? "text-yt-red" : "text-yt-text"}`} />
              <span className="text-[10px] tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </aside>
    );
  }

  // Expanded Full Drawer View
  return (
    <aside className="hidden md:flex flex-col w-60 shrink-0 bg-yt-bg border-r border-yt-border/40 px-3 py-3 select-none h-[calc(100vh-56px)] sticky top-14 overflow-y-auto">
      {/* Primary Channel Navigation */}
      <div className="space-y-1 pb-3 border-b border-yt-border/50">
        {mainNav.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-6 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? "bg-yt-surface2 text-white font-bold"
                  : "text-yt-text hover:bg-yt-surface2/60"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-yt-red" : "text-yt-text"}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Playlists Shelf */}
      <div className="py-3 border-b border-yt-border/50">
        <div className="flex items-center justify-between px-3 mb-2">
          <span className="text-xs font-bold text-white tracking-wide uppercase">
            Curated Playlists
          </span>
          <Link href="/playlists" className="text-xs text-yt-muted hover:text-white">
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="space-y-1">
          {playlistsData.map((pl) => (
            <Link
              key={pl.id}
              href={`/playlist/${pl.slug}`}
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs text-yt-muted hover:text-white hover:bg-yt-surface2/60 transition-colors"
            >
              <ListVideo className="w-4 h-4 text-yt-muted shrink-0" />
              <span className="truncate">{pl.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Connect & External Channels */}
      <div className="py-3 border-b border-yt-border/50">
        <div className="px-3 mb-2 text-xs font-bold text-white tracking-wide uppercase">
          Connect &amp; Profiles
        </div>
        <div className="space-y-1">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-3 py-2 rounded-xl text-xs text-yt-text hover:bg-yt-surface2/60 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-[#0A66C2]" />
            <span>LinkedIn Profile</span>
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-3 py-2 rounded-xl text-xs text-yt-text hover:bg-yt-surface2/60 transition-colors"
          >
            <Github className="w-4 h-4 text-white" />
            <span>GitHub Repositories</span>
          </a>
          <a
            href={socialLinks.resumePath}
            download="Aarya_Khabale_Resume.pdf"
            className="flex items-center gap-4 px-3 py-2 rounded-xl text-xs text-yt-text hover:bg-yt-surface2/60 transition-colors"
          >
            <FileDown className="w-4 h-4 text-yt-red" />
            <span>Download Resume PDF</span>
          </a>
          <button
            onClick={openContactModal}
            className="w-full flex items-center gap-4 px-3 py-2 rounded-xl text-xs text-yt-text hover:bg-yt-surface2/60 transition-colors text-left"
          >
            <Mail className="w-4 h-4 text-yt-blue" />
            <span>Collaborate / Message</span>
          </button>
        </div>
      </div>

      {/* Channel Positioning Snippet */}
      <div className="p-3 my-2 rounded-xl bg-yt-surface border border-yt-border/60">
        <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-yt-red">
          <Sparkles className="w-3.5 h-3.5" />
          <span>POSITIONING</span>
        </div>
        <p className="text-[11px] text-yt-muted leading-relaxed">
          Product-minded technologist identifying problems, writing PRDs, training AI, and delivering production software.
        </p>
      </div>

      {/* Footer Info */}
      <div className="pt-3 px-3 text-[11px] text-yt-muted space-y-2 mt-auto">
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <Link href="/about" className="hover:underline">About</Link>
          <a href={socialLinks.resumePath} className="hover:underline">Resume</a>
          <button onClick={openContactModal} className="hover:underline">Contact</button>
        </div>
        <div className="text-[10px] text-yt-muted/70 pt-1">
          © 2026 Aarya Khabale. Built in authentic YouTube Dark Mode.
        </div>
      </div>
    </aside>
  );
};
