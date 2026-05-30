---
sidebar_position: 1
title: Structory
---

# Structory

Structory is a Minecraft server plugin for creating custom multi-block structures.

A structure is a build made from multiple blocks, such as an altar, forge, portal, generator, storage device, or any other custom construction you want players to build in the world. When the player builds the correct shape and activates it, Structory can recognize it and run the configured behavior.

Structory is mainly configured with YAML files. You do not need to write code to create structures or recipes.

## What Structory can do

Structory can be used to create:

- multi-block structures built directly in the world;
- custom crafting systems attached to structures;
- physical item slots around a structure;
- recipe selection GUIs;
- effects such as messages, titles, sounds, particles, and fireworks;
- protected structure instances that cannot be broken normally;
- crate items that place structures automatically;
- owner-based or public structure access;
- storage and bag-style block inputs;
- structure rebuilding;
- integrations with custom item and economy plugins.

## Typical use cases

Server owners usually use Structory for:

- custom altars;
- special crafting stations;
- forge systems;
- generators;
- ritual or magic systems;
- advanced item upgrades;
- reward structures;
- premium structures delivered through crate items.

## Free and Premium features

The free version focuses on structure-based crafting.

The premium version adds advanced systems such as:

- unlimited saved custom items;
- crate placement;
- structure privacy;
- block display support;
- rebuild behavior;
- command actions;
- storage and bag features;
- world restrictions;
- more advanced integrations.

Some premium features require optional external plugins. Structory only enables integrations when the required plugin is installed and enabled on your server.

## Basic workflow

The usual workflow is:

1. Install Structory on your server.
2. Start the server once so the plugin creates its folders.
3. Create or edit a file inside the `structures` folder.
4. Create or edit recipes inside the `recipes` folder.
5. Restart the server, or use `/structory reload` while testing.
6. Build the structure in-game and activate it with `Shift + Right Click` on the configured check block.

## Important folders

Structory stores its files in the plugin data folder:

```text
plugins/Structory/
```

The most important folders are:

| Folder or file | Purpose |
|---|---|
| `config.yml` | Main plugin settings. |
| `messages.yml` | Player-facing messages. |
| `gui.yml` | GUI-related text and item settings. |
| `structures/` | Structure definitions. |
| `recipes/` | Recipe definitions. |
| `customitem/` | Saved custom items created with commands. |
| `instances/` | Saved structures that players created in the world. |
| `blockdisplay/` | Block display models used by the premium block display option. |

## Recommended editor

Use an editor that supports YAML indentation, such as VS Code or Notepad++.

YAML is indentation-sensitive. Most configuration errors are caused by missing spaces, wrong indentation, or tabs. Use spaces, not tabs.
