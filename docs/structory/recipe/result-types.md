---
sidebar_position: 6
---

# Result Types

Results define what happens after a recipe has successfully crafted.

Each result is configured under the recipe `result` section.

```yaml
result:
  reward:
    type: item
    offset: "0 1 0"
    item:
      material: DIAMOND
```

## `item`

Drops or gives a vanilla item result.

```yaml
result:
  diamond:
    type: item
    offset: "0 1 0"
    item:
      material: DIAMOND
      amount: 1
      name: "Refined Diamond"
```

Use `offset` to control where the item appears relative to the structure center.

## `saveditem` or `customitem`

Drops an item saved through Structory.

```yaml
result:
  key:
    type: saveditem
    key: ritual_key
    offset: "0 1 0"
```

This is useful for complex rewards with metadata.

## `message` or `msg`

Sends a message.

```yaml
result:
  message:
    type: message
    message: "The ritual is complete."
```

Messages can use Structory placeholders where supported by the result.

## `command`, `commands`, or `cmd`

Runs commands.

```yaml
result:
  command:
    type: command
    commands:
      - "say A structure recipe has been crafted"
      - "give %player% diamond 1"
```

Use console-safe commands and test placeholders before using the recipe on a public server.

## `summon`

Summons entities.

```yaml
result:
  summon:
    type: summon
    entity: ZOMBIE
    amount: 2
    location:
      param: offset
      x: 0
      y: 1
      z: 0
```

Use offsets for portable structures.

## Vault `deposit` and `withdraw`

Requires Vault and an economy plugin.

```yaml
result:
  pay_player:
    type: deposit
    value: 100
```

```yaml
result:
  charge_player:
    type: withdraw
    value: 50
```

## CoinsEngine `cedeposit` and `cewithdraw`

Requires CoinsEngine.

```yaml
result:
  coins:
    type: cedeposit
    currency: coins
    value: 250
```

```yaml
result:
  coins:
    type: cewithdraw
    currency: coins
    value: 100
```

## `random`

Runs one or more random results.

```yaml
result:
  random_reward:
    type: random
    rolls: 1
    chance:
      diamond:
        roll-chance: 70
        type: item
        offset: "0 1 0"
        item:
          material: DIAMOND
      netherite:
        roll-chance: 30
        type: item
        offset: "0 1 0"
        item:
          material: NETHERITE_INGOT
```

Use random results for crate-like rewards, rituals, and rare drops.

## Dependency item results

Structory can also create results from supported item plugins.

| Plugin | Recommended type aliases |
|---|---|
| CraftEngine | `craftengine`, `ceitem` |
| Oraxen | `oraxen`, `oitem` |
| Nexo | `nexo`, `nitem` |
| MMOItems | `mmoitems`, `mitem` |
| ItemsAdder | `itemsadder`, `iaitem` |
| EcoItems | `ecoitems`, `eitem` |
| ExecutableItems | `executableitems`, `executableitemsitem`, `exitem`, `exitems` |

Example:

```yaml
result:
  ruby:
    type: oraxen
    key: ruby
    offset: "0 1 0"
```

Only use dependency result types if the related plugin is installed and enabled.

## Multiple results

A recipe can execute more than one result.

```yaml
result:
  reward:
    type: item
    offset: "0 1 0"
    item:
      material: DIAMOND
  message:
    type: message
    message: "You crafted a diamond reward."
  command:
    type: command
    commands:
      - "playsound minecraft:entity.player.levelup player %player%"
```

Keep production recipes simple at first. Add messages, commands, and random rewards after the base item result works.
