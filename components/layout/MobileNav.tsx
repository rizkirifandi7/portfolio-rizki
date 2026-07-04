"use client";

import React from "react";
import Link from "next/link";
import { NAV_ITEMS, ICON_MAP } from "./navigation";

interface MobileNavProps {
  activeSection: string;
}

export function MobileNav({ activeSection }: MobileNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t bg-background/90 backdrop-blur-md">
      <div className="flex items-center justify-around px-2 py-2">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = ICON_MAP[item.icon];
          if (!Icon) return null;

          return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`relative flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-all duration-200 ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon
                className={`h-5 w-5 transition-transform duration-200 ${
                  isActive ? "scale-110" : ""
                }`}
              />
              <span className="text-[10px] font-medium">{item.label}</span>
              {isActive && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-foreground" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
