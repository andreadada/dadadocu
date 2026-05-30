---
sidebar_position: 16
title: EcoItems Ingredient - Premium
---

# EcoItems Ingredient - Premium

This ingredient requires a custom item from EcoItems.

Required dependency: EcoItems.

## Type aliases

You can use: `ecoitems`, `eitem`.

## Basic example

```yaml
ingredients:
  custom_item:
    type: ecoitems
    key: "my_eco_item"
```

## With consume disabled

```yaml
ingredients:
  custom_item:
    type: ecoitems
    key: "my_eco_item"
    consume: false
```

## Fields

| Field | Type | Description |
|---|---|---|
| `key` | Text | Custom item ID from EcoItems. |
| `consume` | Boolean | Whether the item is consumed. |
| `enchantments` | Section | Optional enchantment checks when supported by the item type. |

## Important notes

- EcoItems must be installed and enabled.
- The `key` must match the item ID used by EcoItems.
- If the item is not detected, check the server console during startup to confirm Structory hooked into EcoItems.
