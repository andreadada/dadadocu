---
sidebar_position: 6
title: Random Result - Premium
---

# Random Result

The `random` result chooses one or more possible results based on chances.

This is a premium result.

## Basic example

```yaml
result:
  reward:
    type: random
    rolls: 1
    chances:
      common:
        roll-chance: 80
        type: item
        offset: "0 0 0"
        item:
          material: IRON_INGOT
      rare:
        roll-chance: 20
        type: item
        offset: "0 0 0"
        item:
          material: DIAMOND
```

## Fields

| Field | Type | Description |
|---|---|---|
| `rolls` | Number | How many times Structory rolls the table. |
| `chances` | Section | Possible results and their roll chances. |
| `roll-chance` | Number | Chance value for that entry. |

## Recommended use

Use random results for reward crates, altars with loot tables, or rare bonus outcomes.

Keep chances easy to understand for balancing. For example, use values that add up to 100 when possible.
