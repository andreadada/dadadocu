---
sidebar_position: 9
title: CoinsEngine Deposit Result - Premium
---

# CoinsEngine Deposit Result

The `cedeposit` result adds a CoinsEngine currency amount to the player.

This result requires CoinsEngine.

## Example

```yaml
result:
  coins:
    type: cedeposit
    currency: coins
    value: 100
```

## Fields

| Field | Type | Description |
|---|---|---|
| `currency` | Text | CoinsEngine currency ID. |
| `value` | Number | Amount to deposit. |
