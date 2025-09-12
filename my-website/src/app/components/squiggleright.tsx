"use client";

import React, { useEffect, useState } from "react";

type Props = {
  zIndex?: number;
  blendMode?: React.CSSProperties["mixBlendMode"];
  pointerEvents?: React.CSSProperties["pointerEvents"];
};

type SplineViewerProps =
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
    url?: string;
    events?: string;
    "events-target"?: string;
  };
const SplineViewer = "spline-viewer" as unknown as React.FC<SplineViewerProps>;

export default function SquiggleRight({
  zIndex = 20,
  blendMode = "screen",
  pointerEvents = "none",
}: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (customElements.get("spline-viewer")) { setReady(true); return; }
    const s = document.createElement("script");
    s.type = "module";
    s.src = "https://unpkg.com/@splinetool/viewer@1.9.35/build/spline-viewer.js";
    s.onload = () => setReady(true);
    document.head.appendChild(s);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex,
        pointerEvents,
        mixBlendMode: blendMode,
        background: "transparent",
      }}
      aria-hidden
    >
      {/* Right-anchored box for the squiggles */}
      <div
        style={{
          position: "absolute",
          right: "-6vw",
          bottom: "-8vh",
          width: "56vw",     // tune these three to position/scale
          height: "110vh",
          background: "transparent",
        }}
      >
        {ready && (
          <SplineViewer
            url="https://prod.spline.design/IrzGGhy1GDTIRF9s/scene.splinecode"
            events="true"
            events-target="global"
            style={{ width: "100%", height: "100%", background: "transparent" }}
          />
        )}
      </div>
    </div>
  );
}
