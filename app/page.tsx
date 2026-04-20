import { ModeToggle } from "@/components/common/Button/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Facebook,
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

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen pt-18">
      <div className="relative flex justify-between items-start gap-4">
        {/* SIDEBAR */}
        <aside className="sticky top-18 flex flex-col gap-4 w-[256px] h-full overflow-y-auto">
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
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <div className="border rounded-md p-2 w-full text-sm font-medium inline-flex items-center justify-center hover:bg-muted transition-colors">
                <Instagram className="h-4 w-4" />
              </div>
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <div className="border rounded-md p-2 w-full text-sm font-medium inline-flex items-center justify-center hover:bg-muted transition-colors">
                <Github className="h-4 w-4" />
              </div>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <div className="border rounded-md p-2 w-full text-sm font-medium inline-flex items-center justify-center hover:bg-muted transition-colors">
                <Linkedin className="h-4 w-4" />
              </div>
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <div className="border rounded-md p-2 w-full text-sm font-medium inline-flex items-center justify-center hover:bg-muted transition-colors">
                <Facebook className="h-4 w-4" />
              </div>
            </Link>
          </div>
          {/* NAVIGATION MENU */}
          <div className="">
            <div className="flex items-center gap-2 mb-3 w-full">
              <h3 className="text-sm  font-semibold">Menu</h3>
              <Separator orientation="horizontal" className="flex-1" />
            </div>
            <nav>
              <Link href="#home">
                <li className="inline-flex items-center gap-3 w-full text-sm font-medium p-2 border rounded-md">
                  <House className="h-4 w-4" />
                  Home
                </li>
              </Link>
              <Link href="#about">
                <li className="inline-flex items-center gap-3 w-full text-sm font-medium p-2">
                  <User className="h-4 w-4" />
                  About
                </li>
              </Link>
              <Link href="#skills">
                <li className="inline-flex items-center gap-3 w-full text-sm font-medium p-2">
                  <Code2 className="h-4 w-4" />
                  Skills
                </li>
              </Link>
              <Link href="#experience">
                <li className="inline-flex items-center gap-3 w-full text-sm font-medium p-2">
                  <BriefcaseBusiness className="h-4 w-4" />
                  Experience
                </li>
              </Link>
              <Link href="#projects">
                <li className="inline-flex items-center gap-3 w-full text-sm font-medium p-2">
                  <Layers className="h-4 w-4" />
                  Projects
                </li>
              </Link>
              <Link href="#contact">
                <li className="inline-flex items-center gap-3 w-full text-sm font-medium p-2">
                  <Mail className="h-4 w-4" />
                  Contact
                </li>
              </Link>
            </nav>
          </div>
          <div className="">
            <div className="flex items-center gap-2 mb-3 w-full">
              <h3 className="text-sm  font-semibold">Theme</h3>
              <Separator orientation="horizontal" className="flex-1" />
            </div>
            <ModeToggle />
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="flex-1 h-full flex flex-col gap-6 overflow-y-auto pb-8">
          {/* ── ABOUT SECTION ── */}
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
                    open-source projects, writing tech content, or enjoying a
                    good cup of coffee ☕.
                  </p>

                  <div className="flex flex-wrap items-center gap-2.5 mt-5">
                    <Link
                      href="#projects"
                      className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-4 py-2 text-sm font-semibold hover:opacity-80 transition-opacity"
                    >
                      <BriefcaseBusiness className="h-3.5 w-3.5" />
                      View Projects
                    </Link>
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      Contact Me
                    </Link>
                    <Link
                      href="https://github.com"
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
            <div className="grid grid-cols-3 divide-x">
              {[
                { value: "3+", label: "Years Exp." },
                { value: "20+", label: "Projects" },
                { value: "10+", label: "Tech Stack" },
              ].map((s) => (
                <div key={s.label} className="px-5 py-4 text-center">
                  <p className="text-xl font-bold">{s.value}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wide">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SKILLS SECTION ── */}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  ],
                },
                {
                  category: "Tools & Others",
                  icon: <GraduationCap className="h-4 w-4" />,
                  items: [
                    "Git & GitHub",
                    "Docker",
                    "Figma",
                    "Linux",
                    "Vercel",
                    "Postman",
                  ],
                },
              ].map((group) => (
                <div
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
                </div>
              ))}
            </div>
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

          {/* ── EXPERIENCE SECTION ── */}
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
                <div className="relative pl-5 border-l border-border space-y-6">
                  {[
                    {
                      role: "Frontend Developer",
                      company: "PT Contoh Digital",
                      period: "2024 – Present",
                      desc: "Led UI development for internal dashboards using Next.js and TypeScript. Collaborated with backend team to design REST API contracts.",
                    },
                    {
                      role: "Freelance Web Developer",
                      company: "Local & Global Clients",
                      period: "2022 – Present",
                      desc: "Delivered 15+ projects ranging from landing pages to full e-commerce platforms. Handled everything from design to deployment.",
                    },
                    {
                      role: "Junior Web Developer",
                      company: "Startup Contoh",
                      period: "2021 – 2022",
                      desc: "Built and maintained front-end features for a SaaS product using React and Bootstrap.",
                    },
                  ].map((exp) => (
                    <div key={exp.role} className="relative">
                      <div className="absolute -left-[1.38rem] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-border bg-background" />
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
                    </div>
                  ))}
                </div>
              </div>
              {/* Education */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <GraduationCap className="h-3.5 w-3.5 text-muted-foreground" />
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Education
                  </h3>
                </div>
                <div className="relative pl-5 border-l border-border space-y-6">
                  {[
                    {
                      degree: "Bachelor of Computer Science",
                      school: "Universitas Contoh",
                      period: "2018 – 2022",
                      desc: "Focused on software engineering, algorithms, and database systems. Active in the developer community club.",
                    },
                    {
                      degree: "Web Development Bootcamp",
                      school: "Online — Dicoding / Udemy",
                      period: "2020 – 2021",
                      desc: "Completed full-stack JavaScript curriculum covering React, Node.js, and deployment.",
                    },
                  ].map((edu) => (
                    <div key={edu.degree} className="relative">
                      <div className="absolute -left-[1.38rem] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-border bg-background" />
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="border rounded-lg p-6 scroll-mt-24">
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
                href="https://github.com"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border rounded-md px-3 py-1.5 hover:bg-muted/50 transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </Link>
            </div>
            <Separator className="mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  index: "01",
                  title: "E-Commerce Dashboard",
                  description:
                    "Analytics dashboard with role-based access, real-time sales reports, and full inventory management system.",
                  tech: ["Next.js", "PostgreSQL", "TailwindCSS", "Prisma"],
                  github: "#",
                  live: "#",
                  featured: true,
                },
                {
                  index: "02",
                  title: "Company Profile CMS",
                  description:
                    "SEO-optimized company website with a headless CMS empowering marketing teams to manage content effortlessly.",
                  tech: ["React", "Node.js", "Express", "MongoDB"],
                  github: "#",
                  live: "#",
                  featured: false,
                },
                {
                  index: "03",
                  title: "Task Management App",
                  description:
                    "Collaborative tool with real-time updates, drag-and-drop Kanban boards, and multi-workspace support.",
                  tech: ["Vue.js", "Firebase", "TailwindCSS"],
                  github: "#",
                  live: "#",
                  featured: false,
                },
                {
                  index: "04",
                  title: "Portfolio Template",
                  description:
                    "Minimalist developer portfolio with dark mode, smooth animations, and fully responsive design system.",
                  tech: ["Next.js", "TypeScript", "Framer Motion"],
                  github: "#",
                  live: "#",
                  featured: false,
                },
              ].map((project) => (
                <div
                  key={project.index}
                  className="group relative border rounded-lg p-5 flex flex-col hover:border-foreground/30 transition-all duration-200 hover:shadow-sm"
                >
                  {project.featured && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full border bg-muted/50">
                      <Sparkles className="h-2.5 w-2.5" />
                      Featured
                    </div>
                  )}
                  <span className="text-[11px] font-mono text-muted-foreground/50 mb-2">
                    {project.index}
                  </span>
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
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Source
                    </Link>
                    <Link
                      href={project.live}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      Live Demo
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="border rounded-lg p-6 scroll-mt-24">
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

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8">
              {/* Left — Contact Info */}
              <div className="space-y-4">
                {[
                  {
                    icon: <Mail className="h-4 w-4" />,
                    label: "Email",
                    value: "hello@rizkirifani.dev",
                    href: "mailto:hello@rizkirifani.dev",
                  },
                  {
                    icon: <Linkedin className="h-4 w-4" />,
                    label: "LinkedIn",
                    value: "linkedin.com/in/rizkirifani",
                    href: "https://linkedin.com",
                  },
                  {
                    icon: <Github className="h-4 w-4" />,
                    label: "GitHub",
                    value: "github.com/rizkirifani",
                    href: "https://github.com",
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

                {/* Social row */}
                <div className="pt-2">
                  <p className="text-xs text-muted-foreground mb-3">
                    Find me on
                  </p>
                  <div className="flex items-center gap-2">
                    {[
                      {
                        icon: <Instagram className="h-4 w-4" />,
                        href: "https://instagram.com",
                        label: "Instagram",
                      },
                      {
                        icon: <Github className="h-4 w-4" />,
                        href: "https://github.com",
                        label: "GitHub",
                      },
                      {
                        icon: <Linkedin className="h-4 w-4" />,
                        href: "https://linkedin.com",
                        label: "LinkedIn",
                      },
                      {
                        icon: <Facebook className="h-4 w-4" />,
                        href: "https://facebook.com",
                        label: "Facebook",
                      },
                    ].map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="p-2 border rounded-md hover:bg-muted/50 transition-colors"
                      >
                        {s.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — Contact Form */}
              <div className="border rounded-lg p-5 bg-muted/10">
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
