import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { EXPERIENCE_CONFIG } from "@/lib/config";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import { cacheLife } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const ImageList = [
  {
    src: "/images/pf.png",
    alt: "Blog - Property Perfect",
  },
  {
    src: "/images/swipe-policies.png",
    alt: "Swipe Policies",
  },
  {
    src: "/images/mookrata.png",
    alt: "Mookrata",
  },
  {
    src: "/images/election.png",
    alt: "Election",
  },
  {
    src: "/images/hotelpms.png",
    alt: "Hotel Management System",
  },
  {
    src: "/images/slip-verify.png",
    alt: "Slip Verify",
  },
];

export default async function Home() {
  return (
    <main className="py-16 relative mx-auto flex max-w-2xl flex-col">
      <div className="mb-8 typography">
        <h1 className="text-2xl font-bold tracking-tight">
          hey, I&apos;m Max Murray 👋
        </h1>
        <Badge variant="secondary" className="mt-2">
          Hear my story
        </Badge>
      </div>
      <div className="typography">
        <p className="mb-5 leading-6">
          I&apos;m a Software Engineer from Bangkok, Thailand with strong
          fundamentals in React, TypeScript, and modern web architecture.
          I&apos;m passionate about building performant, maintainable software
          that enhances user experience and solves real problems. Currently
          working as a Mid-level Software Engineer at Innovative Extremist,
          where I&apos;ve progressed from intern to my current role over the
          past two years.
        </p>
        <p className="leading-6">
          I love exploring new technologies and shipping solutions that make a
          difference. Reach out via{" "}
          <Link
            href="mailto:maxmurr.m@gmail.com"
            className="font-medium text-primary underline decoration-border decoration-2 underline-offset-2 transition-colors hover:text-foreground"
          >
            email
          </Link>{" "}
          for collaboration or check out my work on{" "}
          <Link
            href="https://github.com/maxmurr"
            className="font-medium text-primary underline decoration-border decoration-2 underline-offset-2 transition-colors hover:text-foreground"
          >
            github
          </Link>
          .
        </p>
      </div>
      <a
        href="https://www.github.com/maxmurr"
        className="my-8"
        target="_blank"
        rel="noreferrer"
      >
        <Suspense fallback={<GithubInfoFallback />}>
          <GithubInfo />
        </Suspense>
      </a>
      <div className="typography">
        <p className="leading-6">
          Over the past two years, I&apos;ve worked on and contributed to
          numerous{" "}
          <Link
            href="/projects"
            className="font-medium text-primary underline decoration-border decoration-2 underline-offset-2 transition-colors hover:text-foreground"
          >
            projects
          </Link>
          , from interactive election platforms to video player libraries and
          real estate solutions. Here are some highlights from my professional
          work and personal projects.
        </p>
      </div>
      <div className="my-8 columns-2 gap-4 sm:columns-3">
        {ImageList.map((img, idx) => (
          <div
            key={img.src}
            className={cn({
              "relative mb-4 h-40 rounded-lg shadow-sm": idx === 0 || idx === 4,
              "relative mb-4 h-80 rounded-lg shadow-sm sm:mb-0": idx === 1,
              "relative h-40 rounded-lg shadow-sm sm:mb-4 sm:h-80": idx === 2,
              "relative mb-4 h-40 rounded-lg shadow-sm sm:mb-0": idx === 3,
              "relative h-80 rounded-lg shadow-sm": idx === 5,
            })}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={idx === 0 || idx === 2 || idx === 4}
              sizes="(max-width: 768px) 213px, 33vw"
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>

      <p className="my-5 leading-6 text-muted-foreground">Experience with:</p>
      <div className="mb-5 flex flex-wrap gap-2">
        {EXPERIENCE_CONFIG.map((exp) => {
          const Icon = exp.icon ? Icons[exp.icon as keyof typeof Icons] : null;

          return (
            <a
              key={exp.name}
              href={exp.href}
              aria-label={`Link to ${exp.name}`}
              target="_blank"
              rel="noreferrer"
              className="min-h-11 min-w-11 flex items-center justify-center"
            >
              <div className="size-full rounded-lg border border-border bg-primary-foreground px-3 py-4">
                {Icon && <Icon className="text-black dark:text-white" />}
              </div>
            </a>
          );
        })}
      </div>
    </main>
  );
}

async function getGithubData() {
  "use cache";
  cacheLife("days");
  const response = await fetch("https://api.github.com/users/maxmurr");
  const data = await response.json();
  return data;
}

async function GithubInfo() {
  const data = await getGithubData();

  return (
    <div className="group flex w-full items-center gap-4 rounded border border-border bg-primary-foreground px-3 py-4 outline-none duration-200 transition-opacity animate-in fade-in">
      <Avatar className="size-16">
        <AvatarImage src="https://github.com/maxmurr.png" alt="Github PFP" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
      <div className="grow">
        <p className="font-semibold">@maxmurr</p>
        <p className="text-muted-foreground">
          {data.public_repos} repositories
        </p>
      </div>
      <div className="transition-transform duration-300 group-hover:-rotate-12">
        <ArrowUpRightIcon />
      </div>
    </div>
  );
}

function GithubInfoFallback() {
  return (
    <div className="group flex w-full items-center gap-4 rounded border border-border bg-primary-foreground px-3 py-4 outline-none duration-200">
      <Skeleton className="size-16 rounded-full" />
      <div className="grow flex flex-col gap-2">
        <Skeleton className="w-20 h-4" />
        <Skeleton className="w-28 h-4" />
      </div>
      <div className="transition-transform duration-300 group-hover:-rotate-12">
        <ArrowUpRightIcon />
      </div>
    </div>
  );
}
