---
sidebar_position: 4
---

# Animations and Consumption

Crafting has two separate concepts:

- `animation`: what the player sees while ingredients are consumed;
- `strategy`: whether ingredients are consumed together or one after another.

Both can be configured at structure level and, when needed, inside a specific recipe ingredient.

## Where to configure them

| Level | Location | Effect |
|---|---|---|
| Structure default | `options.crafting.animation` and `options.crafting.strategy` | Default behavior used by the crafting station. |
| Recipe ingredient override | `ingredients.<id>.animation` and `ingredients.<id>.strategy` | Overrides only that ingredient. |

Start at structure level. Use recipe-level overrides only for special ingredients.

## Structure-level example

```yaml
options:
  crafting:
    recipe: ["default"]
    recipe-slots:
      offsets:
        - "-1 1 0"
        - "1 1 0"
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
          speed: 0.02
      default:
        type: consume
        delay: 10
    strategy:
      type: typed
      item:
        type: sequential
```

This setup makes item ingredients consume one after another with a particle path. Other ingredient groups use the plugin fallback behavior.

## Recipe-level override example

```yaml
special_recipe:
  name: special_recipe
  ingredients:
    normal_item:
      type: item
      material: IRON_INGOT
    catalyst:
      type: item
      material: NETHER_STAR
      animation:
        type: item
        duration: 60
        speed: 2
        start:
          type: particle
          particle: PORTAL
          amount: 3
        end:
          type: particle
          particle: EXPLOSION
          amount: 1
      strategy:
        type: sequential
  result:
    reward:
      type: item
      offset: "0 1 0"
      item:
        material: DIAMOND
```

Only `catalyst` uses the custom animation and strategy. The other ingredient uses the structure default.

## Animation types

### `consume`

```yaml
animation:
  type: consume
  delay: 20
```

Consumes the ingredient and plays the structure's `consume` decoration from the `particle` option.

`delay` is measured in ticks. `20` ticks are about one second.

### `item`

```yaml
animation:
  type: item
  duration: 40
  speed: 3
  start:
    type: particle
    particle: SOUL_FIRE_FLAME
    amount: 1
  end:
    type: particle
    particle: END_ROD
    amount: 4
```

Moves the visible item entity from the recipe slot toward the structure center.

Use it mainly for item ingredients placed in physical slots.

### `particle`

```yaml
animation:
  type: particle
  duration: 40
  speed: 3
  start:
    type: particle
    particle: SOUL_FIRE_FLAME
    amount: 2
  middle:
    type: particle
    particle: SOUL_FIRE_FLAME
    amount: 1
    speed: 0.02
  end:
    type: particle
    particle: END_ROD
    amount: 4
```

Removes the visible item and draws a particle path toward the center.

Use it when you want a clean visual trail instead of physically moving the item.

### `typed`

```yaml
animation:
  type: typed
  item:
    type: particle
    duration: 40
    speed: 3
  experience:
    type: consume
    delay: 10
  default:
    type: consume
```

Selects the animation based on ingredient group.

Common groups:

| Group | Used by |
|---|---|
| `item` | `item`, `saveditem`, and supported custom item plugin ingredients. |
| `experience` | `experience`. |
| `bag` | `bag`, `unorderedbag`. |
| `entity` | nearby entity ingredient. |
| `entitykilled` | killed entity ingredient. |
| `vault` | Vault money ingredient. |
| `coinsengine` | CoinsEngine ingredient. |
| `default` | Fallback animation when no specific group matches. |

## Strategy types

### `parallel`

```yaml
strategy:
  type: parallel
```

Consumes matching ingredients at the same time.

Use this for fast, simple recipes.

### `sequential`

```yaml
strategy:
  type: sequential
```

Consumes matching ingredients one after another.

Use this when each ingredient should be visible during the animation.

### `typed`

```yaml
strategy:
  type: typed
  item:
    type: sequential
  experience:
    type: parallel
```

Uses a different strategy depending on ingredient group.

Important behavior in the current build:

- `item` is the most useful group to configure;
- unmatched groups fall back to the plugin's internal default strategy;
- unlike typed animations, a `default:` child inside typed strategy should not be relied on as the fallback.

For this reason, prefer explicit groups such as `item`, `experience`, `bag`, `entity`, `vault`, and `coinsengine`.

## Using decorations inside animations

The `start`, `middle`, and `end` sections use the same decoration format as the `particle` option.

Inline decoration:

```yaml
middle:
  type: particle
  particle: SOUL_FIRE_FLAME
  amount: 1
```

Reference a decoration already defined in the structure's `particle` option:

```yaml
middle:
  type: instance
  key: primary
```

Structure particle option:

```yaml
options:
  particle:
    primary:
      type: particle
      particle: SOUL_FIRE_FLAME
      amount: 1
```

This keeps large configurations cleaner.

## Recommended particle option setup

Crafting can use the following particle keys:

| Key | When used |
|---|---|
| `insert` | Item is dropped into the structure area and accepted into a slot. |
| `place` | Player places an item into a recipe slot by right-clicking. |
| `take` | Player removes an item from a recipe slot. |
| `consume` | Ingredient is consumed. |
| `result` | Recipe finishes and results are executed. |
| `primary` | General helper decoration for custom animations. |
| `secondary` | General helper decoration for custom animations. |

Example:

```yaml
options:
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
    primary:
      type: particle
      particle: SOUL_FIRE_FLAME
      amount: 1
    secondary:
      type: particle
      particle: END_ROD
      amount: 3
```

## Practical defaults

For a simple production server:

```yaml
crafting:
  recipe: ["default"]
  recipe-slots:
    offsets:
      - "0 1 1"
      - "0 1 -1"
  animation:
    type: consume
    delay: 5
  strategy:
    type: parallel
```

For a more cinematic altar:

```yaml
crafting:
  recipe: ["default"]
  recipe-slots:
    offsets:
      - "-2 0 0"
      - "2 0 0"
      - "0 0 2"
      - "0 0 -2"
  animation:
    type: typed
    item:
      type: particle
      duration: 50
      speed: 2
      middle:
        type: instance
        key: primary
    default:
      type: consume
      delay: 10
  strategy:
    type: typed
    item:
      type: sequential
```

## Notes

- Animations run only after a valid recipe has been selected.
- If an ingredient has `consume: false`, it can still be checked, but it is not removed.
- `item` and `particle` animations work best with physical recipe slot ingredients.
- Event-only ingredients such as `killedentity` normally do not have a visible slot, so use `consume` or no custom animation for them.
- Test cinematic animations with several players nearby before using them on a production server.
