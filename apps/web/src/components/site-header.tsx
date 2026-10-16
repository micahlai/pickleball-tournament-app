import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand-link" aria-label="Courtwave home">
          <Image
            src="/brand/courtwave-logo.png"
            alt="Courtwave"
            width={2172}
            height={724}
            sizes="(max-width: 480px) 168px, 210px"
            className="brand-logo"
            priority
          />
        </Link>
        <nav aria-label="Main navigation">
          <Button asChild variant="ghost" className="min-h-12 px-3 text-primary text-xs sm:text-sm">
            <Link href="/about">About Courtwave</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
