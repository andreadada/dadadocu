---
sidebar_position: 1
title: Crafting
---

# Crafting Option

The `crafting` option lets you turn on crafting for a structure. You can adjust a few sections depending on what the structure needs.

Each crafting setup has Recipe Slots where you place the items needed to create something.

---

## How to craft
Once all ingredient requirements for the recipe are fulfilled, simply Right Click the main block of the structure instance to begin crafting.

Make sure the structure is eligible to craft that specific recipe. If multiple recipes share the same ingredients and 
are valid for the structure, one of them will be selected at random.

To be eligible, the Crafting must have either the Recipe's `key` or `group` inside of `recipe-slots` and `recipe-group`

---

## Field Explanation

| Parameter             | Type                                        | Description                                                                 | Default   |
|-----------------------|---------------------------------------------|-----------------------------------------------------------------------------|-----------|
| `insert`              | [Crafting Decoration](#crafting-decoration) | Visual or functional element shown when inserting an item                   | null      |
| `result`              | [Crafting Decoration](#crafting-decoration) | Decoration shown when crafting is completed                                 | null      |
| `place`               | [Crafting Decoration](#crafting-decoration) | Decoration shown when placing an item into a slot                           | null      |
| `take`                | [Crafting Decoration](#crafting-decoration) | Decoration shown when taking an item from a slot                            | null      |
| `consume`             | [Crafting Decoration](#crafting-decoration) | Decoration shown when an item is consumed during crafting                   | null      |
| `recipe-slots`        | [Recipe Slot Layout](#recipe-slot-layout)   | Layout configuration for where recipe items should be placed                | null      |
| `recipe-group`        | List\<String>                               | List of recipe group keys to unlock grouped recipes                         | `DEFAULT` |
| `recipes`             | List\<String>                               | List of direct recipe keys to unlock specific recipes                       | empty     |

---

## Recipe Slot Layout

it is a list of offsets, calculated from `EAST` direction and the center of structure's main block  
each offset will make the block a RecipeSlot which can hold `item ingredients`.

You can `Right Click` a Recipe Slot to insert/take items  
You can `Shift Right Click` to avoid this action

<details>
  <summary>Show YAML example</summary>

```yml
crafting:
  recipe-slots:
    offsets: #slots are ordered from up (first) to bottom (last)
      - "-3 0.0 0"
      - "-2 0.0 2"
      - "-2 0.0 -2"
      - "2 0.0 -2"
      - "2 0.0 2"
      - "0 0.0 3"
      - "0.0 0.0 -3"
      - "3 0.0 0.0"
```
</details>

---

## Crafting Decoration

The crafting decoration is an animation triggered when a specific crafting event occurs.  
It combines **particles** and **sounds** to enhance visual and audio feedback.

### Sections

- `particle`: Defines the particle effect (type, amount, position, etc.)
- `sound`: Defines the sound effect (type, volume, pitch)

Refer to the [Particle Option](../../category/particle-option) for a list of available particle types.

<details>
  <summary>Show YAML example</summary>

```yml
section: #example insert
  particle:
    type: FLAME
    particle: SOUL_FIRE_FLAME
    amount: 10
    count: 1
    center-offset: "0 0 0"
    speed: 0
  sound:
    type: ENTITY_BLAZE_SHOOT
    volume: 1
    pitch: 0
```
</details>
