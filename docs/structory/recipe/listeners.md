---
sidebar_position: 2
---

# Recipe Listeners

Recipe listeners decide which event can trigger a recipe.

Most recipes use the default listener, `interact`. This means the player right-clicks the structure and Structory checks the recipe.

Some recipes need a different trigger. For example, a recipe that requires `killedentity` must be triggered by the `entity-death` listener, because that ingredient only has useful information when an entity death event is happening.

## Two places must match

Listeners are configured in two places:

1. The structure's `crafting.listeners` section.
2. The recipe's `listeners` list.

Both must use the same listener key.

If the structure listens for `entity-death` but the recipe is registered only for `interact`, that recipe will not craft from entity deaths.

If the recipe uses `entity-death` but the structure did not enable the `entity-death` listener, nothing will trigger it.

## Default behavior

If a structure does not define `crafting.listeners`, Structory enables `interact` for that structure.

```yaml
options:
  crafting:
    recipe: ["default"]
    recipe-slots:
      offsets:
        - "0 1 1"
```

If a recipe does not define `listeners`, Structory registers it under `interact`.

```yaml
simple_recipe:
  name: simple_recipe
  ingredients:
    item:
      type: item
      material: APPLE
  result:
    reward:
      type: item
      offset: "0 0 0"
      item:
        material: GOLDEN_APPLE
```

This is enough for normal right-click crafting.

## Important rule when adding `crafting.listeners`

When you add the `listeners` section to a structure, include every listener you want enabled.

This enables only entity-death crafting:

```yaml
options:
  crafting:
    listeners:
      entity-death:
        range: 8
```

Normal right-click crafting is not enabled in that example.

To support both right-click crafting and entity-death crafting, write this:

```yaml
options:
  crafting:
    listeners:
      interact: {}
      entity-death:
        range: 8
```

## Available listeners

| Listener | What triggers it | Typical use |
|---|---|---|
| `interact` | Player right-clicks the structure main block. | Standard crafting station. |
| `entity-death` | An entity dies near the structure. | Sacrifice altars, mob-kill rituals, kill-based recipes. |

## `interact`

The `interact` listener is the normal crafting mode.

Structure:

```yaml
options:
  crafting:
    recipe: ["default"]
    listeners:
      interact: {}
    recipe-slots:
      offsets:
        - "0 1 1"
        - "0 1 -1"
```

Recipe:

```yaml
apple_recipe:
  name: apple_recipe
  listeners:
    - interact
  discovers: "default"
  ingredients:
    apple:
      type: item
      material: APPLE
  result:
    reward:
      type: item
      offset: "0 0 0"
      item:
        material: GOLDEN_APPLE
```

The `listeners` list can be omitted from the recipe because `interact` is already the default.

## `entity-death`

The `entity-death` listener triggers when an entity dies near a loaded structure instance.

Structure:

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

Fields:

| Field | Description |
|---|---|
| `range` | Radius around the structure center. If an entity dies inside this radius, Structory checks recipes registered for `entity-death`. |

Recipe:

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

This recipe is checked only when an entity dies near the structure.

## How the entity-death context works

When `entity-death` triggers, Structory checks recipes with information from the death event:

- the dead entity is available to `killedentity`;
- the killer is used as the crafting player when the killer is a player;
- the structure must be loaded;
- the entity must die within the configured `range`.

If the entity has no player killer, recipes that require player context may not work as expected.

## `entity` versus `killedentity`

| Ingredient | Meaning | Listener requirement |
|---|---|---|
| `entity` | Checks for living entities near the structure. | Can be used with `interact` or `entity-death`. |
| `killedentity` | Checks the entity that has just died. | Requires `entity-death`. |

Use `entity` when the player should craft while a mob is nearby.

Use `killedentity` when the player must kill a specific mob near the structure.

## Using one recipe with multiple listeners

A recipe can be registered for more than one listener.

```yaml
special_recipe:
  name: special_recipe
  listeners:
    - interact
    - entity-death
```

Use this only when the ingredients make sense for both contexts.

For example:

- `item`, `saveditem`, `experience`, `vault`, and `entity` can make sense with `interact`;
- `killedentity` only makes sense with `entity-death`.

## Complete kill recipe example

Structure:

```yaml
soul_altar:
  name: "Soul Altar"
  check-block: CRYING_OBSIDIAN
  options:
    crafting:
      recipe: ["soul_altar"]
      listeners:
        interact: {}
        entity-death:
          range: 8
      recipe-slots:
        offsets:
          - "0 1 1"
          - "0 1 -1"
```

Recipe:

```yaml
soul_essence:
  name: soul_essence
  discovers: "soul_altar"
  listeners:
    - entity-death
  ingredients:
    kill:
      type: killedentity
      entities:
        - ZOMBIE
    catalyst:
      type: item
      material: AMETHYST_SHARD
  result:
    essence:
      type: item
      offset: "0 1 0"
      item:
        material: ECHO_SHARD
        name: "Soul Essence"
```

The player places the catalyst in a recipe slot, then kills a zombie near the structure.

## Troubleshooting

| Problem | Most likely cause |
|---|---|
| Recipe works on right-click but not on mob kill. | Recipe is missing `listeners: [entity-death]` or structure is missing `crafting.listeners.entity-death`. |
| Mob kill does nothing. | The entity died outside `range`, the structure instance was not loaded, or the killed entity type does not match. |
| Normal crafting stopped working after adding `entity-death`. | Add `interact: {}` inside `crafting.listeners`. |
| `killedentity` never matches. | The killer must be a player and the recipe must run from `entity-death`. |
| A nearby mob recipe works, but kill recipe does not. | You probably used `entity` instead of `killedentity`, or the recipe is not registered for `entity-death`. |
