---
sidebar_position: 9
title: Bag Ingredient - Premium
---

# Bag Ingredient

The `bag` ingredient requires an ordered block pattern from a structure bag.

This is a premium ingredient.

## Example

```yaml
ingredients:
  glowstone_bag:
    type: bag
    ingredients:
      A: GLOWSTONE
    bag: "AA"
    consume: true
```

## Fields

| Field | Type | Description |
|---|---|---|
| `ingredients` | Section | Character-to-material legend. |
| `bag` | Text | Required ordered pattern. |
| `consume` | Boolean | Whether matching blocks are consumed. |

## When to use

Use `bag` when the exact order matters.

For example, this requires `GLOWSTONE`, then `AMETHYST_BLOCK`:

```yaml
ingredients:
  pattern:
    type: bag
    ingredients:
      A: GLOWSTONE
      B: AMETHYST_BLOCK
    bag: "AB"
```
