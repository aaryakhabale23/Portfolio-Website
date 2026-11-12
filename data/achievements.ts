export interface AchievementMetric {
  id: string;
  metric: string;
  label: string;
  context: string;
  category: "AI & ML" | "Engineering" | "Community & Leadership" | "Operations";
  projectOrOrg: string;
  iconName: string;
  badge?: string;
}

export const achievementsData: AchievementMetric[] = [
  {
    id: "ach-1",
    metric: "1,081",
    label: "Species Supported",
    context: "Taxonomic plant and wildlife identification on-device with zero internet connection in BioLens.",
    category: "AI & ML",
    projectOrOrg: "BioLens Platform",
    iconName: "Leaf",
    badge: "Edge AI",
  },
  {
    id: "ach-2",
    metric: "< 120ms",
    label: "Inference Latency",
    context: "Sub-120ms edge prediction time achieved on smartphone hardware using 8-bit quantized TensorFlow Lite.",
    category: "AI & ML",
    projectOrOrg: "BioLens Platform",
    iconName: "Zap",
    badge: "Optimization",
  },
  {
    id: "ach-3",
    metric: "76.8%",
    label: "Simulated Energy Reduction",
    context: "Autonomous electrical savings achieved in simulated HVAC & lighting control via PPO reinforcement learning.",
    category: "AI & ML",
    projectOrOrg: "EcoControl",
    iconName: "TrendingDown",
    badge: "Verified Simulation",
  },
  {
    id: "ach-4",
    metric: "81%+",
    label: "Occupant Comfort Score",
    context: "Preserved ASHRAE-compliant environmental comfort while executing aggressive autonomous energy conservation.",
    category: "AI & ML",
    projectOrOrg: "EcoControl",
    iconName: "Smile",
    badge: "Verified Simulation",
  },
  {
    id: "ach-5",
    metric: "600+",
    label: "HackX Registrations",
    context: "Directed NMIMS's flagship 24-hour hackathon, attracting student innovators from universities nationwide.",
    category: "Community & Leadership",
    projectOrOrg: "GDG on Campus",
    iconName: "Users",
    badge: "Flagship Event",
  },
  {
    id: "ach-6",
    metric: "50+",
    label: "Shortlisted Hackathon Teams",
    context: "Vetted through rigorous problem-statement proposal evaluations for live in-person 24h hacking.",
    category: "Community & Leadership",
    projectOrOrg: "GDG on Campus",
    iconName: "Trophy",
  },
  {
    id: "ach-7",
    metric: "₹2 Lakh+",
    label: "Corporate Sponsorships",
    context: "Fundraised capital, API credits, and hardware grants from industry sponsors for community events.",
    category: "Community & Leadership",
    projectOrOrg: "GDG on Campus",
    iconName: "Coins",
  },
  {
    id: "ach-8",
    metric: "350+",
    label: "Active Community Members",
    context: "Scaled a vibrant student tech community from the ground up, organizing study jams and speaker sessions.",
    category: "Community & Leadership",
    projectOrOrg: "GDG on Campus",
    iconName: "Sparkles",
  },
  {
    id: "ach-9",
    metric: "25",
    label: "Organizing Team Members",
    context: "Led and coordinated cross-functional divisions across technical, design, PR, and event logistics.",
    category: "Community & Leadership",
    projectOrOrg: "GDG on Campus",
    iconName: "Compass",
  },
  {
    id: "ach-10",
    metric: "200+",
    label: "Candidates Shortlisted",
    context: "Managed end-to-end recruitment pipelines and conducted competency-based structured interviews at Solaris.",
    category: "Operations",
    projectOrOrg: "Solaris Events & Consultancy",
    iconName: "UserCheck",
  },
  {
    id: "ach-11",
    metric: "10+",
    label: "Strategic Partnerships",
    context: "Established corporate and hospital placement partnerships, supporting executive client engagement.",
    category: "Operations",
    projectOrOrg: "Solaris Events & Consultancy",
    iconName: "Handshake",
  },
];
