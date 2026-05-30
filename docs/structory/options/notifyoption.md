---
sidebar_position: 2
title: Notify Option
---

# Notify Option

The `notify` option sends feedback to the player when the structure is created.

It can send:

- chat messages;
- titles;
- subtitles;
- action bars.

## Basic example

```yaml
options:
  notify:
    message: "<white>You have created <yellow>%structure%<white>!"
```

## Full example

```yaml
options:
  notify:
    message: "<white>You have created <yellow>%structure%<white>!"
    title: "<gold>Structure created"
    subtitle: "<gray>Your altar is ready"
    actionbar: "<green>Ready to use"
    duration: 60
    fade_in: 10
    fade_out: 20
```

## Fields

| Field | Type | Description |
|---|---|---|
| `message` | Text | Sends a chat message. |
| `title` | Text | Shows a title on screen. |
| `subtitle` | Text | Shows a subtitle below the title. |
| `actionbar` | Text | Shows a message above the hotbar. |
| `duration` | Number | How long the title remains visible. |
| `fade_in` | Number | Title fade-in time. |
| `fade_out` | Number | Title fade-out time. |

## Formatting

Messages support MiniMessage-style tags, for example:

```yaml
message: "<white>You have created <light_purple>%structure%"
```

## Placeholders

Common placeholders include:

| Placeholder | Meaning |
|---|---|
| `%structure%` | Structure key. |
| `%player%` | Player name when available. |
| `%world%` | World name when available. |
| `%center_x%` | Structure center X coordinate. |
| `%center_y%` | Structure center Y coordinate. |
| `%center_z%` | Structure center Z coordinate. |
