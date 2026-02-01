---
sidebar_position: 1
title: CoinsEngine
---

Used for CoinsEngine's currencies

Key: `coinsengine`

Used to check player's balance


## Ingredient Configuration Fields

| Field      | Type     | Description                                         | Default   |
|------------|----------|-----------------------------------------------------|-----------|
| `operator` | Operator | It can be `>=`, `>`, `<`, `<=`, `=`                 | required  |
| `value`    | Double   | The player's balance will be compared to this value | required  |
| `currency` | Double   | The currency's id                                   | required  |

