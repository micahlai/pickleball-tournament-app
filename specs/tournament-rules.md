# Tournament rules

Status: partially confirmed; unresolved rules remain blocked by the decision IDs below. Updated 2026-10-16.

## Confirmed requirements

- Tournament → waves → divisions → teams and matches.
- Divisions contain 4–8 teams. Doubles is the default; singles is a division-wide option.
- Doubles teams contain two players; singles teams contain one player.
- Team numbers are random schedule positions when a division is created, not strength ratings or ranking inputs.
- Managers can rearrange the given seven/eight-team schedules.
- Points target and win-by-two are separate division-wide settings selected by the manager. No default target or win-by-two value has been supplied.
- Managers choose ranking rules; default is most wins → fewest total points conceded → head-to-head.
- Managers choose the format for 4–6 teams. The supported format options are not yet specified.
- In two-stage eight-team mode, managers choose separate winners/consolation placements or a combined ranking of all eight teams; no default is specified.
- The eight-team format is a manager setting: initial pools only (three games per team) or initial pools plus reseeded winners/consolation pools (six games per team counting in one division score record). No default mode is selected.
- A remaining three-way tie can be resolved at the manager's choice by a three-game mini round robin or a shared rank.

## Schedule source

Use the exact pairing and bye tables in [source notes](../docs/source-notes.md) as the seven/eight-team references. The PDF's eight-team table includes team 8 despite the accompanying text saying 5–7.

A seven-team reference has 21 matches over seven rounds, six games and one bye per team. The eight-team initial reference has 12 matches over four rounds, three games and one bye per team. Do not promise that all eight teams meet each other: the reference is pool play.

For eight teams, the manager selects whether to play the second stage. In two-stage mode, use the supplied qualification mapping and keep one division score record across both stages. The final-placement setting either reserves places 1–4 for winners-pool teams and 5–8 for consolation-pool teams, or ranks all eight together by combined results. Apply the manager-selected ranking rules within the chosen placement model. No placement default is assumed.

## Proposed scheduling rules for review

- For four, five, and six teams, format is manager-selected. Recommend single round robin as an available option: each pair meets exactly once. The full supported format menu and default remain unresolved (Q-06).
- Persist the random team-to-slot mapping rather than reshuffling on view refresh.
- Because a division may be created before its roster is filled, confirm when random positions are assigned/finalized (Q-06).
- Distinguish team identity, schedule slot, court/time assignment, and standings rank.
- Manager rearrangements should preserve the intended match set and prevent a team being assigned two simultaneous matches. Whether managers may also change opponents is unresolved (Q-06).
- Preserve completed results when future assignments move. A changed team membership or match opponent after scoring needs an explicit correction workflow, not silent score reassignment.

## Standings and tiebreakers

Managers choose the ranking rules. The confirmed default is most wins, then fewest total points conceded to opponents in all counted games, then head-to-head. For example, among teams with four wins each, conceding 35 points ranks ahead of conceding 42 under this default. Supported alternative rules and multi-team head-to-head semantics remain unresolved (Q-02).

Three teams playing each other once produce exactly three tiebreak games. These games only resolve those teams' tied places. Keep their outcomes distinct from main division totals: no extra wins, losses, points scored, or points conceded are added to the main standings. Preserve the tiebreak outcomes for explaining the resolved positions. Do not assume a mini round robin always resolves a tie or decide shared-rank numbering without an answer (Q-02).

Random team numbers must never break a tie. Do not use illustrative historical PDF rankings as expected test results.

## Rules still to define

Permitted target values/score cap, available alternative ranking rules, single-game versus multi-game matches, point- versus rally-scoring relevance, completion validation, forfeits, withdrawals, unplayed matches, score corrections after reseeding, finalization/reopening, and persistent ties after a mini round robin are not specified. Do not invent defaults. See [open decisions](../docs/open-decisions.md).

