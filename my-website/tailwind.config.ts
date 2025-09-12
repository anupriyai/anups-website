// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  // Make sure all your app code is included so Tailwind can see classes
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mondwest: ["var(--font-mondwest)", "system-ui", "sans-serif"],
        handjet: ["var(--font-handjet)", "ui-sans-serif", "system-ui"],
      },

      // ↓ Additions for the animated lilac accent
      keyframes: {
        lilacShift: {
          "0%":   { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        lilacShift: "lilacShift 10s linear infinite alternate",
      },
    },
  },
  plugins: [],
} satisfies Config;
