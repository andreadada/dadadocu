---
sidebar_position: 2
title: config.yml
---

# config.yml

The `config.yml` file controls the main plugin behavior: grave timers, locks, opening cost, holograms, platform blocks, and the optional graveyard.

## Permission groups: `pex`

The `pex` section lets you create different grave rules for different player groups.

Each group can have:

- `duration`: how long the grave stays before it disappears, in seconds.
- `lock`: how long the grave is protected, in seconds.
- `max-graves`: how many active graves a player in this group can keep.
- `max-graves-action`: what happens to the oldest grave when the limit is exceeded.
- `open-price`: optional Vault price formula used when a player opens a grave for the first time.

Example:

```yaml
pex:
  default:
    duration: 900
    lock: 300
    max-graves: 3
    max-graves-action: DROP
    open-price: "%money% * 0.1"
  vip:
    duration: 1800
    lock: 900
    max-graves: 5
    max-graves-action: DROP
    open-price: "%money% * 0.05"
```

In this example:

- Default graves last 15 minutes and stay locked for 5 minutes.
- VIP graves last 30 minutes and stay locked for 15 minutes.
- Default players can keep 3 active graves.
- VIP players can keep 5 active graves.
- The first open can cost money if Vault and an economy plugin are installed.

To assign a player to a custom group, give them a permission like:

```text
dadagraves.pex.vip
```

If no custom group matches, the plugin uses `default`.

## Grave limits

`max-graves` controls how many active graves a player can have at the same time.

```yaml
max-graves: 3
```

Use `-1` for unlimited graves:

```yaml
max-graves: -1
```

When a player creates a new grave and goes over the limit, DadaGraves handles the oldest active grave with `max-graves-action`.

| Action | Result |
| --- | --- |
| `DROP` | Drops the oldest grave contents and removes that grave. |
| `DELETE` | Deletes the oldest grave together with its contents. |

`DROP` is safer for most survival servers because items are still returned to the world. `DELETE` is stricter and should be used only when you really want old graves to be voided.

## Opening price

The `open-price` value is a formula. You can use these placeholders:

| Placeholder | Meaning |
| --- | --- |
| `%money%` | The player's current balance. |
| `%balance%` | Same as `%money%`. |
| `%itemamount%` | Total amount of items inside the grave. |
| `%fixeditemamount%` | Amount of item stacks inside the grave. |

Examples:

```yaml
open-price: "%money% * 0.1"
open-price: "%itemamount% * 2"
open-price: "50"
```

If you do not want paid grave opening, remove the price or set it to a value that your setup treats as free.

## Hologram: `hologram`

The hologram section controls the floating text above a grave.

Example:

```yaml
hologram:
  lines:
    one:
      type: fixed
      text: "<gold>Gravestone of <yellow>%player%"
    two:
      type: updatable
      text: "<gold>Locked for: <red>%lock%"
    three:
      type: updatable
      text: "<gold>Decays in <dark_aqua>%timeleft%"
```

Line types:

- `fixed`: the text is created once and does not need constant updates.
- `updatable`: the text updates while the grave exists.

Available placeholders:

| Placeholder | Meaning |
| --- | --- |
| `%player%` | Name of the player who owns the grave. |
| `%lock%` | Remaining lock time. |
| `%timeleft%` | Remaining time before the grave disappears. |

When a grave is removed, its hologram should also be removed.

## Default decoration

This option sets the decoration used when a player has not selected one.

```yaml
default-decoration: base_player_head
```

The value must match a decoration id from the `decorations/` folder.

## Platform rules: `platform`

The platform section lets the plugin choose a block to place under or around the grave depending on the death location.

Example:

```yaml
platform:
  nature:
    patterns:
      one:
        block: AIR
        where: UNDER
    replace: GRASS_BLOCK
  volcanic:
    patterns:
      one:
        block: LAVA
        where: BOTH
    replace: MAGMA_BLOCK
  water:
    patterns:
      one:
        block: WATER
        where: BOTH
    replace: SEA_LANTERN
```

Pattern fields:

| Field | Description |
| --- | --- |
| `block` | Block the plugin checks for. |
| `where` | Where the plugin checks. |
| `replace` | Block placed as the platform. |

`where` can be:

| Value | Meaning |
| --- | --- |
| `UNDER` | Checks the block under the player. |
| `IN` | Checks the block at the player's position. |
| `BOTH` | Accepts either position. |

## Graveyard: `graveyard`

The graveyard is optional. If it is enabled, players respawn at the graveyard after a normal death respawn.

Default configuration:

```yaml
graveyard:
  enabled: false
  world: ""
  x: 0.0
  y: 0.0
  z: 0.0
  yaw: 0.0
  pitch: 0.0
```

Recommended setup:

1. Stand where players should respawn.
2. Run:

```text
/graves graveyard set
```

The plugin will save the location and set `enabled` to `true`.

If the graveyard is not enabled, has no world, or the world cannot be found, the plugin leaves the normal Minecraft respawn location unchanged.

## Formatting

Most messages and item names support the same formatting style used by the plugin, for example:

```text
<gold>Gold text
<gray>Gray text
<br>New line
```

Use simple text first, then add colors after the feature works.
