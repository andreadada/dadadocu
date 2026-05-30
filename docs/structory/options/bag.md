---
sidebar_position: 12
---

# Bag Option

The `bag` option defines block or item layouts that can be checked by bag ingredients.

Use it when a structure should accept a shaped set of materials, or when a recipe should depend on a layout instead of only item slots.

## Basic structure-side format

```yaml
options:
  bag:
    levels:
      level0:
        level: 0
        checkers:
          A: DIAMOND_BLOCK
          B: GOLD_BLOCK
        layout:
          - "ABA"
          - " B "
          - "ABA"
```

The exact layout depends on your structure design and the bag ingredient you use in recipes.

## Checkers

A checker defines what a character in the layout means.

Simple material checker:

```yaml
checkers:
  A: DIAMOND_BLOCK
```

Expanded material checker:

```yaml
checkers:
  A:
    type: material
    material: DIAMOND_BLOCK
```

Whitelist checker:

```yaml
checkers:
  A:
    type: whitelist
    materials:
      - DIAMOND_BLOCK
      - EMERALD_BLOCK
```

Blacklist checker:

```yaml
checkers:
  A:
    type: blacklist
    materials:
      - AIR
      - CAVE_AIR
```

Any filled block:

```yaml
checkers:
  A:
    type: any
```

Empty space:

```yaml
checkers:
  A:
    type: none
```

## Bag ingredient in a recipe

```yaml
ingredients:
  shaped_bag:
    type: bag
    bag: default
    consume: true
    ingredients:
      A: DIAMOND
      B: GOLD_INGOT
```

## Unordered bag ingredient

```yaml
ingredients:
  material_bag:
    type: unorderedbag
    bag: default
    consume: true
    ingredients:
      A: DIAMOND
      B: GOLD_INGOT
```

Use `unorderedbag` when the exact order should not matter.

## Practical recommendations

- Start with simple material checkers.
- Use short layout characters like `A`, `B`, `C`.
- Keep the first bag configuration small and test it in-game.
- Use `bag` for shaped requirements and `unorderedbag` for flexible requirements.
- If you use custom block plugins inside bag checkers, test them carefully in your exact server version.
