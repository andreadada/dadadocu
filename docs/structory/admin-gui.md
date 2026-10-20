---
sidebar_position: 8
title: Admin Tools and Editor
---

# Admin Tools and Editor (Premium)

Structory 26.2 includes an in-game editor, structure/recipe browsers and tools for checking problems before players run into them.

## Where to start

`/structory admin` **shows admin help**; it isn't the GUI itself. To open the editor, run:

```text
/structory admin editor
```

You can also open it with `/structory editor`.

| Command | Purpose |
|---|---|
| `/structory admin item` | Marks the item in your hand as an admin inspection item; use it on a structure. |
| `/structory admin editor` | Opens the editor home. |
| `/structory admin structures` | Browses structure definitions. |
| `/structory admin structure <key>` | Opens a specific structure. |
| `/structory admin recipes` | Browses loaded recipes. |
| `/structory admin recipe <name>` | Opens a recipe. |
| `/structory admin instances` | Lists placed structures. |
| `/structory admin instance <uuid>` | Opens one placed instance. |
| `/structory admin guis` | Opens GUI definition pages. |

The editor separates structure options, recipe ingredients/results/listeners and individual instance values. Changes to an *instance* are not necessarily changes to the structure template used for future instances.

## Working safely in the editor

A useful editing sequence:

1. Open the specific structure or recipe from the lists.
2. Change one field or effect.
3. Save it and check the result in the world.
4. Run `/structory admin validate` to identify missing references or invalid configuration.

The value editors provide typed controls for supported settings and a more generic value-map editor for complex options. If a field isn't available as a control, don't assume it cannot be configured: inspect the underlying YAML.

## Validation, preview and auto-fix

| Command | Behavior |
|---|---|
| `/structory admin validate` | Reports configuration and reference problems; also available as `/structory validate`. |
| `/structory admin fix` | Previews proposed safe repairs. |
| `/structory admin fix apply` | Applies eligible repairs. Review the preview first. |
| `/structory admin preview <structure> [north\|south\|east\|west]` | Displays a client-side blueprint of a structure. |
| `/structory admin preview stop` | Hides the blueprint. |
| `/structory admin debug <instance-uuid>` | Highlights a live instance to help diagnose layout problems. |
| `/structory admin debug stop` | Stops the visual debugger. |
| `/structory performance` | Shows scheduler/performance diagnostics. |

A preview is not a placed or saved structure; it is a visualization for the admin. This is a convenient way to inspect rotations without rebuilding your altar.

## History and recovery

```text
/structory admin history
/structory admin undo
/structory admin redo
/structory admin rollback <history-id>
```

History helps recover supported admin edits. `rollback` targets a specific history entry rather than undoing everything in the world. Use the history IDs shown by the command; keep independent backups before large changes.

## Permissions

Relevant permission nodes:

- `structory.cmd.admin.editor`, `structory.cmd.admin.item`
- `structory.cmd.admin.structures`, `structory.cmd.admin.recipes`, `structory.cmd.admin.instances`, `structory.cmd.admin.guis`
- `structory.cmd.admin.validate`, `structory.cmd.admin.fix`
- `structory.cmd.admin.history`, `structory.cmd.admin.visualize`
- `structory.cmd.admin.performance` and `structory.cmd.admin.cluster`
- `structory.cmd.admin.*` for trusted staff

All these commands are intended for operators or staff with specifically assigned permissions. For a full list, see [Commands and Permissions](./commands/commands.md).
