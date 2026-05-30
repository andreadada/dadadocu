---
sidebar_position: 4
title: Commands and Permissions
---

# Commands and Permissions

Structory uses `/structory` as its main command.

Most commands are intended for administrators and are `op` by default.

## Main command

| Command | Permission | Description |
|---|---|---|
| `/structory` | `structory.cmd.use` | Shows the main Structory command message. |
| `/structory help` | `structory.cmd.use` | Shows the available command sections. |
| `/structory reload` | `structory.cmd.reload` | Reloads Structory configuration and systems. |

:::caution
For production servers, a full restart is safer than `/structory reload` after large changes to structures, recipes, or dependencies.
:::

## Saved item commands

Saved items let you save a custom item from your hand and reuse it in recipes or results.

| Command | Permission | Description |
|---|---|---|
| `/structory item save <name>` | `structory.cmd.item.save` | Saves the item in your main hand. |
| `/structory item get <name>` | `structory.cmd.item.get` | Gives you a saved item. |
| `/structory item replace <name>` | `structory.cmd.item.replace` | Replaces a saved item with the item in your main hand. |
| `/structory item delete <name>` | `structory.cmd.item.delete` | Deletes a saved item. |

Examples:

```text
/structory item save strangeapple
/structory item get strangeapple
/structory item replace strangeapple
/structory item delete strangeapple
```

Saved items are stored in:

```text
plugins/Structory/customitem/
```

## Layout commands

Layout commands help you create a structure layout from an in-game region.

| Command | Permission | Description |
|---|---|---|
| `/structory layout item` | `structory.cmd.layout.item` | Turns the item in your hand into the region selection tool. |
| `/structory layout create` | `structory.cmd.layout.create` | Exports the selected region as a layout file. |

Basic flow:

1. Hold any item.
2. Run `/structory layout item`.
3. Left-click the first corner of the region.
4. Right-click the second corner of the region.
5. Run `/structory layout create`.
6. Copy the generated layout into your structure file and adjust it.

## Crate command

This command is part of the premium crate feature.

| Command | Permission | Description |
|---|---|---|
| `/structory crate give <player> <crate>` | Administrator access | Gives a crate item for the selected structure key. |

Example:

```text
/structory crate give Steve elder_altar
```

The crate key must match a structure that has the `crate` option configured.

## Privacy commands

Privacy commands are part of the premium privacy feature.

| Command | Permission | Description |
|---|---|---|
| `/structory option privacy set <instance-uuid> <type>` | Administrator access | Changes a structure instance privacy type. |
| `/structory option privacy edit public owner <instance-uuid> <player>` | Administrator access | Changes the owner of a public structure by player name. |
| `/structory option privacy edit public owneruuid <instance-uuid> <player-uuid>` | Administrator access | Changes the owner of a public structure by UUID. |

Available privacy types:

| Type | Meaning |
|---|---|
| `OwnerOnly` | Only the owner can interact. |
| `Public` | Public structure with an owner. |
| `AllowAll` | Anyone can interact. |

## Permission groups

| Permission | Description |
|---|---|
| `structory.cmd.*` | Gives access to the main command and standard item/layout commands. |
| `structory.*` | Gives all Structory permissions declared by the plugin. |

:::info
Some premium commands may use internal administrator checks even when they are not explicitly listed in `plugin.yml`. Give them only to trusted staff.
:::
