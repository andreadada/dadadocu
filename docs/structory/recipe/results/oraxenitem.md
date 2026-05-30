---
sidebar_position: 12
title: Oraxen Item Result - Premium
---

# Oraxen Item Result - Premium

This result creates a custom item from Oraxen.

Required dependency: Oraxen.

## Type aliases

You can use: `oraxen`, `oitem`.

## Example

```yaml
result:
  custom_item:
    type: oraxen
    key: "my_custom_item"
    offset: "0 0 0"
```

## Fields

| Field | Type | Description |
|---|---|---|
| `key` | Text | Custom item ID from Oraxen. |
| `offset` | Vector | Where the item appears, relative to the structure center. |
| `kind` | Text | MMOItems item type. Used only by MMOItems results. |

## Important notes

- Oraxen must be installed and enabled.
- The item key must exist in Oraxen.
- If the result does not appear, check the server console for dependency hook messages.
