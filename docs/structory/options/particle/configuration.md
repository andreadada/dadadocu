---
sidebar_position: 1
---

# Particle and Decoration Configuration

The `particle` option stores reusable effects for a structure.

These effects are used by crafting, animations, crates, and other options. A decoration can be a particle, a sound, a flame effect, a box area, or a group of decorations.

## Basic structure

```yaml
options:
  particle:
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

Common crafting keys:

| Key | When used |
|---|---|
| `insert` | An item is dropped into the structure and accepted into a recipe slot. |
| `place` | A player places an item into a recipe slot. |
| `take` | A player removes an item from a recipe slot. |
| `consume` | An ingredient is consumed. |
| `result` | A recipe finishes. |
| `primary` | General reusable helper effect. |
| `secondary` | General reusable helper effect. |

## Sound decoration

```yaml
type: sound
sound: BLOCK_AMETHYST_BLOCK_CHIME
volume: 1
pitch: 1
```

| Field | Description |
|---|---|
| `sound` | Bukkit sound name. |
| `volume` | Sound volume. |
| `pitch` | Sound pitch. |

## Particle decoration

```yaml
type: particle
particle: SOUL_FIRE_FLAME
amount: 5
speed: 0.05
```

| Field | Description |
|---|---|
| `particle` | Bukkit particle name. |
| `amount` | Number of particles. |
| `speed` | Particle speed. |

## Box-sized particle decoration

Use `boxsized` for an area effect.

```yaml
type: boxsized
amount: 20
center-offset: "0 1 0"
start-point-offset: "-2 -1 -2"
end-point-offset: "2 1 2"
particle:
  type: particle
  particle: PORTAL
  amount: 1
  speed: 0.1
```

| Field | Description |
|---|---|
| `amount` | Number of positions sampled inside the box. |
| `center-offset` | Center of the box relative to the structure. |
| `start-point-offset` | First corner relative to the center. |
| `end-point-offset` | Opposite corner relative to the center. |
| `particle` | Decoration used for each sampled position. |

## Flame decoration

```yaml
type: flame
center-offset: "0 1 0"
amount: 20
particle:
  type: particle
  particle: FLAME
  amount: 1
  speed: 0.01
```

Use this for ritual-like ambient effects.

## Grouped decorations

Use `decorations` to play several effects together.

```yaml
type: decorations
sound:
  type: sound
  sound: ENTITY_BLAZE_SHOOT
  volume: 1
  pitch: 1
particles:
  type: particle
  particle: SOUL_FIRE_FLAME
  amount: 5
  speed: 0.05
```

## Referencing another decoration

Use `instance` to reuse a decoration defined in the same structure.

```yaml
options:
  particle:
    primary:
      type: particle
      particle: SOUL_FIRE_FLAME
      amount: 1
    consume:
      type: instance
      key: primary
```

This is useful for animations that repeat the same effect in multiple places.

## Scheduled effects

Some decorations can be scheduled to run repeatedly by adding `schedule: true`.

```yaml
options:
  particle:
    ambient:
      schedule: true
      type: boxsized
      amount: 10
      center-offset: "0 1 0"
      start-point-offset: "-1 0 -1"
      end-point-offset: "1 1 1"
      particle:
        type: particle
        particle: END_ROD
        amount: 1
```

Use scheduled effects carefully. A high amount on many structures can create performance issues.

## Recommended production setup

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
      amount: 8
      speed: 0.02
    result:
      type: decorations
      sound:
        type: sound
        sound: ENTITY_PLAYER_LEVELUP
        volume: 1
        pitch: 1
      particles:
        type: particle
        particle: END_ROD
        amount: 12
        speed: 0.05
```

## Tips

- Use low particle amounts for structures that stay active for a long time.
- Use sounds for important actions such as crafting completion.
- Avoid heavy scheduled particles on servers with many structure instances.
- Put crafting visual effects in `particle`, not directly inside `crafting`.
