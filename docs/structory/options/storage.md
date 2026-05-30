---
sidebar_position: 10
---

# Storage Option

The `storage` option is intended to attach inventories or containers to a structure.

In the current build, the public configuration surface is limited. Use it carefully and test it before relying on it for important player storage.

## Basic format

```yaml
options:
  storage:
    containers:
      main:
        class: inventory
        key: main
```

## Fields

| Field | Description |
|---|---|
| `containers` | List of storage containers attached to the structure. |
| `class` | Storage type. The currently available type is `inventory`. |
| `key` | Internal key for the container. |

## Inventory storage

```yaml
options:
  storage:
    containers:
      output:
        class: inventory
        key: output
```

The current inventory container creates a standard inventory container internally.

## Recommended use

Use storage only for tested setups where you have confirmed how the container is opened and managed on your server.

For normal crafting rewards, prefer recipe results such as:

- `item`
- `saveditem`
- `command`
- economy deposit results

## Current limitation

The storage option exists in the option system, but the current user-facing behavior is not as complete as crafting, crate, privacy, or particles.

Do not use it as the only place for valuable rewards unless you have tested persistence, access, and reload behavior in your build.
