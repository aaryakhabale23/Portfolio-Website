import { Metadata } from "next";
import { notFound } from "next/navigation";
import { playlistsData } from "@/data/playlists";
import { projectsData, ProjectCaseStudy } from "@/data/projects";
import { PlaylistClient } from "@/components/playlist/PlaylistClient";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return playlistsData.map((pl) => ({
    slug: pl.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const playlist = playlistsData.find((p) => p.slug === params.slug);
  if (!playlist) {
    return {
      title: "Playlist Not Found — Aarya Khabale",
    };
  }

  return {
    title: `${playlist.title} (Playlist) — Aarya Khabale`,
    description: playlist.description,
  };
}

export default function DedicatedPlaylistPage({ params }: PageProps) {
  const playlist = playlistsData.find((pl) => pl.slug === params.slug);

  if (!playlist) {
    notFound();
  }

  const playlistProjects = playlist.videoSlugs
    .map((s) => projectsData.find((p) => p.slug === s))
    .filter((p): p is ProjectCaseStudy => Boolean(p));

  return (
    <PlaylistClient
      playlist={playlist}
      playlistProjects={playlistProjects}
    />
  );
}
