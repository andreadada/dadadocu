---
sidebar_position: 10
title: Placeholders
---

# Placeholders

Structory supports placeholders in several messages and command lines.

## Available placeholders

| Placeholder | Description |
|---|---|
| `%player%` | Player name. |
| `%playeruuid%` | Player UUID. |
| `%structure%` | Structure key. |
| `%instanceuuid%` | Structure instance UUID. |
| `%center_x%` | Structure center X coordinate. |
| `%center_y%` | Structure center Y coordinate. |
| `%center_z%` | Structure center Z coordinate. |
| `%world%` | Structure world name. |

## Command example

```yaml
options:
  command:
    commands:
      - "tell %player% You created %structure% in %world%."
```

## Message result example

```yaml
result:
  message:
    type: message
    message: "<yellow>%player% crafted an item at %center_x% %center_y% %center_z%."
```

## Player command prefix

For command lines, prefix with `p:` to run the command as the player.

```yaml
commands:
  - "p:spawn"
```

Without `p:`, the command runs from console.
