---
sidebar_position: 1
title: Commands and Permissions
---

# Commands and permissions

Main command:

```text
/dp
```

Legacy command alias:

```text
/dadaprogression
```

The default GUI-only alias is `/achievements`. Additional one-word aliases can be configured under `commands.gui-open-aliases` in `config.yml`.

## Player commands

| Command | Purpose |
|---|---|
| `/dp` | Opens the main GUI. |
| `/dp gui` | Opens the main GUI. |
| `/dp quests` | Opens daily goals. |
| `/dp achievements` | Opens lifetime goals. |
| `/dp claim <goalId> [tierPercent]` | Claims all available tiers for one goal or one selected tier. |
| `/dp claimall` | Claims every currently available reward tier. |
| `/dp progress [goalId]` | Shows progress for one goal or all goals. |
| `/dp top <goalId> [page]` | Shows a text leaderboard. |
| `/dp lb <goalId> [page]` | Alias for `/dp top`. |
| `/dp leaderboard <goalId> [page]` | Alias for `/dp top`. |

## Admin inspection and configuration

| Command | Purpose |
|---|---|
| `/dp admin list` | Lists loaded goals. |
| `/dp admin info <goalId>` | Shows scope, period, criteria, filters, point rules, prerequisites, and tiers. |
| `/dp admin debug <goalId> <onlinePlayer> [timeoutSeconds]` | Explains the next relevant event for a goal. |
| `/dp admin debug cancel <onlinePlayer>` | Cancels an armed debug session. |
| `/dp admin editor` | Opens the in-game goal editor. |
| `/dp admin reload` | Transactionally reloads configuration, goals, GUI, and storage state. |
| `/dp admin validate` | Validates goal configuration and storage health. |

## Admin storage and recovery

| Command | Purpose |
|---|---|
| `/dp admin backup` | Creates a manual data backup. |
| `/dp admin repair` | Recreates missing directories and rebuilds derived indexes. |
| `/dp admin rebuildindexes` | Rebuilds player-goal leaderboard indexes from source data. |
| `/dp admin resolveclaim <goalId> <player> <tierPercent> <markclaimed\|retry>` | Resolves a crash-safe pending reward claim. |

## Admin progress controls

| Command | Purpose |
|---|---|
| `/dp admin addprogress <goalId> <amount>` | Adds progress to a community goal. |
| `/dp admin addprogress <goalId> <player> <amount>` | Adds player progress or records a player's community contribution. |
| `/dp admin setprogress <goalId> <amount>` | Sets community progress. |
| `/dp admin setprogress <goalId> <player> <amount>` | Sets player progress. |
| `/dp admin trigger <goalId> <player> <amount>` | Sends integration/manual progress to a goal. |
| `/dp admin reset <goalId>` | Resets one goal. |
| `/dp admin resetperiod <daily\|weekly\|monthly>` | Resets the current period for matching goals. |
| `/dp admin resetplayer <player> <goalId>` | Resets one player's progress, claims, pending claim state, and contribution for that goal. |
| `/dp admin resetclaims <goalId> [player]` | Resets tier claim state. |
| `/dp admin resetcontributions <goalId> [player]` | Resets contribution data. |

:::warning Reset commands are destructive
Create a backup before using reset commands on a production server. Use `resolveclaim` rather than a broad claim reset when recovering one failed reward claim.
:::

## Permissions

| Permission | Default | Purpose |
|---|---|---|
| `DadaProgressions.use` | `true` | Normal player commands and GUI. |
| `DadaProgressions.admin` | `op` | Administrative commands and editor. |
| `dadaachievements.use` | `true` | Legacy permission alias. |
| `dadaachievements.admin` | `op` | Legacy admin permission alias. |

## GUI command aliases

```yaml
commands:
  gui-open-aliases:
    - "achievements"
    - "progress"
```

Aliases are player-only GUI openers. Keep them to one command word and avoid names already owned by another plugin.
