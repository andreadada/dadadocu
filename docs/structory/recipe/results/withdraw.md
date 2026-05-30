---
sidebar_position: 8
title: Vault Withdraw Result - Premium
---

# Vault Withdraw Result

The `withdraw` result removes money from the player's Vault balance.

This result requires Vault and an economy plugin.

## Example

```yaml
result:
  money:
    type: withdraw
    value: 100
```

## Fields

| Field | Type | Description |
|---|---|---|
| `value` | Number | Amount of money to withdraw. |

## Warning

Use this result carefully. Most recipes should use a Vault ingredient with `consume: true` instead of withdrawing money as a separate result.
