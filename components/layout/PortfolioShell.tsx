"use client";

import React, { useState, useEffect } from "react";
import { MobileHeader } from "./MobileHeader";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";
import { NAV_ITEMS } from "./navigation";

interface PortfolioShellProps {
  children: React.ReactNode;
}

export function PortfolioShell({ children }: PortfolioShellProps) {
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
    <div className="max-w-7xl mx-auto min-h-screen pt-4 md:pt-18 pb-20 md:pb-0">
      <div className="relative flex flex-col md:flex-row justify-between items-start gap-4">
        {/* Mobile Header */}
        <MobileHeader />

        {/* Sidebar (Desktop) */}
        <Sidebar activeSection={activeSection} />

        {/* Main Content Area */}
        <div className="flex-1 w-full h-full flex flex-col gap-6 overflow-y-auto px-4 md:px-0 pb-8">
          {children}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileNav activeSection={activeSection} />
    </div>
  );
}
