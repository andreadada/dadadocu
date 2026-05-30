---
sidebar_position: 15
title: ItemsAdder Ingredient - Premium
---

# ItemsAdder Ingredient - Premium

This ingredient requires a custom item from ItemsAdder.

Required dependency: ItemsAdder.

## Type aliases

You can use: `itemsadder`, `iaitem`.

## Basic example

```yaml
ingredients:
  custom_item:
    type: itemsadder
    key: "namespace:item_id"
```

## With consume disabled

```yaml
ingredients:
  custom_item:
    type: itemsadder
    key: "namespace:item_id"
    consume: false
```

## Fields

| Field | Type | Description |
|---|---|---|
| `key` | Text | Custom item ID from ItemsAdder. |
| `consume` | Boolean | Whether the item is consumed. |
| `enchantments` | Section | Optional enchantment checks when supported by the item type. |

## Important notes

- ItemsAdder must be installed and enabled.
- The `key` must match the item ID used by ItemsAdder.
- If the item is not detected, check the server console during startup to confirm Structory hooked into ItemsAdder.
