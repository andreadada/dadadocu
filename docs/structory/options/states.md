---
sidebar_position: 13
title: Structure States
---

# Structure States (Premium)

The `states` option lets a structure play different decorations depending on what is happening to it.

A state is an effect, not a separate physical structure or an inventory. It is useful for adding a quiet idle glow, an interaction cue or a crafting animation.

## Example

```yaml
options:
  states:
    idle:
      type: particle
      particle: END_ROD
      amount: 2
    active:
      type: sound
      sound: BLOCK_AMETHYST_BLOCK_CHIME
      volume: 1
      pitch: 1
      hold: 20
    crafting:
      type: particle
      particle: SOUL_FIRE_FLAME
      amount: 8
    success:
      type: sound
      sound: ENTITY_PLAYER_LEVELUP
      volume: 1
      pitch: 1
      hold: 30
    disabled:
      type: sound
      sound: BLOCK_BEACON_DEACTIVATE
      volume: 1
      pitch: 1
```

Each entry uses a regular [decoration](./particle/configuration.md), so a state can also be a group of particles and sounds.

## State names

| State | When it is used |
|---|---|
| `idle` | When the instance is created or loaded, and after temporary states end. |
| `active` | On player interaction with the structure. |
| `crafting` | When a valid crafting event begins. |
| `success` | After a successful recipe result is played. |
| `error` | Available for addon/explicit transitions; not every failed recipe triggers it automatically. |
| `disabled` | When the structure is broken. |

`hold` is in server ticks. For temporary states it controls how long before Structory returns to `idle`. The standard hold for `active`, `success` and `error` is 20 ticks; set it explicitly to change the time.

If you want a **continuous** ambient effect, use a scheduled particle decoration under `options.particle`. An `idle` state by itself plays its decoration on transition; it does not automatically schedule particles forever.
