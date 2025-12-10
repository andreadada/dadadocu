---
sidebar_position: 1
title: KilledEntity
---


# Killed Entity By Player Ingredient

Check if a **player kills a specific entity type** to trigger the recipe.

## Overview

The **Killed Entity By Player Ingredient** is an **event-based ingredient** that triggers when a player kills a specific entity type. Unlike other ingredients that require static items or entities, this one monitors entity death events and checks if the killer was a player.

**To use this ingredient you must register a new Crafting listener to the structure (ASK on discord, WIKI is not updated)**
**And the recipe must be usable in `deathevent` events** 

**Use case:**
- Recipes that require defeating specific enemies

## Configuration

| Field       | Type    | Description                                       | Default  |
|-------------|---------|---------------------------------------------------|----------|
| `type`      | String  |  **Must be:** `entitykilled`                      | required |
| `entities`  | List    | Entity types that can be killed to trigger        | required |
| `blacklist` | Boolean | If `true`, invert the logic (exclude these types) | false    |

## Entity Type List

Valid entity types (common examples):
- `ZOMBIE`, `SKELETON`, `CREEPER`, `SPIDER`
- `ZOMBIE_PIGMAN`, `GHAST`, `WITHER`, `ENDERMAN`
- `BLAZE`, `CAVE_SPIDER`, `SLIME`, `MAGMA_CUBE`
- `PLAYER`, `ARMOR_STAND`, `VILLAGER`
- And all other Minecraft entity types

## Basic Usage

### Kill Any Zombie

```yaml
my_recipe:
  ingredients:
    kill_zombie:
      type: entitykilled
      entities:
        - ZOMBIE
```

When a player kills any Zombie, this ingredient is satisfied.

### Kill Multiple Entity Types

```yaml
my_recipe:
  ingredients:
    kill_undead:
      type: entitykilled
      entities:
        - ZOMBIE
        - SKELETON
        - WITHER_SKELETON
```

When a player kills Zombie, Skeleton, or Wither Skeleton, the requirement is met.

## Whitelist vs Blacklist

### Whitelist Mode (default)

```yaml
my_recipe:
  ingredients:
    kill_mob:
      type: entitykilled
      entities:
        - CREEPER
        - SPIDER
      blacklist: false
```

Only killing **Creeper OR Spider** satisfies this. Other entities don't count.

### Blacklist Mode

```yaml
my_recipe:
  ingredients:
    kill_anything_but_players:
      type: entitykilled
      entities:
        - PLAYER
        - ARMOR_STAND
      blacklist: true
```

Killing **anything EXCEPT Player or Armor Stand** satisfies this. Perfect for "don't kill friendlies" mechanics.


## Important Notes

- **Event-based:** This ingredient only triggers when a player kills an entity and the structure listens to "entity death". It's not checked passively.
- **Multiple recipes:** Multiple recipes can listen to the same entity kill event. ts
