import { Route } from "next";

export type Nav = {
  id: string;
  href: Route;
  label: string;
};

export type Experience = {
  name: string;
  icon: string;
  href: string;
};
