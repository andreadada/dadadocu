---
sidebar_position: 13
title: Nexo Item Result - Premium
---

# Nexo Item Result - Premium

This result creates a custom item from Nexo.

Required dependency: Nexo.

## Type aliases

You can use: `nexo`, `nitem`.

## Example

```yaml
result:
  custom_item:
    type: nexo
    key: "my_custom_item"
    offset: "0 0 0"
```

## Fields

| Field | Type | Description |
|---|---|---|
| `key` | Text | Custom item ID from Nexo. |
| `offset` | Vector | Where the item appears, relative to the structure center. |
| `kind` | Text | MMOItems item type. Used only by MMOItems results. |

## Important notes

- Nexo must be installed and enabled.
- The item key must exist in Nexo.
- If the result does not appear, check the server console for dependency hook messages.
