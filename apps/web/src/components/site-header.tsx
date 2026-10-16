import Image from "next/image";
import Link from "next/link";

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
          <Link href="/about" className="nav-link">About Courtwave</Link>
        </nav>
      </div>
    </header>
  );
}
