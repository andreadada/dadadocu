---
sidebar_position: 1
title: Configuration Overview
---

# Configuration overview

DadaProgressions intentionally separates global behaviour, presentation, and actual progression rules.

## Which file should I edit?

| You want to change | File |
|---|---|
| Timezone, strict startup, command aliases, messages | `config.yml` |
| Storage save behaviour | `config.yml` |
| Global notification defaults | `config.yml` |
| Goal type, target, filters, points, cooldowns, rewards | `goals/*.yml` |
| One goal's notification overrides | that goal's YAML section |
| Menu layout, buttons, materials, names, lore | `guis.yml` |
| Player/community progress | do not edit manually; use admin commands or restore a backup |

## Important global settings

The current beta includes these settings:

```yaml
settings:
  allow-over-progress: true
  show-reward-command-preview: false
  strict-startup: true
  timezone: "UTC"
```

### `allow-over-progress`

When `true`, progress may exceed the nominal target. This also allows reward tiers above 100% for simple goals. Composite goals are limited to tiers at or below 100%.

### `show-reward-command-preview`

When `true`, reward command details may be shown in tier GUI lore. Keep this disabled on public servers if commands reveal internal permissions, economy commands, or plugin structure.

### `strict-startup`

Keep this `true` in production. If goal configuration is invalid, the plugin refuses to enable instead of silently running with only part of the goal set.

### `timezone`

Controls calendar boundaries used by daily, weekly, and monthly progression unless a goal overrides the reset timezone.

Use a valid Java timezone such as:

```yaml
timezone: "Europe/Rome"
```

Invalid timezone values are rejected rather than silently converted to another timezone.

## Storage settings

Beta 26.5 writes periodic YAML snapshots using a dedicated single-writer thread:

```yaml
storage:
  async-periodic-writes: true
  save-interval-ticks: 600
  writer-flush-timeout-seconds: 10
```

`600` ticks is 30 seconds. Explicit durability operations such as reward claims, backups, reloads, and shutdown still use a durability barrier before continuing.

For normal production use, keep asynchronous periodic writes enabled.

## Configuration lifecycle

A safe edit cycle is:

1. edit one or more YAML files;
2. run `/dp admin validate`;
3. use `/dp admin reload` if validation is clean;
4. test the changed goal;
5. restart the server before a major public release if you changed many files.

Goal reload is transactional: invalid goal files cannot replace the currently active valid registry.

## Formatting

DadaProgressions bundles its formatting dependencies. Most player-facing text accepts MiniMessage-style formatting when the bundled formatter is available, for example:

```text
<green>Completed</green>
<gold><bold>Reward unlocked</bold></gold>
```

Legacy `&` color codes and a limited fallback are also supported for compatibility with old Bukkit versions.
