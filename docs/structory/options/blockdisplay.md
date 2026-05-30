---
sidebar_position: 9
---

# Block Display Option

The `blockdisplay` option attaches custom block displays to a structure.

Use it for visual models, decorative previews, floating blocks, or custom-looking structure parts.

## Single display

```yaml
options:
  blockdisplay:
    key: altar_crystal
    offset: "0 1 0"
    direction: DIRECT
```

## Multiple displays

```yaml
options:
  blockdisplay:
    crystal:
      key: altar_crystal
      offset: "0 1 0"
      direction: DIRECT
    ring:
      key: altar_ring
      offset: "0 0 0"
      direction: DIRECT
```

## Fields

| Field | Description |
|---|---|
| `key` | Key of the custom block display. |
| `offset` | Position relative to the structure center. |
| `direction` | Direction handling for the display. |

## Direction values

| Value | Alias | Meaning |
|---|---|---|
| `OPPOSITE` | `O` | Opposite of player/structure direction. |
| `DIRECT` | `D` | Same direction as the structure. |
| `LEFT` | `L` | Rotated left. |
| `RIGHT` | `R` | Rotated right. |
| `NORTH` | `N` | Fixed north. |
| `SOUTH` | `S` | Fixed south. |
| `EAST` | `E` | Fixed east. |
| `WEST` | `W` | Fixed west. |

## Recommendations

- Keep displays decorative unless you have tested hitboxes and interaction behavior.
- Use clear keys so future configuration is easier to maintain.
- Test each direction by placing the structure facing multiple ways.
- Avoid too many displays on structures that may exist hundreds of times in a world.
