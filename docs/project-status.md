# Project status

Updated: 2026-10-16, America/New_York.

## Current phase

M0 and M1 are complete locally. The user authorized M0/M1 implementation, parallel work and incremental commits on 2026-10-16, and explicitly deferred unresolved product details to their relevant milestones. Web and both native builds/launches pass; environment checks pass.

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
- Created three reusable project-local skills and specialist role briefs. Used parallel agents for mobile, web, and Android tooling after authorization; global agent configuration is unchanged.
- Added Flutter iOS/Android and Next.js foundation shells, using the supplied palette and provisional logo.
- Added dependency locks, local toolchain wrapper, setup/Vercel import guidance, and GitHub CI for web and native checks.
- Installed local Flutter, Node LTS, Java 17, Android SDK/NDK, and a Courtwave Android emulator. Added CocoaPods 1.17.0 through Homebrew for iOS plugin support. Android licenses were explicitly approved by the user. SDKs remain outside Git; no global shell profile changed.
- Committed M0 handoff, workspace/checks, web foundation, and mobile foundation separately.

## Still awaiting decisions

See [decision register](open-decisions.md). The core scoring, login, creation, and configurable-format choices are recorded. Remaining policy details include supported format/ranking options, residual ties, schedule validation/editing, manager-account registration and submanager privileges, and public publication behavior.

These remaining decisions gate M2–M6 as recorded in the [foundation handoff](foundation-handoff.md); they do not block M1. Proposed business rules remain labeled as proposals and are not silently adopted.

## Verification

- Source images were visually reviewed and schedule tables transcribed.
- UI text contrast was calculated from the supplied colors and proposed neutrals.
- Document links, version pins, JSON manifests, workflow structure and generated-config exclusions checked.
- Web: lint with zero warnings, five public-configuration boundary tests, Next.js type generation/TypeScript, and production build passed under pinned Node 24.22.0.
- Production web server: home and About return 200, unknown route returns 404, process-health endpoint returns ok. Browser checked at 375px and 1280px; no horizontal overflow or browser warning/error logs; About/home navigation works.
- Mobile: Dart formatting and Flutter analysis passed; two widget checks cover the empty unauthenticated shell and small-phone enlarged text.
- iOS: unsigned debug simulator build passed; installed and launched on iPhone 17 Pro / iOS 26.5 and visually inspected.
- Android: debug APK build passed; installed and cold-launched on the API 36 ARM64 emulator, with activity launch status ok and a running app process.
- Final `flutter doctor -v` through the root wrapper passes all categories and reports “No issues found.” Existing physical devices were not paired/tested; the successful native launches used simulators/emulators.
- Hosted CI has not run: the user will push to GitHub. No auth, database, scheduler, scoring, signing/distribution, or external deployment verification is claimed.

## Implementation status

M1 scaffolds and development environments are implemented. M2–M6 remain unimplemented. No backend resources, migrations, authentication configuration, external invitations, production signing, paid service, or deployment exists.

## Next step

The user can push the local commits to GitHub and connect Vercel using the development guide. Hosted CI and deployment are not yet verified. Start M2 only when requested, resolving its account-registration, permission, publication and service-setup gates first.
