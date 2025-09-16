"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default function Starfield() {
  const [engineInited, setEngineInited] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setEngineInited(true);
    });
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      background: { color: { value: "#000000" } },
      particles: {
        number: { value: 150 },
        shape: { type: "star" },
        size: {
          value: { min: 0.5, max: 1.2 },
          animation: {
            enable: true,
            speed: 1,
            startValue: "random",
            sync: false
          }
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
          animation: {
            enable: true,
            speed: 0.5,
            startValue: "random",
            sync: false
          }
        },
        move: { enable: false }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "bubble" }
        },
        modes: {
          bubble: {
            distance: 100,
            size: 4,
            opacity: 1
          }
        }
      },
      detectRetina: true
    }),
    []
  );

  if (!engineInited) {
    return null;
  }

  return <Particles id="tsparticles" options={options} />;
}
