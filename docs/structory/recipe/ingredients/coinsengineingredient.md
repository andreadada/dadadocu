---
sidebar_position: 6
title: CoinsEngine Ingredient - Premium
---

# CoinsEngine Ingredient

The `coinsengine` ingredient requires a CoinsEngine currency balance.

This ingredient requires CoinsEngine.

## Example

```yaml
ingredients:
  coins:
    type: coinsengine
    currency: coins
    value: 100
```

## Fields

| Field | Type | Description |
|---|---|---|
| `currency` | Text | CoinsEngine currency ID. |
| `value` | Number | Required amount. |
| `operator` | Text | Comparison operator, such as `>=`. |
| `consume` | Boolean | If `true`, currency is removed during crafting. |

## Example with consume

```yaml
ingredients:
  coins:
    type: coinsengine
    currency: tokens
    value: 5
    operator: ">="
    consume: true
```
