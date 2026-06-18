---
sidebar_position: 6
title: Changelog
---

# Changelog

This page summarizes the latest user-facing changes in DadaGraves.

## Latest update

### Active gravestones GUI

Players can now open a history menu with:

```text
/graves history
```

The menu shows their active graves with location, creation time, remaining decay time, lock time, and stored item count.

The personal GUI can also include an Active Gravestones button, so players do not need to remember the command.

### History permissions

New permissions control what players can do from the history GUI:

| Permission | Purpose |
| --- | --- |
| `gravestone.cmd.history` | Opens the Active Gravestones GUI. |
| `gravestone.history.open-distance` | Allows opening a grave from the history GUI. |
| `gravestone.history.teleport` | Allows shift left-click teleport to a grave from the history GUI. |

The history item lore only shows actions the player can actually use. For example, `Click to open` appears only with the remote-open permission.

### Active grave limits

Permission groups can now limit how many active graves a player may keep:

```yaml
max-graves: 3
max-graves-action: DROP
```

`DROP` drops the oldest grave contents and removes that grave. `DELETE` removes the oldest grave together with its contents.

### Compatibility update

The internal platform and text formatting libraries were updated for the current release line.

### Graveyard system

DadaGraves can now use a server graveyard. When it is enabled, players respawn at the graveyard after a normal death respawn.

If the graveyard is not set, DadaGraves does not change the player's normal respawn location.

Useful commands:

```text
/graves graveyard set
/graves graveyard set <world> <x> <y> <z> [yaw] [pitch]
/graves graveyard tp
```

### Improved commands

The `/graves` command now supports clearer subcommands and tab completion.

Players can use:

```text
/graves
/graves help
/graves graveyard tp
```

Admins can use:

```text
/graves graveyard set
```

### Configurable messages

Command messages and graveyard messages can be changed from `messages.yml`.

This makes it easier to translate the plugin or adapt the text to your server style.

### Hologram cleanup

When a grave is removed, its hologram should be removed as well.

The cleanup is designed to handle normal grave removal, grave expiration, and cases where a grave is deleted after being emptied.

### Wider compatibility

DadaGraves keeps compatibility-focused behavior where possible. Modern visual features are used when the server supports them. If they are not available, the plugin uses safer fallback visuals instead of stopping the grave from working.

## Notes for server owners

After updating, restart the server and let the plugin update or regenerate its files.

Check these files after the first start:

- `config.yml`
- `messages.yml`
- `guis.yml`
- `decorations/`

If you already customized these files, compare them with the new defaults before replacing them.
