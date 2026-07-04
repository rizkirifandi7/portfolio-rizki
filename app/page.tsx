import React from "react";
import type { Metadata } from "next";
import { PortfolioShell } from "@/components/layout/PortfolioShell";
import { AboutSection } from "@/components/features/about/AboutSection";
import { SkillsSection } from "@/components/features/skills/SkillsSection";
import { ExperienceSection } from "@/components/features/experience/ExperienceSection";
import { ProjectsSection } from "@/components/features/projects/ProjectsSection";
import { ContactSection } from "@/components/features/contact/ContactSection";

export const metadata: Metadata = {
  metadataBase: new URL("https://rizkirifandi.com"),
  title: "Rizki Rifani | Fullstack Web Developer Portfolio",
  description:
    "Portfolio of Rizki Rifani, a Fullstack Web Developer from Indonesia focused on crafting performant, scalable applications. Discover technical skills, experiences, and completed projects.",
  keywords: [
    "Rizki Rifani",
    "Fullstack Web Developer",
    "Web Developer Indonesia",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "Software Engineer",
  ],
  authors: [{ name: "Rizki Rifani" }],
  openGraph: {
    title: "Rizki Rifani | Fullstack Web Developer Portfolio",
    description:
      "Portfolio of Rizki Rifani, a Fullstack Web Developer from Indonesia focused on crafting performant, scalable applications.",
    url: "https://github.com/rizkirifandi7",
    siteName: "Rizki Rifani Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "Rizki Rifani Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizki Rifani | Fullstack Web Developer Portfolio",
    description:
      "Portfolio of Rizki Rifani, a Fullstack Web Developer from Indonesia focused on crafting performant, scalable applications.",
    images: ["/profile.png"],
  },
};

export default function Home() {
  return (
    <PortfolioShell>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </PortfolioShell>
  );
}
