---
sidebar_position: 1
title: Structure
---

# Structure Configuration

## What is a Structure?

A **structure** is a custom build that can be defined in your configuration files. It can include a layout, a central block, orientation, and optional effects like fireworks or particles. Structures are the core of this plugin.

Each structure is loaded from the `structures` folder. Every YAML file inside that folder can contain **multiple structures**, each defined as a top-level node.

---

## How to Create a Structure In-Game

Once a structure is correctly built in the world, players can **activate it** by sneaking and right-clicking (`Shift + Right Click`) on the **check-block** defined in the configuration.

If the structure matches the layout and orientation, and the check-block is valid, the plugin will:
- Recognize the structure
- Trigger any configured effects (e.g. fireworks, particles, sounds)

> 🧱 Make sure the structure is complete and the player interacts with the correct block!

---

## How Are Structures Loaded?

All structures are automatically loaded from the `structures` directory.  
Each file in that folder can contain one or more structures, defined as separate root-level keys.


<details>
  <summary>Show YAML example</summary>

For example, if you have a file called `altars.yml` like this:

```yaml
elder_altar:
  name: "Elder Altar"
  check-block: CAULDRON
  orientation: false #check only EAST orientation, perfect if the structure is symmetric
  layout:
  # layout definition
  options:
    fireworks:
        type: RANDOM
        amount: 5
        power: 5
        flicker: true
        fade: PURPLE, BLACK, SILVER
        colors: FUCHSIA, PURPLE, WHITE, BLACK

altar_of_darkness:
  name: "altar_of_darkness"
  check-block: OBSIDIAN
  main-block: "0 1 0"
  orientation: false
  layout:
  # layout definition
```

Both `altar_of_light` and `altar_of_darkness` will be loaded as separate structures.

</details>




> Make sure each structure has a unique key and a valid `name` field.

---

## Field Explanation

| Parameter     | Type                           | Description                                                                       | Default    |
|---------------|--------------------------------|-----------------------------------------------------------------------------------|------------|
| *`name`       | String                         | Unique name of the structure                                                      | *          |
| `check-block` | Material                       | Block used to validate the structure (e.g. `STONE`, `GLOWSTONE`)                  | null       |
| `main-block`  | Offset                         | Offset from the center block, written as `"x y z"` (e.g. `"0 0 0"`)               | 0 0 0      |  
| `orientation` | Boolean                        | Whether the structure can be validated on different orientations `EAST`by default | false      |
| `options`     | [Options](../category/options) | Extra effects or behaviors  [Options](../category/options)                        | empty      |
| `layout`      | Layout                         | Defines the shape and levels of the structure                                     | empty      |

---

Need help designing your layout or choosing effects? Join the [Discord](https://discord.gg/KBNDByfjuC) and ask the community!
