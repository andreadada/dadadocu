---
sidebar_position: 5
title: Command Option - Premium
---

# Command Option

The `command` option runs commands when a structure is created.

This is a premium feature.

## Basic example

```yaml
options:
  command:
    commands:
      - "say %player% created %structure% at %center_x% %center_y% %center_z%"
```

By default, commands are executed from console.

## Run a command as the player

Prefix the command with `p:`.

```yaml
options:
  command:
    commands:
      - "p:spawn"
```

This makes the player perform `/spawn`.

## Available placeholders

| Placeholder | Meaning |
|---|---|
| `%player%` | Player name. |
| `%playeruuid%` | Player UUID. |
| `%structure%` | Structure key. |
| `%instanceuuid%` | Structure instance UUID. |
| `%center_x%` | Structure center X coordinate. |
| `%center_y%` | Structure center Y coordinate. |
| `%center_z%` | Structure center Z coordinate. |
| `%world%` | Structure world name. |

## Example: give a reward

```yaml
options:
  command:
    commands:
      - "eco give %player% 100"
      - "tell %player% You received 100 coins for creating %structure%."
```

## Example: broadcast a message

```yaml
options:
  command:
    commands:
      - "broadcast %player% has activated an ancient altar in %world%!"
```

## Safety notes

Commands are powerful. Do not use player input inside commands unless you trust the context. Test commands on a test server before using them in production.
