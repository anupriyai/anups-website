"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SectionLink = { id: string; label: string; num: string };

const INDIGO = "#947bf0ff";
const GLOW_FROM = "rgba(59, 26, 182, 0.35)";
const GLOW_TO   = "rgba(161, 132, 255, 0.55)";
const TEXT_DARK = "#000000";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HoverMegaMenu({
  sections = [
    { id: "hero",       label: "HOME",       num: "00" },
    { id: "about",      label: "ABOUT",      num: "01" },
    { id: "experience", label: "EXPERIENCE", num: "02" },
    { id: "projects",   label: "PROJECTS",   num: "03" },
  ],
}: { sections?: SectionLink[] }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const startOpen = () => { if (closeTimer.current) window.clearTimeout(closeTimer.current); setOpen(true); };
  const startClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const PANEL_W_CLOSED = 148;                  // px
  const PANEL_W_OPEN   = "min(92vw, 680px)";   // SSR-safe
  const TOP_H = 48;                            // ⬅ same height for button + header
  const ROW_H = 88;

  return (
    <div
      className="fixed top-6 right-6 z-[60] select-none"
      onMouseEnter={startOpen}
      onMouseLeave={startClose}
    >
      <motion.div
        layout
        style={{ transformOrigin: "top right", position: "relative" }}
        animate={{
          width: open ? PANEL_W_OPEN : PANEL_W_CLOSED,
          height: open ? "auto" : TOP_H,
          backgroundColor: open ? INDIGO : "rgba(30, 20, 60, 0.3)",
          borderRadius: open ? 16 : 20,
          borderColor: open ? "rgba(0,0,0,0.20)" : "rgba(255,255,255,0.10)",
          borderWidth: 1,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 30, mass: 0.6 }}
        className="overflow-hidden shadow-2xl ring-1 ring-black/20 backdrop-blur-[1px]"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {/* soft glow (fade only; never intercept clicks) */}
        <motion.span
          aria-hidden
          initial={false}
          animate={{ opacity: open ? 0 : [0.35, 0.75, 0.35] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", inset: -10, borderRadius: 28,
            filter: "blur(14px)",
            background: `radial-gradient(120% 120% at 50% 50%, ${GLOW_TO} 0%, ${GLOW_FROM} 60%, transparent 100%)`,
            pointerEvents: "none",
          }}
        />
        <motion.span
          aria-hidden
          initial={false}
          animate={{ opacity: open ? 0 : [0.15, 0.35, 0.15] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          style={{
            position: "absolute", inset: -18, borderRadius: 36,
            filter: "blur(26px)",
            background: `radial-gradient(120% 120% at 50% 50%, ${GLOW_TO} 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        {/* Closed label — same height as header */}
        <motion.button
          type="button"
          onClick={() => setOpen(v => !v)}
          className="relative w-full"
          style={{ height: TOP_H }}
          initial={false}
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.12 }}
        >
          <div
            className="flex items-center justify-center w-full h-full text-white"
            style={{ letterSpacing: "0.12em", textShadow: "0 0 10px rgba(161,132,255,.5)" }}
          >
            <span className="text-xl font-mono uppercase">MENU</span>
          </div>
        </motion.button>

        {/* Expanded panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="panel"
              layout
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              style={{ color: TEXT_DARK }}
              className="w-full"
              role="menu"
              aria-label="Main navigation"
            >
              {/* Header — EXACTLY TOP_H tall */}
              <div
                className="border-b border-black/15 text-center"
                style={{ height: TOP_H, display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <span className="text-xl tracking-[0.2em] font-mono">MENU</span>
              </div>

              {/* Scroll wrapper (prevents clipping on small screens) */}
              <div className="max-h-[80vh] overflow-auto">
                <ul className="divide-y divide-black/15">
                  {sections.map((s) => (
                    <li key={s.id} style={{ height: ROW_H }}>
                      <button
                        role="menuitem"
                        onClick={() => { setOpen(false); setTimeout(() => scrollToId(s.id), 50); }}
                        className="w-full h-full group flex items-center justify-between gap-3 px-5 hover:bg-black/10 transition text-left"
                      >
                        <div className="flex items-center gap-4">
                          <span className="tabular-nums text-xl font-mondwest opacity-70 w-8">{s.num}</span>
                          <span className="text-xl font-semibold tracking-wide">{s.label}</span>
                        </div>
                        <span
                          className="grid place-items-center h-8 w-8 rounded-md border border-black/25 group-hover:border-black/50 transition"
                          aria-hidden
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M8 5l7 7-7 7" stroke="currentColor" strokeWidth="2" />
                          </svg>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
