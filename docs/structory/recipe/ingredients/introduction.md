---
sidebar_position: 1
title: Ingredients
---

# Ingredients

Ingredients define what a recipe requires before it can craft.

Every ingredient is placed under the recipe's `ingredients` section.

```yaml
ingredients:
  apple:
    type: item
    material: APPLE
  cost:
    type: experience
    level: 10
```

The names `apple` and `cost` are only labels. You can choose any clear name.

## Common fields

Most ingredients support these common fields:

| Field | Description |
|---|---|
| `type` | Ingredient type. |
| `consume` | If `false`, the ingredient is required but not removed. |
| `animation` | Optional animation used when this ingredient is consumed. |
| `strategy` | Optional consume strategy for this ingredient. |

Example:

```yaml
ingredients:
  catalyst:
    type: item
    material: NETHER_STAR
    consume: true
    animation:
      type: particle
      duration: 40
      speed: 3
    strategy:
      type: sequential
```

See [Animations and Consumption](../animations-and-consumption.md).

## Ingredient groups

Some advanced options, especially typed animations and typed strategies, use ingredient groups.

| Group | Used by |
|---|---|
| `item` | Vanilla items, saved items, and supported custom item plugins. |
| `experience` | Experience ingredient. |
| `bag` | Bag and unordered bag ingredients. |
| `entity` | Nearby entity ingredient. |
| `entitykilled` | Killed entity ingredient. |
| `vault` | Vault money ingredient. |
| `coinsengine` | CoinsEngine ingredient. |

## Choosing the right ingredient

| Goal | Ingredient |
|---|---|
| Require a vanilla Minecraft item. | `item` |
| Require an item saved with Structory. | `saveditem` |
| Require player experience. | `experience` |
| Require money through Vault. | `vault` |
| Require CoinsEngine currency. | `coinsengine` |
| Require a nearby entity. | `entity` |
| Require a player to kill a specific entity near the structure. | `killedentity` with the `entity-death` listener |
| Require bag contents. | `bag` or `unorderedbag` |

## Important listener note

Some ingredients need a specific listener.

The most important case is `killedentity`. It only works when the recipe is triggered by `entity-death`.

```yaml
my_recipe:
  name: my_recipe
  listeners:
    - entity-death
  ingredients:
    kill:
      type: killedentity
      entities:
        - ZOMBIE
```

The structure must also enable `entity-death` in `options.crafting.listeners`.
