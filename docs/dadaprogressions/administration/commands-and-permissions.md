---
sidebar_position: 1
title: Commands and Permissions
---

# Commands and Permissions

Main command:

```text
/dp
```

Alias:

```text
/dadaprogression
```

`/achievements` opens the GUI by default. You can change GUI-only aliases in `config.yml`.

## Player commands

| Command | Notes |
|---|---|
| `/dp` | Opens the main GUI. |
| `/dp gui` | Same as `/dp`. |
| `/dp quests` | Opens daily goals. |
| `/dp achievements` | Opens lifetime goals. |
| `/dp claim <goalId> [tierPercent]` | Claims all unlocked tiers for a goal, or one selected tier. |
| `/dp claimall` | Claims all available tiers across all goals. |
| `/dp progress [goalId]` | Shows progress for one goal, or all goals. |
| `/dp top <goalId> [page]` | Shows the text leaderboard. |
| `/dp lb <goalId> [page]` | Alias for `/dp top`. |
| `/dp leaderboard <goalId> [page]` | Alias for `/dp top`. |

## GUI aliases

```yaml
commands:
  gui-open-aliases:
    - "achievements"
    - "quests"
```

Aliases must be one word commands. Do not include spaces.

## Admin commands

| Command | Notes |
|---|---|
| `/dp admin list` | Lists loaded goals. |
| `/dp admin info <goalId>` | Shows target, scope, period, type, and tiers. |
| `/dp admin reload` | Reloads config, GUI, goals, and storage state. |
| `/dp admin validate` | Checks storage health. |
| `/dp admin backup` | Creates a manual data backup. |
| `/dp admin repair` | Recreates missing directories and rebuilds derived indexes. |
| `/dp admin rebuildindexes` | Rebuilds player-goal leaderboard indexes. |
| `/dp admin addprogress <goalId> <amount>` | Adds progress to a community goal. |
| `/dp admin addprogress <goalId> <player> <amount>` | Adds player progress, or records a player contribution on a community goal. |
| `/dp admin setprogress <goalId> <amount>` | Sets community progress. |
| `/dp admin setprogress <goalId> <player> <amount>` | Sets player progress. |
| `/dp admin trigger <goalId> <player> <amount>` | Adds progress from an external trigger. |
| `/dp admin reset <goalId>` | Resets one goal. |
| `/dp admin resetperiod <daily\|weekly\|monthly>` | Resets the current period for matching goals. |
| `/dp admin resetplayer <player> <goalId>` | Resets one player's progress and claims. |
| `/dp admin resetclaims <goalId> [player]` | Resets tier claims. |
| `/dp admin resetcontributions <goalId> [player]` | Resets contribution data. |

## Permissions

| Permission | Default | Notes |
|---|---|---|
| `DadaProgressions.use` | `true` | Normal player usage. |
| `DadaProgressions.admin` | `op` | Admin commands. |
| `dadaachievements.use` | `true` | Legacy alias. |
| `dadaachievements.admin` | `op` | Legacy alias. |

## Examples

Claim rewards for one goal:

```text
/dp claim community_daily_mining
```

Claim a specific tier:

```text
/dp claim community_daily_mining 50
```

Trigger a vote goal:

```text
dp admin trigger player_daily_vote %player% 1
```

Add progress manually:

```text
/dp admin addprogress community_daily_mining 250
/dp admin addprogress player_daily_hunter Steve 5
```
