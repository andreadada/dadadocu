---
sidebar_position: 14
title: MMOItems Ingredient - Premium
---

# MMOItems Ingredient - Premium

This ingredient requires a custom item from MMOItems.

Required dependency: MMOItems.

## Type aliases

You can use: `mmoitem`, `mmoitems`, `mitem`.

## Basic example

```yaml
ingredients:
  custom_item:
    type: mmoitem
    key: "SWORD:MYTHIC_BLADE"
```

## With consume disabled

```yaml
ingredients:
  custom_item:
    type: mmoitem
    key: "SWORD:MYTHIC_BLADE"
    consume: false
```

## Fields

| Field | Type | Description |
|---|---|---|
| `key` | Text | Custom item ID from MMOItems. |
| `consume` | Boolean | Whether the item is consumed. |
| `enchantments` | Section | Optional enchantment checks when supported by the item type. |

## Important notes

- MMOItems must be installed and enabled.
- The `key` must match the item ID used by MMOItems.
- If the item is not detected, check the server console during startup to confirm Structory hooked into MMOItems.
