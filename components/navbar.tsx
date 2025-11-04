"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navConfig } from "@/lib/config";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex w-full flex-col items-center justify-center tracking-tight">
      <div className="flex w-full max-w-2xl items-center justify-between lg:sticky">
        <div className="space-y-16">
          <div className="relative z-0 -ml-3 flex shrink-0 items-center py-2">
            {navConfig.map((item) => {
              const isActive = item.href === pathname;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "flex h-8 items-center rounded-md px-4 text-sm transition-colors hover:text-foreground",
                    isActive
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
