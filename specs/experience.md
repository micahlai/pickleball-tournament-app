# Product flows and screen inventory

Status: planning proposal based on confirmed capabilities; no screens have been built.

## Public viewer

Open tournament link or scan QR → tournament overview → choose wave/division → see schedule by court and standings → inspect teams by player name.

The same public URL must work in a browser without installation or login. Opening the corresponding app view is a proposed convenience. Players never need to authenticate merely to view results.

Proposed screens:
- Tournament overview: tournament name, timing/location where supplied, waves and divisions.
- Division: format, court allocation, schedule, teams, and standings; no social feed.
- Match/court: teams, player names, score, match status, planned timing.
- Standings: rank, wins/losses and approved point fields; explain shared ranks and unresolved ties.

## Manager

Sign in → choose a manageable tournament → configure waves/divisions → add teams → review random schedule slots → review court/time recommendations → rearrange if needed → publish/view schedule → enter scores → resolve ties.

Use email/password sign-in and tournament-scoped main administration. Any signed-in manager can create a tournament and becomes its main admin; only that main admin invites submanagers. Manager-account registration, recovery/invitation details, and exact editing privileges remain Q-04. Publication and post-start editing depend on Q-05/Q-06.

Proposed manager workspace:
- Setup form with 12 default venue courts, 4–8-team divisions, doubles default, singles option, and explicit points-target and win-by-two choices. Include manager-selectable format, ranking rules (with the confirmed default), and eight-team final-placement settings; do not invent unsupported alternatives.
- Schedule planner with wave/court timeline, conflict list, recommendation explanation, and a non-drag alternative for moving matches.
- Match score entry with team identity, current saved revision, validation, save feedback, and correction history.
- Standings with an explicit manager choice for the confirmed remaining three-way tie. Show extra tiebreak outcomes separately and explain that they only resolve tied places, leaving main totals unchanged.
- Main-admin invitation panel for that tournament's submanagers; role editing and ownership-transfer details remain open.

## States required in the eventual design

Loading, empty roster, schedule not ready, no results, save pending, saved, failed save, connection lost, stale data, concurrent-edit conflict, permission denied, and missing tournament.

A failed online save must not appear completed. Public results show when they last refreshed; “live” should not imply guaranteed instant delivery.

## Scope boundaries

No SMS setup, offline write queue, player signup, payments, ticketing, social feed, media gallery, or public directory is assumed. SMS/offline are explicitly later scope; the other features are unrequested or unresolved.

Responsive web and mobile should share terminology, identifiers, rules, and visual tokens. Manager desktop layouts can show more courts at once; mobile prioritizes one division/court and reliable score entry.

