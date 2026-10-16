# Scheduling specification

Status: required feature with manager-configurable policies; validation details remain proposed. See Q-03 and Q-06.

## Confirmed

The app manages scheduling. The default venue has 12 courts. A seven/eight-team division normally uses three courts; managers can allocate fewer or more courts. The app should recommend an allocation. Divisions have 4–8 teams and belong to waves.

The user confirmed that scheduling choices are manager settings: round-synchronized versus independent court progression; planning inputs such as wave start times, estimated durations, breaks, and end time; and whether players may enter multiple divisions. No default policy or input values were specified. Exact setting scope and optional/required fields remain to be detailed.

## Recommended planning model

Let managers review a proposed schedule before publishing it. Show conflicts and duration estimates alongside the suggested court allocation. Never silently override a manager's chosen allocation or present estimated start times as guarantees.

Manager-configurable input categories confirmed in principle; exact fields and validation proposed:
- Tournament date and venue time zone.
- Wave start time and division readiness.
- Court availability windows, division allocations, and temporary closures.
- Estimated game duration, changeover time, breaks, and optional latest finish time.
- Cross-division player participation and required rest time.

Suggested outputs:
- Wave/division schedule with matches, courts, estimated start/finish times, and byes.
- An explanation of the recommended allocation and what limits it.
- Conflicts requiring resolution before publication.
- A revised schedule preview when courts or timings change.

## Court allocation recommendations

These are planning recommendations, not additional user requirements.

| Teams | Suggested initial courts | Pairings for the indicated format | Basis |
| --- | --- | --- | --- |
| 4 | 2 | 6 | At most two simultaneous matches |
| 5 | 2 | 10 | At most two simultaneous matches; rotate byes |
| 6 | 3 | 15 | At most three simultaneous matches |
| 7 | 3 | 21 | Matches the supplied seven-round schedule |
| 8 | 3 | 12 in one-stage mode; 24 in two-stage mode | Preserve the supplied four-round schedule per stage; manager selects format |

Fewer courts stretch a schedule. More courts cannot increase concurrency beyond floor(team count / 2), and do not automatically shorten a schedule whose ordering/rest rules are fixed. Four courts for eight teams could permit a different arrangement, but must not silently replace the supplied schedule.

With 12 courts, four concurrent three-court divisions is the default example, not a fixed maximum number of divisions per wave.

## Proposed conflict rules

- A physical court cannot host overlapping matches, including across divisions and waves.
- A team cannot play overlapping matches.
- Check individual player conflicts if multi-division participation is allowed.
- A dependent stage cannot start before qualification is resolved.
- Respect court availability and the approved timing/rest policy.
- Apply the manager-selected synchronized-round or independent-court progression policy. “Court free” alone does not imply a team is available; readiness and player conflicts must also be checked.

## Changes during play

Recommended behavior: keep finished matches stable, preview movement of future matches, flag newly affected teams/courts, and publish a versioned change. A score edit or simultaneous manager update must not silently overwrite another manager's schedule.

Internet is required in the first release. Failed schedule writes remain visibly unsaved; do not imply that an offline queue exists.

## Acceptance scenarios to finalize

- Generate the seven-team source order on three courts with exactly one bye per team.
- For 4–6 teams, honor the manager-selected format; the ordinary round-robin counts above describe only that proposed format option, not every possible format.
- Reallocate to two courts without creating overlapping team/court assignments.
- Allocate divisions across waves without double-booking the venue.
- Reject impossible end-time constraints with an explanation instead of truncating matches.
- Preserve team identity and scores when rearranging future match assignments.
- Distinguish planned, in-progress, and completed matches.
- Exercise delays, a court closure, concurrent manager edits, and a player in two divisions after those policies are decided.

