export interface ChannelProfile {
  name: string;
  handle: string;
  title: string;
  tagline: string;
  supportingTagline: string;
  positioning: string;
  location: string;
  education: {
    institution: string;
    school: string;
    degree: string;
    period: string;
    cgpa: string;
  };
  metrics: {
    subscribersCount: string;
    videosCount: number;
    playlistsCount: number;
    totalViews: string;
    communitySize: string;
    joinedDate: string;
  };
  bannerText: string;
  bannerSubtext: string;
  bioIntro: string[];
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
  professionalInterests: string[];
  currentlyExploring: Array<{
    topic: string;
    description: string;
    status: string;
    category: string;
  }>;
}

export const profileData: ChannelProfile = {
  name: "Aarya Khabale",
  handle: "@aaryak",
  title: "AI & Data Science | Product Enthusiast | Developer | Community Builder",
  tagline: "BUILDING PRODUCTS. SOLVING PROBLEMS. CREATING IMPACT.",
  supportingTagline: "PRODUCT × AI × ENGINEERING × LEADERSHIP",
  positioning: "A product-minded technologist who understands how to identify problems, translate requirements into solutions, build intelligent products, and bring people together to execute.",
  location: "Mumbai, India",
  education: {
    institution: "NMIMS University",
    school: "School of Technology Management & Engineering",
    degree: "B.Tech. Artificial Intelligence and Data Science",
    period: "2024–2027 (Expected)",
    cgpa: "3.48 / 4.00",
  },
  metrics: {
    subscribersCount: "1.08K",
    videosCount: 6,
    playlistsCount: 4,
    totalViews: "18.4K",
    communitySize: "350+",
    joinedDate: "Aug 15, 2024",
  },
  bannerText: "BUILDING PRODUCTS. SOLVING PROBLEMS. CREATING IMPACT.",
  bannerSubtext: "PRODUCT × AI × ENGINEERING × LEADERSHIP",
  bioIntro: [
    "Hey, I'm Aarya!",
    "I'm an Artificial Intelligence and Data Science undergraduate at NMIMS University, with a strong interest in building products at the intersection of technology, data, and user experience.",
    "I enjoy understanding problems, translating requirements into actionable product solutions, and working through the engineering needed to bring those solutions to life.",
    "My experience spans product feature ownership, AI/ML engineering, full-stack and mobile development, and community leadership.",
    "From building offline-first AI applications and reinforcement learning-based energy optimization systems to documenting product requirements and leading a technology community, I enjoy exploring how ideas become meaningful products.",
    "I'm particularly interested in opportunities where product thinking, technical depth, analytical problem-solving, and execution come together.",
  ],
  certifications: [
    {
      name: "AWS Academy Cloud Architecting",
      issuer: "Amazon Web Services",
      date: "April 2026",
    },
    {
      name: "Google Cloud Computing Foundations",
      issuer: "Google Cloud",
      date: "September 2023",
    },
  ],
  professionalInterests: [
    "Product Management",
    "AI-powered products",
    "Machine Learning",
    "Product Strategy",
    "Computer Vision",
    "Product Design",
    "Software Engineering",
    "Community Building",
  ],
  currentlyExploring: [
    {
      topic: "Product Management",
      description: "Deepening discovery frameworks, opportunity solution trees, and user-centric metrics tracking.",
      status: "Active Research",
      category: "Product",
    },
    {
      topic: "AI-Powered Products",
      description: "Building production RAG pipelines, fine-tuned agentic workflows, and edge inference architectures.",
      status: "In Development",
      category: "AI & ML",
    },
    {
      topic: "Intelligent Systems",
      description: "Exploring hybrid models merging computer vision with reinforcement learning for adaptive environments.",
      status: "Experimenting",
      category: "Systems",
    },
    {
      topic: "Product Experimentation",
      description: "Validating user hypotheses with telemetry, rapid A/B test designs, and customer journey analytics.",
      status: "Practice",
      category: "Product",
    },
    {
      topic: "Emerging Technologies",
      description: "Tracking local SLMs, on-device neural acceleration, and low-latency multimodal pipelines.",
      status: "Continuous",
      category: "Tech",
    },
  ],
};
