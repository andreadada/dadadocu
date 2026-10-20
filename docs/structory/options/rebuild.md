---
sidebar_position: 11
title: Rebuild
---

# Rebuild (Premium)

The `rebuild` option runs a sequence of block builders after a structure is broken. You can place replacement blocks, clear parts of a layout or build a short destruction/reconstruction sequence.

Each step belongs under `options.rebuild.build`. **Use `type`, not `class`.**

## Working example

```yaml
options:
  rebuild:
    mode: BOTTOM_UP
    delay: 10
    block-delay: 3
    build:
      center:
        order: 0
        type: place
        material: COPPER_BLOCK
        offset: "0 0 0"
      above:
        order: 1
        type: place
        material: COBBLED_DEEPSLATE_SLAB
        offset: "0 1 0"
```

`delay` is the initial wait in ticks, and `block-delay` is the separation between successive steps.

## Rebuild modes

| Mode | Behavior |
|---|---|
| `INSTANT` | All steps are executed after the initial delay. |
| `RANDOM` | Steps run in a deterministic shuffled order. |
| `BOTTOM_UP` / `TOP_DOWN` | Sorted by height. |
| `CENTER_OUT` / `OUTSIDE_IN` | Sorted by distance from the center. |
| `LAYER` | Steps on the same level run together. |
| `RADIAL` | Sorted by horizontal distance from the center. |

Use `mode: LAYER` with `direction: TOP_DOWN` to build from above. The ordering modes affect the *timing*, not which blocks are changed.

The `build` section uses structure builders such as `place`, `destroy` and `destroylayout`. For example, the bundled `generator_1.yml` contains a rebuild sequence you can adapt.

## Add an effect to each step

```yaml
options:
  rebuild:
    mode: BOTTOM_UP
    delay: 10
    block-delay: 4
    effects:
      type: particle
      particle: END_ROD
      amount: 4
    build:
      base:
        order: 0
        type: place
        material: STONE
        offset: "0 0 0"
```

Test on a copy of your world first: rebuilding can overwrite blocks, and different protection plugins may react differently to scripted placement. Rebuild is not a general backup/rollback system.
