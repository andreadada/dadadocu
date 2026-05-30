---
sidebar_position: 11
title: CraftEngine Item Ingredient - Premium
---

# CraftEngine Item Ingredient - Premium

This ingredient requires a custom item from CraftEngine.

Required dependency: CraftEngine.

## Type aliases

You can use: `ceitem`, `craftengine`.

## Basic example

```yaml
ingredients:
  custom_item:
    type: ceitem
    key: "default:topaz"
```

## With consume disabled

```yaml
ingredients:
  custom_item:
    type: ceitem
    key: "default:topaz"
    consume: false
```

## Fields

| Field | Type | Description |
|---|---|---|
| `key` | Text | Custom item ID from CraftEngine. |
| `consume` | Boolean | Whether the item is consumed. |
| `enchantments` | Section | Optional enchantment checks when supported by the item type. |

## Important notes

- CraftEngine must be installed and enabled.
- The `key` must match the item ID used by CraftEngine.
- If the item is not detected, check the server console during startup to confirm Structory hooked into CraftEngine.
