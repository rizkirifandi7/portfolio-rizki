"use client";

import React from "react";
import { Code2, Layers, GraduationCap } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/AnimatedSection";

const SKILLS_DATA = [
  {
    category: "Frontend",
    icon: <Layers className="h-4 w-4" />,
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "HTML & CSS",
      "Javascript",
      "Vue.js",
      "Svelte",
    ],
  },
  {
    category: "Backend",
    icon: <Code2 className="h-4 w-4" />,
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "REST API",
      "MySQL",
      "Sequelize",
      "Fastify",
    ],
  },
  {
    category: "Tools & Others",
    icon: <GraduationCap className="h-4 w-4" />,
    items: [
      "Git & GitHub",
      "Docker",
      "Figma",
      "Vercel",
      "Postman",
      "OpenLayers",
      "Cesium",
      "Mapbox",
      "Leaflet",
      "Three.js",
    ],
  },
] as const;

const INTERESTS = [
  "Open Source",
  "UI/UX Design",
  "Tech Content",
  "Coffee ☕",
] as const;

export function SkillsSection() {
  return (
    <AnimatedSection direction="up">
      <section
        id="skills"
        className="border rounded-lg p-4 md:p-6 scroll-mt-20 md:scroll-mt-24"
      >
        <div className="flex items-center gap-2 mb-1">
          <Code2 className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.2em]">
            Skills
          </span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight mb-1">
          Technical Skills
        </h2>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          Technologies and tools I work with on a daily basis.
        </p>
        <Separator className="mb-6" />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {SKILLS_DATA.map((group) => (
            <StaggerItem
              key={group.category}
              className="border rounded-lg p-4 bg-muted/10"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 border rounded-md bg-background text-muted-foreground">
                  {group.icon}
                </div>
                <p className="text-sm font-semibold">{group.category}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] px-2.5 py-1 rounded-md border bg-background hover:bg-muted/50 transition-colors cursor-default font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-4 border rounded-lg p-4 bg-muted/10">
          <p className="text-xs text-muted-foreground mb-3 font-medium">
            Interests
          </p>
          <div className="flex flex-wrap gap-1.5">
            {INTERESTS.map((interest) => (
              <span
                key={interest}
                className="text-[11px] px-2.5 py-1 rounded-full border bg-background font-medium"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
