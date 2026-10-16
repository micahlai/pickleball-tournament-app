# Decision register

Updated 2026-10-16 with the latest scoring, login, format, placement, and tournament-creation answers. Confirmed choices below supersede the initial question list; unresolved items are not defaults.

## Confirmed

| ID | Decision |
| --- | --- |
| D-01 | Flutter iOS/Android; Vercel-hosted public/manager website; persistent shared backend. |
| D-02 | Divisions contain 4–8 teams, doubles by default, singles as a division-wide option. |
| D-03 | Team schedule positions are randomly assigned and have no scoring/ranking significance. Use PDF seven/eight-team schedules with manager rearrangement. |
| D-04 | Win-by-two is a manager-selected division-wide setting. |
| D-05 | Remaining three-way ties: manager chooses a three-game mini round robin or shared rank. |
| D-06 | Default 12 venue courts and three courts per reference division; manager can vary allocation and receives recommendations. |
| D-07 | Scheduling is required; progression policy and planning inputs are manager settings, including whether players may enter multiple divisions. |
| D-08 | SMS and offline operation are later scope; first release requires internet. |
| D-09 | Each tournament has one main admin; the main admin invites submanagers. Use email/password sign-in. |
| D-10 | Public app/web access via links/QR codes without login; player names are the only public player details. |
| D-11 | Use five supplied palette colors. Agent may choose a temporary name/logo. Courtwave is the provisional result. |
| D-12 | No launch date or monthly budget set; prefer free database and raise required costs. Supabase/PostgreSQL selected under delegated choice. |
| D-13 | Eight-team format is a manager setting: initial pools only, or initial plus reseeded winners/consolation pools with all six games per team in one division score record. No default specified. |
| D-14 | Manager sets the points target per division, separately from win-by-two. No target default specified. |
| D-15 | Manager chooses ranking rules; default is most wins → fewest total points conceded → head-to-head. Points conceded includes opponents' points in all counted games. |
| D-16 | Extra tiebreak games only resolve the tied places; main wins, losses, and point totals remain unchanged. |
| D-17 | Manager chooses the format for divisions of 4–6 teams. Supported options/default remain unspecified. |
| D-18 | In two-stage eight-team mode, manager chooses separate winners-pool places 1–4/consolation places 5–8 or all eight ranked by combined results. No default specified. |
| D-19 | Any signed-in manager can create a tournament and becomes its main admin. Manager-account registration remains unspecified. |

## Active questions

### Q-01 — Eight-team stage selection: resolved at feature level

D-13 resolves stage choice as a configurable format. D-18 resolves separate-versus-combined placement as a manager setting. No default mode is assumed. Detailed ranking/tie configuration remains Q-02.

### Q-02 — Scoring and ranking: core decisions resolved, detailed options open

Confirmed:
- Manager sets points target per division.
- Manager chooses ranking rules, defaulting to wins → fewest total points conceded → head-to-head.
- Extra three-game tiebreak results only resolve the tied places and never add to main division totals.
- Manager chooses separate winners/consolation placements versus combined results.

Further details still needed before implementation:
- Permitted target values, score cap, and single-game/multi-game match format.
- Available alternative ranking rules, their configuration UI, and when managers may change them.
- Meaning of head-to-head in ties involving more than two teams.
- Remaining two-way ties and ties persisting after a mini round robin.
- Shared-rank numbering (for example 1, 1, 3 versus 1, 1, 2).

### Q-03 — Scheduling settings: confirmed categories, detailed validation open

Manager can choose synchronized rounds versus independent court progression, planning inputs, and multi-division participation. Still define setting scope, default values, which time fields are required, minimum rest/changeover, and how live delays affect published estimates. No scheduling default was inferred.

### Q-04 — Manager access: partially resolved

Confirmed: email/password sign-in, one main admin per tournament, main-admin-invited submanagers, and any signed-in manager may create a tournament and become its main admin.

Still define how someone registers a manager account, submanager editing limits, invitation expiry/revocation, removing managers, and ownership transfer. Tournament-creation permission does not by itself decide account-registration eligibility. Do not grant global-admin status or organization-wide access.

### Q-05 — Public lifecycle and operating constraints

Links/QR access and names-only player exposure are confirmed. Public directory/search indexing, draft visibility/publication, private player fields (if any), tournament archive behavior, expected tournament/audience scale, and personal/non-commercial website eligibility are not specified. Next.js is recommended for the website but has not been explicitly accepted.

### Q-06 — Scheduling format and editing details

For 4–6 teams, the manager chooses the format. Ordinary single round robin is a proposed available option; the supported menu and default are still open. Clarify whether rearrangement changes only match order/court/time or can change opponents; when randomized slots are finalized as teams join; and what edits are allowed after play begins. Forfeits, withdrawals, post-reseed score corrections, and finalization/reopening policies remain open.

## How to close a decision

Record the user's answer, update the affected specification and acceptance criteria, and mark only the answered portion resolved. Do not treat an unanswered subquestion as approval merely because adjacent parts were answered.
