# Milestones and completion gates

No target launch date was supplied. Milestones are dependency-based, not calendar commitments. The user authorized M0/M1 implementation, parallel work, and incremental commits on 2026-10-16. Later milestones remain gated.

| Milestone | Deliverable | Completion evidence | Status |
| --- | --- | --- | --- |
| M0 Discovery and planning | Requirements, architecture, source schedules, design rules, reusable skills | Critical questions answered or explicitly deferred; proposals identified | Complete for foundation handoff; unresolved product questions explicitly deferred |
| M1 Project foundation | Flutter iOS/Android and web scaffolds, development environments | Both mobile builds and web run; no privileged client secrets | Complete locally: web checks/browser review, Android APK and iOS simulator builds/launches pass; CI awaits GitHub push |
| M2 Identity and storage | Email/password, tournament creation and main admin/submanagers, public/private data paths | Only main admin invites; unrelated-tournament writes fail; public reads need no account | Not started; Q-04/Q-05 details pending |
| M3 Setup and scheduling | Waves/courts, 4–8-team singles/doubles, random slots, allocation recommendations, configurable progression and rearrangement | Approved fixtures preserved; no conflicts; manager settings persist | Not started; Q-03/Q-06 details pending |
| M4 Scoring and standings | Shared score recording, configurable eight-team stages, corrections and ties | Approved ranking examples match app/web; concurrent edits handled | Not started; Q-02 pending |
| M5 Public viewing and design | Links/QR routes, schedule/results, responsive manager UI | No login/install gate, names-only player exposure, accessibility and network states | Not started |
| M6 Event readiness | End-to-end rehearsal and deployment plan | Event scenario, export/restoration check, capacity/cost review, approved release | Not started |
| Later scope | SMS and offline operation | Separate contact/delivery and synchronization/conflict requirements | Explicitly deferred |

## Discovery items carried into later milestones

- Define permitted score-target values, supported ranking alternatives, and residual-tie policies. Target configurability, default ranking, manager-selected pool placement, and tiebreak-total exclusion are confirmed.
- Specify scheduling validation, smaller-division format, randomization timing, and rearrangement limits.
- Define manager-account registration, submanager privileges, and publication behavior. Email/password and creator-as-main-admin are confirmed.
- Review free-tier limitations against expected event use.
- Review feature-specific design details before M5. Next.js is adopted for the M1 web foundation.

On 2026-10-16 the user explicitly deferred the remaining product questions to their relevant milestones so M1 can proceed. See the [foundation handoff](foundation-handoff.md) for ownership of each open gate. The items above now gate their relevant feature work, rather than M1 scaffolding.

## Event rehearsal outline

Create divisions of four through eight teams; exercise singles/doubles and each manager-selected stage/progression mode; allocate/reallocate courts; complete/correct matches; resolve ties; simulate concurrent manager edits; open public links on signed-out web/mobile; interrupt connectivity and verify failed-save states.

Detailed expectations are tracked in [acceptance criteria](../specs/acceptance.md).
