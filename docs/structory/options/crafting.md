---
sidebar_position: 4
---

# Crafting Option

The `crafting` option turns a structure into a crafting station.

Players can place ingredients into physical recipe slots, then trigger a recipe by right-clicking the structure or by another configured listener such as `entity-death`.

## Minimal setup

```yaml
options:
  crafting:
    recipe: ["nether_star"]
    recipe-slots:
      offsets:
        - "-1 1 0"
        - "0 1 0"
        - "1 1 0"
```

This creates a structure with three physical ingredient slots and allows it to craft recipes available through the `nether_star` discover key.

## Main fields

| Field | Type | Required | Description |
|---|---|---|---|
| `recipe` | Text or list | No | Recipe keys or discover keys available to this structure. If omitted, Structory uses `default`. |
| `recipe-slots.offsets` | List of vectors | Required for item-slot crafting | Physical item slot positions, relative to the structure center. |
| `open-gui` | Text | No | Use `ALWAYS` to always open the recipe picker GUI. |
| `listeners` | Section | No | Which events can trigger crafting for this structure. If omitted, `interact` is enabled. |
| `animation` | Section | No | Default consume animation for the station. |
| `strategy` | Section | No | Default consume strategy for the station. |

Older examples may also contain `insert`, `place`, `take`, `consume`, or `result` inside `crafting`. New configurations should place visual effects inside the `particle` option instead.

## How crafting works

A recipe is crafted only when all of these are true:

1. The structure has the `crafting` option.
2. The structure has generated its recipe slots when the recipe needs physical items.
3. The recipe is available to that structure through `recipe` and recipe-side `discovers`.
4. The recipe is registered for the listener that triggered the craft.
5. All recipe ingredients match the current context.
6. The player chooses the recipe, or Structory crafts directly when only one valid recipe exists.

This matters for event-based recipes. A normal right-click recipe and an entity-death recipe are not triggered by the same listener.

## Recipe slots

Recipe slots are positions where players can place items. They are relative to the structure center.

```yaml
recipe-slots:
  offsets:
    - "-3 0 0"
    - "3 0 0"
    - "0 0 3"
    - "0 0 -3"
```

A slot position should usually point to a visible block or an intentionally empty position above a block, so players understand where to interact.

Players can interact with recipe slots in two ways:

- right-click a slot to place or take an item;
- drop an item near the structure center to insert it into an available slot.

Structory protects recipe slot item entities from normal pickup, damage, and despawn behavior while they belong to the structure.

## Making recipes available

A structure does not automatically craft every recipe in the server. The recipe must be made available to the structure.

Structure:

```yaml
options:
  crafting:
    recipe: ["default", "forgery"]
```

Recipe:

```yaml
hephaestus_bless:
  name: hephaestus_bless
  discovers: "forgery"
```

If `discovers` is not configured in a recipe, Structory treats it as `default`.

If `recipe` is not configured in the structure, Structory treats the structure as having `default`.

## Recipe picker GUI

By default, Structory crafts directly when only one recipe matches. If several recipes match, it opens the recipe picker.

Use this to always open the recipe picker:

```yaml
open-gui: ALWAYS
```

Use this when:

- the station has many possible recipes;
- the same ingredients can match more than one recipe;
- you want players to always confirm the selected result.

The item shown in the recipe picker is configured inside each recipe with `item-display`. See the recipe GUI page for the supported display fields.

## Listeners

If `listeners` is not present, Structory enables only `interact`.

```yaml
options:
  crafting:
    recipe: ["default"]
    recipe-slots:
      offsets:
        - "0 1 1"
```

When you add a `listeners` section, list every trigger you want.

```yaml
options:
  crafting:
    recipe: ["default", "mob_sacrifice"]
    listeners:
      interact: {}
      entity-death:
        range: 8
    recipe-slots:
      offsets:
        - "0 1 1"
        - "0 1 -1"
```

Available listeners in the current build:

| Listener | Trigger | Structure configuration |
|---|---|---|
| `interact` | Player right-clicks the structure main block. | `interact: {}` |
| `entity-death` | An entity dies near a loaded structure instance. | `entity-death.range` |

The recipe also needs to be registered for the same listener.

## Entity-death example

Structure:

```yaml
soul_altar:
  name: "Soul Altar"
  check-block: CRYING_OBSIDIAN
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
      offset: "0 1 0"
      item:
        material: DIAMOND
```

This recipe can only be checked when a zombie is killed near the structure. It will not craft by right-clicking the structure because the recipe is registered for `entity-death`.

## Animation

The `animation` section controls the visible consume effect.

Simple animation:

```yaml
animation:
  type: consume
  delay: 10
```

Typed animation:

```yaml
animation:
  type: typed
  item:
    type: particle
    duration: 40
    speed: 3
    middle:
      type: particle
      particle: SOUL_FIRE_FLAME
      amount: 1
  default:
    type: consume
    delay: 10
```

Supported animation types:

| Type | Description |
|---|---|
| `consume` | Plays the structure's `consume` effect and consumes the ingredient. |
| `item` | Moves the visible item entity toward the structure center. |
| `particle` | Draws a particle path from the slot to the center. |
| `typed` | Chooses an animation by ingredient group. |

Animations can also be configured inside a single recipe ingredient to override the station default.

## Strategy

The `strategy` section controls whether ingredients are consumed together or one after another.

```yaml
strategy:
  type: parallel
```

or:

```yaml
strategy:
  type: typed
  item:
    type: sequential
```

Supported strategy types:

| Type | Description |
|---|---|
| `parallel` | Consumes matching ingredients at the same time. |
| `sequential` | Consumes ingredients one after another. |
| `typed` | Uses different strategies for different ingredient groups. |

For typed strategy, prefer explicit groups such as `item`, `experience`, `bag`, `entity`, `vault`, and `coinsengine`. Do not rely on a `default:` child as the fallback in the current build.

## Particle option for crafting effects

Use the `particle` option for insert, place, take, consume, and result effects.

```yaml
options:
  crafting:
    recipe: ["default"]
    recipe-slots:
      offsets:
        - "0 1 1"
        - "0 1 -1"
  particle:
    insert:
      type: sound
      sound: BLOCK_BREWING_STAND_BREW
      volume: 1
      pitch: 1
    place:
      type: sound
      sound: ENTITY_ITEM_FRAME_PLACE
      volume: 1
      pitch: 1
    take:
      type: sound
      sound: ENTITY_ITEM_FRAME_REMOVE_ITEM
      volume: 1
      pitch: 1
    consume:
      type: particle
      particle: SOUL_FIRE_FLAME
      amount: 10
    result:
      type: sound
      sound: ENTITY_PLAYER_LEVELUP
      volume: 1
      pitch: 1
```

Crafting effect keys:

| Key | When it is used |
|---|---|
| `insert` | Item is dropped into the structure area and accepted into a slot. |
| `place` | Player places an item into a slot by right-clicking the slot. |
| `take` | Player removes an item from a slot. |
| `consume` | Ingredient is consumed during crafting. |
| `result` | Recipe finishes and results are executed. |

## Practical recommendations

- Start with `recipe`, `recipe-slots`, and no custom animation.
- Add `open-gui: ALWAYS` only when the station has multiple recipes or when you want players to always confirm the craft.
- Use the `particle` option for insert, place, take, consume, and result effects.
- Use `animation` and `strategy` only after the recipe works.
- For event-based recipes, configure listeners both in the structure and in the recipe.
- Do not use `killedentity` with a normal `interact` recipe. It needs the `entity-death` listener.
