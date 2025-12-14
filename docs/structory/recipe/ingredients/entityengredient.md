---
sidebar_position: 1
title: Entity
---



# Entity Nearby Ingredient

Check for **entities near the recipe location** and optionally consume them.

## Overview

The **Entity Nearby Ingredient** allows you to require specific entities to be present near the recipe location (like within a radius). You can use the powerful **EntityChecker** system to filter entities by type, health, name, enchantments, and much more. Entities can be optionally consumed (removed) when the recipe is used.

## Configuration

| Field     | Type                                            | Description                               | Default             |
|-----------|-------------------------------------------------|-------------------------------------------|---------------------|
| `type`    | String                                          | **Must be:** `entity`                     | required            |
| `range`   | Number                                          | Search radius (in blocks)                 | 3                   |
| `amount`  | Integer                                         | How many entities are required            | 1                   |
| `consume` | Boolean                                         | Remove the entity after recipe completion | true                |
| `check`   | [EntityChecker](../../premium/entitychecker.md) | Filters for selecting the right entities  | (see EntityChecker) |

## Basic Usage

### Simple Entity Check

```yaml
my_recipe:
  ingredients:
    zombie_nearby:
      type: entity
      check:
        type: ZOMBIE
      amount: 1
      range: 5
```

This requires 1 Zombie within 5 blocks of the recipe location.

## Using EntityChecker Filters

The `check` section accepts all **EntityChecker** filters. For a complete list, see [EntityChecker](../../premium/entitychecker.md).

### Common Filter Examples

```yaml
my_recipe:
  ingredients:
    named_entity:
      type: entity
      amount: 1
      check:
        displayName: "§c§lBoss Name"
        minHealth: 50
      range: 10
```

```yaml
recipe_with_tags:
  ingredients:
    special_entity:
      type: entity
      amount: 2
      check:
        type: CREEPER
        scoreboardTags:
          - "custom_tag"
      range: 8
```

## Complete Examples

### Example 1: Sacrifice a Zombie

```yaml
zombie_ritual:
  ingredients:
    sacrifice:
      type: entity
      check:
        type: ZOMBIE
      amount: 1
      consume: true
      range: 3
```

Requires 1 Zombie within 3 blocks. The Zombie is removed when the recipe completes.

### Example 2: Boss Defeated Check

```yaml
boss_arena_recipe:
  ingredients:
    defeated_boss:
      type: entity
      check:
        displayNameContains: "Boss"
        damaged: true
        minHealth: 1
      amount: 1
      consume: true
      range: 15
```

Requires a damaged entity with "Boss" in its name. Range is 15 blocks.

### Example 3: Multiple Entity Types

```yaml
multi_entity_recipe:
  ingredients:
    creature_1:
      type: entity
      check:
        type: ZOMBIE
        hasNoDisplayName: true
      amount: 1
      consume: true
      range: 5
    creature_2:
      type: entity
      check:
        type: SKELETON
      amount: 1
      consume: false
      range: 5
```

Requires:
- 1 unnamed Zombie (consumed)
- 1 Skeleton (not consumed)

Both within 5 blocks.

## EntityChecker Integration

All filters from **EntityChecker** are available in the `check` section:

- **Type filters:** `type`, `types`, `notType`
- **Name filters:** `displayName`, `displayNameContains`, `hasAnyDisplayName`, `hasNoDisplayName`
- **Health filters:** `minHealth`, `maxHealth`, `healthBetween`, `fullHealth`, `damaged`
- **Attribute filters:** `attributes`
- **Behavior filters:** `hasAI`, `isLeashed`
- **Status filters:** `inWater`, `onGround`, `gliding`, `swimming`, `invisible`
- **Equipment filters:** `hasItemInMainHand`, `hasHelmet`
- **Data filters:** `persistentData`
- **Tag filters:** `scoreboardTag`, `scoreboardTags`, `notScoreboardTag`
- **Age filters:** `isBaby`, `isAdult`
- **MythicMobs filters:** `isanymythic`, `ismythic`


## Important Notes

- **Range:** Specified in blocks from the recipe location
- **Consume:** When `true`, the entity is removed after the recipe completes
- **Amount:** Allows requiring multiple entities (e.g., 3 Zombies)
- **No duplication:** Each entity can only be used once per recipe check
- **Cache:** The system caches entities within range for performance
- **Performance:** Large amounts with large ranges may impact performance


