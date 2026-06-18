---
sidebar_position: 1
title: Installation
---

# Installation

## Requirements

You need:

- a Bukkit, Spigot, Paper, or compatible server;
- Java 8 or newer;
- the DadaProgressions `.jar`;
- access to the server `plugins` folder.

PlaceholderAPI is optional. Install it only if you want to show DadaProgressions values in scoreboards, tab lists, holograms, or other plugins.

## Install

1. Stop the server.
2. Put `DadaProgressions-beta-26.0.jar` in `plugins/`.
3. Start the server once.
4. Check that `plugins/DadaProgressions/` was created.
5. Stop the server before editing the first files.
6. Replace the example reward commands before opening the plugin to players.
7. Start the server and run `/dp admin validate`.

The first startup creates the default config, GUI file, goal files, and data folder.

## Created files

```text
plugins/DadaProgressions/
  config.yml
  guis.yml
  goals/
  data/
  backups/
```

| Path | Notes |
|---|---|
| `config.yml` | Main settings, messages, aliases, and notification defaults. |
| `guis.yml` | GUI titles, layouts, buttons, materials, names, and lore. |
| `goals/` | Goal files. The plugin loads every `.yml` and `.yaml` file here. |
| `data/` | Player progress, community progress, metadata, and indexes. |
| `backups/` | Manual backups and migration backups. |

Default goal files include:

```text
goals/daily.yml
goals/weekly.yml
goals/monthly.yml
goals/lifetime.yml
```

You can add more files, for example `community.yml`, `events.yml`, or `season-1.yml`.

## Quick check

Run:

```text
/dp
```

If the main GUI opens, the plugin is loaded.

Then run:

```text
/dp admin validate
```

Fix validation errors before using the plugin on a live server.

## Updating

Before updating:

1. Stop the server.
2. Back up `plugins/DadaProgressions/`.
3. Replace the old jar.
4. Start the server.
5. Run `/dp admin validate`.
6. Test the GUI and at least one reward claim.

For public servers, keep a manual backup before every update. It is boring until the one time it saves you.
