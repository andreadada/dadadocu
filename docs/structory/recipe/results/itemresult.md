---
sidebar_position: 1
title: Item Result
---

# Item Result

The `item` result drops or creates a vanilla Minecraft item when crafting finishes.

## Basic example

```yaml
result:
  one:
    type: item
    offset: "0 0 0"
    item:
      material: NETHER_STAR
```

## Item with display name, lore, and model data

```yaml
result:
  one:
    type: item
    offset: "0 0 0"
    item:
      material: PAPER
      display-name: "<aqua>Magic Scroll"
      lore:
        - "<gray>A scroll created by an altar."
      model: 1001
```

## Enchanted item

```yaml
result:
  one:
    type: item
    offset: "0 0 0"
    item:
      material: ENCHANTED_BOOK
      enchantments:
        SHARPNESS: 5
```

## Fields

| Field | Type | Description |
|---|---|---|
| `offset` | Vector | Where the item appears, relative to the structure center. |
| `item.material` | Material | Minecraft item material. |
| `item.display-name` | Text | Item display name. |
| `item.name` | Text | Alternative display name field. |
| `item.lore` | List or text | Item lore. |
| `item.amount` | Number | Stack amount. |
| `item.model` | Number | Custom model data. |
| `item.unbreakable` | Boolean | Makes the item unbreakable. |
| `item.enchantments` | Section | Enchantments to apply. |
| `item.set` | Section | Custom persistent data values. |

## Offset example

```yaml
offset: "0 1 0"
```

This places the result one block above the structure center.
