"use client";

import React from "react";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/AnimatedSection";

const EXPERIENCE_DATA = [
  {
    role: "Frontend Developer",
    company: "PT Multimedia Solusi Prima",
    period: "Dec 2025 – Jun 2026",
    desc: "Led UI development for internal dashboards using Next.js and TypeScript. Collaborated with backend team to design REST API contracts.",
  },
  {
    role: "Internship - Software Developer ",
    company: "TELKOM Indonesia",
    period: "Aug 2024  - Oct 2024 ",
    desc: "Participated in the development of a monitoring system used within PT Telkom Indonesia, ensuring infrastructure performance and reliability.",
  },
  {
    role: "Internship - Frontend Developer",
    company: "PT Len Industri (Persero)",
    period: "Feb 2024 - Jun 2024",
    desc: "Built a new internal dashboard for monitoring projects across the company. Contributed to designing new UI components and integrated with various APIs to display real-time project data.",
  },
  {
    role: "Freelance Web Developer",
    company: "Local & Global Clients",
    period: "2022 – Present",
    desc: "Delivered 15+ projects ranging from landing pages to full e-commerce platforms. Handled everything from design to deployment.",
  },
] as const;

const EDUCATION_DATA = [
  {
    degree: "Bachelor of Computer Science",
    school: "Universitas Komputer Indonesia",
    period: "2021 – 2025",
    desc: "Major in Computer Science and Information Technology, focused on software engineering, algorithms, and database systems. Active in the developer community club.",
  },
  {
    degree: "Full-stack Web Development Bootcamp",
    school: "Online — Rakamin Academy",
    period: "2023",
    desc: "Completed full-stack JavaScript curriculum covering React, Node.js, and deployment.",
  },
] as const;

export function ExperienceSection() {
  return (
    <AnimatedSection direction="up">
      <section
        id="experience"
        className="border rounded-lg p-4 md:p-6 scroll-mt-20 md:scroll-mt-24"
      >
        <div className="flex items-center gap-2 mb-1">
          <BriefcaseBusiness className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.2em]">
            Career
          </span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight mb-1">
          Experience &amp; Education
        </h2>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          My professional journey and academic background.
        </p>
        <Separator className="mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <BriefcaseBusiness className="h-3.5 w-3.5 text-muted-foreground" />
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Work Experience
              </h3>
            </div>
            <StaggerContainer className="relative pl-5 border-l border-border space-y-6">
              {EXPERIENCE_DATA.map((exp) => (
                <StaggerItem key={exp.role} className="relative">
                  <div className="absolute -left-[1.55rem] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-border bg-background" />
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <p className="text-sm font-semibold leading-snug">
                        {exp.role}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap border rounded px-1.5 py-0.5 bg-muted/30 shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {exp.desc}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap className="h-3.5 w-3.5 text-muted-foreground" />
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Education
              </h3>
            </div>
            <StaggerContainer className="relative pl-5 border-l border-border space-y-6">
              {EDUCATION_DATA.map((edu) => (
                <StaggerItem key={edu.degree} className="relative">
                  <div className="absolute -left-[1.55rem] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-border bg-background" />
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <p className="text-sm font-semibold leading-snug">
                        {edu.degree}
                      </p>
                      <p className="text-xs text-muted-foreground text-left">
                        {edu.school}
                      </p>
                    </div>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap border rounded px-1.5 py-0.5 bg-muted/30 shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {edu.desc}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
