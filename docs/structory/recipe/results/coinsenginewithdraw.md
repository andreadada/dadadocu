---
sidebar_position: 10
title: CoinsEngine Withdraw Result - Premium
---

# CoinsEngine Withdraw Result

The `cewithdraw` result removes a CoinsEngine currency amount from the player.

This result requires CoinsEngine.

## Example

```yaml
result:
  coins:
    type: cewithdraw
    currency: tokens
    value: 5
```

## Fields

| Field | Type | Description |
|---|---|---|
| `currency` | Text | CoinsEngine currency ID. |
| `value` | Number | Amount to withdraw. |

## Warning

Use this result carefully. For crafting costs, prefer a `coinsengine` ingredient with `consume: true`.
