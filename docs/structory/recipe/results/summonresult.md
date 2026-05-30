---
sidebar_position: 5
title: Summon Entity Result - Premium
---

# Summon Entity Result

The `summon` result spawns one or more entities when crafting finishes.

This is a premium result.

## Basic example

```yaml
result:
  summon_zombie:
    type: summon
    entity: ZOMBIE
    amount: 1
    location:
      param: offset
      x: 0
      y: 0
      z: 0
```

## Fields

| Field | Type | Description |
|---|---|---|
| `entity` | Entity type | Bukkit entity type to spawn. |
| `amount` | Number | Number of entities. |
| `location` | Location section | Spawn location or offset. |

## Random amount example

```yaml
result:
  summon_random:
    type: summon
    entity: ZOMBIE
    amount:
      param: randomint
      min: 1
      max: 5
    location:
      param: offset
      x: 0
      y: 0
      z: 0
```

## Recommended use

Use summon results for rituals, boss spawns, arena rewards, or magical structures.

Do not spawn large amounts of entities without testing server performance.
