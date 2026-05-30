---
sidebar_position: 7
title: Vault Deposit Result - Premium
---

# Vault Deposit Result

The `deposit` result adds money to the player's Vault balance.

This result requires Vault and an economy plugin.

## Example

```yaml
result:
  money:
    type: deposit
    value: 100
```

## Fields

| Field | Type | Description |
|---|---|---|
| `value` | Number | Amount of money to deposit. |
