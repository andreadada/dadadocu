---
slug: goal-engine-modular
title: DadaProgressions modular goal engine milestone
description: Historical milestone for modular filters, composite goals, prerequisites, notifications, and the visual editor.
---

# DadaProgressions modular goal engine milestone

This historical milestone introduced the modular goal-engine foundations used by the later beta-26.x releases.

## Goal model

- Added modular filters and ordered point multipliers.
- Added nested `AND`/`OR` goals with independent criterion progress.
- Added automatic modern/legacy `ANIMAL_BREED` tracking.
- Added `CURRENT`/`EVER` prerequisite chains and cycle validation.
- Added criterion storage, placeholders, admin targeting, and GUI detail views.

## Notifications

- Added compacted FIFO notification queues for chat, actionbar, title, and bossbar channels.
- Added global, event, and per-goal notification overrides.
- Added chat batching for multiple goal updates.
- Added sliding notification debounce with idle, maximum-wait, and large-increment flush conditions.

## Administration and editor

- Added a visual admin goal editor for enabled state, scope, period, criterion targets, root `AND`/`OR` operator, and safe duplication.
- Added hierarchical CRUD for goals, composite criteria, and modular filters.
- Added private chat input for display names, exact targets, and include/exclude values.
- Added guided compatible-filter selection and safe goal/criterion deletion.
- Added GUI-first numeric keypads and paginated multi-select values.
- Added a paginated prerequisite goal selector with ALL/ANY mode and safe removal.

## Validation and distribution

- Added non-destructive goal validation and transactional reload.
- Added automatic file rollback for rejected GUI edits.
- Added checks for malformed YAML, invalid goal IDs, and duplicate IDs before runtime commit.
- Added distribution checks that fail the build when required shaded DadaGUI runtime classes are missing.

## Defaults

New default community goals and clearer goal-list objective lore were added as part of the same milestone.
