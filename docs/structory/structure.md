---
sidebar_position: 6
title: Structures
---

# Structures

A structure is a custom multi-block build that Structory can recognize in the world.

Structures are stored in:

```text
plugins/Structory/structures/
```

Each `.yml` file can contain one or more structures. Each structure is a top-level YAML section.

## Basic format

```yaml
structure_key:
  name: "Display Name"
  check-block: CAULDRON
  orientation: false
  options:
    notify:
      message: "<yellow>Structure created!"
  layout:
    levels:
      level0:
        level: 0
        type: STANDARD
        checkers:
          types:
            C: CAULDRON
            X: BLACKSTONE_WALL
          main:
            - "X*X"
            - "*C*"
            - "X*X"
```

## Main fields

| Field | Type | Required | Description |
|---|---:|---:|---|
| `name` | Text | Yes | Display name of the structure. |
| `check-block` | Material or custom block key | Yes | Block that players activate with `Shift + Right Click`. |
| `main-block` | Vector | No | Offset used to move the logical main block. Default is `0 0 0`. |
| `center-offset` | Vector | No | Moves the logical center used by some effects and options. |
| `orientation` | Boolean | No | If `true`, Structory checks orientation. If `false`, orientation is ignored. |
| `options` | Section | No | Behavior attached to the structure. |
| `layout` | Section | Yes | Shape of the structure. |

## Structure keys

Use simple keys:

```yaml
elder_altar:
```

Recommended style:

- lowercase letters;
- numbers if needed;
- underscores instead of spaces;
- no special characters.

Good examples:

```text
elder_altar
astral_forge
generator_1
magic_portal
```

## Check block

The `check-block` is the block players interact with to create the structure.

```yaml
check-block: CAULDRON
```

For CraftEngine blocks, use the custom block key when supported by your setup:

```yaml
check-block: "default:palm_wood"
```

The clicked block must match the configured block.

## Layout format

The layout is placed under:

```yaml
layout:
  levels:
```

Do not put `level0` directly under `layout`. Use `layout.levels.level0`.

Correct:

```yaml
layout:
  levels:
    level0:
      level: 0
```

Incorrect:

```yaml
layout:
  level0:
    level: 0
```

## Levels

Each level represents a Y offset from the structure center.

| Level value | Meaning |
|---:|---|
| `0` | Same height as the center/check block. |
| `1` | One block above. |
| `-1` | One block below. |

Example:

```yaml
layout:
  levels:
    level0:
      level: 0
      type: STANDARD
      checkers:
        types:
          C: CAULDRON
        main:
          - "C"
    level-1:
      level: -1
      type: STANDARD
      checkers:
        types:
          O: OBSIDIAN
        main:
          - "O"
```

## Checker legend

`checkers.types` defines what each character means.

```yaml
checkers:
  types:
    C: CAULDRON
    X: BLACKSTONE_WALL
  main:
    - "X*X"
    - "*C*"
    - "X*X"
```

In this example:

| Character | Meaning |
|---|---|
| `C` | Must be a cauldron. |
| `X` | Must be a blackstone wall. |
| `*` | Ignored position. |

`*` is useful when that position should not be checked.

## Advanced checker format

You can also define a character with a section.

```yaml
checkers:
  types:
    L:
      type: craftengine
      key: "default:palm_log"
    W:
      type: craftengine
      key: "default:palm_wood"
    G: GRASS_BLOCK
```

Common checker types:

| Type | Use |
|---|---|
| simple material | Vanilla Minecraft block, such as `CAULDRON`. |
| `craftengine` | CraftEngine custom block key. |
| `none` | Allows empty or ignored matching depending on setup. |

## Orientation

Set `orientation` to `false` for symmetric structures:

```yaml
orientation: false
```

Set it to `true` when direction matters:

```yaml
orientation: true
```

When orientation is enabled, players must build the structure in a valid rotation. Use it only when the structure needs a front/back direction.

## Structure protection

After a structure is created, Structory tracks it as an instance. Protected structure blocks cannot usually be broken directly.

To destroy a structure, a player may need to break the main block twice within the confirmation time configured in `config.yml`.

## Instance files

Created structures are saved in:

```text
plugins/Structory/instances/
```

Do not edit instance files manually unless you have a backup and understand what you are changing.
