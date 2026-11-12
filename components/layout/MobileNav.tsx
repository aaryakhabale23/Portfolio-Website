"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, PlaySquare, ListVideo, Briefcase, User } from "lucide-react";

export const MobileNav: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Videos", href: "/videos", icon: PlaySquare },
    { label: "Playlists", href: "/playlists", icon: ListVideo },
    { label: "Experience", href: "/experience", icon: Briefcase },
    { label: "About", href: "/about", icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around h-14 bg-yt-bg/95 backdrop-blur-md border-t border-yt-border px-2 select-none">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
              isActive ? "text-white font-bold" : "text-yt-muted hover:text-yt-text"
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? "text-yt-red" : "text-yt-muted"}`} />
            <span className="text-[10px] mt-0.5 tracking-tight">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
