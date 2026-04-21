"use client";

import React from "react";
import { ModeToggle } from "@/components/common/Button/ModeToggle";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  GraduationCap,
  House,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode, useState, useEffect } from "react";

// ── Animation helpers ──────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (d: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: d },
  }),
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: (d: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: d },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: (d: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: d },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function InView({
  children,
  className,
  variants = fadeUp,
  custom = 0,
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  custom?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={custom}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function InViewStagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const NAV_ITEMS = [
  { id: "about", label: "About", icon: "User" },
  { id: "skills", label: "Skills", icon: "Code2" },
  { id: "experience", label: "Experience", icon: "BriefcaseBusiness" },
  { id: "projects", label: "Projects", icon: "Layers" },
  { id: "contact", label: "Contact", icon: "Mail" },
] as const;

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const observers: IntersectionObserver[] = [];
    const visibilityMap: Record<string, number> = {};

    const pickActive = () => {
      const sorted = Object.entries(visibilityMap).sort((a, b) => b[1] - a[1]);
      if (sorted.length > 0 && sorted[0][1] > 0) {
        setActiveSection(sorted[0][0]);
      }
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          visibilityMap[id] = entry.intersectionRatio;
          pickActive();
        },
        {
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
          rootMargin: "-80px 0px -20% 0px",
        },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="max-w-7xl mx-auto min-h-screen pt-18">
      <div className="relative flex justify-between items-start gap-4">
        {/* SIDEBAR */}
        <motion.aside
          className="sticky top-18 flex flex-col gap-4 w-[256px] h-full overflow-y-auto"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <div className="flex items-center gap-2 border rounded-lg p-3">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/profile.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">Rizki Rifani</h1>
              <p className="text-xs text-muted-foreground font-medium">
                Fullstack Web Developer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="https://www.instagram.com/rizki.rifandii/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <div className="border rounded-md p-2 w-full text-sm font-medium inline-flex items-center justify-center hover:bg-muted transition-colors">
                <Instagram className="h-4 w-4" />
              </div>
            </Link>
            <Link
              href="https://github.com/rizkirifandi7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <div className="border rounded-md p-2 w-full text-sm font-medium inline-flex items-center justify-center hover:bg-muted transition-colors">
                <Github className="h-4 w-4" />
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/rizkirifani/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <div className="border rounded-md p-2 w-full text-sm font-medium inline-flex items-center justify-center hover:bg-muted transition-colors">
                <Linkedin className="h-4 w-4" />
              </div>
            </Link>
          </div>
          {/* NAVIGATION MENU */}
          <div className="">
            <div className="flex items-center gap-2 mb-3 w-full">
              <h3 className="text-sm  font-semibold">Menu</h3>
              <Separator orientation="horizontal" className="flex-1" />
            </div>
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                const IconMap: Record<string, React.ElementType> = {
                  User,
                  Code2,
                  BriefcaseBusiness,
                  Layers,
                  Mail,
                };
                const Icon = IconMap[item.icon];
                return (
                  <Link key={item.id} href={`#${item.id}`}>
                    <li
                      className={`inline-flex items-center gap-3 w-full text-sm font-medium p-2 rounded-md transition-all duration-200 ${
                        isActive
                          ? "border"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {item.label}
                      {isActive && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-background/60" />
                      )}
                    </li>
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="">
            <div className="flex items-center gap-2 mb-3 w-full">
              <h3 className="text-sm  font-semibold">Theme</h3>
              <Separator orientation="horizontal" className="flex-1" />
            </div>
            <ModeToggle />
          </div>
        </motion.aside>

        {/* MAIN CONTENT */}
        <div className="flex-1 h-full flex flex-col gap-6 overflow-y-auto pb-8">
          {/* ── ABOUT SECTION ── */}
          <InView variants={fadeUp} custom={0.15}>
            <section
              id="about"
              className="border rounded-lg overflow-hidden scroll-mt-24"
            >
              <div className="bg-gradient-to-br from-muted/60 via-muted/20 to-background px-6 pt-6 pb-7 border-b">
                <div className="flex items-center gap-2 mb-4">
                  <User className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.2em]">
                    About Me
                  </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-start">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight leading-tight mb-3">
                      Building the web,
                      <br />
                      <span className="text-muted-foreground font-normal">
                        one clean line at a time.
                      </span>
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                      I&apos;m{" "}
                      <strong className="text-foreground font-semibold">
                        Rizki Rifani
                      </strong>{" "}
                      — a Fullstack Web Developer from Indonesia focused on
                      crafting performant, scalable applications. I care deeply
                      about clean code, thoughtful UI, and real business impact.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mt-3">
                      When I&apos;m not coding, you&apos;ll find me exploring
                      open-source projects or enjoying a good cup of coffee ☕.
                    </p>

                    <div className="flex flex-wrap items-center gap-2.5 mt-5">
                      <Link
                        href="https://drive.google.com/file/d/1u84nbzhMlFCuX2akNiuwm2nAArgn33sn/view?usp=sharing"
                        className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-4 py-2 text-sm font-semibold hover:opacity-80 transition-opacity"
                      >
                        <BriefcaseBusiness className="h-3.5 w-3.5" />
                        Download Resume
                      </Link>
                      <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        Contact Me
                      </Link>
                      <Link
                        href="https://github.com/rizkirifandi7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                      >
                        <Github className="h-3.5 w-3.5" />
                        GitHub
                      </Link>
                    </div>
                  </div>

                  <div className="border rounded-xl p-4 bg-background/70 min-w-[160px] flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                        Available
                      </span>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[11px] font-medium">Open to work</p>
                      <p className="text-[10px] text-muted-foreground">
                        Freelance &amp; Full-time
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      Indonesia · Remote OK
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </InView>

          {/* ── SKILLS SECTION ── */}
          <InView variants={fadeUp}>
            <section id="skills" className="border rounded-lg p-6 scroll-mt-24">
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
              <InViewStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
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
                ].map((group) => (
                  <motion.div
                    key={group.category}
                    variants={staggerItem}
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
                  </motion.div>
                ))}
              </InViewStagger>
              <div className="mt-4 border rounded-lg p-4 bg-muted/10">
                <p className="text-xs text-muted-foreground mb-3 font-medium">
                  Interests
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Open Source",
                    "UI/UX Design",
                    "Tech Content",
                    "Coffee ☕",
                  ].map((i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2.5 py-1 rounded-full border bg-background font-medium"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </InView>

          {/* ── EXPERIENCE SECTION ── */}
          <InView variants={fadeUp}>
            <section
              id="experience"
              className="border rounded-lg p-6 scroll-mt-24"
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Experience timeline */}
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <BriefcaseBusiness className="h-3.5 w-3.5 text-muted-foreground" />
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Work Experience
                    </h3>
                  </div>
                  <InViewStagger className="relative pl-5 border-l border-border space-y-6">
                    {[
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
                    ].map((exp) => (
                      <motion.div
                        key={exp.role}
                        variants={staggerItem}
                        className="relative"
                      >
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
                      </motion.div>
                    ))}
                  </InViewStagger>
                </div>
                {/* Education */}
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <GraduationCap className="h-3.5 w-3.5 text-muted-foreground" />
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Education
                    </h3>
                  </div>
                  <InViewStagger className="relative pl-5 border-l border-border space-y-6">
                    {[
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
                    ].map((edu) => (
                      <motion.div
                        key={edu.degree}
                        variants={staggerItem}
                        className="relative"
                      >
                        <div className="absolute -left-[1.55rem] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-border bg-background" />
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div>
                            <p className="text-sm font-semibold leading-snug">
                              {edu.degree}
                            </p>
                            <p className="text-xs text-muted-foreground">
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
                      </motion.div>
                    ))}
                  </InViewStagger>
                </div>
              </div>
            </section>
          </InView>

          {/* PROJECTS SECTION */}
          <InView variants={fadeUp}>
            <section
              id="projects"
              className="border rounded-lg p-6 scroll-mt-24"
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
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border rounded-md px-3 py-1.5 hover:bg-muted/50 transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </Link>
              </div>
              <Separator className="mb-6" />

              <InViewStagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    index: "01",
                    title: "PUSAMADA Indonesia",
                    description:
                      "Organization profile with full CRUD management, photo galleries, and embedded video showcases.",
                    tech: [
                      "Next.js",
                      "PostgreSQL",
                      "TailwindCSS",
                      "Prisma",
                      "Express",
                    ],
                    image: "/project-pusamada.png",
                    github: "https://github.com/rizkirifandi7/web-silat-v2",
                    live: "https://www.pusamadaind.com/",
                    featured: true,
                  },
                  {
                    index: "02",
                    title: "Website Market Monitoring ARBA",
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
                    title: "Bakso Dono Reborn",
                    description:
                      "SEO-optimized company website with a headless CMS empowering marketing teams to manage content effortlessly.",
                    tech: [
                      "Next.js",
                      "PostgreSQL",
                      "TailwindCSS",
                      "Prisma",
                      "Express",
                    ],
                    image: "/project-bakso-dono.png",
                    github:
                      "https://github.com/rizkirifandi7/bdr-website-fe-v2",
                    live: "https://bdr-website-fe-v2-rizkirifandi7s-projects.vercel.app/",
                    featured: false,
                  },
                  {
                    index: "05",
                    title: "Dmiehan Website",
                    description:
                      "SEO-optimized company website with a headless CMS empowering marketing teams to manage content effortlessly.",
                    tech: [
                      "Next.js",
                      "PostgreSQL",
                      "TailwindCSS",
                      "Prisma",
                      "Express",
                    ],
                    image: "/project-dmiehan.png",
                    github: "https://github.com/rizkirifandi7/demiehan-fe",
                    live: "https://web-mie-fe-rizkirifandi7s-projects.vercel.app/",
                    featured: false,
                  },
                  {
                    index: "06",
                    title: "Shipping Project Management",
                    description:
                      "Real-time job tracking for trucking companies with automated email notifications, document attachments, and role-based access control.",
                    tech: [
                      "Next.js",
                      "PostgreSQL",
                      "TailwindCSS",
                      "Prisma",
                      "Express",
                    ],
                    image: "/project-shipping.png",
                    github: "https://github.com/rizkirifandi7/fe-shipping",
                    live: "#",
                    featured: false,
                  },
                  {
                    index: "07",
                    title: "Plant Monitoring System",
                    description:
                      "Monitoring platform for plant status with automated information via Push Notification.",
                    tech: ["Next.js", "TailwindCSS", "Firebase", "Socket.io"],
                    image: "/project-plant-monitoring.png",
                    github:
                      "https://github.com/rizkirifandi7/web-deteksi-monitoring",
                    live: "https://web-deteksi-monitoring.vercel.app/login",
                    featured: false,
                  },
                ].map((project) => (
                  <motion.div
                    key={project.index}
                    variants={staggerItem}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group relative border rounded-lg overflow-hidden flex flex-col hover:border-foreground/30 transition-all duration-200 hover:shadow-md"
                  >
                    {/* Project Image */}
                    <div className="relative w-full h-44 overflow-hidden bg-muted/30">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
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
                  </motion.div>
                ))}
              </InViewStagger>
            </section>
          </InView>

          {/* CONTACT SECTION */}
          <InView variants={fadeUp}>
            <section
              id="contact"
              className="border rounded-lg p-6 scroll-mt-24"
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-1">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  Get in Touch
                </span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-1">
                Let&apos;s Work Together
              </h2>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-lg">
                Open for freelance, full-time roles, or a casual tech chat. Drop
                me a message and I&apos;ll get back to you within 24 hours.
              </p>
              <Separator className="mb-6" />

              <InViewStagger className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8">
                {/* Left — Contact Info */}
                <motion.div variants={staggerItem} className="space-y-4">
                  {[
                    {
                      icon: <Mail className="h-4 w-4" />,
                      label: "Email",
                      value: "rizkirifandi7@gmail.com",
                      href: "rizkirifandi7@gmail.com",
                    },
                    {
                      icon: <Linkedin className="h-4 w-4" />,
                      label: "LinkedIn",
                      value: "linkedin.com/in/rizkirifani",
                      href: "https://www.linkedin.com/in/rizkirifani/",
                    },
                    {
                      icon: <Github className="h-4 w-4" />,
                      label: "GitHub",
                      value: "github.com/rizkirifandi7",
                      href: "https://github.com/rizkirifandi7",
                    },
                    {
                      icon: <Instagram className="h-4 w-4" />,
                      label: "Instagram",
                      value: "instagram.com/rizki.rifandii/",
                      href: "https://www.instagram.com/rizki.rifandii/",
                    },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-md border hover:bg-muted/40 transition-colors group"
                    >
                      <div className="p-2 border rounded-md bg-muted/30 group-hover:bg-muted/60 transition-colors">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium truncate">
                          {item.value}
                        </p>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </motion.div>

                {/* Right — Contact Form */}
                <motion.div
                  variants={staggerItem}
                  className="border rounded-lg p-5 bg-muted/10"
                >
                  <p className="text-sm font-semibold mb-4">Send a Message</p>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-name"
                          className="text-xs font-medium text-muted-foreground"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-email"
                          className="text-xs font-medium text-muted-foreground"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-subject"
                        className="text-xs font-medium text-muted-foreground"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        placeholder="Project inquiry, collaboration…"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-message"
                        className="text-xs font-medium text-muted-foreground"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
                        placeholder="Tell me about your project…"
                      />
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
                    >
                      <Send className="h-3.5 w-3.5" />
                      Send Message
                    </button>
                  </form>
                </motion.div>
              </InViewStagger>
            </section>
          </InView>
        </div>
      </div>
    </div>
  );
}
