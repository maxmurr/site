import { Nav, type Experience } from "./types";

export const EXPERIENCE_CONFIG: Experience[] = [
  {
    name: "Next.js",
    icon: "nextjs",
    href: "https://nextjs.org/",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss",
    href: "https://tailwindcss.com/",
  },
  {
    name: "Golang",
    icon: "golang",
    href: "https://golang.org/",
  },
] as const;

export const navConfig: Nav[] = [
  {
    id: "home",
    href: "/",
    label: "home",
  },
  {
    id: "work",
    href: "/works",
    label: "work",
  },
  {
    id: "project",
    href: "/projects",
    label: "project",
  },
] as const;
