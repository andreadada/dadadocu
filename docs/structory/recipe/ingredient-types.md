---
sidebar_position: 5
---

# Ingredient Types

Ingredients define what a recipe needs before it can craft.

Each ingredient is configured under the recipe `ingredients` section.

```yaml
ingredients:
  apple:
    type: item
    material: APPLE
```

## Common fields

Many ingredients support extra behavior such as `consume`, `animation`, and `strategy`.

```yaml
ingredients:
  catalyst:
    type: item
    material: NETHER_STAR
    consume: true
    animation:
      type: particle
      duration: 40
      speed: 3
    strategy:
      type: sequential
```

| Field | Description |
|---|---|
| `type` | Ingredient type. |
| `consume` | Whether the ingredient is removed or spent when the recipe crafts. |
| `animation` | Optional consume animation for this ingredient only. |
| `strategy` | Optional consume strategy for this ingredient only. |

Not every ingredient needs all of these fields. Use the minimal configuration first.

## `item`

Requires a vanilla Minecraft item.

```yaml
ingredients:
  iron:
    type: item
    material: IRON_INGOT
```

Supported checks include:

| Field | Description |
|---|---|
| `material` | Bukkit material name. |
| `model` | Custom model data. |
| `displayName` | Display name check. |
| `enchantments` | Required enchantments. |
| `has` | Persistent data check. |

Use repeated ingredient entries when a recipe should require multiple items of the same material.

## `saveditem` or `customitem`

Requires an item saved through Structory.

```yaml
ingredients:
  key:
    type: saveditem
    key: ritual_key
```

Save items with:

```text
/structory item save ritual_key
```

This is the safest method for custom items that have NBT, names, lore, enchantments, or plugin metadata.

## `experience`

Requires player experience.

```yaml
ingredients:
  xp:
    type: experience
    level: 10
    consume: true
```

Common fields:

| Field | Description |
|---|---|
| `level` | Required player level. |
| `experience` | Required experience amount. |
| `total` | If enabled, checks total experience instead of current progress. |
| `consume` | Whether experience is removed when the recipe crafts. |

## `vault`

Requires money through Vault.

```yaml
ingredients:
  money:
    type: vault
    operator: ">="
    value: 500
    consume: true
```

Recommended operators:

- `>=`
- `>`
- `<=`
- `<`

Avoid relying on equality checks for economy requirements. Economy balances often use decimals and may behave unexpectedly.

## `coinsengine`

Requires CoinsEngine currency.

```yaml
ingredients:
  coins:
    type: coinsengine
    currency: coins
    operator: ">="
    value: 250
    consume: true
```

CoinsEngine must be installed and enabled.

## `entity`

Checks for living entities near the structure.

```yaml
ingredients:
  nearby_zombie:
    type: entity
    range: 6
    amount: 1
    consume: false
    check:
      type: type
      entity: ZOMBIE
```

Use `entity` when the recipe should require mobs or entities near the structure at crafting time.

This can work with normal `interact` recipes.

## `killedentity`

Checks the entity that just died.

```yaml
ingredients:
  kill:
    type: killedentity
    entities:
      - ZOMBIE
      - SKELETON
```

This ingredient requires the recipe to use the `entity-death` listener.

```yaml
listeners:
  - entity-death
```

Use it for sacrifice altars, mob-kill rituals, or recipes that should craft only after a player kills a specific entity near the structure.

## `bag`

Requires a shaped bag layout.

```yaml
ingredients:
  bag:
    type: bag
    bag: default
    consume: true
    ingredients:
      A: DIAMOND
      B: GOLD_INGOT
```

Bag ingredients are used with the `bag` option on the structure. They are useful when the structure itself has a block layout or input grid that represents ingredients.

## `unorderedbag`

Requires a bag containing materials without a strict order.

```yaml
ingredients:
  bag:
    type: unorderedbag
    bag: default
    consume: true
    ingredients:
      A: DIAMOND
      B: GOLD_INGOT
```

Use this when the player should provide the required materials, but their exact positions are not important.

## Dependency item ingredients

Structory can also check custom items from supported plugins.

| Plugin | Recommended type aliases |
|---|---|
| CraftEngine | `craftengine`, `ceitem` |
| Oraxen | `oraxen` |
| Nexo | `nexo`, `nitem` |
| MMOItems | `mmoitems`, `mmoitem`, `mitem` |
| ItemsAdder | `itemsadder`, `iaitem` |
| EcoItems | `ecoitems`, `eitem` |
| ExecutableItems | `executableitems`, `executableitemsitem`, `exitem`, `exitems` |

Example:

```yaml
ingredients:
  custom_item:
    type: oraxen
    key: ruby
```

Only use these types if the related plugin is installed and enabled.

## Choosing the right ingredient

| Goal | Recommended ingredient |
|---|---|
| Require a vanilla item. | `item` |
| Require a complex custom item. | `saveditem` |
| Require player XP. | `experience` |
| Require money. | `vault` or `coinsengine` |
| Require a nearby living mob. | `entity` |
| Require killing a mob near the structure. | `killedentity` with `entity-death` |
| Require a custom plugin item. | The dependency-specific item type |
| Require block/grid input. | `bag` or `unorderedbag` |
