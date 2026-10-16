import { CalendarDays } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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

      <section aria-labelledby="tournament-heading">
        <Card className="gap-5 py-6 shadow-none sm:py-8 [--card-spacing:--spacing(6)] sm:[--card-spacing:--spacing(8)]">
          <CardHeader className="grid-cols-[48px_1fr] items-center gap-x-4">
            <div className="flex size-12 items-center justify-center rounded-lg bg-highlight text-highlight-foreground" aria-hidden="true">
              <CalendarDays className="size-6" />
            </div>
            <CardTitle><h2 id="tournament-heading">No tournament open</h2></CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>When tournament viewing is available, open the link or scan the QR code shared by your organizer. You won’t need a player account.</p>
            <CardDescription>This is an early preview. Tournament pages and manager sign-in are coming in a future update.</CardDescription>
          </CardContent>
        </Card>
      </section>

      <Separator className="mt-8" />
      <section className="manager-note" aria-labelledby="manager-heading">
        <h2 id="manager-heading">For tournament managers</h2>
        <p>We’re preparing one place to plan waves and divisions, arrange courts, and keep everyone up to date.</p>
      </section>
    </main>
  );
}
