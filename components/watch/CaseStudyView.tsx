"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Cpu,
  Target,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Github,
  Layers,
  ArrowRight,
} from "lucide-react";
import { ProjectCaseStudy } from "@/data/projects";

interface CaseStudyViewProps {
  project: ProjectCaseStudy;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full mt-4 select-none">
      {/* YouTube Expandable Description Surface (#272727) */}
      <div
        className={`w-full rounded-2xl bg-yt-surface2 hover:bg-yt-surface2/90 border border-yt-border/40 p-4 transition-all duration-300 ${
          isExpanded ? "cursor-default" : "cursor-pointer"
        }`}
        onClick={() => {
          if (!isExpanded) setIsExpanded(true);
        }}
      >
        {/* Top Meta Line: Views, Date, Hashtags */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-white mb-2">
          <span>{project.views}</span>
          <span>•</span>
          <span>{project.uploadDate}</span>
          <span className="text-yt-blue ml-2">#{project.categoryTag.replace(/\s+/g, "")}</span>
          <span className="text-yt-blue">#AaryaChannel</span>
        </div>

        {/* Project Summary */}
        <p className="text-sm text-yt-text font-normal leading-relaxed">
          {project.summary}
        </p>

        {/* Highlights Pills */}
        <div className="flex flex-wrap gap-2 my-3">
          {project.highlights.map((h, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-yt-surface border border-yt-border/60 text-xs text-yt-text"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Simulated Disclaimer */}
        {project.simulatedDisclaimer && (
          <div className="flex items-start gap-2 p-3 my-2 rounded-xl bg-amber-950/40 border border-amber-800/60 text-xs text-amber-200">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Simulation Notice: </span>
              {project.simulatedDisclaimer}
            </div>
          </div>
        )}

        {/* Deep Case Study Sections (Revealed when Expanded) */}
        {isExpanded ? (
          <div className="pt-4 border-t border-yt-border/50 space-y-6 text-sm text-yt-text">
            {/* 1. Problem Statement & Role */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 p-4 rounded-xl bg-yt-bg border border-yt-border">
                <div className="flex items-center gap-2 text-xs font-bold text-yt-red uppercase tracking-wider mb-2">
                  <Target className="w-4 h-4" />
                  <span>The Problem Statement</span>
                </div>
                <p className="text-xs sm:text-sm text-yt-muted leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-yt-bg border border-yt-border space-y-2">
                <div className="text-xs font-bold text-yt-blue uppercase tracking-wider">
                  Ownership &amp; Timeline
                </div>
                <div>
                  <div className="text-[11px] text-yt-muted">Role</div>
                  <div className="text-xs font-bold text-white">{project.role}</div>
                </div>
                <div>
                  <div className="text-[11px] text-yt-muted">Timeline</div>
                  <div className="text-xs text-white">{project.timeline}</div>
                </div>
                <div>
                  <div className="text-[11px] text-yt-muted">Category</div>
                  <div className="text-xs text-white">{project.category}</div>
                </div>
              </div>
            </div>

            {/* 2. Approach & Implementation */}
            <div className="p-4 rounded-xl bg-yt-bg border border-yt-border space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-yt-blue" />
                <span>Approach &amp; Execution Strategy</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-yt-muted">
                {project.approach.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-yt-surface2 text-yt-blue font-bold text-[11px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Product Decisions & Trade-Offs */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Product Decisions &amp; Engineering Trade-offs</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.productDecisions.map((pd, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-yt-bg border border-yt-border space-y-2"
                  >
                    <div className="text-xs font-bold text-white">
                      Decision {idx + 1}: {pd.decision}
                    </div>
                    <p className="text-[11px] text-yt-muted leading-relaxed">
                      <span className="font-semibold text-yt-text">Rationale: </span>
                      {pd.rationale}
                    </p>
                    <p className="text-[11px] text-zinc-400 leading-relaxed bg-yt-surface p-2 rounded-lg border border-yt-border/40">
                      <span className="font-semibold text-amber-400">Trade-Off Accepted: </span>
                      {pd.tradeOff}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Technical Architecture */}
            <div className="p-4 rounded-xl bg-yt-bg border border-yt-border space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                <Cpu className="w-4 h-4 text-yt-red" />
                <span>System Architecture</span>
              </div>
              <p className="text-xs text-yt-muted">
                {project.technicalArchitecture.overview}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {project.technicalArchitecture.components.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-yt-surface border border-yt-border/50 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{c.name}</span>
                      <span className="text-[10px] font-mono text-yt-blue">{c.tech}</span>
                    </div>
                    <p className="text-[11px] text-yt-muted">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Challenges & Solutions */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Key Challenges Overcome
              </div>
              <div className="space-y-2">
                {project.challenges.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-yt-bg border border-yt-border space-y-1"
                  >
                    <div className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                      <span>Challenge:</span>
                      <span className="text-white font-normal">{c.challenge}</span>
                    </div>
                    <div className="text-xs text-emerald-400 flex items-center gap-1.5 pt-1">
                      <span className="font-bold">Engineered Solution:</span>
                      <span className="text-yt-text font-normal">{c.solution}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Measurable Impact Cards */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Measurable Impact &amp; Results
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.measurableImpact.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-yt-bg border border-yt-border text-center space-y-1"
                  >
                    <div className="text-xl sm:text-2xl font-black text-white font-mono">
                      {m.metric}
                    </div>
                    <div className="text-xs font-bold text-yt-text">{m.label}</div>
                    <div className="text-[10px] text-yt-muted leading-tight">{m.context}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* External Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.externalLinks?.github && (
                <a
                  href={project.externalLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-yt-surface hover:bg-yt-hover text-white border border-yt-border transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View GitHub Repository</span>
                </a>
              )}
              {project.externalLinks?.demo && project.externalLinks.demo !== "#" && (
                <a
                  href={project.externalLinks.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-yt-blue hover:bg-sky-400 text-black transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Live Demo</span>
                </a>
              )}
            </div>

            {/* Show Less Toggle */}
            <button
              onClick={() => setIsExpanded(false)}
              className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-yt-blue transition-colors pt-2"
            >
              <span>Show less</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Show More Button */
          <div className="pt-2">
            <button
              onClick={() => setIsExpanded(true)}
              className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-yt-blue transition-colors"
            >
              <span>...more (View Architecture, Product Decisions &amp; Impact)</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
