---
sidebar_position: 7
title: Valid Worlds Option - Premium
---

# Valid Worlds Option

The `validworlds` option restricts where a structure can be created.

This is a premium feature.

## Basic example

```yaml
options:
  validworlds:
    worlds:
      - "world_nether"
    notify:
      actionbar: "<red>You cannot create this structure in this world."
```

In this example, the structure can only be created in `world_nether`.

## Fields

| Field | Type | Description |
|---|---|---|
| `worlds` | List | Worlds where the structure is allowed. |
| `notify` | Notify section | Message sent when the player tries to create it in the wrong world. |

## Multiple worlds

```yaml
options:
  validworlds:
    worlds:
      - "world"
      - "world_nether"
      - "custom_resource_world"
    notify:
      message: "<red>This structure cannot be created here."
```

## Recommended use

Use `validworlds` for:

- Nether-only structures;
- End-only altars;
- resource world generators;
- spawn-only utility structures;
- preventing abuse in survival worlds.

## Important note

World names must match the exact folder/world name used by the server.

For example, these are different:

```text
world_nether
World_Nether
```
