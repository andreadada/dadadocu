---
sidebar_position: 4
title: Commands and Permissions
---

# Commands and Permissions

Most Structory commands are for administrators and require OP or the relevant permission. `/structory` is the command root; use `/structory help` for the basic help message.

## General and saved items

| Command | Permission |
|---|---|
| `/structory reload` | `structory.cmd.reload` |
| `/structory item save <name>` | `structory.cmd.item.save` |
| `/structory item get <name>` | `structory.cmd.item.get` |
| `/structory item replace <name>` | `structory.cmd.item.replace` |
| `/structory item delete <name>` | `structory.cmd.item.delete` |

`item save` stores the item you're holding in `plugins/Structory/customitem/`. Use that saved key in a recipe or result.

## Structure layout wizard

```text
/structory layout item
/structory layout create <name>
/structory layout preview
/structory layout origin
/structory layout rotate left
/structory layout rotate right
/structory layout save [name]
/structory layout cancel
```

First hold an item and run `layout item`, then select two corners of the region in-game. `layout create` starts a wizard; **it does not immediately export the final YAML**. Preview, set the origin, rotate if needed and use `layout save` to write the structure file. The scanned volume is limited to 16,384 blocks.

`layout item` requires `structory.cmd.layout.item`; the wizard requires `structory.cmd.layout.create`. Region selection also uses `structory.create.region`.

## Admin commands

| Command | Permission | Use |
|---|---|---|
| `/structory admin` | Root admin help | Shows the available tools. |
| `/structory admin editor` | `structory.cmd.admin.editor` | Open the in-game editor. |
| `/structory admin item` | `structory.cmd.admin.item` | Mark an inspection item. |
| `/structory admin structures` / `structure <key>` | `structory.cmd.admin.structures` | Browse/edit structure definitions. |
| `/structory admin recipes` / `recipe <name>` | `structory.cmd.admin.recipes` | Browse/edit recipes. |
| `/structory admin instances` / `instance <uuid>` | `structory.cmd.admin.instances` | Inspect placed structures. |
| `/structory admin guis` | `structory.cmd.admin.guis` | Browse GUI definitions. |
| `/structory admin validate` | `structory.cmd.admin.validate` | Run health checks. |
| `/structory admin fix [apply]` | `structory.cmd.admin.fix` | Preview/apply eligible repairs. |
| `/structory admin history [limit]` | `structory.cmd.admin.history` | Show edit history. |
| `/structory admin undo` / `redo` | `structory.cmd.admin.history` | Undo/redo supported edits. |
| `/structory admin rollback <id>` | `structory.cmd.admin.history` | Roll back to a recorded change. |
| `/structory admin preview <key> [orientation]` | `structory.cmd.admin.visualize` | Client-side blueprint. |
| `/structory admin debug <uuid>` | `structory.cmd.admin.visualize` | Visual debugging. |
| `/structory performance` | `structory.cmd.admin.performance` | Scheduler diagnostics. |
| `/structory cluster` | `structory.cmd.admin.cluster` | Cluster status and maintenance options. |

The preview/debug commands also accept `stop`. Consult [Admin Tools and Editor](../admin-gui.md) for examples.

## Premium commands

`/structory crate give <player> <crate>` issues a configured structure crate.

Privacy commands are available under `/structory option privacy`, including `set` and owner-editing operations. They require the corresponding `structory.cmd.option.privacy.*` permissions.

## Wildcards

`structory.cmd.admin.*` grants the admin suite; `structory.cmd.*` grants declared command permissions; `structory.*` grants all declared Structory permissions. Use these only for trusted administrators.

After large YAML edits or dependency changes, prefer a full server restart over `reload`. Always back up the plugin data folder before upgrading.
