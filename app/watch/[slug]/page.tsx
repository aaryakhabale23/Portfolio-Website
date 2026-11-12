import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { WatchClient } from "@/components/watch/WatchClient";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Project Not Found — Aarya Khabale",
    };
  }

  return {
    title: `${project.title} — Aarya Khabale`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "video.other",
    },
  };
}

export default function WatchPage({ params }: PageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <WatchClient project={project} />;
}
