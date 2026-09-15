---
sidebar_position: 2
title: Goals
---

# Goals

Goal files live in:

```text
plugins/DadaProgressions/goals/
```

Every `.yml` and `.yaml` file in that directory is loaded. You may organize goals by period, event, game mode, or any other structure that makes maintenance easier.

## Minimal simple goal

```yaml
goals:
  player_daily_hunter:
    enabled: true
    scope: PLAYER
    period: DAILY
    type: MOB_KILL
    target: 30
    display:
      name: "<green>Daily Hunter"
      material: "IRON_SWORD"
      lore:
        - "<gray>Defeat 30 mobs today."
    tiers:
      100:
        name: "<gold>Hunter Reward"
        reward-commands:
          - "say %player% completed %goal_name%!"
```

The top-level `goals:` wrapper is optional. A file may also contain goal IDs directly at the root.

## Goal IDs

IDs are used in storage, commands, placeholders, prerequisites, and APIs.

Valid IDs are 1-64 characters and may contain:

- letters;
- numbers;
- `_`;
- `-`.

Avoid renaming a goal after players have earned progress unless you intentionally want a new storage identity.

## Core fields

| Field | Meaning |
|---|---|
| `enabled` | Enables or disables the goal. Default: `true`. |
| `scope` | `PLAYER` or `COMMUNITY`. |
| `period` | `DAILY`, `WEEKLY`, `MONTHLY`, or `PERMANENT`. |
| `type` | Event type for a simple goal. |
| `target` | Positive target for a simple goal. |
| `display` | Name, material, and lore used by the GUI. |
| `claim-mode` | `MANUAL` or `AUTO`. Default: `MANUAL`. |
| `tiers` | Milestone reward definitions. |
| `filters` | Optional event filters applied before progress. |
| `filter-mode` | `ALL` or `ANY` for the goal-level filter group. |
| `points` | Optional point calculation rules. |
| `cooldown` | Optional progress acquisition cooldown. |
| `prerequisites` | Optional dependency chain. |
| `notifications` | Optional per-goal notification overrides. |
| `reset-settings.timezone` | Optional timezone override for this goal. |

## PLAYER and COMMUNITY scope

A PLAYER goal keeps independent progress for every player:

```yaml
scope: PLAYER
```

A COMMUNITY goal has one server-wide progress value:

```yaml
scope: COMMUNITY
```

Community goals still record each player's contribution. This allows contribution leaderboards even though the target itself is shared.

## Periods

```yaml
period: DAILY
```

Supported values:

- `DAILY`
- `WEEKLY`
- `MONTHLY`
- `PERMANENT`

Daily, weekly, and monthly period keys are calculated from the configured timezone. Permanent goals do not roll into a new period automatically.

For a per-goal timezone override:

```yaml
reset-settings:
  timezone: "Europe/Rome"
```

## Goal types

Automatically tracked event types are:

- `BLOCK_BREAK`
- `BLOCK_PLACE`
- `MOB_KILL`
- `PLAYER_KILL`
- `FISH_CAUGHT`
- `ITEM_CRAFT`
- `PLAYTIME_MINUTES`
- `COMMAND_RUN`
- `ITEM_PICKUP`
- `ITEM_DROP`
- `ITEM_ENCHANT`
- `ITEM_SMELT`
- `ANIMAL_BREED`
- `DEATH`
- `LOGIN`
- `DAMAGE_DEALT`
- `DAMAGE_TAKEN`

`ANIMAL_BREED` is tracked automatically. Modern servers use native breeder information; old versions can use the configured legacy attribution logic.

Integration-oriented types are:

- `VOTE`
- `CUSTOM`

Those are normally advanced by another plugin through `/dp admin trigger` or the Bukkit API.

## Composite goals

Composite goals replace the simple `type` and `target` with a nested `criteria` tree.

Example:

```yaml
goals:
  weekly_adventurer:
    scope: PLAYER
    period: WEEKLY
    display:
      name: "<aqua>Weekly Adventurer"
      material: "COMPASS"
    criteria:
      operator: AND
      children:
        mining:
          type: BLOCK_BREAK
          target: 500
          weight: 1.0
        hunting:
          type: MOB_KILL
          target: 50
          weight: 1.0
    tiers:
      100:
        name: "<gold>Adventurer Reward"
        reward-commands:
          - "say %player% finished the weekly adventurer goal!"
```

Composite groups support `AND` and `OR`. Groups can be nested up to the supported validation depth, and a goal can contain multiple event criteria.

Each event criterion can have its own:

- `type`;
- `target`;
- `weight`;
- `filters` and `filter-mode`;
- `points`;
- `cooldown`.

For direct integration progress on one leaf, use `addCriterionProgress` from the Bukkit API.

## Prerequisites

Goals can be locked behind other goals.

```yaml
prerequisites:
  mode: ALL
  requirements:
    first_steps:
      state: COMPLETED
      history: EVER
    mining_adept:
      state: TIER_CLAIMED
      history: EVER
      tier: 100
```

`mode` can be `ALL` or `ANY`.

A prerequisite may check completion or a claimed tier. Dependency cycles and missing goals/tiers are rejected by validation.

## Community example

```yaml
goals:
  community_daily_mining:
    enabled: true
    scope: COMMUNITY
    period: DAILY
    type: BLOCK_BREAK
    target: 5000
    display:
      name: "<aqua>Community Mining"
      material: "DIAMOND_PICKAXE"
      lore:
        - "<gray>Mine together before the daily reset."
        - "<gray>Progress: <white>%progress%</white>/<white>%target%</white>"
        - "<gray>Your contribution: <white>%contribution%</white>"
    tiers:
      50:
        name: "<yellow>Halfway"
        reward-commands:
          - "say %player% claimed the halfway reward!"
      100:
        name: "<gold>Completed"
        reward-commands:
          - "say %player% claimed the completion reward!"
```

## Vote integration example

```yaml
goals:
  player_daily_vote:
    scope: PLAYER
    period: DAILY
    type: VOTE
    target: 1
    display:
      name: "<gold>Daily Vote"
      material: "PAPER"
    tiers:
      100:
        reward-commands:
          - "say Thanks for voting, %player%!"
```

Then configure your vote plugin to run:

```text
dp admin trigger player_daily_vote %player% 1
```

Continue with [Filters and point rules](filters-and-points.md) and [Rewards and claims](rewards-and-claims.md) for advanced behaviour.
