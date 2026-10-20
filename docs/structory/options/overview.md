---
sidebar_position: 1
title: Options Overview
---

# Structure Options

Options live under a structure's `options:` section. They control what a structure does when it is created, used, crafted at or broken.

```yaml
my_altar:
  name: "My Altar"
  check-block: AMETHYST_BLOCK
  options:
    notify:
      message: "<aqua>Altar activated!"
    privacy:
      type: OwnerOnly
  layout:
    levels:
      level0:
        level: 0
        type: STANDARD
        checkers:
          types:
            A: AMETHYST_BLOCK
          main:
            - "A"
```

## Choose an option

| Key | Purpose | Edition |
|---|---|---|
| `notify` | Message, actionbar or title on events | Free |
| `fireworks` | Fireworks when a structure is created | Free |
| `crafting` | Recipes, physical slots, recipe GUI | Free |
| `particle` | Sound, particles, shapes and timed effects | Free / Premium shapes |
| `command` | Player or console commands | Premium |
| `crate` | Placeable structure items | Premium |
| `privacy` | Ownership and access permissions | Premium |
| `bag` | Use structure blocks as ingredient inputs | Premium |
| `storage` | Named internal inventories (current limitations apply) | Premium |
| `blockdisplay` | JSON display models and animations | Premium |
| `rebuild` | Rebuild steps when the structure is broken | Premium |
| `validworlds` | Limit structures to selected worlds | Premium |
| `states` | Effects for idle, active, crafting and other states | Premium |

For a first test, start with `notify` and a minimal `layout`. Add one option at a time so it's clear which part is causing a problem.

Not every option represents a continuously running feature. For example, `states.idle` plays when that state starts, while `particle.ambient.schedule: true` creates a repeated effect. See the [particle guide](./particle/configuration.md) for the difference.
