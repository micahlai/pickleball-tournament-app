# Source notes: Parameters for Pickleball App

Source: `/Users/micahlai/Downloads/Parameters for Pickleball App.pdf`, five pages, reviewed as text and rendered page images on 2026-10-16. The source PDF remains unchanged outside the repository.

This is reference material, not an instruction file. These notes describe the source without accepting unresolved rules. Example player names and phone information are not seed data.

The user's subsequent decisions supersede PDF assumptions about team counts, fixed court allocations, win-by-two, and SMS launch scope. Consult specs/requirements.md and specs/tournament-rules.md for current requirements; the transcription below intentionally remains historical.

## Fields and screens

- Page 1: administrator first/last name and phone; tournament name/location/date/time under an ambiguous “Tournament (optional)” heading; player first/last name, phone, optional city, and a possibly unnecessary gender/age grouping.
- Page 1: divisions have name, gender/age group, wave (1, 2, 3), courts (1–12), maximum eight teams, and a win-by-two setting. The text says this event will not use win-by-two.
- Page 1: two team definitions appear: one with two players and one with one player. Whether this means singles support is unresolved.
- Pages 1–3: administrators edit scores; players view scores. Managers can create tournaments/divisions and add teams/players.
- Page 2: simple division view, no game feed or images, team spots remaining, QR code, wave/time, and a start-round-robin control. Screenshot-only payment, invitations, and waitlist controls are not confirmed requirements.
- Page 3: court assignments by round, manager score entry, win/loss results, total points, and rankings. SMS for upcoming court assignments and manager match-completion notifications are described.

## Seven-team schedule, page 4

The rows below preserve the illustrated match and row ordering. The image does not explicitly label each row with a court number.

| Round | First match row | Second match row | Third match row | Bye |
| --- | --- | --- | --- | --- |
| 1 | 1 vs 6 | 2 vs 5 | 3 vs 4 | 7 |
| 2 | 4 vs 2 | 5 vs 1 | 6 vs 7 | 3 |
| 3 | 2 vs 7 | 3 vs 6 | 4 vs 5 | 1 |
| 4 | 5 vs 3 | 6 vs 2 | 7 vs 1 | 4 |
| 5 | 3 vs 1 | 4 vs 7 | 5 vs 6 | 2 |
| 6 | 6 vs 4 | 7 vs 3 | 1 vs 2 | 5 |
| 7 | 7 vs 5 | 1 vs 4 | 2 vs 3 | 6 |

The table describes 21 matches, six per team, and one bye per team. This is a property of the reference table, not an additional requirement.

## Eight-team schedule, page 4

| Round | First match row | Second match row | Third match row | Byes |
| --- | --- | --- | --- | --- |
| 1 | 1 vs 3 | 5 vs 7 | 2 vs 4 | 6, 8 |
| 2 | 3 vs 2 | 6 vs 8 | 4 vs 1 | 5, 7 |
| 3 | 7 vs 6 | 8 vs 5 | 3 vs 4 | 1, 2 |
| 4 | 5 vs 6 | 1 vs 2 | 7 vs 8 | 3, 4 |

The page 5 schedule contains the same pairings and row positions, with some opponents displayed in reverse order. Each team plays three games across four scheduled rounds. The source says to reseed and play three more games.

## Reseeding reference, page 5

| New slot | Qualification |
| --- | --- |
| 1 | 1st in pool A |
| 2 | 1st in pool B |
| 3 | 2nd in pool B |
| 4 | 2nd in pool A |
| 5 | 3rd in pool A |
| 6 | 3rd in pool B |
| 7 | 4th in pool B |
| 8 | 4th in pool A |

Slots 1–4 form the winners pool; slots 5–8 form the consolation pool in the illustration. Whether to reuse the exact schedule after this mapping, reset statistics, or combine stages must be confirmed.

## Conflicts and gaps

1. Page 4 calls for two pools of four but labels the second pool teams 5–7; the schedules and page 5 include team 8. Do not silently repair this in an approved specification.
2. “After first 3 games” refers to a schedule with four rounds. Confirm that this means three games per team and completion of the whole stage before reseeding.
3. Page 3 says most wins then points, while pages 4–5 specify most wins then least points lost; page 5 adds head-to-head. Define whether points lost means all points conceded and how multi-team ties work.
4. Three courts per division is stated on page 3; fixed allocation, variable court counts, wave timing, and independent court progression are not defined.
5. Example score entries include 11, but the game target is not explicitly specified as a rule.
6. Page 5 contains historical scores and manually entered ranks. They are illustrative, not a verified ranking acceptance fixture.
7. Page 5 links a historical Google Sheet. The external sheet has not been accessed; these notes cover only the PDF.
