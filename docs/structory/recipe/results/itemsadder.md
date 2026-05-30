---
sidebar_position: 15
title: ItemsAdder Result - Premium
---

# ItemsAdder Result - Premium

This result creates a custom item from ItemsAdder.

Required dependency: ItemsAdder.

## Type aliases

You can use: `itemsadder`, `iaitem`.

## Example

```yaml
result:
  custom_item:
    type: itemsadder
    key: "namespace:item_id"
    offset: "0 0 0"
```

## Fields

| Field | Type | Description |
|---|---|---|
| `key` | Text | Custom item ID from ItemsAdder. |
| `offset` | Vector | Where the item appears, relative to the structure center. |
| `kind` | Text | MMOItems item type. Used only by MMOItems results. |

## Important notes

- ItemsAdder must be installed and enabled.
- The item key must exist in ItemsAdder.
- If the result does not appear, check the server console for dependency hook messages.
