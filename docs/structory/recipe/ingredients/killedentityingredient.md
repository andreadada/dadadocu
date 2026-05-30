---
sidebar_position: 8
title: Killed Entity Ingredient - Premium
---

# Killed Entity Ingredient

The `killedentity` ingredient requires that a specific type of entity has just been killed by a player.

This is a premium ingredient.

It must be used with the `entity-death` recipe listener. It is not a normal right-click ingredient.

## When to use it

Use `killedentity` for recipes such as:

- sacrifice altars;
- mob-kill rituals;
- recipes that craft only when a player kills a specific mob near the structure;
- recipes that combine item slots with a nearby mob kill.

Do not use it when you only need a mob to be standing near the structure. For that, use the `entity` ingredient.

## Required structure setup

The structure must enable the `entity-death` listener.

```yaml
options:
  crafting:
    recipe: ["mob_sacrifice"]
    listeners:
      interact: {}
      entity-death:
        range: 8
    recipe-slots:
      offsets:
        - "0 1 1"
        - "0 1 -1"
```

`range` is the distance from the structure center. When an entity dies inside that range, Structory checks recipes registered for `entity-death`.

`interact: {}` is optional. Keep it only if this structure should also support normal right-click recipes.

## Required recipe setup

The recipe must also use the `entity-death` listener.

```yaml
mob_sacrifice:
  name: mob_sacrifice
  listeners:
    - entity-death
  discovers: "mob_sacrifice"
  ingredients:
    kill:
      type: killedentity
      entities:
        - ZOMBIE
  result:
    reward:
      type: item
      offset: "0 0 0"
      item:
        material: DIAMOND
```

This recipe checks whether the entity that just died was a zombie and whether it was killed by a player.

## Fields

| Field | Type | Required | Description |
|---|---:|---:|---|
| `type` | Text | Yes | Must be `killedentity`. |
| `entities` | List | Yes | Bukkit entity types allowed by this ingredient. |
| `blacklist` | Boolean | No | If `true`, the listed entity types are blocked instead of required. |

## Multiple allowed entities

```yaml
ingredients:
  kill:
    type: killedentity
    entities:
      - ZOMBIE
      - SKELETON
      - WITHER_SKELETON
```

The recipe matches if the killed entity is one of the listed types.

## Blacklist mode

```yaml
ingredients:
  kill:
    type: killedentity
    blacklist: true
    entities:
      - PLAYER
      - VILLAGER
```

With `blacklist: true`, the recipe matches when the killed entity is not in the list.

## Combining killed entity with item slots

You can require both a mob kill and items already placed in the structure slots.

```yaml
soul_recipe:
  name: soul_recipe
  listeners:
    - entity-death
  discovers: "soul_altar"
  ingredients:
    kill:
      type: killedentity
      entities:
        - ZOMBIE
    catalyst:
      type: item
      material: AMETHYST_SHARD
  result:
    reward:
      type: item
      offset: "0 0 0"
      item:
        material: ECHO_SHARD
```

In this case, the player must place the item in the structure slot first. Then, when a zombie dies near the structure, Structory checks the recipe.

## Common mistakes

| Problem | Cause |
|---|---|
| The recipe never crafts by right-clicking. | This ingredient needs `entity-death`, not normal `interact`. |
| The recipe never crafts on mob kill. | The structure is missing `crafting.listeners.entity-death.range` or the recipe is missing `listeners: [entity-death]`. |
| The entity type seems ignored. | Use exact Bukkit entity names such as `ZOMBIE`, `SKELETON`, `WITHER_SKELETON`. |
| Natural deaths do not work. | The entity must have a player killer. |
| The kill is too far away. | Increase `range` in the structure listener. |

## Difference between `killedentity` and `entity`

| Ingredient | Meaning | Listener |
|---|---|---|
| `entity` | A matching entity is near the structure when crafting is checked. | Usually `interact`. |
| `killedentity` | The entity that just died matches the configured type. | Requires `entity-death`. |
