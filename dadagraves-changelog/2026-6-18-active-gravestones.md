---
slug: release_1.7.0
title: Release 1.7.0 - PREMIUM
authors: [mrbast]
tags: [dadagraves]
---

This update adds a player-facing Active Gravestones menu and new controls for limiting how many graves a player can keep.

<!-- truncate -->

### Active Gravestones GUI

- Added `/graves history`.
- Added a personal GUI button that opens the active gravestones menu.
- The menu shows each active grave with useful information such as location, creation time, decay time, lock time, and stored items.

### History actions

- Added `gravestone.cmd.history` for opening the history menu.
- Added `gravestone.history.open-distance` for opening a grave from the history menu.
- Added `gravestone.history.teleport` for shift left-click teleport from the history menu.
- History item lore now only shows actions the player is allowed to use.

### Grave limits

- Added `max-graves` to permission groups.
- Added `max-graves-action`.
- `DROP` removes the oldest grave and drops its contents.
- `DELETE` removes the oldest grave together with its contents.

### Compatibility

- Updated internal platform and text-formatting libraries for the current release line.
