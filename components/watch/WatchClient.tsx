"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Check,
  Bell,
  ThumbsUp,
  ThumbsDown,
  Share2,
  FileDown,
  Github,
} from "lucide-react";
import { ProjectCaseStudy } from "@/data/projects";
import { VideoPlayer } from "@/components/youtube/VideoPlayer";
import { CaseStudyView } from "@/components/watch/CaseStudyView";
import { CommentsSection } from "@/components/youtube/CommentsSection";
import { UpNextSidebar } from "@/components/watch/UpNextSidebar";
import { ShareModal } from "@/components/youtube/ShareModal";
import { useChannel } from "@/components/context/ChannelContext";
import { socialLinks } from "@/data/social-links";

interface WatchClientProps {
  project: ProjectCaseStudy;
}

export const WatchClient: React.FC<WatchClientProps> = ({ project }) => {
  const { isSubscribed, toggleSubscribe, subscriberCount } = useChannel();

  const [likes, setLikes] = useState(() => {
    return parseInt(project.likes.replace(/,/g, "") || "450", 10);
  });
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isTheaterMode, setIsTheaterMode] = useState(false);

  const toggleLike = () => {
    if (hasLiked) {
      setLikes((v) => v - 1);
      setHasLiked(false);
    } else {
      setLikes((v) => v + 1);
      setHasLiked(true);
      if (hasDisliked) setHasDisliked(false);
    }
  };

  const toggleDislike = () => {
    if (hasDisliked) {
      setHasDisliked(false);
    } else {
      setHasDisliked(true);
      if (hasLiked) {
        setLikes((v) => v - 1);
        setHasLiked(false);
      }
    }
  };

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
    <div className="w-full min-h-screen bg-yt-bg select-none">
      <div
        className={`mx-auto px-4 sm:px-6 py-4 sm:py-6 ${
          isTheaterMode ? "max-w-full" : "max-w-[1720px]"
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Video & Case Study Column (70%) */}
          <div className="flex-1 min-w-0">
            {/* Interactive YouTube Video Player */}
            <VideoPlayer
              title={project.title}
              thumbnailSrc={thumbnailSrc}
              duration={project.duration}
              highlights={project.highlights}
              category={project.category}
              videoUrl={project.videoUrl}
              isTheaterMode={isTheaterMode}
              onToggleTheater={() => setIsTheaterMode((v) => !v)}
            />

            {/* Video Title */}
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-4 leading-tight">
              {project.videoTitle}
            </h1>

            {/* Channel Bar & Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-yt-border/40">
              {/* Creator Info & Subscribe */}
              <div className="flex items-center gap-4">
                <Link href="/about" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-yt-border bg-yt-surface">
                    <img src="/avatar.svg" alt="Aarya" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-sm text-white group-hover:text-yt-blue transition-colors">
                      <span>Aarya Khabale</span>
                      <span className="flex items-center justify-center w-3 h-3 rounded-full bg-yt-muted text-yt-bg">
                        <Check className="w-2 h-2 stroke-[3]" />
                      </span>
                    </div>
                    <div className="text-xs text-yt-muted">
                      {subscriberCount} subscribers
                    </div>
                  </div>
                </Link>

                {/* Subscribe Button */}
                <button
                  onClick={toggleSubscribe}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all active:scale-95 ${
                    isSubscribed
                      ? "bg-yt-surface2 hover:bg-yt-hover text-yt-text border border-yt-border"
                      : "bg-white hover:bg-zinc-200 text-black font-bold"
                  }`}
                >
                  {isSubscribed ? (
                    <>
                      <Bell className="w-3.5 h-3.5 fill-white text-white" />
                      <span>Subscribed</span>
                    </>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </div>

              {/* Action Buttons: Like, Dislike, Share, Download, External */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                {/* Like / Dislike Split Pill */}
                <div className="flex items-center bg-yt-surface2 hover:bg-yt-hover rounded-full border border-yt-border/50 text-xs text-yt-text overflow-hidden">
                  <button
                    onClick={toggleLike}
                    className={`flex items-center gap-2 px-3.5 py-2 hover:bg-yt-hover transition-colors ${
                      hasLiked ? "text-yt-blue font-bold" : ""
                    }`}
                  >
                    <ThumbsUp className={`w-4 h-4 ${hasLiked ? "fill-yt-blue" : ""}`} />
                    <span>{likes.toLocaleString()}</span>
                  </button>
                  <div className="w-[1px] h-4 bg-yt-border" />
                  <button
                    onClick={toggleDislike}
                    className={`px-3 py-2 hover:bg-yt-hover transition-colors ${
                      hasDisliked ? "text-yt-blue font-bold" : ""
                    }`}
                  >
                    <ThumbsDown className={`w-4 h-4 ${hasDisliked ? "fill-yt-blue" : ""}`} />
                  </button>
                </div>

                {/* Share Button */}
                <button
                  onClick={() => setIsShareOpen(true)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-yt-surface2 hover:bg-yt-hover text-xs font-semibold text-yt-text border border-yt-border/50 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>

                {/* Download Resume */}
                <a
                  href={socialLinks.resumePath}
                  download="Aarya_Khabale_Resume.pdf"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-yt-surface2 hover:bg-yt-hover text-xs font-semibold text-yt-text border border-yt-border/50 transition-colors"
                >
                  <FileDown className="w-4 h-4 text-yt-red" />
                  <span>Resume</span>
                </a>

                {/* GitHub link */}
                {project.externalLinks?.github && (
                  <a
                    href={project.externalLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-yt-surface2 hover:bg-yt-hover text-xs font-semibold text-yt-text border border-yt-border/50 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Expandable Case Study Description Surface */}
            <CaseStudyView project={project} />

            {/* YouTube Interactive Comments Section */}
            <CommentsSection
              initialComments={project.comments}
              projectTitle={project.title}
            />
          </div>

          {/* Right Up-Next Recommendations Sidebar (30%) */}
          <div className="w-full lg:w-[400px] shrink-0">
            <UpNextSidebar currentSlug={project.slug} />
          </div>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        title={project.title}
        url={typeof window !== "undefined" ? window.location.href : ""}
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />
    </div>
  );
};
