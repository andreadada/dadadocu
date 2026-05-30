---
sidebar_position: 17
title: ExecutableItems Result - Premium
---

# ExecutableItems Result - Premium

This result creates a custom item from ExecutableItems.

Required dependency: ExecutableItems.

## Type aliases

You can use: `exitem`, `exitems`, `executableitems`, `executableitemsitem`.

## Example

```yaml
result:
  custom_item:
    type: exitem
    key: "my_executable_item"
    offset: "0 0 0"
```

## Fields

| Field | Type | Description |
|---|---|---|
| `key` | Text | Custom item ID from ExecutableItems. |
| `offset` | Vector | Where the item appears, relative to the structure center. |
| `kind` | Text | MMOItems item type. Used only by MMOItems results. |

## Important notes

- ExecutableItems must be installed and enabled.
- The item key must exist in ExecutableItems.
- If the result does not appear, check the server console for dependency hook messages.
