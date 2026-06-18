---
sidebar_position: 2
title: Commands and Permissions
---

# Commands and permissions

This page lists the commands available to players and administrators.

## Player commands

### Open the decoration menu

```text
/graves
```

Also works with:

```text
/graves decoration
/graves decorations
/graves menu
```

This opens the menu where a player can see or change their selected grave decoration.

### Show command help

```text
/graves help
```

Shows the main command help message. You can edit the text in `messages.yml`.

### Open active gravestones

```text
/graves history
```

Also works with:

```text
/graves list
/graves graves
```

This opens the Active Gravestones GUI for the player.

The history GUI shows the player's current graves, including location, creation time, remaining decay time, lock time, and stored item count.

Depending on permissions, the same menu can also let staff or trusted players open a grave from a distance or teleport to it.

### Teleport to the graveyard

```text
/graves graveyard tp
```

Teleports the player to the configured graveyard.

If no graveyard is set, the plugin sends the `graveyard.graveyard_not_set` message and does not teleport the player.

## Admin commands

### Set the graveyard at your current location

```text
/graves graveyard set
```

This saves your current world, position, yaw, and pitch as the server graveyard.

After this command is used, the graveyard is enabled in `config.yml`.

### Set the graveyard with coordinates

Use the current player's world:

```text
/graves graveyard set <x> <y> <z>
/graves graveyard set <x> <y> <z> <yaw> <pitch>
```

Use a specific world:

```text
/graves graveyard set <world> <x> <y> <z>
/graves graveyard set <world> <x> <y> <z> <yaw> <pitch>
```

Examples:

```text
/graves graveyard set
/graves graveyard set world 100 65 -40
/graves graveyard set world 100 65 -40 180 0
```

### Teleport to a player's grave

```text
/gravesadmin teleport <player> [index]
```

This teleports the target player to one of their graves.

- `index` is optional.
- `0` means the newest grave.
- `1` means the previous grave, and so on.

Example:

```text
/gravesadmin teleport Steve 0
```

## Tab completion

The `/graves` command includes tab completion for:

- `decoration`
- `history`
- `graveyard`
- `help`
- `set`
- `tp`
- world names
- suggested coordinates based on the player's current location

The admin teleport command suggests online player names.

## Permissions

| Permission | Default | Description |
| --- | --- | --- |
| `gravestone.use` | Everyone | Allows a player to create and use graves. |
| `dadagraves.use` | Everyone | Legacy alias kept for old permission setups. |
| `gravestone.cmd.history` | Everyone | Allows a player to open their Active Gravestones GUI. |
| `gravestone.history.open-distance` | Operators | Allows opening a grave from the history GUI without standing at the grave. |
| `gravestone.history.teleport` | Operators | Allows shift left-click teleport from the history GUI. |
| `gravestone.cmd.graveyard.set` | Operators | Allows setting the graveyard. |
| `gravestone.cmd.graveyard.tp` | Everyone | Allows teleporting to the graveyard. |
| `gravestone.cmd.admin.use` | Operators | Allows use of `/gravesadmin`. |
| `gravestone.cmd.admin.teleport.use` | Operators | Allows use of `/gravesadmin teleport`. |
| `gravestone.decorate.*` | Operators | Can be used as a broad decoration permission. |

Decorations can also define their own permission inside the decoration file. See the [Decorations](./decorations.md) page for details.
