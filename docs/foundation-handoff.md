# M0 foundation handoff

Updated 2026-10-16. The user authorized M0/M1 implementation, parallel work where possible, and incremental commits. The existing plans, source schedules, specifications, design rules, and reusable skills supply the M0 artifacts. Remaining product questions are explicitly deferred to their relevant milestones by the user's answer.

## Foundation choices

- Mobile: Flutter stable, native iOS and Android targets.
- Website: Next.js App Router with TypeScript on Vercel, adopted as the M1 engineering choice from the documented recommendation. The user plans GitHub integration and domain configuration through Vercel.
- Database: Supabase/PostgreSQL baseline; no database or auth service is needed for M1.
- Temporary native identifiers: `com.example.courtwave`, separate from website domain configuration. Replace before distribution; no organization/domain ownership is assumed.
- Toolchains are local development dependencies, not committed SDK binaries or global shell configuration.

## Explicitly deferred decisions

| Decision group | Blocks | M1 boundary |
| --- | --- | --- |
| Q-02 target ranges, ranking alternatives, head-to-head, residual ties | M4 scoring/standings | No scoring engine or invented defaults |
| Q-03 timing validation, rest, changeover, delays | M3 scheduling | No operational scheduler |
| Q-04 account registration, submanager privileges, invitations | M2 identity/storage | No working login or registration |
| Q-05 draft publication/private fields | M2 data boundary and M5 public views | No real tournament exposure |
| Q-05 indexing, archive behavior | M5 public views | No public directory or production indexing decision |
| Q-05 audience scale, Vercel eligibility, email delivery/cost | M6 readiness, before external provisioning | No service account, spending, deployment or domain change |
| Q-06 format menu, randomization, rearrangement | M3 scheduling | No generated tournament fixtures |
| Q-06 withdrawals, score corrections, reopening | M3/M4 workflows | No domain mutation logic |

The deferral records timing; it does not resolve the underlying question or accept an implicit default.

## M1 acceptance evidence

- Flutter project includes both native target projects; formatting, static analysis and widget checks pass.
- An iOS simulator build and Android debug APK build succeed locally, or a specific toolchain blocker is reported and M1 remains incomplete.
- Website passes lint, TypeScript checking, and production build, then serves successfully for browser review at mobile and desktop widths.
- Both shells use the supplied palette, meaningful empty content, and no fabricated events or working-looking authentication.
- Local configuration templates contain no credentials; application source contains no service-role/admin secrets.
- Root setup instructions, pinned dependencies, ignore rules, and repeatable verification commands support a fresh checkout.
- Commit completed changes in reviewable groups. Only root coordinates Git commits while agents share the checkout.
