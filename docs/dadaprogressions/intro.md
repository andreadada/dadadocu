---
sidebar_position: 1
title: DadaProgressions
slug: /dadaprogressions/intro
---

# DadaProgressions

DadaProgressions is a progression and reward system for Bukkit-compatible Minecraft servers. It lets server owners build personal achievements, recurring quests, community objectives, milestone rewards, prerequisite chains, and leaderboards without writing a custom plugin for each event.

The plugin is designed around two kinds of progress:

- **PLAYER** goals keep a separate value for every player.
- **COMMUNITY** goals use one shared server value while still recording each player's contribution for leaderboards.

Goals can reset daily, weekly, or monthly, or remain permanent. A goal can be simple, such as breaking 500 blocks, or composite, such as completing several independent criteria joined with `AND` or `OR`.

## What players see

Players normally interact with DadaProgressions through `/dp` or a configured GUI alias such as `/achievements`. From the GUI they can:

- browse daily, weekly, monthly, lifetime, community, and personal goals;
- inspect progress and reward tiers;
- claim unlocked rewards;
- view leaderboards;
- see whether a goal is locked by prerequisites.

## What server owners configure

Most server configuration lives in three places:

```text
plugins/DadaProgressions/
  config.yml
  guis.yml
  goals/
```

- `config.yml` controls global settings, storage behaviour, command aliases, messages, and notification defaults.
- `guis.yml` controls menu layouts and visual items.
- `goals/*.yml` defines the actual progression system.

Runtime progress is stored separately under `data/`. You should not edit those files while the server is running.

## Recommended reading order

If you are installing the plugin for the first time:

1. [Installation and updates](getting-started/installation.md)
2. [First setup and production checklist](getting-started/server-admin-workflow.md)
3. [Configuration overview](configuration/overview.md)
4. [Goals](configuration/goals.md)
5. [Rewards and claims](configuration/rewards-and-claims.md)
6. [Commands and permissions](administration/commands-and-permissions.md)

For more advanced setups:

- [Filters and point rules](configuration/filters-and-points.md)
- [Cooldowns and periods](configuration/cooldowns-and-periods.md)
- [Notifications](configuration/notifications.md)
- [GUI configuration](configuration/gui.md)
- [PlaceholderAPI](configuration/placeholders.md)
- [Validation and in-game editor](administration/validation-and-editor.md)
- [Storage, backups, and migration](administration/storage-backups-and-migration.md)
- [Troubleshooting](administration/troubleshooting.md)

Developers integrating another plugin should use the [Bukkit API guide](developers/api-dev.md).

## Compatibility

The distributed jar is verified as Java 8 bytecode. DadaProgressions targets Bukkit, Spigot, Paper, and compatible servers from old Minecraft versions through modern releases.

PlaceholderAPI is optional. DadaProgressions also keeps legacy `dadaachievements` permissions and PlaceholderAPI identifiers for older beta configurations.

:::note Beta status
DadaProgressions is already suitable for production beta use, but the current beta still uses YAML storage and large multi-server/network deployments are not the primary target. Keep backups before updates and validate configuration changes before exposing them to players.
:::
