# Design rules

Status: proposed implementation guidance. User-approved inputs are the palette, public names-only viewing, manager operations, and temporary branding. No UI has been implemented.

## Product priorities

Public viewers should immediately recognize the tournament, wave/division, court, match status, and scores. Managers need efficient setup, schedule edits, and accurate score entry. The interface should make court conflicts and failed saves visible.

Keep the core division experience simple, as requested in the PDF. No social feed, photo gallery, decorative analytics, or marketing hero should crowd the operational views.

The UI/UX skill search returned marketing/night-mode suggestions rather than a suitable tournament UI. Those styles were not adopted. The following rules are tailored design proposals using the user's palette and the skill's general accessibility guidance.

## Tokens and typography

Use primitive → semantic → component token layers from [design-tokens.json](../assets/design-tokens.json). This file is a design specification, not a Flutter theme or CSS implementation.

Proposed typography: native system sans-serif for body and headings, tabular figures for scores and times. Target 16 logical units for body text, 14 for secondary labels, 20–32 for hierarchy, and 28–40 for scores. Support enlarged system text; do not shrink text to fit player names.

Proposed spacing: 4, 8, 12, 16, 24, 32 logical units. Controls should have at least a 48×48 logical-unit interaction area; desktop score rows may be denser without reducing touch targets on mobile. Use 8/12-unit corner radii, restrained borders, and minimal elevation.

## Palette and measured contrast

Computed from the exact sRGB hex values:

| Text | Background | Contrast | Guidance |
| --- | --- | --- | --- |
| White | Slate | 5.72:1 | Suitable for normal text |
| White | Muted teal | 4.52:1 | Passes 4.5:1 narrowly; do not fade |
| White | Earth | 4.57:1 | Passes 4.5:1 narrowly; do not fade |
| Ink | Sand | 11.33:1 | Preferred highlight text |
| Ink | Periwinkle | 6.60:1 | Preferred selected-state text |
| Slate | Sand | 4.19:1 | Avoid normal-sized text |
| White | Periwinkle | 2.34:1 | Avoid text pairing |

Target at least 4.5:1 for normal text and 3:1 for meaningful control boundaries/focus indicators. Verify actual rendered combinations, including hover/disabled/error states. Never communicate winner, delay, court availability, or error using color alone.

## Layout proposals

- Public mobile: tournament heading, wave/division selection, next/current matches, schedule and standings.
- Manager desktop: persistent tournament context, court/time planner, conflict summary, focused editing panel.
- Manager mobile: one division or court at a time; score entry remains reachable without a wide table.
- Represent byes explicitly. A bye is not a zero-score loss.
- Identify random schedule positions as “Team number” or “Schedule position,” never imply ranked seeding.
- Shared ranks display equal rank labels once the numbering policy is approved.

## Interaction and component rules

| Component | Required information and behavior |
| --- | --- |
| Division summary | Wave, format, teams/capacity, assigned courts, scoring settings |
| Match card | Stable team/player labels, court, time/status, saved score |
| Score form | Named teams, integer inputs after rules are confirmed, visible validation, save state, correction context |
| Court planner | Time and court labels, conflict text, move controls usable without dragging |
| Standings | Rank, agreed ranking metrics, tie status and explanation; no rank derived from random slot |
| Public QR panel | Human-readable link and browser fallback; no app-install gate |
| Connection status | Last refresh, stale/failed write states, explicit retry |
| Tie action | Manager chooses three-game mini round robin or shared rank for the confirmed three-way case |

Use native Flutter semantics and appropriate semantic web controls. Keyboard users must reach every manager action. Focus must remain visible and return sensibly after dialogs. Announce score-save outcomes without repeatedly announcing every background refresh.

Do not promise offline writes. Do not put SMS controls into the launch UI. Keep implementation/provider details out of normal tournament flows.

## Design review acceptance

Review at narrow phone width, tablet, and desktop; enlarged text; keyboard-only navigation; screen reader labels; long names; 4–8 teams; multiple waves; incomplete scores; ties; empty schedules; network errors; and concurrent edits.

Use synthetic player names in design references. Dark mode, animation details, final typography, and platform-specific component packages are not confirmed requirements.

