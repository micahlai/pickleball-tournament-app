export default function HomePage() {
  return (
    <main id="main-content" className="page-shell" tabIndex={-1}>
      <section className="welcome" aria-labelledby="welcome-heading">
        <div className="welcome-copy">
          <h1 id="welcome-heading">Welcome to Courtwave.</h1>
          <p>A home for pickleball schedules, courts and scores.</p>
        </div>
        <div className="court-mark" aria-hidden="true">
          <div className="court-line court-line-left" />
          <div className="court-line court-line-right" />
          <div className="court-net" />
          <span className="court-ball" />
        </div>
      </section>

      <section className="tournament-empty" aria-labelledby="tournament-heading">
        <div className="empty-symbol" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none">
            <rect x="8" y="10" width="32" height="30" rx="4" />
            <path d="M8 20h32M16 7v7M32 7v7M17 28h5M27 28h4M17 33h5" />
          </svg>
        </div>
        <div>
          <h2 id="tournament-heading">No tournament open</h2>
          <p>When tournament viewing is available, open the link or scan the QR code shared by your organizer. You won’t need a player account.</p>
          <p className="supporting-copy">This is an early preview. Tournament pages and manager sign-in are coming in a future update.</p>
        </div>
      </section>

      <section className="manager-note" aria-labelledby="manager-heading">
        <h2 id="manager-heading">For tournament managers</h2>
        <p>We’re preparing one place to plan waves and divisions, arrange courts, and keep everyone up to date.</p>
      </section>
    </main>
  );
}
