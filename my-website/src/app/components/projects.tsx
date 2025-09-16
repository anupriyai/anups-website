"use client";

import React, { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import gop from "@/images/projects/gardenofpeaceus.org.jpeg";
import llmeval from "@/images/projects/llmeval.png"

function AccentRule({ className = "" }: { className?: string }) {
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
      <div className="absolute bottom-[6px] w-3/5 border-t-2 border-dotted border-white/50" />
    </div>
  );
}

export type Project = {
  id: string;
  title: string;
  blurb: string;
  stack?: string;
  repo?: string;
  live?: string;
  image?: StaticImageData | string;
  imageAlt?: string;
};

function ProjectCard({ p }: { p: Project }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  const handleMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1;
    const py = (y / rect.height) * 2 - 1;
    const ROT = 10;
    if (innerRef.current) {
      innerRef.current.style.transform = `rotateX(${(-py * ROT).toFixed(
        2
      )}deg) rotateY(${(px * ROT).toFixed(2)}deg) translateZ(0)`;
    }
    if (shineRef.current) {
      shineRef.current.style.background = `radial-gradient(420px circle at ${x}px ${y}px, rgba(255,255,255,0.18), rgba(255,255,255,0.08) 30%, transparent 55%)`;
    }
  };

  const handleLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    innerRef.current && (innerRef.current.style.transform = `rotateX(0) rotateY(0) translateZ(0)`);
    shineRef.current &&
      (shineRef.current.style.background =
        `radial-gradient(400px circle at 50% 50%, rgba(255,255,255,0.10), transparent 55%)`);
  };

  return (
    <div className="group relative will-change-transform" style={{ perspective: "1200px" }} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(180deg,rgba(53,42,90,0.46)_0%,rgba(113,88,192,0.46)_42.31%,rgba(143,136,224,0.46)_67.31%,rgba(186,173,238,0.46)_91.83%)] opacity-70 blur-xl pointer-events-none" />
      <div
        ref={innerRef}
        className="relative rounded-3xl p-6 h-full transition-transform duration-200 ease-out
                   border border-white/15 ring-1 ring-white/10 bg-white/5 backdrop-blur-2xl
                   shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] [transform-style:preserve-3d]
                   hover:shadow-[0_20px_80px_-20px_rgba(0,10,60,0.55)]"
      >
        <div ref={shineRef} className="pointer-events-none absolute inset-0 rounded-3xl transition-[background] duration-150 ease-out mix-blend-screen" aria-hidden />

        <div className="relative mb-5 [transform:translateZ(30px)]">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-indigo-400/30 to-indigo-800/30">
            {p.image ? (
              <Image
                src={p.image}
                alt={p.imageAlt ?? p.title}
                fill
                className="object-cover"
                placeholder="blur"
              />
            ) : (
              <div className="grid h-full place-items-center">
                <span className="font-mondwest tracking-[0.25em] text-white/70">IMAGE</span>
              </div>
            )}

            <div className="absolute top-3 right-3 z-10 flex gap-2">
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub repository"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md hover:bg-white/20 transition [transform:translateZ(60px)]"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor" aria-hidden>
                    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.35-1.75-1.35-1.75-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.28-1.55 3.29-1.23 3.29-1.23.67 1.65.25 2.87.13 3.17.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.61-5.47 5.91.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/>
                  </svg>
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Live site"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md hover:bg-white/20 transition [transform:translateZ(60px)]"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M14 3h7v7" />
                    <path d="M10 14 21 3" />
                    <path d="M21 14v7h-7" />
                    <path d="M3 10v11h11" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="[transform:translateZ(35px)]">
          <h3 className="font-mondwest text-2xl text-white leading-snug mb-2">{p.title}</h3>
          <p className="font-mono text-base text-white/80 leading-relaxed mb-4">{p.blurb}</p>
          {p.stack && <p className="font-mono text-sm text-white/60">{p.stack}</p>}
        </div>
      </div>
    </div>
  );
}

export const demoProjects: Project[] = [
  {
    id: "p1",
    title: "LLM Evaluation Platform",
    blurb: "A web application that outputs from multiple LLMs side-by-side and score them with automated metrics. The Nest.js UI manages prompt sets, displays generations, and supports quick re-runs; a Flask API orchestrates model calls and persists runs for later analysis/CSV export. Includes custom evaluators for creativity, accuracy, coherence, and relevance (with adjustable weights) and a plug-in interface so new models/metrics can be added without UI changes—turning ad-hoc testing into a faster, repeatable workflow.",
    stack: "Python, Flask, Next.js",
    repo: "#",
    live: "#",
    image: llmeval,
    imageAlt: "TDSB interface screenshot",
  },
  {
    id: "p2",
    title: "Garden of Peace Website",
    blurb: "Full-stack site for a community non-profit that serves as the public hub for programs, events, and donations ($90,000+ collected online). The React.js front end delivers an accessible, mobile-first experience, while Firebase handles authentication and data storage; a small Node.js layer supports backend utilities.",
    stack: "React.js, HTML/CSS, Node.js, Bootstrap, Firebase",
    repo: "https://gardenofpeaceus.org/home",
    live: "#",
    image: gop,
  },
  {
    id: "p3",
    title: "AI-Powered Stock Forecasting & Sentiment Analysis Tool",
    blurb: "A full-stack platform that combines financial time-series modeling with NLP sentiment to generate stock forecasts. A Next.js front end lets users select tickers/time windows and visualize predictions; a FastAPI service fetches market data, prepares features, and trains an LSTM baseline. A sentiment pipeline (VADER, finBERT) ingests headlines and social text, aggregates polarity scores, and fuses them with price features—enabling side-by-side comparison of sentiment-aware vs. price-only forecasts and more interpretable results.",
    stack: "Next.js, FastAPI, Python",
    live: "#",
    image: llmeval,
  },
];

export default function ProjectsSection({
  items = demoProjects,
  id = "projects",
  number = "03",
  heading = "PROJECTS",
}: {
  items?: Project[];
  id?: string;
  number?: string;
  heading?: string;
}) {
  return (
    <section id={id} className="relative isolate text-white">
      <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:py-20 lg:py-28">
        <AccentRule className="mb-2" />
        <div className="mb-8 flex items-baseline gap-4">
          <span className="font-mondwest text-4xl sm:text-5xl text-indigo-300/90">{number}</span>
          <h2 className="font-mono text-4xl sm:text-5xl tracking-widest">{heading}</h2>
        </div>

        <div className="grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
