---
sidebar_position: 3
title: Filters and Point Rules
---

# Filters and point rules

Filters answer **whether an event should count**. Point rules answer **how much that accepted event should be worth**.

They can be used on simple goals and on individual leaves of composite goals.

## Basic filter example

```yaml
filter-mode: ALL
filters:
  material:
    include:
      - DIAMOND_ORE
      - EMERALD_ORE
  world:
    include:
      - world
      - resource_world
  game-mode:
    exclude:
      - CREATIVE
```

With `filter-mode: ALL`, every configured filter must match.

With:

```yaml
filter-mode: ANY
```

at least one filter in the group must match.

## Include and exclude

Most value filters accept both lists:

```yaml
filters:
  material:
    include:
      - STONE
      - DIAMOND_ORE
    exclude:
      - BEDROCK
```

If `include` is empty, any value is accepted unless it is excluded.

## Available filter keys

| Filter | Typical use |
|---|---|
| `material` | Blocks/items involved in supported block, item, fishing, or breeding events. |
| `entity-type` | Mob/player/entity type for combat and breeding events. |
| `world` | Restrict an event to named worlds. |
| `game-mode` | Restrict by player game mode. |
| `permission` | Require or reject player permissions. |
| `command` | Match `COMMAND_RUN` events. |
| `damage-cause` | Match `DAMAGE_DEALT` or `DAMAGE_TAKEN`. |
| `attribution` | Match breeding attribution information. |
| `biome` | Match the event biome. |
| `min-y` / `max-y` | Numeric vertical-position bounds. |
| `min-amount` / `max-amount` | Numeric bounds on the incoming event amount. |

Not every filter is valid for every event type. `/dp admin validate` rejects incompatible combinations instead of silently ignoring them.

## Permission filter

```yaml
filters:
  permission:
    include:
      - server.rank.vip
```

The actor must have at least one included permission. Excluded permissions always reject the event.

## Numeric bounds

Numeric filters use one value and do not support `exclude`.

```yaml
filters:
  min-y: 32
  max-y: 96
  min-amount: 1
```

## Point calculation

By default, accepted events use their event amount. For example, a craft producing multiple items can add more than one point.

Use `points` to override that calculation:

```yaml
points:
  base: EVENT_AMOUNT
  rounding: FLOOR
  rules:
    - when:
        material:
          include: [DIAMOND_ORE]
      multiply: 5
    - when:
        material:
          include: [EMERALD_ORE]
      set: 10
```

### `base`

`EVENT_AMOUNT` uses the amount supplied by the event.

You can also use a fixed non-negative integer:

```yaml
points:
  base: 1
```

### `set` and `multiply`

Each rule must contain exactly one operation:

```yaml
set: 10
```

or:

```yaml
multiply: 2.5
```

Rules are evaluated in order.

### `when-mode`

A point rule can have several conditions:

```yaml
- when-mode: ALL
  when:
    material:
      include: [DIAMOND_ORE]
    world:
      include: [resource_world]
  multiply: 3
```

`ALL` requires all conditions in that rule. `ANY` allows any one condition to activate it.

### Rounding

`points.rounding` uses Java rounding modes. `FLOOR` is the default and is the safest option for most servers.

## Debugging a complex rule

When a goal is not awarding the amount you expect, arm debug for a player:

```text
/dp admin debug <goalId> <onlinePlayer>
```

The next relevant event reports:

- global filter result;
- criterion filter result;
- point base;
- matching point rule;
- base-to-final point calculation;
- prerequisite status;
- cooldown status.

This is usually faster than testing by repeatedly editing YAML and guessing which condition failed.
