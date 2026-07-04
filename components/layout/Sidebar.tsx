"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Github, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/common/Button/ModeToggle";
import { fadeLeftVariants } from "@/components/common/AnimatedSection";
import { NAV_ITEMS, ICON_MAP } from "./navigation";

interface SidebarProps {
  activeSection: string;
}

export function Sidebar({ activeSection }: SidebarProps) {
  return (
    <motion.aside
      className="hidden md:flex sticky top-18 flex-col gap-4 w-[256px] h-full overflow-y-auto"
      variants={fadeLeftVariants}
      initial="hidden"
      animate="visible"
      custom={0}
    >
      {/* Profile Header */}
      <div className="flex items-center gap-2 border rounded-lg p-3">
        <Avatar className="w-16 h-16">
          <Image
            src="/profile.png"
            alt="Rizki Rifani"
            width={64}
            height={64}
            priority
            className="rounded-full object-cover"
          />
          <AvatarFallback>RR</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Rizki Rifani</h1>
          <p className="text-xs text-muted-foreground font-medium">
            Fullstack Web Developer
          </p>
        </div>
      </div>

      {/* Social Links */}
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

      {/* Navigation Menu */}
      <div>
        <div className="flex items-center gap-2 mb-3 w-full">
          <h3 className="text-sm font-semibold">Menu</h3>
          <Separator orientation="horizontal" className="flex-1" />
        </div>
        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = ICON_MAP[item.icon];
            if (!Icon) return null;

            return (
              <Link key={item.id} href={`#${item.id}`}>
                <li
                  className={`inline-flex items-center gap-3 w-full text-sm font-medium p-2 rounded-md transition-all duration-200 list-none cursor-pointer ${
                    isActive
                      ? "border bg-muted/40"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {item.label}
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-foreground/60" />
                  )}
                </li>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Theme Settings */}
      <div>
        <div className="flex items-center gap-2 mb-3 w-full">
          <h3 className="text-sm font-semibold">Theme</h3>
          <Separator orientation="horizontal" className="flex-1" />
        </div>
        <ModeToggle />
      </div>
    </motion.aside>
  );
}
