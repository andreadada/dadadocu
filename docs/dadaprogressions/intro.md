---
sidebar_position: 1
title: DadaProgressions
---

# DadaProgressions

DadaProgressions adds a progression layer to a Minecraft server: goals that players can see, push forward, complete, and claim rewards from.

It works well for daily quests, weekly objectives, community targets, seasonal events, vote rewards, playtime milestones, and long-term achievements. The idea is simple: give players a clear reason to keep playing, and give staff enough control to tune the goals without writing code.

Progress can be personal, where every player has their own value, or community-based, where the whole server contributes to the same target. Players can use the GUI to browse goals, check tiers, claim rewards, and view leaderboards.

## Good fits

DadaProgressions is usually a good fit when you want:

- daily or weekly tasks;
- server-wide mining, building, combat, fishing, or crafting events;
- milestone rewards before the final target;
- simple leaderboard competition;
- vote or custom-plugin progress;
- PlaceholderAPI values for scoreboards and other displays;
- a YAML-driven setup that staff can edit.

It is not trying to be a full scripting engine. For custom events from other plugins, use `/dp admin trigger` or the API.

## Where to start

New setup:

- [Installation](getting-started/installation.md)
- [Server Admin Workflow](getting-started/server-admin-workflow.md)

Configuration:

- [Goals](configuration/goals.md)
- [GUI Configuration](configuration/gui.md)
- [Notifications and Cooldowns](configuration/notifications-and-cooldowns.md)
- [PlaceholderAPI](configuration/placeholders.md)

Server management:

- [Commands and Permissions](administration/commands-and-permissions.md)
- [Storage, Backups, and Migration](administration/storage-backups-and-migration.md)
- [Troubleshooting](administration/troubleshooting.md)

Developer hooks:

- [API-DEV](developers/api-dev.md)

## Compatibility

DadaProgressions is built as Java 8 bytecode and is meant to load on old and modern Bukkit-compatible servers, from Minecraft 1.8 onward.

PlaceholderAPI is optional. If it is installed, DadaProgressions registers both the new `DadaProgressions` placeholders and the old `dadaachievements` aliases.
