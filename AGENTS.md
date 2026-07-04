@AGENTS.md
@AGENTS.md

# AI Agent Instructions & Project Architecture

## 🎯 Project Overview

This project is a modern Next.js (App Router) web application. The architecture strictly follows a modular, Feature-Sliced Design (FSD) approach.

**CRITICAL RULE:** Do NOT deviate from the defined tech stack or directory structure. Do NOT introduce new state management libraries, data fetching methods, or UI frameworks without explicit permission.

## 🛠️ Core Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui & Radix UI
- **Form Management:** React Hook Form
- **Validation:** Zod
- **Data Fetching (Server State):** TanStack Query (React Query)
- **API Client:** Axios
- **Global Client State:** Zustand
- **Theming:** next-themes (Dark/Light mode)
- **Notifications:** Sonner

---

## 📂 Directory Structure & Responsibilities

The project is located in the `src/` directory. You must place files strictly in their designated folders:

- **`app/`**: Next.js App Router files (`page.tsx`, `layout.tsx`).
  - _Rule:_ Keep pages THIN. Pages should only import components from `features/` or `layout/`. Do not write complex business logic or data fetching directly in `page.tsx`.
- **`components/ui/`**:
  - Strictly for Shadcn/ui generated components. Do NOT modify these manually unless required by Shadcn documentation.
- **`components/common/`**:
  - Custom, reusable, "dumb" UI components (e.g., custom wrappers, specific styled cards). No API calls or global state here.
- **`components/features/`**:
  - "Smart" components containing business logic. Grouped by domain (e.g., `features/auth/`, `features/products/`). This is where TanStack Query hooks and React Hook Form components belong.
- **`components/layout/`**:
  - Structural wrappers like `Sidebar.tsx`, `Header.tsx`, or `PageWrapper.tsx`.
- **`hooks/`**:
  - Contains TanStack Query hooks divided into `queries/` (GET) and `mutations/` (POST/PUT/DELETE). Also contains generic UI hooks (e.g., `useDebounce.ts`).
- **`lib/`**:
  - Pure configuration and utilities. Includes `apiClient.ts` (Axios setup) and `utils.ts` (Shadcn `cn` function).
- **`providers/`**:
  - Global context providers (`QueryProvider.tsx`, `ThemeProvider.tsx`). Only used in `app/layout.tsx`.
- **`schemas/`**:
  - The Single Source of Truth for validation. All Zod schemas and inferred TypeScript types (`z.infer`) go here.
- **`services/`**:
  - Pure asynchronous functions handling Axios requests. NO React code, NO hooks, NO state here.
- **`store/`**:
  - Global Client State using Zustand.
- **`types/`**:
  - Pure TypeScript interfaces/types for external libraries or standard UI props not covered by Zod.

---

## 🚦 Strict Development Rules for AI

1. **State Management Protocol:**
   - For remote data (fetching API): ALWAYS use TanStack Query via `hooks/`.
   - For global UI/Client state (e.g., sidebar toggle, user session memory): ALWAYS use Zustand via `store/`.
   - Do NOT use React Context API unless absolutely necessary for a specific isolated component.

2. **Form & Validation Protocol:**
   - ALWAYS use `react-hook-form` paired with `@hookform/resolvers/zod`.
   - Define the schema in the `schemas/` folder first, export the inferred type, and use that type in both the form component and the `services/` API call.

3. **API Call Flow (Strict Sequence):**
   - Step 1: Define API function in `services/*.service.ts` using the Axios `apiClient`.
   - Step 2: Wrap the service function in a TanStack Query hook inside `hooks/queries/` or `hooks/mutations/`.
   - Step 3: Call the hook inside a component in `components/features/`.
   - Step 4: Handle success/error notifications using `sonner` inside the `useMutation` callbacks (e.g., `onSuccess`, `onError`), NOT inside the UI component.

4. **Styling Guidelines:**
   - Use Tailwind CSS via the `className` attribute.
   - Use the `cn()` utility from `lib/utils.ts` for conditional classes or merging Tailwind classes safely.
   - Support dark mode using Tailwind's `dark:` modifier.

5. **Type Safety:**
   - Write strict TypeScript. Avoid `any`.
   - Extract types from Zod schemas using `export type MyType = z.infer<typeof mySchema>;` whenever possible.

**Acknowledge these rules before generating any code.**
