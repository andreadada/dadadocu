---
sidebar_position: 3
---

# Main Configuration

The main configuration file is:

```text
plugins/Structory/config.yml
```

This file controls general plugin behavior, performance settings, structure distance rules, item handling, and default GUI items.

## Basic example

```yaml
version: 1.4.20

metrics:
  enable: true

scheduler:
  core_pool_size: 2
  max_pool_size: 2
  keep_alive_time: 60
  on_every:
    check: 500

structures:
  disable_item_pickup: true
  shift_to_remove_item: false
  distance: 32.0
  break_confirm_time: 5000

gui-items:
  recipe_default:
    material: PAPER
    name: "%displayname%"
    lore: "<br><gray>Click to craft this item"
```

## Fields

| Field | Description |
|---|---|
| `version` | Internal configuration version. Do not edit manually. |
| `metrics.enable` | Enables or disables anonymous plugin metrics. |
| `scheduler.core_pool_size` | Minimum async worker count used by Structory. |
| `scheduler.max_pool_size` | Maximum async worker count used by Structory. |
| `scheduler.keep_alive_time` | How long unused async workers stay alive. |
| `scheduler.on_every.check` | Interval in milliseconds for repeated internal checks. |
| `structures.disable_item_pickup` | If `true`, players cannot pick up recipe-slot items normally. They must use Structory interactions. |
| `structures.shift_to_remove_item` | Controls whether sneaking is required to remove items from structure slots. |
| `structures.distance` | Minimum distance between two protected structure instances. |
| `structures.break_confirm_time` | Time in milliseconds during which a second break confirms structure destruction. |
| `gui-items.recipe_default` | Default item shown in recipe GUIs when a recipe does not define its own `item-display`. |

## Safe values for most servers

For most small and medium servers, the default scheduler values are enough:

```yaml
scheduler:
  core_pool_size: 2
  max_pool_size: 2
  keep_alive_time: 60
  on_every:
    check: 500
```

Increase these only if you have tested the server under load.

## Recipe-slot item pickup

```yaml
structures:
  disable_item_pickup: true
  shift_to_remove_item: false
```

Recommended production behavior:

- keep `disable_item_pickup: true` so players cannot steal recipe-slot items by normal pickup;
- set `shift_to_remove_item` according to your preferred interaction style.

If players report that items cannot be picked up from structure slots, this is usually intended behavior. They should interact with the slot or structure instead.

## Break confirmation

```yaml
structures:
  break_confirm_time: 5000
```

This gives the player a short time window to confirm structure destruction by breaking again.

Use a higher value if players often break structures accidentally.

## Messages

Player-facing messages are stored in:

```text
plugins/Structory/messages.yml
```

Messages support MiniMessage-style formatting.

```yaml
altar:
  altar_created: "<white>You've created <yellow>'%structure%'<white> structure!"
```

## GUI item defaults

`gui-items.recipe_default` is used when a recipe does not provide its own `item-display`.

For better player experience, define `item-display` inside each recipe that appears in the picker.

## Reloading safely

The command `/structory reload` is useful for small configuration changes.

For large changes, prefer a full server restart, especially after editing:

- structure layouts;
- recipe listeners;
- dependency item recipes;
- crate build logic;
- storage or bag configuration;
- installed dependencies.

Restarting is safer because it reloads structures, recipes, listeners, and external plugin hooks from a clean state.

## YAML tips

- Use spaces, not tabs.
- Keep indentation consistent.
- Write vectors as quoted strings: `"0 1 0"`.
- Prefer simple values before dynamic parameters.
- Test one option at a time.
