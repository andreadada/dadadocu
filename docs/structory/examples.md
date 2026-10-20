---
sidebar_position: 8
title: Example Configurations
---

# Example Configurations

These examples show the same structure schema used by Structory's bundled files. Save each structure under `plugins/Structory/structures/<name>.yml`.

## A simple message altar

```yaml
message_altar:
  name: "Message Altar"
  check-block: CAULDRON
  orientation: false
  options:
    notify:
      message: "<yellow>Message Altar activated!"
  layout:
    levels:
      level0:
        level: 0
        type: STANDARD
        checkers:
          types:
            C: CAULDRON
            X: STONE_BRICKS
          main:
            - "X*X"
            - "*C*"
            - "X*X"
```

Build four stone bricks at the corners, place the cauldron in the middle and activate the cauldron. `*` means that the position is ignored.

## A private altar

```yaml
private_altar:
  name: "Private Altar"
  check-block: AMETHYST_BLOCK
  orientation: false
  options:
    privacy:
      type: OwnerOnly
    notify:
      actionbar: "<green>This altar belongs to you."
  layout:
    levels:
      level0:
        level: 0
        type: STANDARD
        checkers:
          types:
            A: AMETHYST_BLOCK
          main:
            - "A"
```

## Diamond Core Reactor (26.2 Premium)

A full visual demo is bundled with Premium:

```text
plugins/Structory/structures/diamond_core_reactor.yml
plugins/Structory/blockdisplay/diamond_core.json
```

The example includes a symmetrical copper/deepslate base, lightning rods, a Beacon, a floating diamond core and two animated particle effects.

Its main configuration looks like this:

```yaml
options:
  blockdisplay:
    core:
      key: diamond_core
      offset: "0 1.35 0"
      direction: EAST
      animation:
        type: FLOAT_ROTATE
        interval: 1
        duration: 0
        rotation-speed: 2.0
        vertical-amplitude: 0.22
        vertical-speed: 0.12
```

The complete `layout` and both particle shapes are in the bundled YAML. See [Block Displays](./options/blockdisplay.md) to understand the JSON file and centered rotation.

## Copper Generator

The bundled `generator_1.yml` demonstrates a small generator with rebuilding and internal storage. It is a useful reference for the *shape* of `rebuild.build` entries and `storage.containers`.

Don't assume every demo feature is suitable for storing valuable items: see the [Storage limitations](./options/storage.md).

## Before adapting an example

Rename the top-level structure key and its file, then test the base layout before adding complex effects. If you are updating a bundled example, existing files in your plugin folder are not overwritten automatically.
