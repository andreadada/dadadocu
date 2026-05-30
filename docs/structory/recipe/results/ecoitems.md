---
sidebar_position: 16
title: EcoItems Result - Premium
---

# EcoItems Result - Premium

This result creates a custom item from EcoItems.

Required dependency: EcoItems.

## Type aliases

You can use: `ecoitems`, `eitem`.

## Example

```yaml
result:
  custom_item:
    type: ecoitems
    key: "my_eco_item"
    offset: "0 0 0"
```

## Fields

| Field | Type | Description |
|---|---|---|
| `key` | Text | Custom item ID from EcoItems. |
| `offset` | Vector | Where the item appears, relative to the structure center. |
| `kind` | Text | MMOItems item type. Used only by MMOItems results. |

## Important notes

- EcoItems must be installed and enabled.
- The item key must exist in EcoItems.
- If the result does not appear, check the server console for dependency hook messages.
