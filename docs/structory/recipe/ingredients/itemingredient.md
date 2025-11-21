---
sidebar_position: 1
title: Item
---


# How to Set Up an "Item" Ingredient

## What Is an "Item" Ingredient?

An "**item**" ingredient is a way to say:  
**“To craft this recipe, you must use a specific Minecraft item.”**  
For example: a diamond, a stick, or a Wither Skeleton Skull.

***

## Example: The Easiest Setup

Here is a simple setup. It says the recipe needs a Wither Skeleton Skull.

```yaml
ingredients:
  one:
    type: item
    material: WITHER_SKELETON_SKULL
```

**You can copy-and-paste this and just change `WITHER_SKELETON_SKULL` to the item you want.**

***

## Step-by-Step: How to Write Your Item Ingredient

### 1. Start the List

Usually, ingredients go inside their own block called `ingredients:`.

```yaml
ingredients:
```

### 2. Pick a Name

Give each ingredient a name. It can be anything, like `one`, `my_item`, or `diamond`.

```yaml
ingredients:
  my_item:
```

### 3. Set the Type

Type must **always** be `item` (for a Minecraft item):

```yaml
    type: item
```

### 4. Set the Material

Write the *exact* Minecraft material name for your item.  
Examples: `DIAMOND`, `IRON_INGOT`, `STICK`, `STONE`, etc.

```yaml
    material: DIAMOND
```

**Full example:**
```yaml
ingredients:
  my_item:
    type: item
    material: DIAMOND
```

***

## Extra (Optional): Make It More Specific

You can filter even further. Here are some options.

### A. Only Allow a Custom Name

Let’s say you want the item to have a special name in-game.

```yaml
    displayName: "Magic Wand"
```
Now, only an item called "Magic Wand" will work.

### B. Require a Specific Custom Model Data

For special textured items:

```yaml
    model: 123
```
Only items with **model 123** will work.

### C. Require Enchantments

Want an enchanted item? Use this:

```yaml
    enchantments:
      sharpness: 5
      unbreaking: "*"
```
- `sharpness: 5` = Needs Sharpness V
- `unbreaking: "*"` = Any level of Unbreaking

### D. Require Plugin/Custom Data

If you use plugins that save extra data to items:

```yaml
    has:
      custom_key:
        type: STRING
      some_number:
        type: INTEGER
        value: 42
```
- This checks for a custom string.
- It also checks for an integer value of 42.

***

## Full Example (Advanced)

```yaml
ingredients:
  magic_sword:
    type: item
    material: DIAMOND_SWORD
    displayName: "Epic Sword"
    model: 5000
    enchantments:
      sharpness: 5
      unbreaking: "*"
    has:
      owner:
        type: STRING
        value: "Text"
```
This recipe asks for a **diamond sword** that is:
- Named **"Epic Sword"**,
- Has model **5000**,
- Has **Sharpness 5**, any Unbreaking,
- And a custom data key called **owner: PlayerName**.

***


## Summary Table

| Part              | Needed?    | What It Does                               | Example                    |
|-------------------|------------|--------------------------------------------|----------------------------|
| type              | Always     | Tells system it’s an item ingredient       | `type: item`               |
| material          | Always     | Picks the item required                    | `material: STICK`          |
| displayName       | Optional   | Requires an item with a special name       | `displayName: "Staff"`     |
| model             | Optional   | Requires special visual model (for customs)| `model: 123`               |
| enchantments      | Optional   | Enchantment and level required             | `enchantments:`            |
| has               | Optional   | Needs special plugin/custom data           | `has:`                     |

***

## That’s It!

If you follow these steps, you should have no trouble setting up any item ingredient, even if you are not technical.
ntation/good-documentation-practices/)