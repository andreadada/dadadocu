---
sidebar_position: 10
title: Storage
---

# Storage (Premium)

The `storage` option creates a named inventory associated with a structure. In the current implementation the supported storage type is `inventory`.

```yaml
options:
  storage:
    containers:
      output:
        type: inventory
        key: output
```

The code currently creates an internal **54-slot Bukkit inventory** for this type. `output` is the logical container key.

## What to expect

Storage is registered when the structure is created. The current storage implementation does not provide the same complete persistence and recovery guarantees as saved structure instances. Do not use it as the only store for valuable player items without testing your exact workflow.

Fields like `class: inventory` and `max: 30` found in older example configurations do **not** define inventory type/size in the current parser. Use `type: inventory` and `key`.

For ordinary crafting rewards, an item or command result is generally easier to configure and recover than a temporary inventory.

If a container doesn't appear, check the console for `Invalid storage type` and verify the indentation under `storage.containers`.
