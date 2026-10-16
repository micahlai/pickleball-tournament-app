import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main id="main-content" className="page-shell prose-page" tabIndex={-1}>
      <h1>About Courtwave</h1>
      <p className="page-lead">Pickleball tournament planning, with a clear view for everyone.</p>
      <section aria-labelledby="players-heading">
        <h2 id="players-heading">For players and spectators</h2>
        <p>Courtwave is being built to make tournament schedules and scores available through a shared link or QR code, without a player account.</p>
      </section>
      <section aria-labelledby="organizers-heading">
        <h2 id="organizers-heading">For organizers</h2>
        <p>The planned manager tools bring waves, divisions, court schedules and scoring into one tournament workspace.</p>
      </section>
      <aside className="preview-note" aria-label="Preview status">
        <p>This early preview introduces Courtwave’s look and layout. Tournament management and viewing are not available yet. The name and logo are temporary.</p>
      </aside>
      <Link href="/" className="text-link">Back to home</Link>
    </main>
  );
}
