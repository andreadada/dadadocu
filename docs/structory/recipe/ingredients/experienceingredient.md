---
sidebar_position: 4
title: Experience Ingredient - Premium
---

# Experience Ingredient

The `experience` ingredient requires player experience.

This is a premium ingredient.

## Require levels

```yaml
ingredients:
  xp:
    type: experience
    level: 30
```

## Consume the levels

```yaml
ingredients:
  xp:
    type: experience
    level: 30
    consume: true
```

## Require experience points

```yaml
ingredients:
  xp:
    type: experience
    experience: 500
```

## Fields

| Field | Type | Description |
|---|---|---|
| `level` | Number | Required player levels. |
| `experience` | Number | Required experience amount. |
| `total` | Boolean | Uses total experience behavior when supported. |
| `consume` | Boolean | If `true`, the experience is removed during crafting. |

## Recommended use

Use levels for simple recipes:

```yaml
level: 10
```

Use experience points only when you need more precise balancing.
