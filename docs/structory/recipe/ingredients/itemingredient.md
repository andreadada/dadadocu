---
sidebar_position: 2
title: Item Ingredient
---

# Item Ingredient

The `item` ingredient requires a vanilla Minecraft item.

## Basic example

```yaml
ingredients:
  apple:
    type: item
    material: APPLE
```

## With model data

```yaml
ingredients:
  custom_paper:
    type: item
    material: PAPER
    model: 1001
```

## With display name

```yaml
ingredients:
  named_item:
    type: item
    material: DIAMOND
    displayName: "<aqua>Magic Diamond"
```

## With enchantments

```yaml
ingredients:
  sword:
    type: item
    material: DIAMOND_SWORD
    enchantments:
      SHARPNESS: 5
```

## With custom data check

```yaml
ingredients:
  spawner:
    type: item
    material: SPAWNER
    has:
      empty:
        type: BOOLEAN
```

## Fields

| Field | Type | Description |
|---|---|---|
| `material` | Material | Required Minecraft material. |
| `model` | Number | Custom model data. |
| `displayName` | Text | Required display name. |
| `enchantments` | Section | Required enchantments and levels. |
| `has` | Section | Required persistent/custom data keys. |
| `consume` | Boolean | Whether the item is consumed. |

## Example with consume disabled

```yaml
ingredients:
  elytra:
    type: item
    material: ELYTRA
    consume: false
```

Use `consume: false` for tools, templates, or items that should be checked but not removed.
