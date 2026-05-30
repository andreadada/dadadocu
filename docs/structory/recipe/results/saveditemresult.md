---
sidebar_position: 2
title: Saved Item Result
---

# Saved Item Result

The `saveditem` result gives or drops an item saved with Structory.

## Save the item first

```text
/structory item save godapple
```

## Recipe result example

```yaml
result:
  one:
    type: saveditem
    key: godapple
    offset: "0 0 0"
```

## Fields

| Field | Type | Description |
|---|---|---|
| `key` | Text | Saved item key. |
| `offset` | Vector | Where the item appears, relative to the structure center. |

## Recommended use

Use `saveditem` results for custom items that would be difficult to recreate manually in YAML.
