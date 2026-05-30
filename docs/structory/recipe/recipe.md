---
sidebar_position: 1
title: Recipes
---

# Recipes

Recipes define what a structure can craft.

Recipes are stored in:

```text
plugins/Structory/recipes/
```

Each `.yml` file can contain one or more recipes.

## Basic recipe

```yaml
nether_star:
  name: nether_star
  display_name: "Nether Star"
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
  result:
    one:
      type: item
      offset: "0 0 0"
      item:
        material: NETHER_STAR
```

## Fields

| Field | Type | Required | Description |
|---|---:|---:|---|
| `name` | Text | Yes | Internal recipe name. Usually the same as the top-level key. |
| `display_name` | Text | No | Name shown in recipe GUIs. |
| `listeners` | List | No | Events that can trigger this recipe. If omitted, Structory uses `interact`. |
| `discovers` | Text or list | No | Key used to make this recipe available to structures. If omitted, Structory uses `default`. |
| `ingredients` | Section | Yes | Required ingredients. |
| `result` | Section | Yes | What happens after crafting. |
| `item-display` | Item section | No | Item shown in the recipe picker GUI. |

## Recipe keys and names

The top-level key should be simple:

```yaml
god_apple:
  name: god_apple
```

Recommended style:

- lowercase;
- no spaces;
- underscores for readability.

## Making a recipe available to a structure

Use `discovers` in the recipe and `recipe` in the structure.

Structure:

```yaml
options:
  crafting:
    recipe: ["default", "forgery"]
```

Recipe:

```yaml
hephaestus_bless:
  name: hephaestus_bless
  discovers: "forgery"
```

If `discovers` is missing, the recipe belongs to `default`.

If `recipe` is missing in the structure, the structure can craft recipes that discover `default`.

## Ingredients

Every child under `ingredients` is one requirement.

```yaml
ingredients:
  one:
    type: item
    material: APPLE
  two:
    type: item
    material: GOLD_BLOCK
```

The child names, such as `one` and `two`, are just internal labels.

Most ingredients support:

| Field | Description |
|---|---|
| `type` | Ingredient type. |
| `consume` | If `false`, the ingredient is required but not removed. |
| `animation` | Optional consume animation override for this ingredient. |
| `strategy` | Optional consume strategy override for this ingredient. |

Example with a custom animation on one ingredient:

```yaml
ingredients:
  catalyst:
    type: item
    material: NETHER_STAR
    animation:
      type: item
      duration: 60
      speed: 2
```

See [Animations and Consumption](./animations-and-consumption.md).

## Results

Every child under `result` is executed after the recipe is crafted.

```yaml
result:
  one:
    type: item
    offset: "0 0 0"
    item:
      material: GOLDEN_APPLE
  two:
    type: message
    message: "<yellow>You crafted a special apple."
```

## Listeners

If `listeners` is missing, the recipe uses `interact`.

```yaml
apple_recipe:
  name: apple_recipe
  ingredients:
    apple:
      type: item
      material: APPLE
```

This recipe is checked when a player right-clicks a structure that has the crafting option.

Use `listeners` when the recipe should be triggered by a different event.

```yaml
mob_sacrifice:
  name: mob_sacrifice
  listeners:
    - entity-death
  ingredients:
    kill:
      type: killedentity
      entities:
        - ZOMBIE
```

For event-based recipes, the structure must also enable the same listener inside `options.crafting.listeners`.

See [Recipe Listeners](./listeners.md).

## GUI display item

`item-display` controls how a recipe appears in the recipe picker GUI.

```yaml
item-display:
  material: NETHER_STAR
  name: "%displayname%"
  lore: "<br><gray>Click to craft this item"
```

If no display item is configured, Structory uses the default item from `gui.yml` or the plugin default.

## Full example

```yaml
strange_apple:
  name: strange_apple
  display_name: "Strange Apple"
  discovers: "default"
  item-display:
    material: APPLE
    name: "<light_purple>Strange Apple"
    lore: "<br><gray>Click to craft"
  ingredients:
    apple:
      type: item
      material: APPLE
    wart:
      type: item
      material: NETHER_WART
  result:
    item:
      type: saveditem
      offset: "0 0 0"
      key: strangeapple
    message:
      type: message
      message: "<yellow>You crafted a Strange Apple."
```

## Event-based full example

Structure:

```yaml
options:
  crafting:
    recipe: ["mob_sacrifice"]
    listeners:
      interact: {}
      entity-death:
        range: 8
    recipe-slots:
      offsets:
        - "0 1 1"
```

Recipe:

```yaml
mob_sacrifice:
  name: mob_sacrifice
  listeners:
    - entity-death
  discovers: "mob_sacrifice"
  ingredients:
    kill:
      type: killedentity
      entities:
        - ZOMBIE
  result:
    reward:
      type: item
      offset: "0 0 0"
      item:
        material: DIAMOND
```

## Common mistakes

| Problem | Fix |
|---|---|
| Recipe never appears | Check `recipe` in the structure and `discovers` in the recipe. |
| Recipe works by right-click but not on mob kill | Add `listeners: [entity-death]` to the recipe and `crafting.listeners.entity-death.range` to the structure. |
| Normal right-click crafting stopped after adding listeners | Add `interact: {}` inside `crafting.listeners`. |
| Ingredient is not detected | Make sure the ingredient type exists and the dependency plugin is loaded. |
| `killedentity` never works | Use the `entity-death` listener. It does not work as a normal right-click ingredient. |
| Result item does not spawn | Check `result`, `type`, `item`, and `offset`. |
| GUI item is generic | Add `item-display` or edit the GUI configuration. |
| YAML error | Check indentation and avoid tabs. |
