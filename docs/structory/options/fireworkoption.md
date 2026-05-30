---
sidebar_position: 3
title: Fireworks Option
---

# Fireworks Option

The `fireworks` option launches fireworks when a structure is created.

## Basic example

```yaml
options:
  fireworks:
    type: RANDOM
    amount: 3
    power: 2
```

## Full example

```yaml
options:
  fireworks:
    type: RANDOM
    amount: 5
    power: 2
    flicker: true
    fade: PURPLE, BLACK, SILVER
    colors: FUCHSIA, PURPLE, WHITE, BLACK
```

## Fields

| Field | Type | Description |
|---|---|---|
| `type` | Text | Firework type. `RANDOM` lets Structory choose a random effect. |
| `amount` | Number | Number of fireworks to launch. |
| `power` | Number | Firework power. Higher values fly longer. |
| `colors` | Text | Comma-separated Bukkit color names. |
| `fade` | Text | Comma-separated fade colors. |
| `flicker` | Boolean | Adds flicker effect if `true`. |

## Color examples

```yaml
colors: RED, ORANGE, YELLOW
fade: WHITE, SILVER
```

Use standard Bukkit color names such as:

```text
WHITE, SILVER, GRAY, BLACK, RED, MAROON, YELLOW, OLIVE, LIME, GREEN, AQUA, TEAL, BLUE, NAVY, FUCHSIA, PURPLE, ORANGE
```

## When to use

Fireworks are best for rare or important structures. Avoid using too many fireworks on frequently created structures to keep the server clean and readable for players.
