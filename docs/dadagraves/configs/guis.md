---
sidebar_position: 3
title: guis.yml
---

# guis.yml

The `guis.yml` file controls the menus shown to players.

You can change titles, layouts, filler items, buttons, names, lore, and menu icons without editing the plugin code.

## How layouts work

A GUI layout is made of rows of characters. Each character is linked to an item in the `ingredients` section.

Example:

```yaml
layout:
  - "# # # # # # # # #"
  - "# S F F F F F C #"
  - "# # # # # # # # #"
```

In this example:

- `#` is the border.
- `S` is the selected decoration button.
- `H` can be used for the active gravestones button.
- `F` is filler glass.
- `C` is the close button.

Every character used in the layout should have a matching ingredient.

## Common item fields

Most GUI items support fields like these:

```yaml
item:
  material: BLACK_STAINED_GLASS_PANE
  name: ""
  lore: "<gray>Example lore"
```

Common fields:

| Field | Description |
| --- | --- |
| `material` | Minecraft material used as the icon. |
| `name` | Display name of the item. |
| `lore` | Text shown under the item name. Use `<br>` for new lines. |

## Main GUI sections

### `personal-gui`

This is the menu opened by:

```text
/graves
```

It shows the player's current decoration and lets them open the decoration selector.

Useful placeholders:

| Placeholder | Meaning |
| --- | --- |
| `%decoration%` | The name of the selected decoration. |

Common ingredient types:

| Type | Purpose |
| --- | --- |
| `Selected` | Shows the selected decoration. |
| `History` | Opens the player's Active Gravestones GUI. |
| `Item` | Static item, usually border or filler. |
| `Close` | Closes the menu. |

Example history button:

```yaml
history:
  char: 'H'
  type: History
  item:
    material: MAP
    name: "<gold>Active Gravestones"
    lore: "<br><gray>Click to view your active gravestones"
```

### `selector-gui`

This is the decoration selection menu.

Players use this menu to browse available decorations and choose one.

Useful placeholders:

| Placeholder | Meaning |
| --- | --- |
| `%decoration%` | Decoration name. |
| `%currentpage%` | Current page number. |
| `%maxpage%` | Last page number. |

Common ingredient types:

| Type | Purpose |
| --- | --- |
| `Back` | Previous page button. |
| `Forward` | Next page button. |
| `Item` | Static item, usually border or filler. |
| `Close` | Closes the menu. |

### `grave`

This is the menu opened when a player interacts with a grave.

It lets the player recover items and experience.

Useful placeholders:

| Placeholder | Meaning |
| --- | --- |
| `%owner%` | Name of the player who owns the grave. |

Common ingredient types:

| Type | Purpose |
| --- | --- |
| `QuickAccess` | Takes or drops the stored items. |
| `XP` | Takes or drops the stored experience. |
| `Item` | Static item, usually border or filler. |
| `Close` | Closes the menu. |

## Grave item recovery behavior

In the default grave GUI:

- Left-click on `QuickAccess` takes all stored items.
- Right-click on `QuickAccess` drops the stored items on the ground.
- Left-click on `XP` takes the stored experience.
- Right-click on `XP` drops the stored experience.

If there is not enough space in the player inventory, extra items are dropped instead of being lost.

### `grave-history`

This is the Active Gravestones menu opened by:

```text
/graves history
```

It can also be opened from the personal GUI if you keep the `History` button enabled.

Each grave item can show:

| Placeholder | Meaning |
| --- | --- |
| `%index%` | Grave number in the list. |
| `%owner%` | Grave owner. |
| `%world%` | Grave world. |
| `%x%`, `%y%`, `%z%` | Grave block coordinates. |
| `%created%` | When the grave was created. |
| `%timeleft%` | Remaining time before the grave expires. |
| `%lock%` | Remaining lock time. |
| `%items%` | Total item amount. |
| `%stacks%` | Stack count. |
| `%actions%` | Permission-based action hints. |

`%actions%` is useful because the lore changes depending on permissions.

- Players with `gravestone.history.open-distance` see `Click to open`.
- Players with `gravestone.history.teleport` see `Shift Left-Click to teleport`.

If a player does not have those permissions, those action lines are not shown.

## Default fallback items

At the top of `guis.yml`, you can set fallback icons:

```yaml
default-decoration-item:
  material: PAPER

default-not-unlocked-item:
  material: GRAY_STAINED_GLASS_PANE
```

These are used when a decoration has no custom display item or when a decoration is locked.

## Editing tips

- Keep each layout row at 9 slots.
- Use simple materials when testing.
- Change one menu at a time.
- If a menu does not open after editing, check the server console for YAML formatting errors.
- Do not use tabs in YAML files. Use spaces only.
