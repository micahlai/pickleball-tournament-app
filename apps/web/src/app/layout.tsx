import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Courtwave | Pickleball tournaments", template: "%s | Courtwave" },
  description: "Pickleball tournament planning, schedules and scores. An early preview of Courtwave.",
  // Preview pages contain no tournament data. Decide public indexing in M5.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="font-sans">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <p>Courtwave <span aria-hidden="true">/</span> Pickleball tournament planning</p>
          <Badge variant="outline" className="border-transparent bg-highlight px-3 py-1 text-highlight-foreground h-auto">Early preview</Badge>
        </footer>
      </body>
    </html>
  );
}
