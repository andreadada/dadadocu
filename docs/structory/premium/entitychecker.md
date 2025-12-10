---
sidebar_position: 2
title: EntityChecker
---

# EntityChecker

The **EntityChecker** system allows you to filter and select entities (creatures, players, objects) based on various characteristics such as type, health, equipment, tags, and much more.

## How It Works

EntityChecker is a flexible tool that allows you to create complex filters by combining multiple conditions. If an entity meets **all** the specified filters, it will be considered a match.

## Filter Categories

EntityChecker offers several groups of filters:

| Category              | Description                                             |
|-----------------------|---------------------------------------------------------|
| **Type**              | Filter by entity type (Zombie, Creeper, Player, etc.)   |
| **Name**              | Filter by the entity's custom name                      |
| **Health**            | Filter based on current or maximum health               |
| **Attributes**        | Filter by Minecraft attributes (speed, strength, etc.)  |
| **AI & Behavior**     | Filter by AI, leash, state                              |
| **Status**            | Filter by invisibility, water, ground, flight, swimming |
| **Equipment**         | Filter by equipped items (helmet, main hand, etc.)      |
| **Persistent Data**   | Filter by custom data stored on the entity              |
| **Scoreboard Tags**   | Filter by tags assigned via scoreboard                  |
| **Age**               | Filter by baby or adult entities                        |
| **MythicMobs**        | Filter by mobs managed by MythicMobs                    |

---

## Available Filters

### 🎯 Entity Type

Select the type of entity you want to filter.

```yaml
# Single entity type
type: ZOMBIE

# Multiple types
types:
  - ZOMBIE
  - CREEPER
  - SKELETON

# Exclude a type
notType: PLAYER
```

### 🏷️ Custom Name

Filter based on the visible name of the entity (for example, a name assigned with a command).

```yaml
# Exact name
displayName: "Evil Boss"

# Name containing a keyword
displayNameContains: "Boss"

# Entities with any custom name
hasAnyDisplayName: true

# Entities WITHOUT a custom name
hasNoDisplayName: true
```

### ❤️ Health

Filter entities based on their health.

```yaml
# Minimum health
minHealth: 5

# Maximum health
maxHealth: 10

# Health range
healthBetween:
  min: 5
  max: 10

# Entities at full health
fullHealth: true

# Damaged entities
damaged: true
```

### ⚙️ Attributes

Filter by Minecraft attributes such as speed, attack strength, etc.

```yaml
attributes:
  generic_max_health:
    min: 20
  generic_movement_speed:
    max: 0.3
```

> 💡 **Common attributes**: `generic_max_health`, `generic_movement_speed`, `generic_attack_damage`, `generic_armor`, `generic_armor_toughness`

### 🧠 AI & Behavior

Filter entities based on their behavior.

```yaml
# With artificial intelligence
hasAI: true

# Without AI
hasAI: false

# Leashed
isLeashed: true

# Not leashed
isLeashed: false
```

### 💧 Status & Environment

Filter based on the entity's status and environment.

```yaml
# In water
inWater: true

# On ground
onGround: true

# Flying/gliding
gliding: true

# Swimming
swimming: true

# Invisible
invisible: true

# Visible
invisible: false
```

### 🎒 Equipment

Filter entities that have equipment.

```yaml
# Has an item in main hand
hasItemInMainHand: true

# Wearing a helmet
hasHelmet: true
```

> 💡 **Available types**: `STRING`, `INTEGER`, `DOUBLE`, `BYTE`, `LONG`, etc.

### 🏷️ Scoreboard Tags

Filter entities that have specific tags assigned.

```yaml
# Single tag
scoreboardTag: "mytag"

# Does not have a tag
notScoreboardTag: "mytag"

# Has at least one of the tags (OR mode)
scoreboardTags:
  mode: any
  list:
    - tag1
    - tag2

# Has all tags (AND mode)
scoreboardTags:
  mode: all
  list:
    - tag1
    - tag2

# Simple list (assumes OR)
scoreboardTags:
  - tag1
  - tag2
```

### 👶 Age

Filter baby or adult entities.

```yaml
# Baby
isBaby: true

# Adults
isAdult: true
```

### 👹 MythicMobs

If you have the MythicMobs plugin installed, you can filter special mobs.

```yaml
# Any MythicMobs mob
isanymythic: true

# Specific mob by type
ismythic:
  key: "fire_dragon"
```

---

## Complete Examples

### Example 1: Dangerous Boss

```yaml
boss_check:
  displayNameContains: "Boss"
  minHealth: 50
  type: ZOMBIE
  isLeashed: false
  hasAI: true
```

Selects Zombies with "Boss" in the name, at least 50 health, with AI and not leashed.

### Example 2: Wounded Creature

```yaml
wounded_creature:
  damaged: true
  minHealth: 1
  maxHealth: 10
  hasAI: true
```

Selects intelligent creatures that are damaged with health between 1 and 10.


### Example 5: Equipped War Horse

```yaml
war_horse:
  type: HORSE
  hasHelmet: true
  hasItemInMainHand: true
```

Selects horses wearing a helmet and holding an item.

---

## Technical Notes

- **All filters must match**: If you have 3 filters, the entity must pass all three
- **Case sensitivity**: Filter names are not case-sensitive
- **Entity types**: Use official Minecraft names in UPPERCASE (e.g., `ZOMBIE`, `CREEPER`, `PLAYER`)
- **Health**: Health is expressed in "half hearts" (20 = 10 full hearts)
- **Scoreboard tags**: Tags are case-sensitive

---

## Frequently Asked Questions

**Q: What's the difference between "any" and "all" for tags?**  
A: - `any`: The entity must have **at least one** of the listed tags (OR logic)
- `all`: The entity must have **all** the listed tags (AND logic)
