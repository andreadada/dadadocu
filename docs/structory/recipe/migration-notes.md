---
sidebar_position: 10
---

# Migration Notes

This page helps administrators update older Structory configurations.

## Use `recipe` and `discovers`

Some old examples use `recipe-group` inside the structure crafting option.

For new configurations, use `recipe` on the structure:

```yaml
options:
  crafting:
    recipe: ["forge"]
```

Then use `discovers` in the recipe:

```yaml
my_recipe:
  discovers: "forge"
```

If a recipe has no `discovers`, Structory treats it as `default`.

If a structure has no `recipe`, Structory treats it as `default`.

## Move old crafting effects to `particle`

Old configurations may place effects directly inside `crafting`:

```yaml
crafting:
  consume:
    type: particle
    particle: FLAME
```

Use the `particle` option instead:

```yaml
options:
  crafting:
    recipe: ["default"]
  particle:
    consume:
      type: particle
      particle: FLAME
      amount: 8
```

This keeps crafting logic and visual effects separated.

## Add listeners explicitly

If you add a listener section, include all listeners you still want to use.

Before:

```yaml
crafting:
  recipe: ["default"]
```

After, with both right-click and entity-death:

```yaml
crafting:
  recipe: ["default", "soul_altar"]
  listeners:
    interact: {}
    entity-death:
      range: 8
```

Without `interact: {}`, normal right-click crafting may no longer be enabled for that structure.

## Replace unclear dependency aliases

Prefer readable aliases:

| Instead of | Prefer |
|---|---|
| `ceitem` | `craftengine` |
| `oitem` as ingredient | `oraxen` |
| `nitem` | `nexo` |
| `mitem` | `mmoitems` |
| `iaitem` | `itemsadder` |
| `eitem` | `ecoitems` |

Short aliases may still work, but full names are clearer and easier to maintain.

## Retest after migration

After updating old files:

1. Restart the server.
2. Check the console for parser warnings.
3. Create or reload the structure.
4. Test item placement.
5. Test one recipe.
6. Test listeners such as `entity-death`.
7. Test dependency item recipes last.
