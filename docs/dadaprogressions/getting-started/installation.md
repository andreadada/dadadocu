---
sidebar_position: 1
title: Installation and Updates
---

# Installation and updates

## Requirements

You need:

- a Bukkit, Spigot, Paper, or compatible Minecraft server;
- a Java runtime supported by your Minecraft server version;
- the shaded `DadaProgressions` release jar;
- access to the server `plugins/` directory.

The DadaProgressions jar itself is built as Java 8 bytecode for broad compatibility. Modern Minecraft server versions may require a newer Java runtime independently of the plugin.

PlaceholderAPI is optional. Install it only if another plugin needs DadaProgressions values in scoreboards, tab lists, holograms, menus, or similar displays.

## Fresh installation

1. Stop the server completely.
2. Put `DadaProgressions-beta-26.5.jar` in `plugins/`.
3. Start the server once.
4. Confirm that `plugins/DadaProgressions/` is created.
5. Check the console for configuration or compatibility errors.
6. Stop the server before making the initial YAML edits.
7. Configure goals and replace example reward commands.
8. Start the server and run `/dp admin validate`.
9. Open `/dp` as a normal player and test at least one complete claim flow.

The first startup creates the main configuration, GUI configuration, default goal files, and storage directories.

## Files created by the plugin

```text
plugins/DadaProgressions/
  config.yml
  guis.yml
  goals/
    daily.yml
    weekly.yml
    monthly.yml
    lifetime.yml
  data/
  backups/
```

| Path | Purpose |
|---|---|
| `config.yml` | Global settings, storage options, command aliases, messages, notifications. |
| `guis.yml` | GUI layouts, materials, names, lore, and navigation. |
| `goals/` | All goal definitions. Every `.yml` and `.yaml` file is loaded. |
| `data/` | Runtime progress, claims, contribution data, metadata, and leaderboard indexes. |
| `backups/` | Manual and migration backups. |

You can split goals into as many files as you want, for example `events.yml`, `community.yml`, or `season-1.yml`.

## Updating an existing beta server

For a live server, use a full stop rather than Bukkit `/reload`.

1. Run `/dp admin backup` while the old version is still active.
2. Stop the server.
3. Make a second filesystem copy of `plugins/DadaProgressions/` if the server is important.
4. Keep the previous plugin jar somewhere outside `plugins/` for rollback.
5. Replace the old jar with the new shaded release jar.
6. Start the server.
7. Run `/dp admin validate`.
8. Check `/dp admin list` and `/dp admin info <goalId>` for representative goals.
9. Test a PLAYER goal, a COMMUNITY goal, a leaderboard, and one reward claim.
10. Restart once more if you want to verify persistence before opening the server to everyone.

:::warning Do not install module jars
Use the final distribution jar named `DadaProgressions-beta-<version>.jar`. Do not put the API, Bukkit module, legacy adapter, or modern adapter jars in your server `plugins/` folder.
:::

## Updating from the old DadaAchievements name

Older beta builds used:

```text
plugins/DadaAchievements/
```

If `plugins/DadaProgressions/` is missing or empty, DadaProgressions can copy the old folder on startup. The old folder is not deleted.

If the new folder already contains files, the plugin deliberately does not overwrite it. In that case, migrate manually after taking a backup.

## Rollback strategy

If the updated plugin fails during beta testing:

1. Stop the server.
2. Restore the previous jar.
3. Restore the pre-update `DadaProgressions` folder if storage was modified and you need a full rollback.
4. Start the server and validate again.

Do not copy individual live data files back while the server is running.
