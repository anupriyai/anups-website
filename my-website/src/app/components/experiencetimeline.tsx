"use client";

import React from "react";

export type ExperienceItem = {
  id: string;
  role: string;
  company?: string;
  title?: string;
  location?: string;
  start: string;
  end?: string;
  description?: string;
  href?: string;
};

function formatRange(start: string, end?: string) {
  return end && end.trim().length > 0 ? `${start} — ${end}` : start;
}

function AccentRuleRight({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mb-8 h-10 ${className}`}>
      <div className="absolute inset-x-0 top-1 border-t-2 border-dotted border-white/50" />
      <div
        aria-hidden
        className="
          absolute inset-x-0 top-1/2 -translate-y-1/2
          h-[11px] rounded-full opacity-90
          [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]
          shadow-[0_0_40px_12px_rgba(164,193,255,0.25)]
          bg-[linear-gradient(90deg,#FAF7E6_0%,#FDBEFF_18.75%,#A4C1FF_36.54%,#AEA8F8_55.29%,#7158C0_74.52%,#2400B2_87.5%,#000000_97.6%)]
          [background-size:300%_100%]
          animate-lilacShift
        "
        style={{ willChange: "background-position" }}
      />
      {/* short dotted segment anchored to the RIGHT (not left) */}
      <div className="absolute bottom-[6px] right-0 w-3/5 border-t-2 border-dotted border-white/50" />
    </div>
  );
}

/** Card */
function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article
      role="listitem"
      className="relative shrink-0 snap-start
                w-[88vw] sm:w-[62vw] md:w-[44vw] lg:w-[32vw] xl:w-[28vw]
                rounded-[42px]
                bg-[linear-gradient(180deg,_rgba(53,42,90,0.46)_0%,_rgba(113,88,192,0.46)_42.31%,_rgba(143,136,224,0.46)_67.31%,_rgba(186,173,238,0.46)_91.83%)]
                text-white/90 ring-1 ring-white/10 backdrop-blur
                shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
    >
      <div className="absolute left-0 right-0 top-0 h-px bg-white/15" />
      <div className="absolute -top-3 left-6 h-6 w-6 rounded-full bg-[#122233] border border-white/20 grid place-items-center">
        <span aria-hidden></span>
      </div>

      <div className="p-6">
        <p className="font-mono text-base text-white/60 mb-2 tracking-wide">
          {formatRange(item.start, item.end)}
        </p>

        <h3 className="text-2xl font-mondwest font-semibold leading-snug text-white mb-1">
          {item.role}
          {item.company ? (
            <span className="text-white/70 font-normal"> · {item.company}</span>
          ) : null}
        </h3>

        {item.location ? (
          <p className="font-mono text-sm text-white/60 mb-3">{item.location}</p>
        ) : null}

        {item.title ? (
          <p className="font-mondwest text-base text-white/80 mb-2">{item.title}</p>
        ) : null}

        {item.description ? (
          <p className="font-mono text-lg leading-relaxed text-white/80">
            {item.description}
          </p>
        ) : null}

        {item.href ? (
          <div className="mt-5">
            <a
              href={item.href}
              target={item.href?.startsWith("/") ? undefined : "_blank"}
              rel={item.href?.startsWith("/") ? undefined : "noreferrer noopener"}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export const demoItems: ExperienceItem[] = [
  {
    id: "1",
    role: "Software Engineering Intern",
    company: "LG NOVA",
    location: "Santa Clara, CA (Hybrid)",
    start: "May 2025",
    end: "Aug 2025",
    description:
      "Built Atlas, an AI-powered dashboard consolidating internal startup data; implemented FastAPI endpoints, token exchange, and CI/CD pipelines.",
    href: "https://lgnova.com/",
  },
  {
    id: "2",
    role: "Data Analyst (Graduate)",
    company: "Georgia Tech",
    location: "Atlanta, GA (Remote)",
    start: "Jan 2025",
    end: "May 2025",
    description:
      "Led Bay Area transit-pollution analysis using CalEnviroScreen and ACS data; ran regression, uncertainty simulations, and created story-map visuals.",
  },
  {
    id: "3",
    role: "Project Lead",
    company: "Open Project (UC Berkeley)",
    location: "Berkeley, CA",
    start: "Sep 2024",
    end: "Present",
    description:
      "Managed student engineering teams; built Next.js/Tailwind components (starfield, ribbon, squiggle) and LLM-driven workflow tools.",
  },
];

export default function ExperiencesSection({
  items = demoItems,
  id = "experience",
  number = "02",
  heading = "EXPERIENCE",
}: {
  items?: ExperienceItem[];
  id?: string;
  number?: string;
  heading?: string;
}) {
  return (
    <section id={id} className="relative isolate text-white">
      <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:py-20 lg:py-28">
        <AccentRuleRight className="mb-2 ml-auto w-full" />
        <div className="mb-8 flex items-baseline gap-4 justify-end text-right">
            <span className="font-mondwest text-4xl sm:text-5xl text-indigo-300/90">
                {number}
            </span>
            <h2 className="font-mono text-4xl sm:text-5xl tracking-widest">
                {heading}
            </h2>
        </div>

        <div className="relative w-full">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-12 z-10"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-12 z-10"
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)",
            }}
          />

          <div className="absolute -top-3 left-0 right-0 h-px bg-white/20" />

          <div
            className="
                flex gap-6 overflow-x-auto pb-6 pt-6
                snap-x snap-mandatory
                [scrollbar-width:none]           /* Firefox */
                [-ms-overflow-style:none]        /* old Edge/IE */
                [&::-webkit-scrollbar]:hidden    /* Chrome/Safari/Edge */
                [&::-webkit-scrollbar-track]:hidden
                [&::-webkit-scrollbar-thumb]:hidden
            "
            role="list"
            aria-label="Experiences timeline"
            >
            {items.map((item) => (
                <ExperienceCard key={item.id} item={item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
