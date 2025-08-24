---
sidebar_position: 3
title: BoxSized Particle
---

# 🧊 BoxSized Particle

The `BOXSIZED` creates a cube-shaped particle effect around your structure. It’s ideal for highlighting the boundaries of a structure or giving it a futuristic or magical frame.

This particle is part of the `Particle Option` configuration and is activated automatically when the structure is created.

---

## ✨ What It Looks Like

Particles form a box around your structure, based on the start and end points you define.

---

## 🛠️ YAML Configuration

```yaml
options:
  particle:
    type: BOXSIZED
    center-offset: "0 1 0"
    start-point-offset: "-1 -1 -1"
    end-point-offset: "1 1 1"
    amount: 30
    particle: ENCHANTMENT_TABLE
    count: 3
    speed: 0.05
```

---

## 🔍 Field Explanation

| Field                | Description                                            |
|----------------------|--------------------------------------------------------|
| `type`               | Must be `BOXSIZED`                                     |
| `center-offset`      | Position offset from the structure center              |
| `start-point-offset` | Start corner of the box (relative to center)           |
| `end-point-offset`   | End corner of the box (relative to center)             |
| `amount`             | How many times the effect repeats                      |
| `particle`           | The Minecraft particle type (e.g. `ENCHANTMENT_TABLE`) |
| `count`              | Number of particles per burst                          |
| `speed`              | Movement speed of the particles                        |
