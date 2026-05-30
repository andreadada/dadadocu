---
sidebar_position: 12
title: Oraxen Item Ingredient - Premium
---

# Oraxen Item Ingredient - Premium

This ingredient requires a custom item from Oraxen.

Required dependency: Oraxen.

## Type aliases

You can use: `oraxen`, `oitem`.

## Basic example

```yaml
ingredients:
  custom_item:
    type: oraxen
    key: "my_custom_item"
```

## With consume disabled

```yaml
ingredients:
  custom_item:
    type: oraxen
    key: "my_custom_item"
    consume: false
```

## Fields

| Field | Type | Description |
|---|---|---|
| `key` | Text | Custom item ID from Oraxen. |
| `consume` | Boolean | Whether the item is consumed. |
| `enchantments` | Section | Optional enchantment checks when supported by the item type. |

## Important notes

- Oraxen must be installed and enabled.
- The `key` must match the item ID used by Oraxen.
- If the item is not detected, check the server console during startup to confirm Structory hooked into Oraxen.
