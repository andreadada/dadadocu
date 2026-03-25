---
sidebar_position: 2
title: Create Your First Structure
---

# Create Your First Structure

Welcome! In this tutorial, we will build a very simple **Magic Altar**. It will be a flat, 3x3 structure. When a player completes it and interacts with the center, it will send them a congratulatory message and launch some fireworks.

By the end of this guide, you will understand the basics of creating and loading any structure.

---

## Step 1: Create the File

All structures are loaded from the `structures` folder. 
Navigate to your plugin's `structures` folder and create a new file named `magic_altar.yml`.

Open the file in your favorite text editor (like VSCode or Notepad++).

---

## Step 2: The Basics

Let's start by defining the core properties of our structure. Copy and paste this into your new file:

```yaml
magic_altar:
  name: "Magic Altar"
  check-block: DIAMOND_BLOCK
  orientation: false
```

* **`magic_altar:`** This is the unique internal key for your structure.
* **`name:`** The display name.
* **`check-block:`** The block the player must `Shift + Right Click` to activate it. We are using a Diamond Block.
* **`orientation: false`** Our altar will be symmetric, so the direction the player builds it doesn't matter.

---

## Step 3: Draw the Blueprint (Layout)

Now we need to tell the plugin what the structure looks like. We will do this using the `layout` section.

Add this right below the basics:

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

### What did we just do?
* **`level: 0`**: We are building on the ground level (no underground or raised blocks for now).
* **`types`**: We created a legend. `D` stands for a Diamond Block, and `G` stands for a Gold Block.
* **`main`**: This is the 3x3 grid!
    * The corners are Gold Blocks (`G`).
    * The center is our Diamond Block (`D`), which is also our `check-block`.
    * The `*` symbol represents any ignored block (or air), so players don't have to fill those spots.

---

## Step 4: Add Some Magic (Options)

A structure isn't very fun if nothing happens when you build it! Let's use the `options` section to add a chat message and some fireworks.

Add this section below `orientation` (and above `layout`):

```yaml
  options:
    notify:
      message: "<white>You have awakened the <aqua>Magic Altar<white>!"
    fireworks:
      type: RANDOM
      amount: 3
      power: 2
```

---

## The Complete Code

If you followed the steps, your `magic_altar.yml` file should look exactly like this:

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

Save your file!

---

## Step 5: Test it In-Game!

1. Restart your server or reload the plugin to load your new `magic_altar.yml` file.
2. Go in-game and grab **4 Gold Blocks** and **1 Diamond Block**.
3. Place them on the ground to match the 3x3 shape: Gold in the corners, Diamond in the exact center.
4. **Sneak (`Shift`) and Right-Click** the Diamond Block in the center.

*Boom!* If you built it correctly, you should see your chat message and fireworks going off in the sky!

🎉 **Congratulations! You have successfully created your first structure!**
```
