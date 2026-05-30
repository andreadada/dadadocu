---
sidebar_position: 1
title: Entity Checker
---

# Entity Checker

Entity Checker is used by entity-based ingredients to decide which entities are valid.

You will usually use it inside the `entity` ingredient.

## Basic example

```yaml
ingredients:
  nearby_zombie:
    type: entity
    amount: 1
    range: 5
    check:
      type: ZOMBIE
```

## Multiple entity types

```yaml
check:
  types:
    - ZOMBIE
    - SKELETON
    - CREEPER
```

## Exclude an entity type

```yaml
check:
  notType: PLAYER
```

## Display name filters

```yaml
check:
  displayName: "Dungeon Boss"
```

```yaml
check:
  displayNameContains: "Boss"
```

```yaml
check:
  hasAnyDisplayName: true
```

```yaml
check:
  hasNoDisplayName: true
```

## Health filters

```yaml
check:
  minHealth: 10
```

```yaml
check:
  maxHealth: 20
```

```yaml
check:
  healthBetween:
    min: 5
    max: 15
```

```yaml
check:
  fullHealth: true
```

```yaml
check:
  damaged: true
```

## Attribute filters

```yaml
check:
  attributes:
    GENERIC_MAX_HEALTH:
      min: 20
    GENERIC_MOVEMENT_SPEED:
      max: 0.3
```

Use valid Bukkit attribute names for your server version.

## AI and behavior filters

```yaml
check:
  hasAI: true
```

```yaml
check:
  isLeashed: false
```

## Status filters

```yaml
check:
  inWater: true
  onGround: true
  invisible: false
```

Other supported status fields:

```yaml
check:
  gliding: true
  swimming: true
```

## Age filters

```yaml
check:
  isBaby: true
```

```yaml
check:
  isAdult: true
```

## Equipment filters

```yaml
check:
  hasItemInMainHand: true
```

```yaml
check:
  hasHelmet: true
```

## Scoreboard tag filters

Single required tag:

```yaml
check:
  scoreboardTag: "altar_target"
```

Entity must not have a tag:

```yaml
check:
  notScoreboardTag: "blocked"
```

At least one tag:

```yaml
check:
  scoreboardTags:
    mode: any
    list:
      - tag1
      - tag2
```

All tags required:

```yaml
check:
  scoreboardTags:
    mode: all
    list:
      - tag1
      - tag2
```

## Persistent data filters

Check that an entity has a persistent data key:

```yaml
check:
  persistentData:
    myplugin:custom_key: {}
```

Check a string value:

```yaml
check:
  persistentData:
    myplugin:custom_key:
      value: "boss"
```

Check a typed value:

```yaml
check:
  persistentData:
    myplugin:level:
      type: INTEGER
      value: 5
```

## MythicMobs filters

Any MythicMobs mob:

```yaml
check:
  isanymythic: true
```

Specific MythicMobs mob:

```yaml
check:
  ismythic:
    key: "fire_dragon"
```

MythicMobs must be installed and enabled.

## Complete example

```yaml
ingredients:
  boss_nearby:
    type: entity
    amount: 1
    range: 10
    exclusive: false
    consume: false
    check:
      type: ZOMBIE
      displayNameContains: "Boss"
      minHealth: 20
      hasAI: true
      scoreboardTag: "altar_boss"
```

## How filters combine

All filters must match at the same time.

For example:

```yaml
check:
  type: ZOMBIE
  minHealth: 20
  scoreboardTag: "boss"
```

This means the entity must be:

- a zombie;
- at least 20 health;
- tagged with `boss`.
