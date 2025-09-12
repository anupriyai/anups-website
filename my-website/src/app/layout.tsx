import "./globals.css";
import { mondwest, handjet } from "./fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mondwest.variable} ${handjet.variable}`}>
      <body>{children}</body>
    </html>
  );
}
