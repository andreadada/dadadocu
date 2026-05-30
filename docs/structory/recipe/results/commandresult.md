---
sidebar_position: 4
title: Command Result - Premium
---

# Command Result

The command result runs commands after a recipe is crafted.

Aliases:

```text
command, commands, cmd
```

This is a premium result.

## Console command example

```yaml
result:
  reward:
    type: commands
    commands:
      - "eco give %player% 100"
      - "tell %player% You received 100 coins."
```

## Player command example

Prefix a command with `p:` to make the player run it.

```yaml
result:
  player_command:
    type: command
    commands:
      - "p:spawn"
```

## Fields

| Field | Type | Description |
|---|---|---|
| `commands` | List | Commands to execute. |

## Placeholders

| Placeholder | Meaning |
|---|---|
| `%player%` | Player name. |
| `%playeruuid%` | Player UUID. |
| `%structure%` | Structure key. |
| `%instanceuuid%` | Structure instance UUID. |
| `%world%` | World name. |
| `%center_x%` | Structure center X coordinate. |
| `%center_y%` | Structure center Y coordinate. |
| `%center_z%` | Structure center Z coordinate. |

## Safety note

Commands can affect your server economy, permissions, inventories, and world state. Test them on a test server before using them in production.
