export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  thumbnailHeadline: string;
  visualDirection: string;
  featured: boolean;
  duration: string;
  views: string;
  uploadDate: string;
  overview: string;
  highlights: string[];
  skillsGained: string[];
  metrics: Array<{
    value: string;
    label: string;
    context: string;
  }>;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full Stack Developer Intern",
    company: "DARUKAA.EARTH — IIT Bombay",
    location: "Mumbai, India",
    period: "June 2026 – September 2026",
    type: "Internship",
    thumbnailHeadline: "FROM PRODUCT REQUIREMENTS TO PRODUCTION",
    visualDirection: "Interconnected product wireframes and production code editor showing 3 delivered features at Darukaa.earth.",
    featured: true,
    duration: "18:40",
    views: "14.2K views",
    uploadDate: "2 months ago",
    overview: "Independently owned three production features from requirements to delivery, bridging product management and full-stack software engineering in an agroforestry environmental intelligence platform.",
    highlights: [
      "Independently owned three production features: User-Guided Flow, Plant Identification, and Tree DBH Measurement.",
      "Translated complex environmental auditing requirements into intuitive, fluid React Native user experiences.",
      "Engineered machine learning models and high-performance FastAPI endpoints for a Bird Inference Microservice.",
      "Diagnosed and resolved critical AWS S3 integration issues with multipart asset uploads.",
      "Validated end-to-end API workflows using Postman and implemented automated regression testing with Jest across multiple repositories.",
      "Authored detailed PRDs and interactive Figma wireframes aligning engineering with cross-functional stakeholders.",
      "Contributed to product feature prioritization and roadmap planning, and introduced a RAG-based internal chatbot alongside major UI/UX enhancements."
    ],
    skillsGained: [
      "React Native",
      "FastAPI",
      "Python",
      "AWS S3",
      "Jest",
      "Postman",
      "PRD Authoring",
      "Figma Wireframing",
      "RAG Chatbots",
      "Roadmap Planning"
    ],
    metrics: [
      { value: "3", label: "Production Features Owned", context: "Shipped directly to end users in field operations." },
      { value: "100%", label: "PRD-to-Delivery Ownership", context: "From user interviews to production code." },
      { value: "0", label: "Critical Production Regressions", context: "Guaranteed through automated Jest suites." },
      { value: "Multi-Repo", label: "Engineering Scope", context: "Contributed across mobile, backend, and ML services." }
    ]
  },
  {
    id: "exp-2",
    role: "Campus Organizer (Lead)",
    company: "GOOGLE DEVELOPER GROUP ON CAMPUS — NMIMS",
    location: "Mumbai, India",
    period: "August 2024 – June 2025",
    type: "Leadership",
    thumbnailHeadline: "BUILDING A TECH COMMUNITY FROM THE GROUND UP",
    visualDirection: "A vibrant hackathon stage with 600+ student attendees, sponsor logos, keynote speakers, and collaborative coding tables.",
    featured: true,
    duration: "24:00",
    views: "21.6K views",
    uploadDate: "3 months ago",
    overview: "Led a 25-member organizing committee at GDG on Campus NMIMS, directing workshops, speaker sessions, cloud study jams, and orchestrating a premier 24-hour hackathon (HackX).",
    highlights: [
      "Led and inspired a multidisciplinary 25-member organizing committee across tech, logistics, design, and sponsorship divisions.",
      "Directed the flagship 24-hour hackathon 'HackX', attracting 600+ registrations across engineering universities.",
      "Shortlisted 50+ elite finalist teams and raised ₹2 lakh+ in corporate sponsorships and technology grants.",
      "Grew the campus developer community from the ground up to 350+ active student members.",
      "Organized technical workshops and Google Cloud Study Jams empowering hundreds of students with cloud & AI literacy."
    ],
    skillsGained: [
      "Executive Leadership",
      "Community Building",
      "Team Management",
      "Event Operations",
      "Sponsorship Fundraising",
      "Budget Allocation",
      "Stakeholder Management"
    ],
    metrics: [
      { value: "25", label: "Organizing Team Members", context: "Led across design, technical, PR, and logistics teams." },
      { value: "350+", label: "Active Community Members", context: "Fostered inclusive peer-learning on campus." },
      { value: "600+", label: "HackX Registrations", context: "Flagship 24-hour competitive hackathon." },
      { value: "50+", label: "Shortlisted Teams", context: "Vetted through rigorous technical proposal evaluations." },
      { value: "₹2 Lakh+", label: "Corporate Sponsorships", context: "Secured from tech companies and educational partners." }
    ]
  },
  {
    id: "exp-3",
    role: "HR & Strategic Partnerships Intern",
    company: "SOLARIS EVENTS AND CONSULTANCY",
    location: "Mumbai, India",
    period: "May 2023 – July 2023",
    type: "Internship",
    thumbnailHeadline: "200+ CANDIDATES. 10+ CORPORATE PARTNERSHIPS.",
    visualDirection: "A professional executive conference boardroom showcasing candidate placement pipelines and corporate hospital partnership networks.",
    featured: false,
    duration: "09:30",
    views: "3.9K views",
    uploadDate: "5 months ago",
    overview: "Spearheaded candidate recruitment pipelines, conducted structured competency interviews, and built strategic institutional partnerships across healthcare and corporate sectors.",
    highlights: [
      "Managed end-to-end recruitment workflows, screening and shortlisting 200+ qualified candidates across technical and operations tracks.",
      "Conducted behavioral and competency-based interviews, evaluating soft skills and domain qualifications.",
      "Negotiated job offers and facilitated smooth onboarding for successful candidates.",
      "Initiated outreach and established strategic partnerships with 10+ hospitals and corporate organizations.",
      "Supported placement operations, contract administration, and executive stakeholder engagement."
    ],
    skillsGained: [
      "Strategic Partnerships",
      "Stakeholder Management",
      "Competency-Based Interviewing",
      "Recruitment Pipelines",
      "Negotiation",
      "Operations Management"
    ],
    metrics: [
      { value: "200+", label: "Candidates Shortlisted", context: "Evaluated through structured competency assessments." },
      { value: "10+", label: "Strategic Partnerships", context: "Formed with corporate enterprises and hospital networks." },
      { value: "100%", label: "Pipeline Reliability", context: "Seamless candidate-to-placement execution." }
    ]
  }
];
