"use client";

import React, { useEffect, useState } from "react";

type SplineViewerProps =
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
    url?: string; events?: string; "events-target"?: string;
  };
const SplineViewer = "spline-viewer" as unknown as React.FC<SplineViewerProps>;

type Props = {
  zIndex?: number;
  pointerEvents?: React.CSSProperties["pointerEvents"];
  blendMode?: React.CSSProperties["mixBlendMode"];
};

export default function Squiggle({
  zIndex = 20,
  pointerEvents = "none",
  blendMode = "screen",
}: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (customElements.get("spline-viewer")) { setReady(true); return; }
    const s = document.createElement("script");
    s.type = "module";
    s.src = "https://unpkg.com/@splinetool/viewer@1.9.35/build/spline-viewer.js";
    s.async = true;
    s.onload = () => setReady(true);
    document.head.appendChild(s);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex,
        pointerEvents,
        mixBlendMode: blendMode,
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
  );
}
