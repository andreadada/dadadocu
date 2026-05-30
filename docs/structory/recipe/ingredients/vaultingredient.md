---
sidebar_position: 5
title: Vault Ingredient - Premium
---

# Vault Ingredient

The `vault` ingredient requires money from the server's main Vault economy.

This ingredient requires Vault and an economy plugin.

## Example

```yaml
ingredients:
  money:
    type: vault
    value: 1000
```

## With operator

```yaml
ingredients:
  money:
    type: vault
    operator: ">="
    value: 1000
```

## Fields

| Field | Type | Description |
|---|---|---|
| `value` | Number | Money amount. |
| `operator` | Text | Comparison operator. Usually `>=`. |
| `consume` | Boolean | If `true`, the money is withdrawn during crafting. |

## Operators

Common operators:

| Operator | Meaning |
|---|---|
| `>=` | Player must have at least this value. |
| `>` | Player must have more than this value. |
| `<=` | Player must have at most this value. |
| `<` | Player must have less than this value. |
| `=` | Player must have exactly this value. |

## Important note

Vault must be installed and connected to an economy plugin. If Vault is installed but no economy provider is available, Vault ingredients and results will not work correctly.
