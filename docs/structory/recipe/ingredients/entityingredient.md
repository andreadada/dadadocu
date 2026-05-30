---
sidebar_position: 7
title: Nearby Entity Ingredient - Premium
---

# Nearby Entity Ingredient

The `entity` ingredient requires one or more entities near the structure.

This is a premium ingredient.

## Basic example

```yaml
ingredients:
  nearby_zombie:
    type: entity
    amount: 1
    range: 5
    check:
      types:
        - ZOMBIE
```

## Fields

| Field | Type | Description |
|---|---|---|
| `check` | Entity checker | Defines which entities are valid. |
| `amount` | Number | Required number of matching entities. |
| `range` | Number | Search range around the structure. |
| `exclusive` | Boolean | If `true`, stricter matching behavior is used. |
| `consume` | Boolean | If `true`, matching entities may be consumed/removed depending on behavior. |

## Example: require two villagers nearby

```yaml
ingredients:
  villagers:
    type: entity
    amount: 2
    range: 8
    check:
      types:
        - VILLAGER
```

## Recommended use

Use this for rituals, summoning systems, or structures that require mobs nearby.
