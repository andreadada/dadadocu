---
sidebar_position: 1
title: Options Overview
---

# Options Overview

Options are placed inside a structure under the `options` section.

They decide what the structure does when it is created, used, or interacted with.

## Example

```yaml
elder_altar:
  name: "Elder Altar"
  check-block: CAULDRON
  orientation: false
  options:
    notify:
      message: "<white>You have created <light_purple>%structure%"
    fireworks:
      type: RANDOM
      amount: 3
      power: 2
    crafting:
      recipe: ["god_apple"]
      recipe-slots:
        offsets:
          - "0 1 0"
  layout:
    levels:
      level0:
        level: 0
        type: STANDARD
        checkers:
          types:
            C: CAULDRON
          main:
            - "C"
```

## Available options

| Option key | Feature | Availability |
|---|---|---|
| `notify` | Sends messages, titles, subtitles, or action bars. | Free |
| `fireworks` | Launches fireworks when the structure is created. | Free |
| `particle` | Plays scheduled and event-based particles or sounds. | Free/Premium depending on decoration type |
| `crafting` | Enables structure crafting. | Free |
| `command` | Runs console or player commands. | Premium |
| `crate` | Creates an item that can place the structure. | Premium |
| `privacy` | Controls who can interact with the structure. | Premium |
| `storage` | Adds storage behavior to the structure. | Premium |
| `bag` | Lets blocks in the structure act as ingredients. | Premium |
| `blockdisplay` | Shows custom block display models. | Premium |
| `rebuild` | Rebuilds or repairs the structure from a builder layout. | Premium |
| `validworlds` | Restricts structure creation to selected worlds. | Premium |

## Configuration style

Each option uses this format:

```yaml
options:
  option_key:
    setting: value
```

You can use multiple options on the same structure:

```yaml
options:
  notify:
    actionbar: "<yellow>Structure created"
  crafting:
    recipe: ["forge"]
  validworlds:
    worlds:
      - "world_nether"
```

## Recommended approach

When creating a new structure, start with only:

1. `notify`
2. a simple `layout`
3. optional `fireworks`

Add crafting, crates, privacy, and advanced options only after the base structure is detected correctly.
