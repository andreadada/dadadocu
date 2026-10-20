---
sidebar_position: 9
title: Block Displays
---

# Block Displays (Premium)

Block displays let a structure show decorative blocks and custom models without placing real blocks in the world. They're useful for floating crystals, machinery, animated cores and detailed models.

A block display is **visual only**. It does not replace a block in the structure's layout.

## 1. Create a display model

Put a JSON file in:

```text
plugins/Structory/blockdisplay/diamond_core.json
```

The filename becomes the model key: `diamond_core`.

```json
{
  "Passengers": [
    {
      "id": "minecraft:block_display",
      "block_state": {
        "Name": "minecraft:diamond_block",
        "Properties": {}
      },
      "transformation": [
        0.62, 0, 0, 0.19,
        0, 0.62, 0, 0.19,
        0, 0, 0.62, 0.19,
        0, 0, 0, 1
      ]
    }
  ]
}
```

This makes a diamond block at 62% of its normal size. The `0.19` translation centers it inside a one-block space: `(1 - 0.62) / 2 = 0.19`.

The importer also supports `minecraft:item_display` and `minecraft:text_display` components, including models with multiple passengers. Start with one block display while testing: it is easier to position and animate.

## 2. Attach it to a structure

Inside a structure's `options`:

```yaml
blockdisplay:
  core:
    key: diamond_core
    offset: "0 1.35 0"
    direction: NORTH
    animation:
      type: FLOAT_ROTATE
      interval: 1
      duration: 0
      rotation-speed: 2.0
      vertical-amplitude: 0.22
      vertical-speed: 0.12
```

`core` is just the entry name; `diamond_core` must match the JSON filename. Use additional named entries to attach more displays.

Offsets are relative to the structure's logical center in block coordinates. Positive Y moves the display up. The model's **own transformation** determines where its visual center falls relative to that position.

## Animation settings

| Field | What it does |
|---|---|
| `type` | Selects the animation. `NONE` disables it. |
| `interval` | Updates every N server ticks; `1` is the smoothest setting. |
| `duration` | Animation lifetime in ticks; `0` keeps it running. |
| `rotation-speed` | Degrees per tick for rotating effects. |
| `vertical-amplitude` | Vertical travel in blocks. |
| `vertical-speed` | How quickly vertical movement cycles. |
| `radius` | Horizontal radius for `ORBIT`. |
| `motion-speed` | Travel speed for `RISE` / `FALL`. |
| `scale-amplitude` | Size variation for `PULSE_SCALE`. |
| `path-speed` / `path` | Interpolation and waypoints for `PATH`. |

Available types: `NONE`, `ROTATE`, `FLOAT`, `FLOAT_ROTATE`, `ORBIT`, `PULSE_SCALE`, `BOUNCE`, `SHAKE`, `RISE`, `FALL` and `PATH`.

`FLOAT` moves without spinning; `ROTATE` spins without bobbing; `FLOAT_ROTATE` combines the two. Use `ORBIT` only when you *want* the block to move around a point rather than spin in place.

Example of a moving path:

```yaml
animation:
  type: PATH
  interval: 1
  path-speed: 0.05
  path:
    first: "0 0 0"
    second: "2 0 0"
    third: "2 1 2"
    fourth: "0 0 2"
```

The final point connects back to the first.

## Direction

`DIRECT`, `OPPOSITE`, `LEFT` and `RIGHT` are relative to the player when creating the structure. `NORTH`, `EAST`, `SOUTH` and `WEST` choose a fixed initial direction. Short aliases `D`, `O`, `L`, `R`, `N`, `E`, `S` and `W` also work.

For a symmetrical model such as a diamond, a fixed direction is simplest.

## Updating and testing

1. Save your JSON and structure YAML; restart the server after replacing a model.
2. If you're using a bundled demo, **an existing file in `plugins/Structory/blockdisplay/` is not overwritten** on update. Replace that JSON manually to use the new bundled version.
3. Create a new instance of the structure and check for `BlockDisplay definitions loaded`, `registered ... model(s)` and `BlockDisplay spawned ... UUID=` in the console.
4. Test breaking the structure, restarting and reloading. The model should not duplicate or leave animations behind.

If you see the model but it turns around a corner, distinguish **model rotation** from `ORBIT` and verify you're using the current 26.2 build. For problems, see [Troubleshooting](../troubleshooting.md).

The bundled **Diamond Core Reactor** is a complete example in `structures/diamond_core_reactor.yml` and `blockdisplay/diamond_core.json`.
