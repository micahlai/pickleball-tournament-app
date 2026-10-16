# Requirements register

Status: discovery draft updated with the user's latest scoring, access, and format answers, 2026-10-16. This is not an implementation-ready specification.

## Confirmed by the user's request

| ID | Requirement |
| --- | --- |
| REQ-001 | Use Flutter for the iOS and Android app. |
| REQ-002 | Include a website hosted on Vercel for viewing and manager control. |
| REQ-003 | Include the full backend and persistent database storage; recommend a suitable database. |
| REQ-004 | Tournament managers must authenticate. |
| REQ-005 | Players can view tournaments without creating accounts. |
| REQ-006 | A tournament contains multiple waves, each containing multiple divisions. |
| REQ-007 | Court availability affects division planning; the default total court count is 12. |
| REQ-008 | A division supports up to eight teams; seven-team divisions are also relevant. |
| REQ-009 | Follow a round-robin style tournament structure and consult the supplied PDF for ordering and details. |
| REQ-010 | This phase produces Markdown documentation, specifications, agent/UI skills, project status, milestones, and design rules only. |
| REQ-011 | Ask questions and do not assume unanswered requirements. |
| REQ-012 | Divisions support 4–8 teams; doubles is the default and singles is a division-wide option. |
| REQ-013 | Use the supplied seven/eight-team schedules, with manager rearrangement. Team numbers are random schedule positions, not ranking inputs. |
| REQ-014 | Win-by-two is a manager-selected division-wide characteristic. |
| REQ-015 | A remaining three-way tie permits a manager-selected three-game mini round robin or shared rank. |
| REQ-016 | Three courts per division is the default reference; managers can allocate more/fewer courts and receive recommendations. Scheduling is part of the app. |
| REQ-017 | Each tournament has one main admin who invites submanagers; use email/password sign-in. Any signed-in manager may create a tournament and becomes its main admin. Exact submanager editing privileges remain open. |
| REQ-018 | Public links and QR codes provide app/web viewing without login; only player names are public player details. |
| REQ-019 | SMS and offline operation are later scope; launch requires internet. |
| REQ-020 | Use the supplied five-color palette and a replaceable name/logo selected by the agent. |
| REQ-021 | No launch date or monthly service budget is set. Prefer free database hosting and raise required paid resources to the user. |
| REQ-022 | Manager chooses eight-team initial pools only or initial plus reseeded pools, with one division score record across counted games. |
| REQ-023 | Scheduling progression, planning inputs, and multi-division participation are manager settings; no default values have been supplied. |
| REQ-024 | Manager sets the points target per division, separately from win-by-two. |
| REQ-025 | Manager chooses ranking rules; default is most wins → fewest total points conceded → head-to-head. Points conceded includes opponents' points in all counted games. |
| REQ-026 | Extra tiebreak games only decide the tied places; they do not add wins, losses, or points to main division totals. |
| REQ-027 | Manager chooses the format for 4–6-team divisions; the supported format menu remains to be specified. |
| REQ-028 | In two-stage eight-team mode, manager chooses separate winners-pool places 1–4/consolation places 5–8 or ranking all eight teams by combined results. No default specified. |

## Source-derived candidates

These appear in the PDF but need clarification where ambiguous or contradictory. See [source notes](../docs/source-notes.md).

- Managers create tournaments and divisions, add/edit players and teams, and enter/edit scores.
- Division views show available team spots, wave/time, a QR code, and a start control.
- Court views group matches by round and court.
- Results show wins/losses, points, and rankings.
- Player SMS notifications and manager match-completion notifications are described. SMS is explicitly deferred by REQ-019; any other notification channel remains unconfirmed.
- Seven-team divisions use the illustrated seven-round schedule.
- The PDF's eight-team format uses initial pools followed by winners/consolation pools; REQ-022 makes the second stage manager-selectable.
- The source requests a simple division display without a game feed or images.

## Unspecified

The backend selection is Supabase/PostgreSQL under the delegated database choice. The website framework recommendation is Next.js. Three project-local reusable skills and specialist role briefs have been prepared, without changing global agent configuration or spawning workers.

Remaining unresolved rules include supported ranking/format choices, residual-tie behavior, scheduling defaults/validation, manager account registration and exact editing privileges, public publication/directory policy, and precise rearrangement behavior. See the current [decision register](../docs/open-decisions.md).
