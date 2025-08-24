---
sidebar_position: 5
title: Fireworks Option
---

# 🎆 Fireworks Option

## What is the Fireworks Option?

The `firework` option allows you to spawn fireworks when a structure is created. You can customize the amount, colors, fade effects, and whether the fireworks flicker. This adds a celebratory or magical touch to your altars and structures.

---

## 🛠️ YAML Configuration Example

```yaml
options:
  firework:
    type: RANDOM
    amount: 5
    power: 2
    colors: "RED, BLUE, YELLOW"
    fade: "WHITE"
    flicker: true
```

---

## 🔍 Field Explanation

| Field     | Description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| `type`    | Currently only supports `RANDOM`                                            |
| `amount`  | Number of fireworks to spawn                                                |
| `power`   | Explosion power (visual only, not damaging)                                 |
| `colors`  | Comma-separated list of main colors (e.g. `RED, BLUE`)                      |
| `fade`    | Comma-separated list of fade colors (e.g. `WHITE`)                          |
| `flicker` | Whether the fireworks flicker when exploding (`true` or `false`)            |

> 🎨 Color names must be valid Minecraft color names (e.g. `RED`, `BLUE`, `WHITE`, `GREEN`, etc.)

---

## ✅ When Does It Trigger?

Fireworks are automatically spawned when the structure is created. No commands or manual actions are needed.

They appear at the center of the structure and detonate instantly for a visual effect.

---

## 🎯 Use Cases

- Celebrate the creation of an altar
- Add magical effects to rituals
- Create visual feedback for important structures
- Surprise players with a burst of color

---

Need help choosing colors or tweaking the effect? Join the [Discord](https://discord.gg/KBNDByfjuC) and ask the community!
