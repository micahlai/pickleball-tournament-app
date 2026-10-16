# Project status

Updated: 2026-10-16, America/New_York.

## Current phase

Planning package prepared; discovery continues for unresolved product rules. Development remains explicitly out of scope.

## Completed

- Reviewed the five-page PDF, including schedule and reseeding images, and preserved source notes separately from user decisions.
- Recorded the user's confirmed division sizes/formats, manager controls, public access, scheduling scope, and deferred features.
- Confirmed manager-selectable eight-team format and scheduling policies.
- Confirmed email/password sign-in, per-tournament main admin, and admin-invited submanagers. Any signed-in manager can create a tournament and becomes its main admin.
- Confirmed manager-set points targets and ranking rules, with wins → fewest points conceded → head-to-head as the default. Extra tiebreak games only resolve tied places and leave main totals unchanged.
- Confirmed manager-selectable formats for 4–6 teams and separate-versus-combined eight-team final placements.
- Selected Supabase/PostgreSQL as the free-first database baseline and recommended Next.js on Vercel.
- Wrote architecture, domain/scheduling/data/access/experience specifications and acceptance criteria.
- Wrote dependency-based milestones without invented dates.
- Created temporary Courtwave branding, saved the generated logo, and documented the exact supplied palette, token specification, and measured contrast pairs.
- Created three reusable project-local skills and specialist role briefs. No agents were spawned and no global skill configuration changed.

## Still awaiting decisions

See [decision register](open-decisions.md). The core scoring, login, creation, and configurable-format choices are recorded. Remaining policy details include supported format/ranking options, residual ties, schedule validation/editing, manager-account registration and submanager privileges, and public publication behavior.

The documentation is not yet an implementation-ready contract. Proposed rules remain labeled as proposals; they are not silently adopted.

## Verification

- Source images were visually reviewed and schedule tables transcribed.
- UI text contrast was calculated from the supplied colors and proposed neutrals.
- Document links, skill frontmatter, token references, and schedule transcription invariants are checked as part of this planning handoff.
- These checks do not constitute app, database, authentication, scheduling-engine, or deployment tests.

## Implementation status

Not started. No Flutter/web scaffold, application dependencies, backend resources, migrations, authentication configuration, external invitations, or deployment exists. No paid service was activated.

## Next step

Use the pending answers to refine affected specs and close only the answered decisions. Complete M0 before proposing an implementation kickoff; start development only when the user explicitly requests it.
