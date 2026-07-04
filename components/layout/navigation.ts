import {
  User,
  Code2,
  BriefcaseBusiness,
  Layers,
  Mail,
} from "lucide-react";
import React from "react";

export const NAV_ITEMS = [
  { id: "about", label: "About", icon: "User" },
  { id: "skills", label: "Skills", icon: "Code2" },
  { id: "experience", label: "Experience", icon: "BriefcaseBusiness" },
  { id: "projects", label: "Projects", icon: "Layers" },
  { id: "contact", label: "Contact", icon: "Mail" },
] as const;

export type NavSectionId = (typeof NAV_ITEMS)[number]["id"];

export const ICON_MAP: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  User,
  Code2,
  BriefcaseBusiness,
  Layers,
  Mail,
};
