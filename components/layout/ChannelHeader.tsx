"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Check,
  Bell,
  ChevronRight,
  FileDown,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Sparkles,
  X,
  ExternalLink,
} from "lucide-react";
import { useChannel } from "../context/ChannelContext";
import { profileData } from "@/data/profile";
import { socialLinks } from "@/data/social-links";

export const ChannelHeader: React.FC = () => {
  const { isSubscribed, toggleSubscribe, subscriberCount, openContactModal } = useChannel();
  const [showBioModal, setShowBioModal] = useState(false);

  return (
    <div className="w-full bg-yt-bg select-none">
      {/* 1. Authentic YouTube Channel Banner (16:9 on mobile, ultra-wide desktop) */}
      <div className="relative w-full aspect-[6/1] min-h-[140px] max-h-[280px] overflow-hidden bg-yt-surface">
        <img
          src="/banner.svg"
          alt="Aarya Khabale Channel Banner"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle bottom gradient shadow */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-yt-bg to-transparent" />
      </div>

      {/* 2. Channel Identity Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-2">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Avatar (with YouTube verified ring styling) */}
          <div className="relative shrink-0">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-yt-bg shadow-2xl bg-yt-surface">
              <img
                src="/avatar.svg"
                alt="Aarya Khabale Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Live / Verified Badge on Avatar */}
            <div
              title="Verified Technologist"
              className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-yt-surface border-2 border-yt-bg text-yt-blue shadow"
            >
              <Check className="w-4 h-4 text-yt-blue stroke-[3]" />
            </div>
          </div>

          {/* Metadata & Actions */}
          <div className="flex-1 space-y-2.5">
            {/* Channel Title + Verified Badge */}
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                {profileData.name}
              </h1>
              {/* YouTube Checkmark Badge */}
              <div
                title="Verified Creator"
                className="flex items-center justify-center w-4 h-4 rounded-full bg-yt-muted text-yt-bg shrink-0"
              >
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
            </div>

            {/* Handle & Stats Line */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-yt-muted font-normal">
              <span className="font-bold text-white">{profileData.handle}</span>
              <span>•</span>
              <span className="font-semibold text-yt-text">{subscriberCount} subscribers</span>
              <span>•</span>
              <span>{profileData.metrics.videosCount} videos</span>
              <span>•</span>
              <span>{profileData.metrics.playlistsCount} playlists</span>
              <span>•</span>
              <span>{profileData.metrics.communitySize} community members</span>
            </div>

            {/* Bio Snippet + Expandable "more..." */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-yt-muted">
              <span className="truncate max-w-xl text-yt-text/90">
                {profileData.title}
              </span>
              <button
                onClick={() => setShowBioModal(true)}
                className="font-bold text-white hover:text-yt-blue transition-colors flex items-center gap-0.5 shrink-0"
              >
                <span>more</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Location & University Chips */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-yt-muted pt-0.5">
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-yt-red" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-yt-blue" />
                <span>{profileData.education.institution}</span>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {/* Subscribe / Subscribed Toggle Button */}
              <button
                onClick={toggleSubscribe}
                aria-label={isSubscribed ? "Unsubscribe from channel" : "Subscribe to channel"}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all active:scale-95 ${
                  isSubscribed
                    ? "bg-yt-surface2 hover:bg-yt-hover text-yt-text border border-yt-border"
                    : "bg-white hover:bg-zinc-200 text-black shadow-lg"
                }`}
              >
                {isSubscribed ? (
                  <>
                    <Bell className="w-4 h-4 fill-white text-white" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <span>Subscribe</span>
                )}
              </button>

              {/* Connect (LinkedIn) */}
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-yt-surface2 hover:bg-yt-hover text-yt-text border border-yt-border transition-colors active:scale-95"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>Connect</span>
              </a>

              {/* Let's Collaborate (Contact Modal) */}
              <button
                onClick={openContactModal}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-yt-surface2 hover:bg-yt-hover text-yt-text border border-yt-border transition-colors active:scale-95"
              >
                <Mail className="w-4 h-4 text-yt-blue" />
                <span>Let's Collaborate</span>
              </button>

              {/* Download Resume Button */}
              <a
                href={socialLinks.resumePath}
                download="Aarya_Khabale_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-yt-surface2 hover:bg-yt-hover text-yt-text border border-yt-border transition-colors active:scale-95"
              >
                <FileDown className="w-4 h-4 text-yt-red" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bio / About Modal (Opened by "more...") */}
      {showBioModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="w-full max-w-2xl max-h-[85vh] bg-yt-surface border border-yt-border rounded-2xl p-6 shadow-2xl flex flex-col overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-yt-border shrink-0">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>About Aarya Khabale</span>
                <span className="text-xs px-2 py-0.5 rounded bg-yt-surface2 text-yt-muted border border-yt-border">
                  Channel Bio
                </span>
              </h3>
              <button
                onClick={() => setShowBioModal(false)}
                className="p-1 text-yt-muted hover:text-white rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto py-4 space-y-4 text-sm text-yt-text">
              <div className="p-3 bg-yt-surface2 rounded-xl border border-yt-border">
                <div className="text-xs font-bold text-yt-red mb-1 uppercase tracking-wider">
                  Brand Positioning
                </div>
                <p className="text-sm italic text-white leading-relaxed">
                  "{profileData.positioning}"
                </p>
              </div>

              <div className="space-y-2">
                {profileData.bioIntro.map((paragraph, idx) => (
                  <p key={idx} className="text-yt-muted leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-yt-bg border border-yt-border">
                  <div className="text-xs font-semibold text-yt-blue mb-1">Education</div>
                  <div className="font-bold text-white">{profileData.education.institution}</div>
                  <div className="text-xs text-yt-muted">{profileData.education.degree}</div>
                  <div className="text-xs text-yt-muted mt-1">{profileData.education.period} • CGPA: {profileData.education.cgpa}</div>
                </div>

                <div className="p-3 rounded-xl bg-yt-bg border border-yt-border">
                  <div className="text-xs font-semibold text-yt-red mb-1">Location &amp; Status</div>
                  <div className="font-bold text-white">{profileData.location}</div>
                  <div className="text-xs text-yt-muted">Open to Product &amp; AI Engineering roles</div>
                  <div className="text-xs text-yt-muted mt-1">Available for Summer 2026/2027 Full-time</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-yt-border flex justify-end shrink-0">
              <button
                onClick={() => setShowBioModal(false)}
                className="px-4 py-2 text-xs font-semibold bg-yt-surface2 hover:bg-yt-hover text-white rounded-full transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
