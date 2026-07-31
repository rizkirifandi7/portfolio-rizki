"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, ArrowUpRight, Sparkles, BriefcaseBusiness } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/AnimatedSection";

const PROJECTS_DATA = [
  {
    index: "01",
    title: "PUSAMADA Indonesia",
    description:
      "Organization profile with full CRUD management, photo galleries, and embedded video showcases.",
    tech: ["Next.js", "PostgreSQL", "TailwindCSS", "Prisma", "Express"],
    image: "/project-pusamada.png",
    github: "https://github.com/rizkirifandi7/web-silat-v2",
    live: "https://www.pusamadaind.com/",
    featured: true,
  },
  {
    index: "02",
    title: "Market Monitoring System ARBA",
    description:
      "ARBA Market Monitoring is a comprehensive web application designed to track, analyze, and report on market price data. It provides users with real-time insights into market trends, price fluctuations, and historical data, enabling informed decision-making for businesses and stakeholders.",
    tech: ["Next.js", "TailwindCSS", "NestJS", "PostgreSQL"],
    image: "/project-market-monitoring.png",
    github: "#",
    live: "https://arbas.urbansolv.co.id/login",
    featured: true,
  },
  {
    index: "03",
    title: "Misoa",
    description:
      "Website company profile with blog feature and responsive design.",
    tech: ["Next.js", "TailwindCSS"],
    image: "/project-misoa.png",
    github: "#",
    live: "https://misoa.kulidigital.id/",
    featured: true,
  },
  {
    index: "04",
    title: "HR Internal Website",
    description:
      "Website internal HR is a web application designed to manage human resource data and information. It provides users with tools to track, analyze, and report on human resource data, enabling informed decision-making for businesses and stakeholders.",
    tech: ["Next.js", "TailwindCSS", "NestJS", "PostgreSQL"],
    image: "/project-hr-internal.png",
    github: "#",
    live: "https://hr2.urbansolv.co.id",
    featured: true,
  },
  {
    index: "06",
    title: "Bakso Dono Reborn",
    description:
      "SEO-optimized company website with a headless CMS empowering marketing teams to manage content effortlessly.",
    tech: ["Next.js", "PostgreSQL", "TailwindCSS", "Prisma", "Express"],
    image: "/project-bakso-dono.png",
    github: "https://github.com/rizkirifandi7/bdr-website-fe-v2",
    live: "https://bdr-website-fe-v2-rizkirifandi7s-projects.vercel.app/",
    featured: false,
  },
  {
    index: "07",
    title: "Dmiehan Website",
    description:
      "SEO-optimized company website with a headless CMS empowering marketing teams to manage content effortlessly.",
    tech: ["Next.js", "PostgreSQL", "TailwindCSS", "Prisma", "Express"],
    image: "/project-dmiehan.png",
    github: "https://github.com/rizkirifandi7/demiehan-fe",
    live: "https://web-mie-fe-rizkirifandi7s-projects.vercel.app/",
    featured: false,
  },
  {
    index: "08",
    title: "Shipping Project Management",
    description:
      "Real-time job tracking for trucking companies with automated email notifications, document attachments, and role-based access control.",
    tech: ["Next.js", "PostgreSQL", "TailwindCSS", "Prisma", "Express"],
    image: "/project-shipping.png",
    github: "https://github.com/rizkirifandi7/fe-shipping",
    live: "#",
    featured: false,
  },
  {
    index: "09",
    title: "Plant Monitoring System",
    description:
      "Monitoring platform for plant status with automated information via Push Notification.",
    tech: ["Next.js", "TailwindCSS", "Firebase", "Socket.io"],
    image: "/project-plant-monitoring.png",
    github: "https://github.com/rizkirifandi7/web-deteksi-monitoring",
    live: "https://web-deteksi-monitoring.vercel.app/login",
    featured: false,
  },
] as const;

export function ProjectsSection() {
  return (
    <AnimatedSection direction="up">
      <section
        id="projects"
        className="border rounded-lg p-4 md:p-6 scroll-mt-20 md:scroll-mt-24"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <BriefcaseBusiness className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                Work
              </span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight">
              Selected Projects
            </h2>
          </div>
          <Link
            href="https://github.com/rizkirifandi7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border rounded-md px-3 py-1.5 hover:bg-muted/50 transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </Link>
        </div>
        <Separator className="mb-6" />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROJECTS_DATA.map((project) => (
            <StaggerItem
              key={project.index}
              className="group relative border rounded-lg overflow-hidden flex flex-col hover:border-foreground/30 transition-all duration-200 hover:shadow-md bg-card"
            >
              {/* Project Image Container */}
              <div className="relative w-full h-44 overflow-hidden bg-muted/30">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent" />
                {project.featured && (
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full border bg-background/80 backdrop-blur-sm">
                    <Sparkles className="h-2.5 w-2.5" />
                    Featured
                  </div>
                )}
                <span className="absolute bottom-2.5 left-3 text-[11px] font-mono text-white/60">
                  {project.index}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-base mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground flex-1 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded-md border bg-muted/30 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-3 border-t">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Source
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </AnimatedSection>
  );
}
