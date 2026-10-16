# Acceptance criteria

Status: specification of future verification, not implemented tests. Cases with unresolved expectations are blocked rather than given invented answers.

| ID | Scenario and expected outcome | Dependency |
| --- | --- | --- |
| AC-01 | Public tournament link/QR opens a view in a signed-out browser without installation or account creation | Confirmed |
| AC-02 | Public web/mobile views expose player names and no other player details, including embedded/API data | Confirmed |
| AC-03 | Unauthenticated users cannot change teams, matches, scores, schedules, or roles | Confirmed access requirement |
| AC-04 | Each tournament has one main admin who invites submanagers; membership in A grants no write access to B; email/password authenticates managers; any signed-in manager can create a tournament and becomes its main admin | Confirmed; registration/editing privileges Q-04 |
| AC-05 | A division accepts 4–8 teams, defaults to doubles, supports singles, and applies a manager-set target and win-by-two setting to its matches | Confirmed; permitted values and cap Q-02 |
| AC-06 | Random schedule slots do not affect ranking; reopening the division preserves the assigned mapping | Confirmed principle; assignment timing Q-06 |
| AC-07 | Seven-team default pairings match the source order: 21 unique pairs, six matches and one bye per team | Confirmed template |
| AC-08 | Eight-team initial pairings match the source: 12 matches and three games per team across four rounds; manager selection enables a second 12-match stage with the source reseeding mapping | Confirmed configurable format and separate/combined final placement; residual ties Q-02 |
| AC-09 | Four/five/six-team schedules follow the manager-selected format and satisfy that format's pairing rules | Configurability confirmed; format menu Q-06 |
| AC-10 | Court recommendations explain capacity; fewer/more courts do not double-book courts or teams; manager-selected round/court progression is honored | Confirmed configurable policies; detailed timing validation Q-03 |
| AC-11 | Manager rearrangement preserves recorded results and applies approved restrictions to future opponents/time/court changes | Q-06 |
| AC-12 | A division has one coherent score view in either stage mode; extra tiebreak games resolve only tied places and do not alter main wins, losses, or point totals | Confirmed |
| AC-13 | Default ranking uses wins → fewest points conceded → head-to-head; manager choices override the default; examples cover tied places, shared ranks and mini round robins | Default/configurability confirmed; alternative rules and residual ties Q-02 |
| AC-14 | A score correction recalculates affected standings consistently on app and web and handles concurrent changes visibly | Proposed integrity requirement; lifecycle Q-06 |
| AC-15 | Internet loss produces an honest failure/stale state; unsaved writes are not reported as saved or queued for offline sync | Confirmed online-only scope |
| AC-16 | Mobile touch controls, web keyboard navigation, visible focus, text scaling and text contrast satisfy the documented UI rules | Design proposal |
| AC-17 | A rehearsal checks free-tier availability, exports/restoration, mail delivery if used, and expected audience load | Operations proposal |

Use synthetic names and synthetic scores for future fixtures. Do not copy the PDF's historical personal data into demonstrations or tests. Do not infer ranking expectations from its example rank cells.

