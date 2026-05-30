---
sidebar_position: 3
title: Message Result
---

# Message Result

The `message` result sends a message to the player after crafting finishes.

Aliases:

```text
message, msg
```

## Example

```yaml
result:
  message:
    type: message
    message: "<yellow>You crafted a special item."
```

## Fields

| Field | Type | Description |
|---|---|---|
| `message` | Text | Message sent to the player. Supports placeholders and formatting. |

## Placeholders

Common placeholders:

| Placeholder | Meaning |
|---|---|
| `%player%` | Player name. |
| `%structure%` | Structure key. |
| `%instanceuuid%` | Structure instance UUID. |
| `%world%` | World name. |
| `%center_x%` | Structure center X coordinate. |
| `%center_y%` | Structure center Y coordinate. |
| `%center_z%` | Structure center Z coordinate. |
