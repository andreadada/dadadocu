---
sidebar_position: 1
title: Configuration
---


# Particle Option

## What is the Particle Option?

The `ParticleOption` allows you to add **visual effects** to a structure in Structory. These effects—called particles—appear around the structure when it's created or activated. They can make your altar look magical, dramatic, or simply more noticeable.

This option is configured via YAML and is part of the structure's definition.

---

## Available Particle Types

Structory includes a few built-in particle types you can use:

| Type        | Visual Effect Description                     |
|-------------|-----------------------------------------------|
| `FLAME`     | Rising flame particles around the altar       |
| `BOXSIZED`  | Particles forming a cube around the structure |

---

## YAML Configuration Example

To use the Particle Option, add it under the `options` section of your structure configuration:

```yaml
options:
  particle:
    type: ....
