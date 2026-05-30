---
sidebar_position: 14
title: MMOItems Result - Premium
---

# MMOItems Result - Premium

This result creates a custom item from MMOItems.

Required dependency: MMOItems.

## Type aliases

You can use: `mmoitems`, `mitem`.

## Example

```yaml
result:
  custom_item:
    type: mmoitems
    kind: "SWORD"
    key: "MYTHIC_BLADE"
    offset: "0 0 0"
```

## Fields

| Field | Type | Description |
|---|---|---|
| `key` | Text | Custom item ID from MMOItems. |
| `offset` | Vector | Where the item appears, relative to the structure center. |
| `kind` | Text | MMOItems item type. Used only by MMOItems results. |

## Important notes

- MMOItems must be installed and enabled.
- The item key must exist in MMOItems.
- If the result does not appear, check the server console for dependency hook messages.
