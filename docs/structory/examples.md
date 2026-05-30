---
sidebar_position: 8
title: Example Configurations
---

# Example Configurations

This page contains ready-to-adapt examples.

## Simple message altar

```yaml
message_altar:
  name: "Message Altar"
  check-block: CAULDRON
  orientation: false
  options:
    notify:
      message: "<yellow>You created the Message Altar."
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

## Crafting altar with one recipe slot

Structure:

```yaml
apple_altar:
  name: "Apple Altar"
  check-block: GOLD_BLOCK
  orientation: false
  options:
    crafting:
      recipe: ["default"]
      recipe-slots:
        offsets:
          - "0 1 0"
  layout:
    levels:
      level0:
        level: 0
        type: STANDARD
        checkers:
          types:
            G: GOLD_BLOCK
          main:
            - "G"
```

Recipe:

```yaml
enchanted_apple_test:
  name: enchanted_apple_test
  discovers: "default"
  ingredients:
    apple:
      type: item
      material: APPLE
  result:
    item:
      type: item
      offset: "0 0 0"
      item:
        material: GOLDEN_APPLE
```

## Nether-only forge

```yaml
nether_forge:
  name: "Nether Forge"
  check-block: ANVIL
  orientation: true
  options:
    validworlds:
      worlds:
        - "world_nether"
      notify:
        actionbar: "<red>This forge can only be created in the Nether."
    crafting:
      recipe: ["forgery"]
      open-gui: ALWAYS
      recipe-slots:
        offsets:
          - "-1 1 0"
          - "1 1 0"
  layout:
    levels:
      level0:
        level: 0
        type: STANDARD
        checkers:
          types:
            A: ANVIL
            B: BLACKSTONE
          main:
            - "B*B"
            - "*A*"
            - "B*B"
```

## Private player altar

```yaml
private_altar:
  name: "Private Altar"
  check-block: AMETHYST_BLOCK
  orientation: false
  options:
    privacy:
      type: OwnerOnly
    notify:
      actionbar: "<green>This altar now belongs to you."
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
