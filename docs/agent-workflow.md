# Project-local skills and specialist roles

Status: reusable planning guidance created in the repository. No subagents were launched, no global skills were installed, and no runtime agent configuration is claimed.

## Skills

- [courtwave-planning](../.agents/skills/courtwave-planning/SKILL.md): keep requirements, decisions, status, and milestones aligned; coordinate bounded work when delegation is authorized.
- [courtwave-tournament-review](../.agents/skills/courtwave-tournament-review/SKILL.md): review schedules, scoring, ties, and schedule changes against confirmed rules.
- [courtwave-ui](../.agents/skills/courtwave-ui/SKILL.md): apply the palette, public-viewing boundaries, manager workflows, and accessibility rules.

These are project-local skill files with standard name/description frontmatter. Their presence is not proof that the current running session has reloaded automatic skill discovery. They can be read directly and are linked from AGENTS.md.

## Specialist role briefs

| Role | Read first | Expected output |
| --- | --- | --- |
| Tournament rules reviewer | Tournament rules, source notes, open decisions | Rule traceability, pairing/bye findings, unresolved semantics |
| Scheduling reviewer | Scheduling spec and tournament rules | Court/team conflict analysis, recommendation tradeoffs, timing questions |
| Data/access reviewer | Architecture and data/access spec | Proposed ownership boundary, public projection, concurrency and permissions findings |
| UI reviewer | Brand/design rules, experience spec, tokens | Screen/state guidance, accessibility findings, names-only checks |
| Verification reviewer | Acceptance criteria and milestones | Meaningful verification plan tied to confirmed requirements |

These are task briefs for future subagents, not autonomous workers or a mandate to launch agents.

## Delegation protocol

When the user or applicable instructions authorize parallel agent work, assign a bounded question, necessary source documents, allowed files, and the current documentation-only restriction. Use disjoint edit ownership; have a reviewer report findings rather than rewrite another agent's active files.

A handoff should state:
- Objective and deliverable.
- Confirmed inputs and explicit unresolved questions.
- Files owned/read-only.
- Evidence expected and actions outside scope.
- Results, remaining uncertainty, and paths changed.

The coordinating agent resolves conflicts using user decisions, not majority vote or plausible assumptions. Preserve uncertain findings as questions.

Implementation, service provisioning, and deployment remain prohibited until separately authorized. Creating these role briefs does not grant permission for those actions.

