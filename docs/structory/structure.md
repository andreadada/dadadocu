---
sidebar_position: 1
title: Structures
---

# Structure Configuration

## What is a Structure?

A **structure** is a custom build that you can define in your configuration files. It can include a specific layout (a block grid map), a central interaction block, orientation rules, and a variety of optional effects like fireworks, particles, or crafting interactions. Structures are the core of this plugin.

All structures are automatically loaded from the `structures` directory. Each YAML file inside that folder can contain **multiple structures**, each defined as a top-level (root) node.

---

## How to Activate a Structure In-Game

Once a player has built the structure in the world so that it perfectly matches the required layout, they can **activate it** by sneaking and right-clicking (`Shift + Right Click`) on the **check-block** defined in your configuration.

If the structure matches the layout, respects the orientation, and the check-block is valid, the plugin will:
- Recognize and validate the structure.
- Trigger all configured options or effects (e.g., opening a crafting GUI, sending messages, spawning particles, playing sounds, etc.).

> 🧱 **Note:** Make sure the structure is 100% complete and the player interacts with the exact block defined as the `check-block`!

---

## Main Parameters (Fields)

Every structure is defined by some fundamental properties. Here is the explanation of all the main fields you can use:

| Parameter | Type | Description | Default |
|---|---|---|---|
| **`name`** | String | **Required.** The unique identifier name of the structure. | *Null* |
| `check-block` | Material | The exact block players must click (`Shift + Right Click`) to activate the structure (e.g., `CAULDRON`, `OBSIDIAN`). | *Null* |
| `main-block` | Offset (Vector) | The offset from the center block, written as `"x y z"` (e.g., `"0 1 0"`). | `0 0 0` |
| `center-offset` | Offset (Vector) | An optional offset to recalibrate the visual or logical center of the structure. | *Empty* |
| `orientation` | Boolean | If set to `false`, it ignores orientation (perfect for symmetric structures). If `true`, it requires the structure to face a specific direction (defaults to `EAST`). | `false` |
| `options` | [Options](../category/options) | Enables extra features like crafting, crates, particles, notifications, etc. | *Empty* |
| `layout` | Layout | The "blueprint" of the structure, divided into levels (Y-axis) to determine the exact block positions. | *Empty* |

---

## How to Design the Layout

The `layout` is the blueprint of the blocks that make up your structure. It is built level by level (Y-axis) using a visual text-based grid.

Each level requires:
1. **`level`**: The relative height of the level (e.g., `0` for ground level, `-1` for underground blocks, `1` for the first floor).
2. **`checkers.types`**: A legend mapping a letter (or symbol) to a Minecraft material (e.g., `X: BLACKSTONE_WALL`). The `*` (asterisk) symbol is generally used to ignore a block or indicate air.
3. **`checkers.main`**: The actual grid that draws the shape.

### Layout Example:

Here is an example of a two-story layout, taken from the *Elder Altar* structure:

```yaml
  layout:
    levels:
      level0: # Ground level
        level: 0
        type: STANDARD
        checkers:
          types:
            X: BLACKSTONE_WALL
            C: CAULDRON
          main:
            - "***X***"
            - "*X***X*"
            - "*******"
            - "X**C**X" # C is the cauldron in the center
            - "*******"
            - "*X***X*"
            - "***X***"
      level-1: # Underground level (-1)
        level: -1
        type: STANDARD
        checkers:
          types:
            C: CRYING_OBSIDIAN
            E: END_STONE
            O: OBSIDIAN
          main:
            - "***C***"
            - "*CEEEC*"
            - "*EOEOE*"
            - "CEECEEC"
            - "*EOEOE*"
            - "*CEEEC*"
            - "***C***"
````

-----

## Options Overview

The `options` section brings your structure to life. From the config file, you can add many modules, including:

* **`privacy`**: To restrict the use of the structure (e.g., owner only).
* **`notify`**: To send chat or actionbar messages during creation or interaction.
* **`crafting`**: To turn the structure into a fully customized crafting station, with recipes, slot positions, and advanced animations.
* **`crate`**: To allow the structure to function as a "placeable" object via custom physical items (e.g., "Box: Elder Altar").
* **`particle` & `fireworks`**: To visually decorate the activation or usage with scheduled fireworks and particles.

*(To learn more about each option, check the [Options](https://www.google.com/search?q=../category/options) category)*

-----

<details>

<summary>Click to see a complete YAML example (Elder Altar)</summary>

```yaml
elder_altar:
  name: "Elder Altar"
  check-block: CAULDRON
  orientation: false
  options:
    notify:
      message: "<white>You have created <light_purple>%structure%"
      actionbar: "<white>Now you can craft <light_purple>serious<white> items"
    fireworks:
      type: RANDOM
      amount: 5
      power: 5
      flicker: true
      fade: PURPLE, BLACK, SILVER
      colors: FUCHSIA, PURPLE, WHITE, BLACK
  layout:
    levels:
      level0:
        level: 0
        type: STANDARD
        checkers:
          types:
            X: BLACKSTONE_WALL
            C: CAULDRON
          main:
            - "***X***"
            - "*X***X*"
            - "*******"
            - "X**C**X"
            - "*******"
            - "*X***X*"
            - "***X***"
```

</details>

-----

*Need help designing your layout or choosing effects? Join our [Discord](https://discord.gg/KBNDByfjuC) and ask the community\!*
