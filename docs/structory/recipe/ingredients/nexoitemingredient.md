---
sidebar_position: 13
title: Nexo Item Ingredient - Premium
---

# Nexo Item Ingredient - Premium

This ingredient requires a custom item from Nexo.

Required dependency: Nexo.

## Type aliases

You can use: `nexo`, `nitem`.

## Basic example

```yaml
ingredients:
  custom_item:
    type: nexo
    key: "my_custom_item"
```

## With consume disabled

```yaml
ingredients:
  custom_item:
    type: nexo
    key: "my_custom_item"
    consume: false
```

## Fields

| Field | Type | Description |
|---|---|---|
| `key` | Text | Custom item ID from Nexo. |
| `consume` | Boolean | Whether the item is consumed. |
| `enchantments` | Section | Optional enchantment checks when supported by the item type. |

## Important notes

- Nexo must be installed and enabled.
- The `key` must match the item ID used by Nexo.
- If the item is not detected, check the server console during startup to confirm Structory hooked into Nexo.
