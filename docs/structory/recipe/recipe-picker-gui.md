---
sidebar_position: 8
---

# Recipe Picker GUI

Structory opens the recipe picker when more than one valid recipe can be crafted from the same structure interaction.

You can also force it to open every time with:

```yaml
options:
  crafting:
    open-gui: ALWAYS
```

## When the GUI appears

| Situation | Behavior |
|---|---|
| No valid recipe | Nothing is crafted. |
| One valid recipe | Structory crafts it directly by default. |
| Multiple valid recipes | Structory opens the recipe picker. |
| `open-gui: ALWAYS` | Structory opens the picker even with one valid recipe. |

## Recipe display item

The item shown in the picker is configured in the recipe with `item-display`.

```yaml
my_recipe:
  name: my_recipe
  item-display:
    material: DIAMOND
    amount: 1
    name: "Diamond Ritual"
    lore:
      - "Consumes the altar ingredients."
      - "Creates a refined reward."
    glow: true
```

Supported display fields include:

| Field | Description |
|---|---|
| `material` | Bukkit material used as the icon. |
| `amount` | Stack amount shown in the GUI. |
| `name`, `display_name`, `displayName` | Display name. |
| `lore` | Lore as a list, or as text split with `<br>`. |
| `glow` | Adds an enchanted glow effect. |
| `custom_model_data`, `customModelData` | Custom model data. |
| `skull_owner`, `skullOwner` | Skull owner for player heads. |
| `unbreakable` | Marks the display item as unbreakable. |
| `flags` | Item flags to hide attributes or metadata. |
| `enchants` | Enchantments used on the display item. |
| `durability` | Display item durability. |
| `data` | Legacy data value. |

## Example with multiple choices

Structure:

```yaml
options:
  crafting:
    recipe: ["forge"]
    open-gui: ALWAYS
    recipe-slots:
      offsets:
        - "0 1 1"
        - "0 1 -1"
```

Recipe A:

```yaml
iron_reward:
  name: iron_reward
  discovers: "forge"
  item-display:
    material: IRON_INGOT
    name: "Iron Reward"
  ingredients:
    input:
      type: item
      material: COAL
  result:
    reward:
      type: item
      offset: "0 1 0"
      item:
        material: IRON_INGOT
```

Recipe B:

```yaml
gold_reward:
  name: gold_reward
  discovers: "forge"
  item-display:
    material: GOLD_INGOT
    name: "Gold Reward"
  ingredients:
    input:
      type: item
      material: COAL
  result:
    reward:
      type: item
      offset: "0 1 0"
      item:
        material: GOLD_INGOT
```

With `open-gui: ALWAYS`, the player can choose which recipe to craft.

## Current GUI customization status

The current build exposes recipe display items through `item-display` and crafting behavior through `open-gui`.

The picker layout itself is handled internally by Structory in the current build. Treat `item-display` as the stable customization point for server administrators.


## Difference from the Admin GUI

The Recipe Picker GUI is a player-facing GUI. It appears during crafting when more than one recipe can match the current ingredients.

The Admin GUI is different. It is opened by staff with commands such as:

```text
/structory admin recipe
```

Use the Admin GUI to inspect recipes and configuration. Use the Recipe Picker GUI to let players choose what they want to craft.
