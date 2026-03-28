---
sidebar_position: 0
title: Introduction
---

# Recipe Ingredients

In the crafting system, the `ingredients` section defines everything a player needs to provide to successfully craft a recipe. 

## Basic Configuration

Every ingredient is placed inside the `ingredients` node of your recipe. Each ingredient requires an arbitrary, unique key (for example `one`, `two`, `4`, etc.). Inside this key, you must specify the `type` of the ingredient.

### Simple Example
```yaml
ingredients:
  one:
    type: item
    material: WITHER_SKELETON_SKULL
```

---

## Ingredient Types

The plugin supports several types of ingredients to make your crafting requirements flexible.
Some examples: 

### 1. Item (`type: item`)
This requires a standard Minecraft item.
* **`material`**: The standard Bukkit material name (e.g., `WITHER_SKELETON_SKULL`).

### 2. Saved Item (`type: saveditem`)
This type allows you to require custom items that have been previously saved into the plugin using the `CustomItemIngredient` logic.

### 3. Experience (`type: experience`)
This requires the player to have a certain amount of experience levels.
* **`level`**: The exact number of XP levels required (e.g., `9`).


### **Those are just a bunch of ingredients**
---

## Advanced Properties

Every ingredient can be further customized using advanced configuration fields. These options allow you to change how items are processed during the crafting phase:

* **`consume`** (Boolean): Determines whether the ingredient is removed/consumed when the crafting is completed. By default, this value is set to `true`.
* **`animation`**: Allows you to define a specific consume animation for the ingredient (using the `ConsumeAnimation` system). If not specified, it defaults to a no-operation animation.
* **`strategy`**: Defines the execution strategy for consuming the ingredient. By default, this is handled through a `ParallelExecutionStrategy`.

---

## Full Example: Nether Star

Here is a complete example of an `ingredients` section that requires three Wither Skeleton Skulls and 9 Experience levels:

```yaml
ingredients:
  one:
    type: item
    material: WITHER_SKELETON_SKULL
  two:
    type: item
    material: WITHER_SKELETON_SKULL
  three:
    type: item
    material: WITHER_SKELETON_SKULL
  4:
    type: experience
    level: 9
```

Once the player provides all these ingredients, the recipe will be validated and the corresponding `result` will be executed!
```
