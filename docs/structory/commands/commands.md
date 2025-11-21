---
sidebar_position: 3
title: Commands
---

# Commands and Permissions

This page describes all available commands in Structory and the required permissions to use them.

## Base Command

| Command | Permission | Description |
|---------|-----------|-------------|
| `/structory` | `structory.cmd.use` | Shows the plugin's main information |

---

## Plugin Management

| Command | Permission | Description |
|---------|-----------|-------------|
| `/structory reload` | `structory.cmd.reload` | Completely reloads the plugin (disables and re-enables) |

---

## Item Management

:::info
All item commands require the executor to be a player (they don't work from console for save and replace operations).
:::

| Command | Permission | Description |
|---------|-----------|-------------|
| `/structory item save <name>` | `structory.cmd.item.save` | Saves the item in your main hand as a custom item |
| `/structory item get <name>` | `structory.cmd.item.get` | Retrieves a previously saved custom item |
| `/structory item replace <name>` | `structory.cmd.item.replace` | Replaces a saved item with the item in your main hand |
| `/structory item delete <name>` | `structory.cmd.item.delete` | Deletes a saved custom item |

---

## Layout Management

:::info
Layout commands are used to create and manage structure layouts from in-game regions.
:::

| Command | Permission | Description |
|---------|-----------|-------------|
| `/structory layout item` | `structory.cmd.layout.item` | Converts the item in your main hand into a region selection tool. Requires `structory.create.region` to use. |
| `/structory layout create` | `structory.cmd.layout.create` | Creates a layout file from the region selected with the tool. |

---

## Privacy Management

:::info
Privacy commands control who can interact with structure instances. Available privacy types: `owneronly`, `public`, `allowall`.
:::

| Command | Permission | Description |
|---------|-----------|-------------|
| `/structory option privacy set <uuid> <type>` | `structory.cmd.option.privacy.set` | Sets the privacy type for a structure instance. |
| `/structory option privacy edit public owner <uuid> <player>` | `structory.cmd.option.privacy.edit.public` | Changes the owner of a public structure instance by player name. |
| `/structory option privacy edit public owneruuid <uuid> <player-uuid>` | `structory.cmd.option.privacy.edit.public` | Changes the owner of a public structure instance by player UUID. |

---

## Technical Notes

- Privacy changes are immediately saved to the configuration
- The `save`, `replace`, `layout item`, and `layout create` commands require the executor to be a player
