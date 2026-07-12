"use client";

import React from "react";
import Link from "next/link";
import { User, BriefcaseBusiness, Mail, Github, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export function AboutSection() {
  return (
    <AnimatedSection direction="up" delay={0.15}>
      <section
        id="about"
        className="border rounded-lg overflow-hidden scroll-mt-20 md:scroll-mt-24"
      >
        <div className="bg-gradient-to-br from-muted/60 via-muted/20 to-background px-4 md:px-6 pt-5 md:pt-6 pb-6 md:pb-7">
          <div className="flex items-center gap-2 mb-4">
            <User className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.2em]">
              About Me
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-3">
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
                — a Fullstack Web Developer from Indonesia focused on crafting
                performant, scalable applications. I care deeply about clean
                code, thoughtful UI, and real business impact.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mt-3">
                When I&apos;m not coding, you&apos;ll find me exploring
                open-source projects or enjoying a good cup of coffee ☕.
              </p>

              <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-5">
                <Link
                  href="https://drive.google.com/file/d/1m04w7aOgQcvBrop41K_6o-KbTGtBwPVV/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
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
    </AnimatedSection>
  );
}
