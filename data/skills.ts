export interface SkillCategory {
  title: string;
  categorySlug: string;
  description: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "PRODUCT & DESIGN",
    categorySlug: "product-design",
    description: "Methodologies and tools used to translate ambiguous problems into verified user solutions.",
    skills: [
      "PRDs",
      "Requirements Gathering",
      "User Journey Mapping",
      "Feature Prioritization",
      "Roadmap Planning",
      "User Stories",
      "Wireframing",
      "Figma",
      "UI/UX Design",
      "Prototyping",
      "Data Analysis",
      "Stakeholder Management"
    ]
  },
  {
    title: "LANGUAGES",
    categorySlug: "languages",
    description: "Core programming and query languages applied in production and academic engineering.",
    skills: [
      "Python",
      "C++",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL"
    ]
  },
  {
    title: "FRAMEWORKS & LIBRARIES",
    categorySlug: "frameworks",
    description: "Front-end, backend, machine learning, and computer vision frameworks.",
    skills: [
      "React",
      "React Native",
      "FastAPI",
      "Flask",
      "LangChain",
      "PyTorch",
      "TensorFlow",
      "TensorFlow Lite",
      "OpenCV"
    ]
  },
  {
    title: "TOOLS & PLATFORMS",
    categorySlug: "tools-platforms",
    description: "DevOps, testing pipelines, cloud infrastructure, and developer suites.",
    skills: [
      "Git",
      "GitHub Actions",
      "Docker",
      "Postman",
      "Jest",
      "Android Studio",
      "Power BI",
      "AWS",
      "GCP"
    ]
  },
  {
    title: "DATABASES",
    categorySlug: "databases",
    description: "Relational, document, and real-time distributed persistence engines.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Firebase"
    ]
  }
];
