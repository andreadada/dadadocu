---
sidebar_position: 17
title: ExecutableItems Ingredient - Premium
---

# ExecutableItems Ingredient - Premium

This ingredient requires a custom item from ExecutableItems.

Required dependency: ExecutableItems.

## Type aliases

You can use: `exitem`, `exitems`, `executableitems`, `executableitemsitem`.

## Basic example

```yaml
ingredients:
  custom_item:
    type: exitem
    key: "my_executable_item"
```

## With consume disabled

```yaml
ingredients:
  custom_item:
    type: exitem
    key: "my_executable_item"
    consume: false
```

## Fields

| Field | Type | Description |
|---|---|---|
| `key` | Text | Custom item ID from ExecutableItems. |
| `consume` | Boolean | Whether the item is consumed. |
| `enchantments` | Section | Optional enchantment checks when supported by the item type. |

## Important notes

- ExecutableItems must be installed and enabled.
- The `key` must match the item ID used by ExecutableItems.
- If the item is not detected, check the server console during startup to confirm Structory hooked into ExecutableItems.
