# Courtwave — pickleball tournament planning

Status: M0 planning handoff and M1 app foundations complete. Local web, Android and iOS simulator checks pass. Later feature milestones remain gated.

The requested product includes a Flutter app for iOS and Android, a website hosted on Vercel, and a shared backend with persistent database storage. Tournament managers sign in; players can view tournament schedules and scores without accounts through links and QR codes. Courtwave is a temporary name chosen at the user's request.

The repository now contains a Flutter project in `apps/mobile` and a Next.js website in `apps/web`. Both use the temporary Courtwave identity and supplied palette. Supabase/PostgreSQL remains the selected database baseline for M2; no external services have been provisioned.

## Run locally

Use Node 24.22.0 and pnpm 11.25.0, then run:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000`. Run web checks with `pnpm check`. For mobile, use `pnpm mobile:doctor`, `pnpm mobile:get`, and `pnpm mobile:run` with Flutter 3.47.7. See the [development guide](docs/development.md) for toolchains, Android/iOS builds, and GitHub-to-Vercel integration.

These are foundation shells. Authentication, database access, scheduling and scoring belong to later milestones.

## Planning documents

- [Project status](docs/project-status.md)
- [Confirmed requirements](specs/requirements.md)
- [PDF source notes and schedules](docs/source-notes.md)
- [Open decisions](docs/open-decisions.md)
- [Architecture and free-tier constraints](docs/architecture.md)
- [Tournament rules](specs/tournament-rules.md)
- [Scheduling](specs/scheduling.md)
- [Data and access](specs/data-and-access.md)
- [Product flows](specs/experience.md)
- [Acceptance criteria](specs/acceptance.md)
- [Milestones](docs/milestones.md)
- [M0 handoff and deferred feature gates](docs/foundation-handoff.md)
- [Development setup](docs/development.md)
- [Brand guidelines and temporary logo](docs/brand-guidelines.md)
- [Design rules](docs/design-rules.md) and [token specification](assets/design-tokens.json)
- [Reusable skills and specialist role briefs](docs/agent-workflow.md)

The planning package separates confirmed requirements from proposed engineering/design details and unresolved business rules. Eight-team stage format and scheduling policies are manager-selectable. Administration is per tournament, with email/password sign-in and main-admin-invited submanagers. Any signed-in manager can create a tournament and become its main admin. Managers set points targets, choose ranking rules (default: wins → fewest points conceded → head-to-head), choose smaller-division formats and final pool placement, and use extra tiebreak games only to resolve tied places. Detailed configuration options and editing policies remain open before implementation. SMS and offline operation are later scope. No launch date or monthly budget has been set; prefer free services and raise required spending before provisioning.
