---
sidebar_position: 1
title: Goals
---

# Goals

Goal files live here:

```text
plugins/DadaProgressions/goals/
```

DadaProgressions loads every `.yml` and `.yaml` file in that folder. Split goals however you like: by period, event, season, server mode, or admin preference.

Each file can either use a top-level `goals:` section or put goal IDs directly at the top level. The bundled examples use `goals:`.

## Basic goal

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
        - "<gray>Your progress: <white>%player_progress%</white>/<white>%target%</white>"
    tiers:
      50:
        name: "<yellow>Hunter's Focus"
        reward-commands:
          - "say %player% reached 50% of %goal_name%!"
      100:
        name: "<gold>Hunter Reward"
        reward-commands:
          - "say %player% completed %goal_name%!"
```

`player_daily_hunter` is the goal ID. Use stable IDs, because progress and claims are stored by goal ID.

## Fields

| Field | Notes |
|---|---|
| `enabled` | Set to `false` to keep the goal in the file without loading it as active. |
| `scope` | `PLAYER` stores progress per player. `COMMUNITY` stores one shared value. |
| `period` | `DAILY`, `WEEKLY`, `MONTHLY`, or `PERMANENT`. |
| `type` | The event or trigger that adds progress. |
| `target` | Required progress amount. Minimum is `1`. |
| `display` | GUI name, material, and lore. |
| `tiers` | Claimable milestone rewards. |
| `claim-mode` | `MANUAL` by default. `AUTO` claims unlocked rewards on completion for the acting player. |
| `notifications` | Optional overrides for this one goal. |
| `cooldown` | Optional limit on how often progress can be earned. |

## Player and community goals

Use `PLAYER` when every player should have their own progress:

```yaml
scope: PLAYER
```

Use `COMMUNITY` when the server shares one target:

```yaml
scope: COMMUNITY
```

Community goals still track individual contributions, so leaderboards and `%contribution%` can show who helped.

## Periods

| Period | Notes |
|---|---|
| `DAILY` | Current daily period. |
| `WEEKLY` | Current weekly period. |
| `MONTHLY` | Current monthly period. |
| `PERMANENT` | No automatic period reset. |

The timezone comes from `settings.timezone` in `config.yml`, unless the goal overrides it.

## Goal types

Automatically tracked types:

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
- `DEATH`
- `LOGIN`
- `DAMAGE_DEALT`
- `DAMAGE_TAKEN`

Manual or integration-oriented types:

- `ANIMAL_BREED`
- `VOTE`
- `CUSTOM`

For manual types, add progress with `/dp admin trigger` or through the API.

## Reward tiers

Tier keys are percentages. `50` and `50%` both work.

```yaml
tiers:
  25:
    name: "<green>Starter"
    reward-commands:
      - "eco give %player% 100"
  50:
    name: "<yellow>Halfway"
    reward-commands:
      - "crate key give %player% common 1"
  100:
    name: "<gold>Complete"
    reward-commands:
      - "lp user %player% permission set server.goal.complete true"
```

Reward commands run from console. Do not include `/` at the start.

## Community example

```yaml
goals:
  community_daily_mining:
    enabled: true
    scope: COMMUNITY
    period: DAILY
    type: BLOCK_BREAK
    target: 500
    display:
      name: "<aqua>Community Daily Mining"
      material: "DIAMOND_PICKAXE"
      lore:
        - "<gray>Mine blocks together today."
        - "<gray>Progress: <white>%progress%</white>/<white>%target%</white>"
        - "<gray>Your contribution: <white>%contribution%</white>"
    tiers:
      50:
        name: "<yellow>Halfway Reward"
        reward-commands:
          - "say %player% helped reach 50% of %goal_name%!"
      100:
        name: "<gold>Completion Reward"
        reward-commands:
          - "say %player% claimed %goal_name%!"
```

## Vote example

`VOTE` is not tracked automatically by Bukkit. Trigger it from your vote plugin.

```yaml
goals:
  player_daily_vote:
    enabled: true
    scope: PLAYER
    period: DAILY
    type: VOTE
    target: 1
    display:
      name: "<gold>Daily Vote"
      material: "PAPER"
      lore:
        - "<gray>Vote for the server today."
        - "<gray>Progress: <white>%player_progress%</white>/<white>%target%</white>"
    tiers:
      100:
        name: "<gold>Vote Reward"
        reward-commands:
          - "say %player% claimed the daily vote reward!"
```

Example reward command in a vote plugin:

```text
dp admin trigger player_daily_vote %player% 1
```
