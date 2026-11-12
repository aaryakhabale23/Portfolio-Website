"use client";

import React, { useState } from "react";
import { X, Play, Sparkles, Check, ArrowRight, Layers, ShieldCheck, Zap } from "lucide-react";
import { useChannel } from "../context/ChannelContext";
import { profileData } from "@/data/profile";

export const ChannelTrailerModal: React.FC = () => {
  const { isTrailerModalOpen, closeTrailerModal, openContactModal } = useChannel();
  const [activePillar, setActivePillar] = useState(0);

  if (!isTrailerModalOpen) return null;

  const pillars = [
    {
      title: "Product Management",
      icon: Layers,
      color: "text-rose-400",
      headline: "Identifying Problems & Defining What to Build",
      description: "Writing comprehensive PRDs, defining user journeys, validating acceptance criteria, prioritizing features using RICE, and aligning engineering with user outcomes.",
      highlight: "Owned 3 features end-to-end at Darukaa.earth from initial requirements to production delivery.",
    },
    {
      title: "Artificial Intelligence",
      icon: Sparkles,
      color: "text-emerald-400",
      headline: "Applied Machine Learning & Optimization",
      description: "Developing quantized on-device computer vision models, training PPO reinforcement learning agents, and engineering low-latency REST inference microservices.",
      highlight: "Sub-120ms offline classification for 1,081 species (BioLens) and simulated 76.8% energy savings (EcoControl).",
    },
    {
      title: "Software Engineering",
      icon: Zap,
      color: "text-sky-400",
      headline: "Robust Architecture Across Mobile & Backend",
      description: "Full-stack development in React Native, Android Java/Kotlin, FastAPI, and Cloud Firestore. Integrating automated Jest suites and resolving AWS S3 production issues.",
      highlight: "11-screen native Android architecture (Livix) and multi-repository API testing.",
    },
    {
      title: "Leadership & Community",
      icon: ShieldCheck,
      color: "text-amber-400",
      headline: "Bringing People Together to Execute",
      description: "Leading a 25-member organizing committee, scaling a 350+ member developer community, directing 24h flagship hackathons with ₹2L+ sponsorships, and managing recruitment pipelines.",
      highlight: "GDG on Campus NMIMS Lead; 600+ HackX participants; 200+ candidates evaluated at Solaris.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="w-full max-w-3xl bg-yt-surface border border-yt-border rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-yt-border shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yt-red/20 text-yt-red">
              <Play className="w-4 h-4 fill-yt-red" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                GET TO KNOW AARYA — CHANNEL TRAILER
              </h3>
              <p className="text-xs text-yt-muted">
                "An introduction to what I build, how I think, and what I'm exploring."
              </p>
            </div>
          </div>
          <button
            onClick={closeTrailerModal}
            className="p-1.5 text-yt-muted hover:text-white rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Channel Banner Visual */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-yt-border">
            <img
              src="/thumbnails/trailer.svg"
              alt="Get to know Aarya"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Core Positioning Callout */}
          <div className="p-4 rounded-xl bg-yt-bg border border-yt-border">
            <div className="text-xs font-bold text-yt-red uppercase tracking-wider mb-1.5">
              Personal Brand Positioning
            </div>
            <p className="text-sm font-medium text-white italic leading-relaxed">
              "{profileData.positioning}"
            </p>
          </div>

          {/* Interactive 4 Pillars Showcase */}
          <div>
            <div className="text-xs font-bold text-yt-muted uppercase tracking-wider mb-3">
              Explore the Four Pillars
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                const isSelected = activePillar === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActivePillar(idx)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                      isSelected
                        ? "bg-yt-surface2 border-white text-white font-bold shadow-md"
                        : "bg-yt-bg border-yt-border text-yt-muted hover:text-white"
                    }`}
                  >
                    <Icon className={`w-5 h-5 mb-1.5 ${p.color}`} />
                    <span className="text-xs">{p.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Pillar Details Card */}
            <div className="p-4 rounded-xl bg-yt-surface2 border border-yt-border space-y-2">
              <h4 className="text-base font-bold text-white">
                {pillars[activePillar].headline}
              </h4>
              <p className="text-xs text-yt-text/90 leading-relaxed">
                {pillars[activePillar].description}
              </p>
              <div className="pt-2 text-xs font-semibold text-yt-blue flex items-start gap-1.5">
                <Check className="w-4 h-4 shrink-0 text-yt-blue stroke-[3] mt-0.5" />
                <span>{pillars[activePillar].highlight}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-4 border-t border-yt-border shrink-0 bg-yt-surface">
          <button
            onClick={() => {
              closeTrailerModal();
              openContactModal();
            }}
            className="flex items-center gap-2 text-xs font-semibold text-yt-blue hover:underline"
          >
            <span>Let's Discuss Opportunities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={closeTrailerModal}
            className="px-4 py-2 text-xs font-semibold bg-white text-black hover:bg-zinc-200 rounded-full transition-colors"
          >
            Done Exploring
          </button>
        </div>
      </div>
    </div>
  );
};
