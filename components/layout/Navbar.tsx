"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Menu,
  Search,
  Mic,
  Plus,
  Bell,
  X,
  Linkedin,
  Github,
  FileDown,
  Check,
  Send,
  ExternalLink,
  Sparkles,
  Info,
  Layers,
} from "lucide-react";
import { useChannel } from "../context/ChannelContext";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { socialLinks } from "@/data/social-links";

export const Navbar: React.FC = () => {
  const router = useRouter();
  const { toggleSidebar, isSubscribed, openContactModal, openTrailerModal } = useChannel();

  const [searchInput, setSearchInput] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);
  const [isVoiceListening, setIsVoiceListening] = useState(false);

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  const createRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  // Close popovers on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setShowNotifications(false);
      }
      if (createRef.current && !createRef.current.contains(e.target as Node)) {
        setShowCreateMenu(false);
      }
      if (avatarRef.current && !avatarRef.current.contains(e.target as Node)) {
        setShowAvatarMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchInput.trim()) return;
    setIsSearchFocused(false);
    router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`);
  };

  // Autocomplete matching
  const matchingProjects = projectsData.filter(
    (p) =>
      p.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(searchInput.toLowerCase())) ||
      p.category.toLowerCase().includes(searchInput.toLowerCase())
  );

  const allSkills = skillsData.flatMap((c) => c.skills);
  const matchingSkills = allSkills
    .filter((s) => s.toLowerCase().includes(searchInput.toLowerCase()))
    .slice(0, 4);

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between h-14 px-4 bg-yt-bg border-b border-yt-border/40 select-none">
        {/* Left Section: Hamburger + Brand */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            aria-label="Toggle Navigation Sidebar"
            className="p-2 text-yt-text hover:bg-yt-surface2 rounded-full transition-colors active:scale-95"
          >
            <Menu className="w-5 h-5" />
          </button>

          <Link href="/" className="flex items-center gap-1 group">
            {/* YouTube Red Icon with play symbol */}
            <div className="flex items-center justify-center w-8 h-6 bg-yt-red rounded-[6px] shadow-sm group-hover:scale-105 transition-transform">
              <div className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[8px] border-l-white ml-0.5" />
            </div>
            <span className="text-lg font-black tracking-tighter text-white ml-1 font-sans">
              AARYA
            </span>
            <span className="text-[10px] font-bold text-yt-muted tracking-widest uppercase ml-1 border border-yt-border px-1 py-0.2 rounded">
              PM
            </span>
          </Link>
        </div>

        {/* Center Section: Search Bar & Voice Input */}
        <div ref={searchContainerRef} className="relative flex-1 max-w-[640px] mx-4 hidden sm:flex items-center justify-center">
          <form
            onSubmit={handleSearchSubmit}
            className={`flex items-center w-full max-w-[560px] h-10 rounded-full border ${
              isSearchFocused ? "border-yt-blue ring-1 ring-yt-blue" : "border-yt-border"
            } bg-yt-surface overflow-hidden transition-all`}
          >
            {isSearchFocused && (
              <div className="pl-4 text-yt-muted">
                <Search className="w-4 h-4" />
              </div>
            )}
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Search this channel (e.g. BioLens, PRDs, AI, React Native)"
              className="flex-1 h-full px-4 text-sm text-yt-text bg-transparent placeholder-yt-muted focus:outline-none"
            />
            {searchInput && (
              <button
                type="button"
                onClick={() => setSearchInput("")}
                className="p-1 mr-1 text-yt-muted hover:text-yt-text rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="submit"
              aria-label="Search channel"
              className="flex items-center justify-center w-16 h-full bg-yt-surface2 hover:bg-yt-hover border-l border-yt-border text-yt-text transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Voice Search Button */}
          <button
            onClick={() => setIsVoiceListening(true)}
            aria-label="Search with voice"
            title="Search with voice"
            className="ml-3 p-2.5 text-yt-text bg-yt-surface2 hover:bg-yt-hover rounded-full transition-colors active:scale-95"
          >
            <Mic className="w-4 h-4" />
          </button>

          {/* Autocomplete Dropdown */}
          {isSearchFocused && (searchInput.trim().length > 0 || matchingProjects.length > 0) && (
            <div className="absolute top-12 left-6 right-16 bg-yt-surface border border-yt-border rounded-xl shadow-2xl py-2 z-50">
              <div className="px-4 py-1.5 text-[11px] font-semibold text-yt-muted uppercase tracking-wider">
                Matching Projects &amp; Capabilities
              </div>
              {matchingProjects.slice(0, 4).map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setIsSearchFocused(false);
                    router.push(`/watch/${p.slug}`);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-yt-surface2 transition-colors text-sm text-yt-text"
                >
                  <Search className="w-4 h-4 text-yt-muted shrink-0" />
                  <span className="font-medium text-white">{p.title}</span>
                  <span className="text-xs text-yt-muted ml-auto">{p.categoryTag}</span>
                </button>
              ))}

              {matchingSkills.length > 0 && (
                <>
                  <div className="px-4 pt-2 pb-1 text-[11px] font-semibold text-yt-muted uppercase tracking-wider border-t border-yt-border/60">
                    Matching Skills &amp; Technologies
                  </div>
                  {matchingSkills.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSearchInput(s);
                        setIsSearchFocused(false);
                        router.push(`/search?q=${encodeURIComponent(s)}`);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-1.5 text-left hover:bg-yt-surface2 transition-colors text-xs text-yt-text"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-yt-blue shrink-0" />
                      <span>{s}</span>
                    </button>
                  ))}
                </>
              )}
            </div>
          )}
        </div>

        {/* Right Section: Actions & Avatar */}
        <div className="flex items-center gap-2">
          {/* Quick External Icons (Desktop) */}
          <div className="hidden lg:flex items-center gap-1 mr-2 border-r border-yt-border pr-2">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aarya's LinkedIn Profile"
              title="Connect on LinkedIn"
              className="p-2 text-yt-muted hover:text-yt-text hover:bg-yt-surface2 rounded-full transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aarya's GitHub Profile"
              title="Explore GitHub"
              className="p-2 text-yt-muted hover:text-yt-text hover:bg-yt-surface2 rounded-full transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.resumePath}
              download="Aarya_Khabale_Resume.pdf"
              aria-label="Download Resume"
              title="Download Resume (PDF)"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-yt-text bg-yt-surface2 hover:bg-yt-hover border border-yt-border rounded-full transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-yt-red" />
              <span>Resume</span>
            </a>
          </div>

          {/* Create Button (+) */}
          <div ref={createRef} className="relative">
            <button
              onClick={() => setShowCreateMenu((v) => !v)}
              aria-label="Create and Connect"
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-yt-text bg-yt-surface2 hover:bg-yt-hover rounded-full transition-colors active:scale-95"
            >
              <Plus className="w-4 h-4 text-yt-text" />
              <span className="hidden md:inline">Connect</span>
            </button>

            {showCreateMenu && (
              <div className="absolute right-0 top-11 w-56 bg-yt-surface border border-yt-border rounded-xl shadow-2xl py-2 z-50">
                <button
                  onClick={() => {
                    setShowCreateMenu(false);
                    openContactModal();
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-yt-text hover:bg-yt-surface2 transition-colors"
                >
                  <Send className="w-4 h-4 text-yt-blue" />
                  <div>
                    <div className="font-medium">Let's Collaborate</div>
                    <div className="text-[11px] text-yt-muted">Send a direct message</div>
                  </div>
                </button>
                <a
                  href={socialLinks.resumePath}
                  download="Aarya_Khabale_Resume.pdf"
                  onClick={() => setShowCreateMenu(false)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-yt-text hover:bg-yt-surface2 transition-colors"
                >
                  <FileDown className="w-4 h-4 text-yt-red" />
                  <div>
                    <div className="font-medium">Download Resume</div>
                    <div className="text-[11px] text-yt-muted">Verified 2026/2027 CV</div>
                  </div>
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowCreateMenu(false)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-yt-text hover:bg-yt-surface2 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <div>
                    <div className="font-medium">LinkedIn Profile</div>
                    <div className="text-[11px] text-yt-muted">Professional network</div>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Notifications Bell */}
          <div ref={notifRef} className="relative">
            <button
              onClick={() => setShowNotifications((v) => !v)}
              aria-label="View notifications"
              className="relative p-2 text-yt-text hover:bg-yt-surface2 rounded-full transition-colors active:scale-95"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 flex items-center justify-center min-w-[16px] h-4 px-1 text-[10px] font-bold text-white bg-yt-red rounded-full">
                3
              </span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 top-11 w-80 sm:w-96 bg-yt-surface border border-yt-border rounded-xl shadow-2xl z-50 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-yt-border">
                  <span className="text-sm font-bold text-white">Channel Notifications</span>
                  <span className="text-xs text-yt-blue hover:underline cursor-pointer">Verified Updates</span>
                </div>
                <div className="max-h-96 overflow-y-auto divide-y divide-yt-border/50">
                  <Link
                    href="/watch/biolens"
                    onClick={() => setShowNotifications(false)}
                    className="flex gap-3 p-3 hover:bg-yt-surface2 transition-colors"
                  >
                    <div className="w-2 h-2 mt-2 bg-yt-blue rounded-full shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-white">BioLens: Sub-120ms Edge Prediction</div>
                      <div className="text-[11px] text-yt-muted mt-0.5">
                        Achieved offline taxonomic classification across 1,081 species using quantized TFLite.
                      </div>
                      <div className="text-[10px] text-yt-muted mt-1">2 weeks ago</div>
                    </div>
                  </Link>

                  <Link
                    href="/watch/darukaa-product-features"
                    onClick={() => setShowNotifications(false)}
                    className="flex gap-3 p-3 hover:bg-yt-surface2 transition-colors"
                  >
                    <div className="w-2 h-2 mt-2 bg-yt-red rounded-full shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-white">Darukaa.earth: 3 Production Features Delivered</div>
                      <div className="text-[11px] text-yt-muted mt-0.5">
                        Shipped User-Guided Flow, Plant Identification &amp; Tree DBH Calculator from PRD to production.
                      </div>
                      <div className="text-[10px] text-yt-muted mt-1">1 month ago</div>
                    </div>
                  </Link>

                  <Link
                    href="/experience"
                    onClick={() => setShowNotifications(false)}
                    className="flex gap-3 p-3 hover:bg-yt-surface2 transition-colors"
                  >
                    <div className="w-2 h-2 mt-2 bg-[#FBBC04] rounded-full shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-white">HackX: 600+ Registrations Milestone</div>
                      <div className="text-[11px] text-yt-muted mt-0.5">
                        GDG on Campus flagship 24-hour hackathon reached 600+ registrations and ₹2L+ sponsorships.
                      </div>
                      <div className="text-[10px] text-yt-muted mt-1">3 months ago</div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Profile Avatar & Menu */}
          <div ref={avatarRef} className="relative">
            <button
              onClick={() => setShowAvatarMenu((v) => !v)}
              aria-label="User profile settings"
              className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden border border-yt-red hover:opacity-90 transition-opacity active:scale-95"
            >
              <img src="/avatar.svg" alt="Aarya Khabale" className="w-full h-full object-cover" />
            </button>

            {showAvatarMenu && (
              <div className="absolute right-0 top-11 w-72 bg-yt-surface border border-yt-border rounded-xl shadow-2xl p-2 z-50">
                <div className="flex items-center gap-3 p-2 border-b border-yt-border pb-3">
                  <img src="/avatar.svg" alt="Aarya" className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="font-bold text-white text-sm">Aarya Khabale</div>
                    <div className="text-xs text-yt-muted">@aaryak</div>
                    <div className="text-[11px] text-yt-blue mt-0.5">{isSubscribed ? "Subscribed 🔔" : "Channel Explorer"}</div>
                  </div>
                </div>

                <div className="py-2 space-y-1">
                  <button
                    onClick={() => {
                      setShowAvatarMenu(false);
                      openTrailerModal();
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 text-left text-xs text-yt-text hover:bg-yt-surface2 rounded-lg transition-colors"
                  >
                    <Info className="w-4 h-4 text-yt-muted" />
                    <span>Watch Channel Trailer</span>
                  </button>
                  <Link
                    href="/about"
                    onClick={() => setShowAvatarMenu(false)}
                    className="w-full flex items-center gap-3 px-3 py-2 text-left text-xs text-yt-text hover:bg-yt-surface2 rounded-lg transition-colors"
                  >
                    <Layers className="w-4 h-4 text-yt-muted" />
                    <span>View Channel About &amp; Tech Stack</span>
                  </Link>
                  <button
                    onClick={() => {
                      setShowAvatarMenu(false);
                      openContactModal();
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 text-left text-xs text-yt-text hover:bg-yt-surface2 rounded-lg transition-colors"
                  >
                    <Send className="w-4 h-4 text-yt-blue" />
                    <span>Send Inquiry / Collaborate</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Voice Search Modal Easter Egg */}
      {isVoiceListening && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-yt-surface border border-yt-border rounded-2xl p-6 shadow-2xl text-center">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-semibold text-yt-muted">Search with your voice</span>
              <button
                onClick={() => setIsVoiceListening(false)}
                className="p-1 text-yt-muted hover:text-white rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-8 flex justify-center">
              <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-yt-red/20 border-2 border-yt-red animate-pulse">
                <Mic className="w-10 h-10 text-yt-red" />
              </div>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">Listening for channel topics...</h3>
            <p className="text-xs text-yt-muted mb-6">
              Try saying: <span className="text-yt-blue font-medium">"Show BioLens"</span>,{" "}
              <span className="text-yt-blue font-medium">"Product PRDs"</span>, or{" "}
              <span className="text-yt-blue font-medium">"EcoControl energy reduction"</span>
            </p>

            <div className="flex gap-2 justify-center">
              <button
                onClick={() => {
                  setIsVoiceListening(false);
                  router.push("/watch/biolens");
                }}
                className="px-3 py-1.5 text-xs bg-yt-surface2 hover:bg-yt-hover text-white rounded-full transition-colors"
              >
                "BioLens"
              </button>
              <button
                onClick={() => {
                  setIsVoiceListening(false);
                  router.push("/watch/darukaa-product-features");
                }}
                className="px-3 py-1.5 text-xs bg-yt-surface2 hover:bg-yt-hover text-white rounded-full transition-colors"
              >
                "Darukaa Features"
              </button>
              <button
                onClick={() => {
                  setIsVoiceListening(false);
                  router.push("/watch/ecocontrol");
                }}
                className="px-3 py-1.5 text-xs bg-yt-surface2 hover:bg-yt-hover text-white rounded-full transition-colors"
              >
                "EcoControl"
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
