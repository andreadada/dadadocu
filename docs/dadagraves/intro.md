---
sidebar_position: 1
title: DadaGraves
---

# DadaGraves

DadaGraves adds custom gravestones to your Minecraft server. When a player dies, the plugin can create a gravestone at the death location, store the player inventory and experience, and show a small hologram above the grave.

Players can open their grave to recover items, choose their preferred grave decoration, and use the graveyard system if the server owner enables it.

![DadaGraves preview](https://i.imgur.com/B0zM9vi.png)

## Main features

- Creates a gravestone when a player dies.
- Stores the player inventory and experience.
- Supports lock timers, so graves can stay private for a configured time.
- Supports expiry timers, so graves can disappear automatically.
- Shows a configurable hologram above the grave.
- Removes the hologram when the grave is removed.
- Lets players choose a decoration from a GUI.
- Lets players open an Active Gravestones GUI to see their current graves.
- Supports custom decorations made from display blocks, player heads, held items, and text.
- Includes fallback behavior for servers where modern display entities are not available.
- Supports per-group limits for how many active graves a player can keep.
- Optional graveyard system: players can respawn at a configured graveyard after death.
- Optional Vault support for paid grave opening.

## Basic player flow

1. A player dies.
2. If the player has permission and has items or experience to store, a grave is created.
3. The grave stores the dropped items and experience.
4. A hologram appears above the grave.
5. The player can go back to the grave and open it, or use the history menu if the server allows remote access.
6. If the player has too many active graves, the oldest one is handled according to the configured limit action.
7. When the grave is emptied, expires, or is removed, the grave and its hologram are cleaned up.

## Server compatibility

DadaGraves is built to keep wide server compatibility where possible. Modern decoration features use display entities when the server supports them. If the server does not support those entities, the plugin uses safer fallback visuals instead of stopping the grave from working.

Some visual features depend on newer Minecraft server APIs. On older servers, the grave can still work, but some modern decorations may not appear exactly the same.

## First setup

1. Put the plugin `.jar` file in your server `plugins` folder.
2. Start the server once.
3. Stop the server.
4. Edit the generated files in the plugin folder.
5. Start the server again.

Important files:

- `config.yml`: timers, locks, hologram text, platform rules, and graveyard location.
- `guis.yml`: all player menus.
- `messages.yml`: command messages and plugin messages.
- `decorations/`: available grave decorations.
- `blockdisplay/`: model files used by display-block decorations.

## Useful pages

- [Commands and permissions](./commands.md)
- [config.yml](./configs/configuration.md)
- [guis.yml](./configs/guis.md)
- [messages.yml](./configs/messages.md)
- [Decorations](./decorations.md)

## Support

For questions or issues, join the Discord server:

https://discord.gg/KBNDByfjuC
