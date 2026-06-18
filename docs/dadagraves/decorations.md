---
sidebar_position: 5
title: Decorations
---

# Decorations

Decorations are the visual styles players can choose for their graves.

Each decoration is stored as a YAML file inside the `decorations/` folder. The plugin loads these files when the server starts.

## What a decoration can contain

A decoration can be made from one or more visual parts:

- display block models
- player heads
- the item the player was holding
- floating text

Modern display features are used when the server supports them. If the server does not support modern display entities, the plugin falls back where possible so the grave can still work.

## Basic decoration example

```yaml
base_gravestone:
  base: true
  name: "Gravestone"
  display-item:
    material: PAPER
  decorations:
    one:
      type: displayblock
      key: gravestone
    two:
      type: displayblock
      key: flowers
    three:
      type: textdisplay
      text: "%player%"
      yaw: 0
      scale: 0.8
      offset: "0.0 -0.2 0.0"
```

## Main fields

| Field | Description |
| --- | --- |
| Decoration id | The top-level name, for example `base_gravestone`. Must be unique. |
| `base` | Marks a built-in or base decoration. |
| `name` | Name shown to players in the GUI. |
| `display-item` | Icon shown in the decoration selector. |
| `permission` | Optional permission required to use this decoration. |
| `decorations` | The visual parts that make up the decoration. |

## Display item

The `display-item` is the icon players see in the decoration selector.

Example:

```yaml
display-item:
  material: CHEST
```

If no display item is set, the plugin uses the default item from `guis.yml`.

## Decoration permission

You can lock a decoration behind a permission.

Example:

```yaml
permission: gravestone.decorate.vip
```

Only players with that permission can select the decoration.

If no permission is set, the decoration is available normally.

## Component types

### `displayblock`

Shows a custom display model from the `blockdisplay/` folder.

```yaml
type: displayblock
key: gravestone
```

`key` must match a model file name without `.json`.

Example:

```text
blockdisplay/gravestone.json
```

is used with:

```yaml
key: gravestone
```

### `playerhead`

Shows the head of the player who died.

```yaml
type: playerhead
```

### `helditem`

Shows the item the player was holding.

```yaml
type: helditem
```

### `textdisplay`

Shows floating text as part of the decoration.

```yaml
type: textdisplay
text: "%player%"
yaw: 0
scale: 0.8
offset: "0.0 -0.2 0.0"
```

Fields:

| Field | Description |
| --- | --- |
| `text` | Text to show. Supports `%player%`. |
| `yaw` | Rotation. |
| `scale` | Text size. |
| `offset` | Position from the grave location, written as `x y z`. |

## Included decorations

The default setup includes examples such as:

- `base_player_head`
- `base_gravestone`
- `base_chest`
- `base_chicken`

You can use them as templates for your own decorations.

## Tips

- Use a unique id for each decoration.
- Start by copying an existing decoration and changing one thing at a time.
- Make sure every `displayblock` key exists in the `blockdisplay/` folder.
- If a decoration does not appear, check the server console for a YAML error or an invalid material.
- Avoid using very large models on busy servers.
