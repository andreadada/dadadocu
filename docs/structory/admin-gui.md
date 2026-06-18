---
sidebar_position: 8
title: Admin GUI
---

# Admin GUI

The Admin GUI is made for server owners and staff members who need to manage Structory without typing every key manually.

Use it to inspect saved items, structure instances and recipes from an in-game interface.

:::info
The Admin GUI is an administrator tool. It is not meant for normal players.
:::

## Opening the Admin GUI

The main admin command is:

```text
/structory admin
```

The most common sections are:

| Command | Permission | Description |
|---|---|---|
| `/structory admin` | `structory.cmd.admin.use` | Opens the main Admin GUI or shows the available admin sections. |
| `/structory admin item` | `structory.cmd.admin.item` | Opens the saved item admin page. |
| `/structory admin recipe` | `structory.cmd.admin.recipe` | Opens the recipe admin page. |
| `/structory admin instance` | `structory.cmd.admin.instance` | Opens the structure instance admin page. |

If your build only exposes a specific section, use that section command directly.

Example:

```text
/structory admin item
```

## Recommended permissions

For a small private server, giving `structory.*` to trusted operators is usually enough.

For a public server, it is safer to give only the admin permissions that the staff member really needs.

| Permission | Suggested use |
|---|---|
| `structory.cmd.admin.use` | Basic access to the admin command. |
| `structory.cmd.admin.item` | Staff members who manage saved items. |
| `structory.cmd.admin.recipe` | Staff members who inspect recipe configuration. |
| `structory.cmd.admin.instance` | Staff members who inspect placed structures. |
| `structory.cmd.admin.*` | Trusted administrators who need every Admin GUI page. |
| `structory.*` | Full Structory access. Give only to trusted owners/admins. |

:::caution
The Admin GUI can expose internal keys, saved item names, recipe names and structure instance information. Do not give these permissions to normal players.
:::

## Saved Item Admin GUI

Open it with:

```text
/structory admin item
```

Click on a structure instance's main block

## Recipe Admin GUI

Open it with:

```text
/structory admin recipe
```

Use this page to inspect the recipes loaded by Structory.

This page is useful when a recipe is not working and you want to check what Structory has loaded from the recipe files.

Typical information shown by the recipe page:

- recipe key;
- recipe display item;
- linked recipe group or discover key;
- ingredients;
- results;
- listener type, when available;
- recipe slots or requirements, when available.

The recipe page should use the configured recipe display item when possible.

For example, if a recipe has:

```yaml
item-display:
  material: NETHER_STAR
  name: "&bNether Star Recipe"
```

then the admin recipe page should use that item to represent the recipe instead of showing only a generic crafting table.

## Structure Instance Admin GUI

Open it with:

```text
/structory admin instance
```

Use this page to inspect structures that have already been created in the world.

A structure instance is created when a player builds a valid multiblock structure and activates it with Shift + Right Click.

The instance page is useful for administration because it helps you identify real placed structures, not only structure templates from the `structures` folder.

Typical information shown by the instance page:

- structure key;
- instance identifier;
- world;
- position;
- owner, when the privacy option is active;
- enabled options;
- useful copyable values for commands or configuration.

Use this page when:

- a player says a structure is not working;
- you need to check if a structure was created correctly;
- you need the instance identifier for privacy or debugging commands;
- you want to verify which world and location the structure belongs to.

## Copyable chat messages

Some Admin GUI actions may send clickable or copyable chat messages.

This is meant to avoid mistakes with long keys, UUIDs or recipe names.

Common values worth copying:

| Value | Where it is useful |
|---|---|
| Saved item key | Recipe ingredients and results. |
| Recipe key | Crafting whitelist or troubleshooting. |
| Structure key | Structure configuration and crate commands. |
| Instance UUID | Privacy commands or instance debugging. |
| Location | Manual checks in-game. |

## Troubleshooting

### I cannot see an item, recipe or instance

Check the following:

1. The file exists in the correct folder.
2. The YAML file has no formatting errors.
3. The plugin was restarted or reloaded after the change.
4. The item, recipe or structure was actually registered by Structory.
5. You have permission to use the selected admin page.

### The recipe icon is wrong

Check the recipe `item-display` section.

Example:

```yaml
item-display:
  material: NETHER_STAR
  name: "&bNether Star"
  lore:
    - "&7Custom Structory recipe"
```

If no valid display item is configured, Structory may fall back to a default item.