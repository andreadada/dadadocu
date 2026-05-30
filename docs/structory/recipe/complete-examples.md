---
sidebar_position: 9
---

# Complete Recipe Examples

Use these examples as starting points. Copy one example, test it, then add more options gradually.

## Example 1: simple right-click crafting station

Structure:

```yaml
simple_forge:
  name: "Simple Forge"
  check-block: FURNACE
  options:
    crafting:
      recipe: ["simple_forge"]
      recipe-slots:
        offsets:
          - "0 1 1"
          - "0 1 -1"
    particle:
      consume:
        type: particle
        particle: FLAME
        amount: 8
      result:
        type: sound
        sound: ENTITY_PLAYER_LEVELUP
        volume: 1
        pitch: 1
```

Recipe:

```yaml
refined_iron:
  name: refined_iron
  discovers: "simple_forge"
  item-display:
    material: IRON_INGOT
    name: "Refined Iron"
    lore:
      - "Consumes iron and coal."
  ingredients:
    iron:
      type: item
      material: IRON_INGOT
    coal:
      type: item
      material: COAL
  result:
    reward:
      type: item
      offset: "0 1 0"
      item:
        material: IRON_BLOCK
```

## Example 2: forced recipe picker

Structure:

```yaml
choice_forge:
  name: "Choice Forge"
  check-block: BLAST_FURNACE
  options:
    crafting:
      recipe: ["choice_forge"]
      open-gui: ALWAYS
      recipe-slots:
        offsets:
          - "0 1 1"
```

Recipe A:

```yaml
coal_to_iron:
  name: coal_to_iron
  discovers: "choice_forge"
  item-display:
    material: IRON_INGOT
    name: "Create Iron"
  ingredients:
    input:
      type: item
      material: COAL
  result:
    reward:
      type: item
      offset: "0 1 0"
      item:
        material: IRON_INGOT
```

Recipe B:

```yaml
coal_to_gold:
  name: coal_to_gold
  discovers: "choice_forge"
  item-display:
    material: GOLD_INGOT
    name: "Create Gold"
  ingredients:
    input:
      type: item
      material: COAL
  result:
    reward:
      type: item
      offset: "0 1 0"
      item:
        material: GOLD_INGOT
```

## Example 3: entity-death ritual

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
    particle:
      consume:
        type: particle
        particle: SOUL_FIRE_FLAME
        amount: 12
      result:
        type: decorations
        sound:
          type: sound
          sound: ENTITY_WITHER_SPAWN
          volume: 0.5
          pitch: 1
        particles:
          type: particle
          particle: END_ROD
          amount: 20
```

Recipe:

```yaml
soul_essence:
  name: soul_essence
  discovers: "soul_altar"
  listeners:
    - entity-death
  item-display:
    material: ECHO_SHARD
    name: "Soul Essence"
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
      offset: "0 1 0"
      item:
        material: ECHO_SHARD
        name: "Soul Essence"
```

The player places the catalyst, then kills a zombie near the structure.

## Example 4: cinematic consume animation

Structure:

```yaml
ritual_core:
  name: "Ritual Core"
  check-block: BEACON
  options:
    crafting:
      recipe: ["ritual_core"]
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
    particle:
      primary:
        type: particle
        particle: SOUL_FIRE_FLAME
        amount: 1
        speed: 0.02
      consume:
        type: particle
        particle: SOUL_FIRE_FLAME
        amount: 8
      result:
        type: sound
        sound: ENTITY_PLAYER_LEVELUP
        volume: 1
        pitch: 1
```

Recipe:

```yaml
ritual_reward:
  name: ritual_reward
  discovers: "ritual_core"
  item-display:
    material: NETHER_STAR
    name: "Ritual Reward"
  ingredients:
    diamond:
      type: item
      material: DIAMOND
    emerald:
      type: item
      material: EMERALD
  result:
    reward:
      type: item
      offset: "0 1 0"
      item:
        material: NETHER_STAR
```

## Example 5: economy recipe

```yaml
paid_reward:
  name: paid_reward
  discovers: "market_altar"
  item-display:
    material: EMERALD
    name: "Paid Reward"
  ingredients:
    money:
      type: vault
      operator: ">="
      value: 500
      consume: true
  result:
    reward:
      type: item
      offset: "0 1 0"
      item:
        material: EMERALD_BLOCK
```

Vault and a compatible economy plugin must be installed.
