"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  Award,
  Globe,
  Mail,
  Share2,
  Calendar,
  Eye,
  Users,
  Linkedin,
  Github,
  FileDown,
  Check,
  Sparkles,
  Layers,
  Code2,
  Database,
  Cpu,
  Wrench,
} from "lucide-react";
import { ChannelHeader } from "@/components/layout/ChannelHeader";
import { ChannelTabs } from "@/components/channel/ChannelTabs";
import { profileData } from "@/data/profile";
import { skillsData } from "@/data/skills";
import { socialLinks } from "@/data/social-links";
import { ShareModal } from "@/components/youtube/ShareModal";

export default function AboutPage() {
  const [showEmail, setShowEmail] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const getCategoryIcon = (categorySlug: string) => {
    switch (categorySlug) {
      case "product-design":
        return Layers;
      case "languages":
        return Code2;
      case "frameworks":
        return Cpu;
      case "tools-platforms":
        return Wrench;
      case "databases":
        return Database;
      default:
        return Sparkles;
    }
  };

  return (
    <div className="w-full min-h-screen bg-yt-bg select-none">
      <ChannelHeader />
      <ChannelTabs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Column: Full Channel Bio, Education, Certs, Tech Stack, Inquiries (70%) */}
          <div className="flex-1 min-w-0 space-y-8">
            {/* Description Bio */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white tracking-tight border-b border-yt-border/50 pb-2">
                Description
              </h2>
              <div className="p-4 rounded-xl bg-yt-surface border border-yt-border">
                <div className="text-xs font-bold text-yt-red uppercase tracking-wider mb-2">
                  Channel Brand Positioning
                </div>
                <p className="text-sm font-semibold text-white italic leading-relaxed">
                  "{profileData.positioning}"
                </p>
              </div>

              <div className="space-y-3 text-sm text-yt-text/90 leading-relaxed font-normal">
                {profileData.bioIntro.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>

            {/* Education & Certifications */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white tracking-tight border-b border-yt-border/50 pb-2">
                Education &amp; Credentials
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Education */}
                <div className="p-5 rounded-xl bg-yt-surface border border-yt-border space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-yt-blue uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4" />
                    <span>Education</span>
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {profileData.education.institution}
                  </h3>
                  <div className="text-xs text-yt-muted">
                    {profileData.education.school}
                  </div>
                  <div className="text-xs font-semibold text-white pt-1">
                    {profileData.education.degree}
                  </div>
                  <div className="text-xs text-yt-muted">
                    {profileData.education.period} • CGPA: {profileData.education.cgpa}
                  </div>
                </div>

                {/* Certifications */}
                <div className="p-5 rounded-xl bg-yt-surface border border-yt-border space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    <Award className="w-4 h-4" />
                    <span>Certifications</span>
                  </div>
                  <div className="space-y-2.5">
                    {profileData.certifications.map((cert, idx) => (
                      <div key={idx} className="border-l-2 border-yt-border pl-3">
                        <div className="text-xs font-bold text-white">{cert.name}</div>
                        <div className="text-[11px] text-yt-muted">
                          {cert.issuer} • {cert.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Interests */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white tracking-tight border-b border-yt-border/50 pb-2">
                Professional Interests
              </h2>
              <div className="flex flex-wrap gap-2 pt-1">
                {profileData.professionalInterests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-yt-surface2 hover:bg-yt-hover text-white border border-yt-border transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </section>

            {/* Tech Stack Grouped by YouTube Topic Shelves */}
            <section className="space-y-4">
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight border-b border-yt-border/50 pb-2">
                  Technical Stack &amp; Core Tooling
                </h2>
                <p className="text-xs text-yt-muted mt-1">
                  Organized by domain shelves without arbitrary proficiency percentages
                </p>
              </div>

              <div className="space-y-4">
                {skillsData.map((category) => {
                  const Icon = getCategoryIcon(category.categorySlug);
                  return (
                    <div
                      key={category.categorySlug}
                      className="p-5 rounded-xl bg-yt-surface border border-yt-border space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-yt-red" />
                          <h3 className="text-xs font-bold text-white tracking-widest uppercase">
                            {category.title}
                          </h3>
                        </div>
                        <span className="text-[10px] text-yt-muted font-mono">
                          {category.skills.length} skills
                        </span>
                      </div>

                      <p className="text-xs text-yt-muted">
                        {category.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {category.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-yt-bg text-yt-text border border-yt-border/60 hover:border-yt-blue transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Details Section (Email & Links) */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-white tracking-tight border-b border-yt-border/50 pb-2">
                Details &amp; Communication
              </h2>

              <div className="p-5 rounded-xl bg-yt-surface border border-yt-border space-y-4 text-xs">
                {/* Email Inquiry with YouTube captcha-like toggle */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-yt-muted block">For business inquiries:</span>
                    <span className="text-white font-semibold">Direct Recruiter &amp; Founder Contact</span>
                  </div>

                  {showEmail ? (
                    <div className="flex items-center gap-2 p-2 bg-yt-bg border border-yt-border rounded-lg">
                      <Mail className="w-3.5 h-3.5 text-yt-blue" />
                      <span className="text-xs font-mono text-white select-all">
                        {socialLinks.email}
                      </span>
                      <a
                        href={`mailto:${socialLinks.email}`}
                        className="text-[11px] font-bold text-yt-blue hover:underline ml-2"
                      >
                        Send Email
                      </a>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowEmail(true)}
                      className="px-4 py-2 rounded-full text-xs font-semibold bg-yt-surface2 hover:bg-yt-hover text-white border border-yt-border transition-colors self-start sm:self-auto"
                    >
                      View email address
                    </button>
                  )}
                </div>

                <div className="border-t border-yt-border/50 pt-3">
                  <span className="text-yt-muted block mb-1">Location:</span>
                  <span className="text-white font-medium">{profileData.location}</span>
                </div>

                <div className="border-t border-yt-border/50 pt-3">
                  <span className="text-yt-muted block mb-2">External Links:</span>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-yt-blue hover:underline font-semibold"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                      <span>LinkedIn Profile</span>
                    </a>
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-yt-blue hover:underline font-semibold"
                    >
                      <Github className="w-3.5 h-3.5 text-white" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={socialLinks.resumePath}
                      download="Aarya_Khabale_Resume.pdf"
                      className="flex items-center gap-1.5 text-yt-blue hover:underline font-semibold"
                    >
                      <FileDown className="w-3.5 h-3.5 text-yt-red" />
                      <span>Download Resume (PDF)</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Stats (30%) */}
          <div className="w-full lg:w-80 shrink-0 p-5 rounded-xl bg-yt-surface border border-yt-border space-y-4 lg:sticky lg:top-24">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-yt-border/50 pb-2">
              Stats
            </h3>

            <div className="space-y-3 text-xs text-yt-text">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-yt-muted" />
                <span>Joined {profileData.metrics.joinedDate}</span>
              </div>
              <div className="flex items-center gap-3">
                <Eye className="w-4 h-4 text-yt-muted" />
                <span>{profileData.metrics.totalViews} views across case studies</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-yt-muted" />
                <span>{profileData.metrics.communitySize} developer community</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-yt-muted" />
                <span>{profileData.location}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-yt-border/50">
              <button
                onClick={() => setIsShareOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-full bg-yt-surface2 hover:bg-yt-hover text-white text-xs font-semibold border border-yt-border transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share channel</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ShareModal
        title="Aarya Khabale — The Channel"
        url={typeof window !== "undefined" ? window.location.origin : ""}
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />
    </div>
  );
}
