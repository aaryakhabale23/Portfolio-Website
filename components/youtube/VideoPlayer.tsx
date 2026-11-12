"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Tv,
  Settings,
  RotateCcw,
  Sparkles,
  Video as VideoIcon,
} from "lucide-react";

interface VideoPlayerProps {
  title: string;
  thumbnailSrc: string;
  duration: string;
  highlights: string[];
  category: string;
  videoUrl?: string;
  isTheaterMode?: boolean;
  onToggleTheater?: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  title,
  thumbnailSrc,
  duration,
  highlights,
  videoUrl,
  isTheaterMode = false,
  onToggleTheater,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [isMuted, setIsMuted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Parse duration "10:81" into approximate seconds for playback
  const parseSeconds = (dur: string) => {
    const parts = dur.split(":").map(Number);
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 600;
  };
  const totalSeconds = parseSeconds(duration);

  // Playback timer simulation (when no real videoUrl provided)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !videoUrl) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.5;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, videoUrl]);

  // Rotate slides while playing simulation
  useEffect(() => {
    if (isPlaying && !videoUrl && highlights.length > 0) {
      const slideIndex = Math.min(
        Math.floor((progress / 100) * highlights.length),
        highlights.length - 1
      );
      setCurrentSlide(slideIndex);
    }
  }, [progress, isPlaying, highlights, videoUrl]);

  // HTML5 Video Event Listeners (when real videoUrl provided)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [videoUrl]);

  // Auto-hide controls when playing
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 2500);
    }
  };

  const togglePlay = () => {
    if (videoUrl && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    } else {
      setIsPlaying((prev) => !prev);
    }
  };

  const handleSeek = (posPercent: number) => {
    setProgress(posPercent);
    if (videoUrl && videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = (posPercent / 100) * videoRef.current.duration;
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      if (videoRef.current) {
        videoRef.current.muted = next;
      }
      return next;
    });
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) return;

      if (e.code === "Space" || e.key.toLowerCase() === "k") {
        e.preventDefault();
        togglePlay();
      } else if (e.key.toLowerCase() === "m") {
        toggleMute();
      } else if (e.key.toLowerCase() === "f") {
        toggleFullscreen();
      } else if (e.key.toLowerCase() === "t" && onToggleTheater) {
        onToggleTheater();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onToggleTheater, isPlaying, videoUrl]);

  const currentSec = Math.floor((progress / 100) * totalSeconds);
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-yt-border select-none group cursor-pointer ${
        isTheaterMode ? "max-h-[75vh]" : ""
      }`}
      onClick={togglePlay}
    >
      {/* Real Video Mode vs Simulated Walkthrough Mode */}
      {videoUrl ? (
        <video
          ref={videoRef}
          src={videoUrl}
          poster={thumbnailSrc}
          playsInline
          muted={isMuted}
          className="w-full h-full object-cover"
        />
      ) : (
        /* Background Media / Simulated Interactive Stream */
        <div className="absolute inset-0 w-full h-full">
          <img
            src={thumbnailSrc}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isPlaying ? "scale-105 filter brightness-75 blur-[1px]" : "brightness-95"
            }`}
          />

          {/* Live Presentation Simulation Overlay when Playing */}
          {isPlaying && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-black/40 backdrop-blur-[2px]">
              <div className="max-w-xl text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yt-red/90 text-white text-xs font-bold tracking-wider uppercase animate-pulse">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Live Project Walkthrough</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight">
                  {title}
                </h2>
                <div className="p-4 rounded-xl bg-yt-surface/90 border border-yt-border text-left shadow-2xl">
                  <div className="text-[11px] font-bold text-yt-blue uppercase tracking-wider mb-1">
                    Key Highlight {currentSlide + 1} of {highlights.length}
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    "{highlights[currentSlide] || highlights[0]}"
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Big Center Play Button when Paused */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/35 group-hover:bg-black/25 transition-colors">
          <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-yt-red text-white shadow-2xl transform group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1" />
          </div>
        </div>
      )}

      {/* Top Bar Overlay (Video Title inside Player) */}
      <div
        className={`absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between text-white transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 truncate pr-4">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 shrink-0">
            <img src="/avatar.svg" alt="Aarya" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-semibold truncate">{title}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white/20 backdrop-blur-sm">
            1080p60 HD
          </span>
        </div>
      </div>

      {/* Bottom YouTube Control Bar */}
      <div
        className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent pt-8 pb-3 px-4 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scrubber Progress Bar */}
        <div
          className="relative w-full h-1.5 hover:h-2.5 bg-white/30 hover:bg-white/40 rounded-full cursor-pointer transition-all mb-3"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickPos = (e.clientX - rect.left) / rect.width;
            handleSeek(Math.max(0, Math.min(100, clickPos * 100)));
          }}
        >
          {/* Red Progress Track */}
          <div
            className="h-full bg-yt-red rounded-full relative"
            style={{ width: `${progress}%` }}
          >
            {/* Scrubber Knob */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3.5 h-3.5 rounded-full bg-yt-red shadow scale-0 hover:scale-100 group-hover:scale-100 transition-transform" />
          </div>
        </div>

        {/* Controls Row */}
        <div className="flex items-center justify-between text-white text-xs">
          {/* Left Controls: Play, Volume, Timers */}
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="p-1 hover:text-yt-red transition-colors active:scale-95"
              title={isPlaying ? "Pause (k)" : "Play (k)"}
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white" />}
            </button>

            <button
              onClick={toggleMute}
              className="p-1 hover:text-yt-muted transition-colors"
              title={isMuted ? "Unmute (m)" : "Mute (m)"}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>

            {/* Time Indicator */}
            <div className="text-[12px] font-mono text-zinc-300 font-medium">
              {formatTime(currentSec)} / {duration}
            </div>
          </div>

          {/* Right Controls: Quality, Theater, Fullscreen */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSeek(0)}
              title="Restart from beginning"
              className="p-1 text-zinc-300 hover:text-white transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {onToggleTheater && (
              <button
                onClick={onToggleTheater}
                title="Theater mode (t)"
                className={`p-1 transition-colors ${
                  isTheaterMode ? "text-yt-red" : "text-zinc-300 hover:text-white"
                }`}
              >
                <Tv className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={toggleFullscreen}
              title="Fullscreen (f)"
              className="p-1 text-zinc-300 hover:text-white transition-colors"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
