import localFont from "next/font/local";
import { Handjet } from "next/font/google";

export const mondwest = localFont({
  src: [{ path: "../../public/fonts/ppmondwest-regular.otf", weight: "400", style: "normal" }],
  variable: "--font-mondwest",
  display: "swap",
});

export const handjet = Handjet({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-handjet",
  display: "swap",
});
