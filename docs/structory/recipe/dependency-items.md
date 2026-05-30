---
sidebar_position: 7
---

# Dependency Items

Structory can work with custom item plugins when those plugins are installed on the server.

The plugin-specific types are available only when the related dependency is present and enabled.

## Recommended aliases

Use the aliases below for new configurations.

| Plugin | Ingredient aliases | Result aliases |
|---|---|---|
| CraftEngine | `craftengine`, `ceitem` | `craftengine`, `ceitem` |
| Oraxen | `oraxen` | `oraxen`, `oitem` |
| Nexo | `nexo`, `nitem` | `nexo`, `nitem` |
| MMOItems | `mmoitems`, `mmoitem`, `mitem` | `mmoitems`, `mitem` |
| ItemsAdder | `itemsadder`, `iaitem` | `itemsadder`, `iaitem` |
| EcoItems | `ecoitems`, `eitem` | `ecoitems`, `eitem` |
| ExecutableItems | `executableitems`, `executableitemsitem`, `exitem`, `exitems` | `executableitems`, `executableitemsitem`, `exitem`, `exitems` |

## Important note about Oraxen ingredients

For Oraxen ingredients, use:

```yaml
type: oraxen
```

Avoid the short ingredient alias `oitem` unless you have tested it in your exact build. The long alias is safer for administrators.

For Oraxen results, both `oraxen` and `oitem` are intended aliases.

## Example CraftEngine ingredient and result

```yaml
ingredients:
  engine_item:
    type: craftengine
    key: topaz
result:
  reward:
    type: craftengine
    key: topaz_sword
    offset: "0 1 0"
```

## Example Oraxen ingredient and result

```yaml
ingredients:
  ruby:
    type: oraxen
    key: ruby
result:
  reward:
    type: oraxen
    key: ruby_sword
    offset: "0 1 0"
```

## Example MMOItems ingredient and result

```yaml
ingredients:
  blade:
    type: mmoitems
    kind: SWORD
    key: STEEL_BLADE
result:
  reward:
    type: mmoitems
    kind: SWORD
    key: FIRE_BLADE
    offset: "0 1 0"
```

## Example ItemsAdder ingredient and result

```yaml
ingredients:
  crystal:
    type: itemsadder
    key: namespace:crystal
result:
  reward:
    type: itemsadder
    key: namespace:magic_crystal
    offset: "0 1 0"
```

## Best practices

- Install and test the dependency before enabling recipes that use it.
- Prefer the full plugin name alias for readability.
- Use `saveditem` when the custom item has complex metadata and the direct dependency type is not enough.
- Test every custom item recipe after updating the dependency plugin.
- If a dependency is optional on your server, keep its recipes in separate files so they are easier to disable.
