---
sidebar_position: 5
title: Create Your First Structure
---

# Create Your First Structure

This tutorial creates a simple 3x3 altar called `magic_altar`.

When a player builds it and activates the center block, Structory will recognize the structure, send a message, and launch fireworks.

## Step 1: Create the file

Open:

```text
plugins/Structory/structures/
```

Create a new file:

```text
magic_altar.yml
```

## Step 2: Add the base structure

```yaml
magic_altar:
  name: "Magic Altar"
  check-block: DIAMOND_BLOCK
  orientation: false
```

Explanation:

| Field | Meaning |
|---|---|
| `magic_altar` | Internal structure key. Use lowercase names without spaces. |
| `name` | Display name used in messages and GUIs. |
| `check-block` | The block players must `Shift + Right Click` to create the structure. |
| `orientation` | `false` means the structure can face any direction. |

## Step 3: Add the layout

The layout is the shape players must build.

```yaml
  layout:
    levels:
      level0:
        level: 0
        type: STANDARD
        checkers:
          types:
            D: DIAMOND_BLOCK
            G: GOLD_BLOCK
          main:
            - "G*G"
            - "*D*"
            - "G*G"
```

This creates a flat 3x3 structure:

```text
G * G
* D *
G * G
```

`G` means `GOLD_BLOCK`, `D` means `DIAMOND_BLOCK`, and `*` means the position is ignored.

## Step 4: Add options

Options define what the structure does.

```yaml
  options:
    notify:
      message: "<white>You have awakened the <aqua>Magic Altar<white>!"
    fireworks:
      type: RANDOM
      amount: 3
      power: 2
```

This sends a message and launches three random fireworks.

## Complete file

```yaml
magic_altar:
  name: "Magic Altar"
  check-block: DIAMOND_BLOCK
  orientation: false
  options:
    notify:
      message: "<white>You have awakened the <aqua>Magic Altar<white>!"
    fireworks:
      type: RANDOM
      amount: 3
      power: 2
  layout:
    levels:
      level0:
        level: 0
        type: STANDARD
        checkers:
          types:
            D: DIAMOND_BLOCK
            G: GOLD_BLOCK
          main:
            - "G*G"
            - "*D*"
            - "G*G"
```

## Step 5: Load and test

1. Save the file.
2. Restart the server or run `/structory reload`.
3. In-game, place four gold blocks in the corners and one diamond block in the center.
4. Sneak and right-click the diamond block.

If the structure is valid, Structory creates the structure instance and runs the configured options.

## Common mistakes

| Problem | Fix |
|---|---|
| Nothing happens when clicking | Make sure you are sneaking and clicking the exact `check-block`. |
| Structure is not detected | Check that the layout matches exactly. |
| YAML error in console | Check indentation and remove tabs. |
| Fireworks or message not working | Make sure `options` is aligned at the same level as `layout`. |
