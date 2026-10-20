---
sidebar_position: 1
title: Structory
---

# Structory

Structory is a Minecraft plugin for building interactive multi-block structures. A player assembles a shape in the world, activates its check block and gets a working altar, forge, generator or crafting station.

Structures and recipes are defined with YAML, so you don't need to write Java to make your own.

## Getting started

1. [Install Structory](./installation.md) and start your server once.
2. [Create a simple structure](./create-a-structure.md), or use the [layout wizard](./commands/commands.md#structure-layout-wizard) to capture a real build.
3. Add [options](./options/overview.md) such as crafting, effects or privacy.
4. Test in-game, then inspect your structure with [Admin Tools](./admin-gui.md).

You can mix custom crafting slots, a recipe picker, item/economy integrations, particle effects, privacy and rebuild behavior in the same structure.

## Free and Premium

The Free edition focuses on structure-based crafting. Premium adds advanced systems such as the in-game editor, crates, animated BlockDisplays, storage/bag options, ownership controls, custom integrations and extended administration tools.

In 26.2, Premium also includes [configurable particle geometry](./options/particle/configuration.md), [structure states](./options/states.md), [YAML/SQLite/MariaDB instance persistence](./persistence.md), and improved editor history, preview and diagnostics.

Optional plugin integrations are detected at startup. If you don't use third-party item providers, a log reporting zero hooked loaders is normal.

## File locations

```text
plugins/Structory/
  config.yml
  messages.yml
  gui.yml
  structures/
  recipes/
  customitem/
  instances/
  blockdisplay/
```

- `structures/` describes **what a valid build looks like** and what it does.
- `recipes/` controls ingredients, crafting listeners and rewards.
- `instances/` stores placed structures when the YAML persistence backend is selected.
- `blockdisplay/` holds Premium JSON visual models.

Use an editor with YAML support and indent with spaces, not tabs.

## Useful references

- [Structure format](./structure.md) – layout, keys, levels and orientation
- [Animations and crafting](./recipe/animations-and-consumption.md)
- [Block Displays](./options/blockdisplay.md) – files, offsets, animation types and pivot
- [Troubleshooting](./troubleshooting.md) – quick checks and diagnostic commands
- [Structory changelog](/structory-changelog) – release highlights
