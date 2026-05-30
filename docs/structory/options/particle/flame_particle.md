---
sidebar_position: 3
title: Flame Particle
---

# Flame Particle

The `flame` decoration plays a small random spread of another particle decoration.

It is useful for fire, magic, soul flame, and forge effects.

## Example

```yaml
type: flame
amount: 10
center-offset: "0 0.5 0"
particle:
  type: particle
  particle: SOUL_FIRE_FLAME
  amount: 1
  speed: 0.05
```

## Fields

| Field | Description |
|---|---|
| `amount` | Number of spread particles. |
| `center-offset` | Offset from the base location. |
| `particle` | Decoration spawned by the flame effect. |

## Crafting consume example

```yaml
options:
  crafting:
    consume:
      type: flame
      amount: 10
      particle:
        type: particle
        particle: SOUL_FIRE_FLAME
        amount: 1
        speed: 0.05
```

## Recommended particles

Good particles for this decoration include:

```text
FLAME
SOUL_FIRE_FLAME
CRIT_MAGIC
ENCHANTMENT_TABLE
PORTAL
```
