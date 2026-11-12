export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
  isExternal: boolean;
}

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/aaryakhabale/",
  github: "https://github.com/aaryak",
  email: "aaryakhabale@gmail.com",
  resumePath: "/resume.pdf",
};

export const navSocials: SocialLink[] = [
  {
    name: "LinkedIn",
    url: socialLinks.linkedin,
    icon: "Linkedin",
    label: "Connect on LinkedIn",
    isExternal: true,
  },
  {
    name: "GitHub",
    url: socialLinks.github,
    icon: "Github",
    label: "Explore GitHub Repositories",
    isExternal: true,
  },
  {
    name: "Email",
    url: `mailto:${socialLinks.email}`,
    icon: "Mail",
    label: "Send an Email",
    isExternal: true,
  },
  {
    name: "Resume",
    url: socialLinks.resumePath,
    icon: "FileDown",
    label: "Download Aarya's Resume (PDF)",
    isExternal: false,
  },
];
