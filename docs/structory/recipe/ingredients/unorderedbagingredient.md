---
sidebar_position: 10
title: Unordered Bag Ingredient - Premium
---

# Unordered Bag Ingredient

The `unorderedbag` ingredient requires block ingredients from a bag without strict order.

This is a premium ingredient.

## Example

```yaml
ingredients:
  blocks:
    type: unorderedbag
    ingredients:
      A: GLOWSTONE
      B: AMETHYST_BLOCK
    bag: "AB"
    consume: true
```

In this case, the structure can provide the required materials without needing the exact order used by `bag`.

## Fields

| Field | Type | Description |
|---|---|---|
| `ingredients` | Section | Character-to-material legend. |
| `bag` | Text | Required material pattern. |
| `consume` | Boolean | Whether matching blocks are consumed. |

## When to use

Use `unorderedbag` when players should be allowed to place the required materials in any valid order.
