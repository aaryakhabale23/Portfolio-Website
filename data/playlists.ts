export interface PlaylistItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  focus: string;
  videoCount: number;
  updatedDate: string;
  videoSlugs: string[];
  bannerGradient: string;
}

export const playlistsData: PlaylistItem[] = [
  {
    id: "pl-1",
    slug: "building-ai-products",
    title: "Building AI Products",
    subtitle: "From Computer Vision to Reinforcement Learning & Inference APIs",
    description: "Deep dive into machine learning systems, edge computer vision, intelligent optimization algorithms, and low-latency microservice architectures built for real-world impact.",
    focus: "Machine learning, computer vision, intelligent systems, offline edge inference, and real-world AI applications.",
    videoCount: 3,
    updatedDate: "Updated 2 weeks ago",
    videoSlugs: ["biolens", "ecocontrol", "bird-inference"],
    bannerGradient: "from-red-950/60 via-red-900/30 to-zinc-900",
  },
  {
    id: "pl-2",
    slug: "product-thinking-execution",
    title: "Product Thinking & Execution",
    subtitle: "From User Problems to PRDs, Wireframes, and Shipped Software",
    description: "How I approach the entire product lifecycle: identifying user pain points, writing structured PRDs, crafting Figma wireframes, prioritizing backlogs, and delivering production features.",
    focus: "Understanding user problems, defining requirements, cross-functional collaboration, and delivering impactful product features.",
    videoCount: 2,
    updatedDate: "Updated 1 month ago",
    videoSlugs: ["darukaa-product-features", "product-design"],
    bannerGradient: "from-blue-950/60 via-blue-900/30 to-zinc-900",
  },
  {
    id: "pl-3",
    slug: "engineering-development",
    title: "Engineering & Development",
    subtitle: "Full-Stack, Mobile Architectures, Offline Storage & Distributed APIs",
    description: "Production software engineering across mobile client platforms (React Native, Android Java), asynchronous backend APIs (FastAPI, Python), and cloud persistence (AWS S3, Firebase).",
    focus: "Application architecture, APIs, databases, automated testing, and reliable engineering execution.",
    videoCount: 3,
    updatedDate: "Updated 3 weeks ago",
    videoSlugs: ["biolens", "livix", "bird-inference"],
    bannerGradient: "from-emerald-950/60 via-emerald-900/30 to-zinc-900",
  },
  {
    id: "pl-4",
    slug: "leadership-community",
    title: "Leadership & Community",
    subtitle: "Building Teams, 24-Hour Hackathons, Partnerships & Developer Culture",
    description: "Leading 25-member teams, scaling a 350+ member developer community at NMIMS, directing 600+ hacker competitions, and negotiating multi-partner institutional agreements.",
    focus: "Leadership, event operations, corporate partnerships, stakeholder management, and high-impact community building.",
    videoCount: 3,
    updatedDate: "Updated 1 month ago",
    videoSlugs: ["darukaa-product-features", "product-design", "biolens"], // linked to leadership case studies and experiences
    bannerGradient: "from-amber-950/60 via-amber-900/30 to-zinc-900",
  },
];
