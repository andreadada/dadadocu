---
sidebar_position: 3
title: Saved Item Ingredient
---

# Saved Item Ingredient

The `saveditem` ingredient requires an item saved with Structory.

Use it when you need an exact custom item instead of a simple material.

## Save the item first

Hold the item in your hand and run:

```text
/structory item save strangeapple
```

## Recipe example

```yaml
ingredients:
  special_apple:
    type: saveditem
    key: strangeapple
```

## Fields

| Field | Type | Description |
|---|---|---|
| `key` | Text | Saved item key. |
| `consume` | Boolean | Whether the item is consumed. |

## Full example

```yaml
god_apple:
  name: god_apple
  ingredients:
    one:
      type: saveditem
      key: strangeapple
    two:
      type: item
      material: GOLD_BLOCK
  result:
    one:
      type: saveditem
      offset: "0 0 0"
      key: godapple
```

## Common mistake

The `key` must match the name used in `/structory item save <name>`.
