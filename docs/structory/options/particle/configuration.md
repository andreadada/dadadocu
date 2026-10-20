---
sidebar_position: 1
title: Particles and Decorations
---

# Particles and Decorations

The `particle` option defines reusable visual and sound effects for a structure. Some keys have special meaning during crafting (`insert`, `place`, `take`, `consume` and `result`); other names, such as `ambient`, are yours to choose.

## A simple example

```yaml
options:
  particle:
    insert:
      type: sound
      sound: BLOCK_AMETHYST_BLOCK_CHIME
      volume: 1
      pitch: 1
    result:
      type: particle
      particle: END_ROD
      amount: 5
      speed: 0.02
```

`primary` and `secondary` are useful reusable names when referenced by other effects. They are not automatically triggered by every event.

## Particle shapes (26.2)

A particle decoration can draw more than one point:

| Shape | Appearance |
|---|---|
| `POINT` | Legacy particle effect at one location. |
| `LINE` / `BEAM` | A straight line / energized beam along a direction. |
| `RING` / `ORBIT` | Horizontal circle. |
| `SPHERE` | Particle sphere. |
| `HELIX` / `DOUBLE_HELIX` | One or two rising spirals. |
| `SPIRAL` / `VORTEX` | Tapering spiral effects. |
| `PULSE` | Expanding and contracting ring. |
| `WAVE` | Wave along a chosen direction. |
| `BOX` | Rectangular wireframe. |
| `STRUCTURE_OUTLINE` | The outside silhouette of the structure's **actual layout**, not just its bounding box. |

### Floating ring

```yaml
options:
  particle:
    core-ring:
      type: particle
      particle: END_ROD
      shape: RING
      amount: 1
      speed: 0
      radius: 1.15
      density: 40
      offset: "0 1.35 0"
      duration: 80
      period: 1
      animated: true
      animation-speed: 0.25
      continuity: true
      schedule: true
      schedule-period: 80
      schedule-delay: 0
```

`density` controls how many points make up a shape (clamped to 1–256); `amount` is the particle count **at each point**. Increasing both can be expensive.

`radius` and `height` determine the dimensions. `direction` defines the axis for line-like shapes. `rotation-speed` controls the rotating phase; `start-angle` and `end-angle` determine the angular sweep.

### Structure outline

```yaml
options:
  particle:
    outline:
      type: particle
      particle: END_ROD
      shape: STRUCTURE_OUTLINE
      amount: 1
      density: 36
      duration: 60
      period: 2
```

The outline follows the exposed outer footprint and surface of the real multiblock layout, including its rotation. Interior/shared edges are excluded. Its geometry is cached per structure, orientation and density and refreshed when structures are reloaded. You don't need to configure `radius` or `height` for this shape.

Regular geometric shapes are centered on the structure's center block when played there. `STRUCTURE_OUTLINE` instead uses block edges to stay aligned with the layout.

## Timing: two different controls

**Rendering duration** is controlled by the particle decoration itself:

| Key | Meaning |
|---|---|
| `duration` | How long one effect runs, in ticks. |
| `period` | Ticks between draws while that effect is active. |
| `animated` | Enables moving/traversing points on supported shapes. |
| `animation-speed` | Rate of traversal. |
| `continuity` | `true` = loop/wrap; `false` = back-and-forth progression. |

**Repeating the entire effect** is configured on the named entry:

| Key | Meaning |
|---|---|
| `schedule: true` | Automatically replay the effect for a live structure instance. |
| `schedule-period` | How frequently it starts, in ticks. |
| `schedule-delay` | Delay before the scheduled effect starts. |

Avoid setting `schedule-period` shorter than `duration` unless overlapping effects are intentional. When `animated: true` and `duration: 0`, Structory derives a finite run length from the animation speed; `duration: 0` does **not** mean an endless particle task.

## Sounds and groups

```yaml
options:
  particle:
    result:
      type: decorations
      sound:
        type: sound
        sound: ENTITY_PLAYER_LEVELUP
        volume: 1
        pitch: 1
        at: 0
      spark:
        type: particle
        particle: END_ROD
        amount: 8
        at: 10
```

The optional `at` value is a delay in ticks. Leave it out to play that child immediately.

To reuse an existing effect:

```yaml
options:
  particle:
    primary:
      type: particle
      particle: SOUL_FIRE_FLAME
      amount: 2
    consume:
      type: instance
      key: primary
```

Other supported decorations include `boxsized` and `flame`; they have their own pages in this section.

## Performance

Start with `amount: 1`, moderate `density` and `period: 2` or higher. The approximate work per draw rises with **amount × density × active instances**. Large scheduled effects running on dozens of altars are much costlier than one-off crafting effects.

For a working combination of a ring, double helix and animated model, use the bundled Diamond Core Reactor example.
