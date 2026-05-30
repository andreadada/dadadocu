---
sidebar_position: 11
title: CraftEngine Item Result - Premium
---

# CraftEngine Item Result - Premium

This result creates a custom item from CraftEngine.

Required dependency: CraftEngine.

## Type aliases

You can use: `ceitem`, `craftengine`.

## Example

```yaml
result:
  custom_item:
    type: ceitem
    key: "default:topaz_trident"
    offset: "0 0 0"
```

## Fields

| Field | Type | Description |
|---|---|---|
| `key` | Text | Custom item ID from CraftEngine. |
| `offset` | Vector | Where the item appears, relative to the structure center. |
| `kind` | Text | MMOItems item type. Used only by MMOItems results. |

## Important notes

- CraftEngine must be installed and enabled.
- The item key must exist in CraftEngine.
- If the result does not appear, check the server console for dependency hook messages.
