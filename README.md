# Courtwave — pickleball tournament planning

Status: discovery and documentation only. Development has not been authorized.

The requested product includes a Flutter app for iOS and Android, a website hosted on Vercel, and a shared backend with persistent database storage. Tournament managers sign in; players can view tournament schedules and scores without accounts through links and QR codes. Courtwave is a temporary name chosen at the user's request.

Supabase/PostgreSQL is the selected database planning baseline, starting with its free tier. Next.js on Vercel is the recommended website framework. No services have been provisioned.

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
- [Brand guidelines and temporary logo](docs/brand-guidelines.md)
- [Design rules](docs/design-rules.md) and [token specification](assets/design-tokens.json)
- [Reusable skills and specialist role briefs](docs/agent-workflow.md)

The planning package separates confirmed requirements from proposed engineering/design details and unresolved business rules. Eight-team stage format and scheduling policies are manager-selectable. Administration is per tournament, with email/password sign-in and main-admin-invited submanagers. Any signed-in manager can create a tournament and become its main admin. Managers set points targets, choose ranking rules (default: wins → fewest points conceded → head-to-head), choose smaller-division formats and final pool placement, and use extra tiebreak games only to resolve tied places. Detailed configuration options and editing policies remain open before implementation. SMS and offline operation are later scope. No launch date or monthly budget has been set; prefer free services and raise required spending before provisioning.
