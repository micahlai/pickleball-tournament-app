# Data and access specification

Status: proposed conceptual model, not database schema or migrations. Supabase/PostgreSQL selected for the planning baseline; tournament-scoped administration confirmed.

## Confirmed access boundaries

- Public viewers need no account in either web or mobile.
- Public links and QR codes expose tournament scores and viewing access.
- Player names are the only public player details.
- Each tournament has one main admin and may have multiple submanagers.
- Only that tournament's main admin invites submanagers.
- Managers sign in with email and password.
- Any signed-in manager may create a tournament and becomes its main admin. Initial manager-account registration remains to be specified.
- Internet is required. SMS and offline operation are later scope.

## Conceptual records

| Record | Purpose and candidate fields |
| --- | --- |
| Manager identity | Auth provider identity; no public manager credentials/profile |
| Manager assignment | Tournament, identity, main-admin/submanager role, membership/invitation state |
| Tournament | Identifier, name, location, date/time zone, lifecycle, public viewing identifier |
| Wave | Tournament, name/order, planned timing |
| Court | Tournament/venue scope, label, availability |
| Division | Wave, name/category, singles/doubles, 4–8 team limit, manager-set points target, win-by-two, ranking rule configuration, format and final-placement settings |
| Player | Stable identifier and display name; no account required |
| Team and membership | Division, team label, one/two player references according to format |
| Schedule slot | Division/stage, random slot number, stable team reference |
| Court allocation | Division, court, time window |
| Match | Stable teams, stage/round if applicable, court, estimated/actual times, status |
| Score record | Match, scores, result status, revision; one division score record in either manager-selected stage format; extra tiebreak results excluded from main totals |
| Tie resolution | Affected teams, manager-selected method, outcome and linked tiebreak matches; only changes tied places, not main totals |
| Change record | Actor, target, timestamp, prior/current revision, correction reason where needed |

Tournament is the confirmed authorization boundary; do not add an organization hierarchy without a requirement. A stage field supports the selected eight-team format as match metadata, not a separate user-facing score system. Recommend exactly one main-admin membership per tournament, with ownership transfer rules to be clarified before implementation.

Phone, city, gender, and age fields appear in the PDF but are not confirmed as collected fields. Public-name-only does not authorize collecting the other data privately. Confirm collection before adding them; defer phone collection if it exists only for later SMS.

## Proposed permission matrix

| Action | Public | Assigned manager | Main admin |
| --- | --- | --- | --- |
| View public tournament/schedule/results and player names | Yes | Yes | Yes |
| Enter/correct scores | No | Proposed within assignment | Proposed within scope |
| Edit teams/divisions/schedule | No | Proposed within assignment | Proposed within scope |
| Create a new tournament | No | Yes; creator becomes its main admin | Yes; creator becomes its main admin |
| Invite submanagers | No | No | Yes, within their tournament |
| Remove managers / transfer main admin | No | Unresolved | Policy unresolved |
| Access private operational data | No | Only necessary assigned data | Only within confirmed scope |

Public reads, authenticated manager writes, signed-in-manager tournament creation, tournament-scoped main administration, and main-admin-only submanager invitations are confirmed. Exact editing permissions remain proposed. Being authenticated alone must not grant management rights. A manager of tournament A must not acquire write access to tournament B through that membership.

## Technical design requirements proposed for implementation

- Enforce permissions in the backend/database, not only through hidden controls.
- Use database row policies plus explicit column/projection boundaries: row policies alone do not conceal private fields.
- Public projections contain approved tournament data and player names; exclude manager identity, contact data, audit details, and hidden fields.
- Audit public API responses, page source, embedded state, subscriptions, and caches for private-data leakage.
- Score/schedule changes use revisions and transactions so concurrent edits produce a conflict the manager can resolve.
- Randomization and ranking operate on stable team identifiers, never display names or slot order.
- Authoritative score/ranking rules live in shared backend operations, not independent Flutter and web calculations.
- Store extra tiebreak match results with an explicit purpose/reference so they cannot accidentally enter main win/loss or point aggregates. Final placement can reflect tie-resolution outcomes without mutating those totals.
- Passwords belong to the authentication provider; never add application password fields or include passwords in logs, profiles, or public projections.
- Never expose administrative/service credentials in the mobile app, browser, public environment variables, or repository.
- A QR link is a navigation mechanism, not a secret credential.
- “Public by link” does not settle directory/search-engine indexing or draft publication behavior (Q-05).

