---
sidebar_position: 8
---

# Crate Option

The `crate` option lets administrators create placeable structure items.

A crate is usually an item that, when placed or activated, creates a Structory structure in the world.

## Basic format

```yaml
options:
  crate:
    item:
      material: CHEST
      name: "Altar Crate"
      lore:
        - "Place this item to create an altar."
    direction: DIRECT
    consume: true
    auto-activate: false
```

## Main fields

| Field | Description |
|---|---|
| `item` | Item shown/given as the crate. |
| `direction` | How placement direction is calculated. |
| `consume` | Whether the crate item is consumed when used. |
| `sound` | Optional sound played on crate use. |
| `auto-activate` | Whether the crate activates automatically. |
| `auto-activate-offset` | Offset used for automatic activation. |
| `override` | How existing blocks are handled. |
| `drop` | What happens when the structure is removed or repacked. |
| `build` | Builder instructions used to place the structure. |

## Direction values

| Value | Alias | Meaning |
|---|---|---|
| `OPPOSITE` | `O` | Opposite of player direction. |
| `DIRECT` | `D` | Same as player/structure direction. |
| `LEFT` | `L` | Rotated left. |
| `RIGHT` | `R` | Rotated right. |
| `NORTH` | `N` | Fixed north. |
| `SOUTH` | `S` | Fixed south. |
| `EAST` | `E` | Fixed east. |
| `WEST` | `W` | Fixed west. |

## Override behavior

The `override` field controls what happens if blocks are already present where the crate wants to build.

Common modes:

| Mode | Meaning |
|---|---|
| `check` | Only place if the area is clear. |
| `replace` | Replace existing blocks. |
| `drop` | Break existing blocks naturally before building. |

Use `check` for normal survival servers. Use `replace` or `drop` only where overwriting terrain is intended.

## Drop behavior

The `drop` field controls what happens when a crate-built structure is removed.

Common modes:

| Mode | Meaning |
|---|---|
| `none`, `empty`, `default` | Do not drop a special crate item. |
| `drop` | Break blocks naturally. |
| `pack`, `repack` | Remove blocks and return the crate item. |

## Messages

Crates can define messages such as:

```yaml
invalid-world-message: "You cannot place this structure in this world."
clear-message: "The area must be clear."
confirm-message: "Break again to confirm."
place-message: "Structure placed."
```

Use short, direct messages.

## Build example

```yaml
options:
  crate:
    item:
      material: CHEST
      name: "Small Altar Crate"
    direction: DIRECT
    consume: true
    override: check
    drop: repack
    build:
      levels:
        level0:
          level: 0
          builders:
            types:
              A:
                class: place
                material: CRYING_OBSIDIAN
              B:
                class: place
                material: AMETHYST_BLOCK
            main:
              - "ABA"
              - " B "
              - "ABA"
```

## Recommendations

- Use `override: check` unless you intentionally want crates to replace blocks.
- Test each crate in all allowed worlds.
- Keep messages clear for players.
- Use `validworlds` together with crates if the structure should only be placeable in specific worlds.
- Avoid very large crate-built structures until you have tested performance.
