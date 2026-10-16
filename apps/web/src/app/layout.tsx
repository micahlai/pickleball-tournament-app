import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Courtwave | Pickleball tournaments", template: "%s | Courtwave" },
  description: "Pickleball tournament planning, schedules and scores. An early preview of Courtwave.",
  // Preview pages contain no tournament data. Decide public indexing in M5.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <p>Courtwave <span aria-hidden="true">/</span> Pickleball tournament planning</p>
          <p className="preview-label">Early preview</p>
        </footer>
      </body>
    </html>
  );
}
