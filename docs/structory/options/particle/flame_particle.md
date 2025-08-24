---
sidebar_position: 2
title: Flame Particle
---

# 🔥 Flame Particle

The `FLAME` is a visual effect that displays flame-like particles around your structure. It’s perfect for altars, magical objects, or anything that needs a fiery touch.

This particle is part of the `Particle Option` configuration and is activated automatically when the structure is created.

---

## ✨ What It Looks Like

Burst of particles

---

## 🛠️ YAML Configuration

```yaml
options:
  particle:
    type: FLAME
    center-offset: "0 1 0"
    amount: 20
    particle: FLAME
    count: 5
    speed: 0.1
```

---

## 🔍 Field Explanation

| Field           | Description                                      |
|----------------|--------------------------------------------------|
| `type`          | Must be `FLAME`                                  |
| `center-offset` | Position offset from the structure center        |
| `amount`        | How many times the effect repeats                |
| `particle`      | The Minecraft particle type (e.g. `FLAME`)       |
| `count`         | Number of particles per burst                    |
| `speed`         | Movement speed of the particles                  |

