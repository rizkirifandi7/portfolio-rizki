"use client";

import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/common/Button/ModeToggle";

export function MobileHeader() {
  return (
    <div className="flex md:hidden items-center justify-between w-full px-4 py-3 border-b bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="flex items-center gap-2">
        <Avatar className="w-8 h-8">
          <Image
            src="/profile.png"
            alt="Rizki Rifani"
            width={32}
            height={32}
            priority
            className="rounded-full object-cover"
          />
          <AvatarFallback>RR</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold leading-none">Rizki Rifani</p>
          <p className="text-[10px] text-muted-foreground">
            Fullstack Developer
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
      </div>
    </div>
  );
}
