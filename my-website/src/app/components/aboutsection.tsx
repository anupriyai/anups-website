"use client";

import Image from "next/image";
import anotherpic from "@/images/anotherpic.jpg";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Programming Languages",
    items: [
      "Python",
      "C/C++",
      "JavaScript",
      "TypeScript",
      "Java"
    ],
  },
  {
    title: "Web Dev",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Tailwind",
      "REST APIs",
      "HTML/CSS",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "Deep Learning",
      "NLP",
      "RAG",
      "Computer Vision",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Data Pipelines",
    ],
  },
  {
    title: "Tools & DevOps",
    items: ["Git", "Docker", "CI/CD", "Databases", "Figma"],
  },
];

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

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl bg-[#2a2354]/70 ring-1 ring-white/10 p-5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur"
    >
      <h4 className="font-mondwest text-xl tracking-wider text-indigo-200 mb-2">{title}</h4>
      <ul className="text-lg leading-relaxed text-neutral-200/90">
        {items.map((it) => (
          <li key={it} className="font-mono list-disc list-inside marker:text-indigo-300/80">
            {it}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative isolate text-white">
      <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:py-20 lg:py-28">
        <AccentRule className="mb-2" />
        <div className="mb-8 flex items-baseline gap-4">
          <span className="font-mondwest text-4xl sm:text-5xl text-indigo-300/90">01</span>
          <h2 className="font-mono text-4xl sm:text-5xl tracking-widest">ABOUT</h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <div className="mb-8 max-w-2xl">
              <p className="font-mono text-3xl sm:text-2xl leading-snug">
                <span className="font-extrabold">I&apos;M DRIVEN BY BUILDING, LEARNING, AND INNOVATING.</span>
              </p>
              <p className="font-mono mt-3 text-2xl sm:text-2xl text-neutral-200/90 max-w-2xl">
                I&apos;m passionate about <b>software engineering</b>, <b>AI/ML</b>, and <b>full-stack
                development</b>. I&apos;m looking for <b>SWE / AI engineering roles</b> where I can design,
                build, and scale impactful products.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
              {skills.map((s) => (
                <SkillCard key={s.title} title={s.title} items={s.items} />)
              )}
            </div>
          </div>
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-violet-500/30 blur-3xl -z-10"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-violet-500/40 blur-2xl -z-10"
              />
              <div className="relative z-10 rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_20px_80px_24px_rgba(232,121,249,0.5)]">
                <Image
                  src={anotherpic}
                  alt="Anupriya Islam portrait"
                  width={900}
                  height={650}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
