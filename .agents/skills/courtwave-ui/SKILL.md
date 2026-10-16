---
name: courtwave-ui
description: Design or review Courtwave mobile and web tournament interfaces using its palette, accessible operational layouts, and public-versus-manager boundaries.
---

# Courtwave UI

Read [design rules](../../../docs/design-rules.md), [brand guidelines](../../../docs/brand-guidelines.md), [tokens](../../../assets/design-tokens.json), and [experience specification](../../../specs/experience.md).

The palette is user-supplied. Courtwave and its logo are replaceable placeholders. Preserve exact UI token colors; use dark ink on sand/periwinkle and white on slate. Do not use white text on periwinkle or normal-sized slate text on sand.

Build around tournament, wave, division, court, match, score, and standings. Public links must work without an account or app installation. Player names are the only public player details; check data payloads as well as visible labels.

Manager designs must cover singles/doubles, 4–8 teams, court recommendations and rearrangement, score entry, tie decisions, and honest network/save states. Keep schedule slot and rank visually distinct. Do not decide unresolved ranking or timing rules through a mockup.

Use large touch targets, visible keyboard focus, labeled score inputs, scalable text, explicit bye/status labels, and an accessible alternative to dragging schedule items. Never rely only on color for match status or errors.

No SMS setup or offline-write UI belongs in launch scope. Do not introduce payments, social feeds, galleries, or a directory without a user decision.

While documentation-only authorization is active, deliver design rules, component/state specifications, or explicitly requested design assets—not application components or scaffolds. Verify actual contrast and source-rule alignment; avoid claiming screenshot or runtime verification when only documents were reviewed.

