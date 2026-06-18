---
sidebar_position: 4
title: messages.yml
---

# messages.yml

The `messages.yml` file contains the text sent by the plugin to players and admins.

Use this file to translate the plugin, change command help, or make messages match your server style.

## Formatting

Messages support color tags and line breaks.

Examples:

```text
<green>Success message
<red>Error message
<br>New line
```

Keep messages short and clear. Players should understand what happened and what they can do next.

## Command messages

```yaml
cmd:
  help_main: "..."
  player_only: "<red>This command can only be used by a player."
  invalid_location: "<red>Invalid location. Use <yellow>/graves graveyard set [world x y z yaw pitch]"
  world_not_found: "<red>World <yellow>%world%</yellow> not found."
```

| Key | Used when |
| --- | --- |
| `cmd.help_main` | A player runs `/graves help` or an incomplete command. |
| `cmd.player_only` | The console uses a command that requires a player. |
| `cmd.invalid_location` | The graveyard location format is wrong. |
| `cmd.world_not_found` | The world name used in the command does not exist. |

## Graveyard messages

```yaml
graveyard:
  graveyard_set: "<green>Graveyard set at <yellow>%world% %x% %y% %z%"
  graveyard_not_set: "<red>The graveyard is not set."
  graveyard_teleported: "<green>Teleported to the graveyard."
  graveyard_respawn: "<yellow>You respawned at the graveyard."
```

| Key | Used when |
| --- | --- |
| `graveyard.graveyard_set` | An admin sets the graveyard. |
| `graveyard.graveyard_not_set` | A player tries to teleport to a graveyard that is not configured. |
| `graveyard.graveyard_teleported` | A player teleports to the graveyard with `/graves graveyard tp`. |
| `graveyard.graveyard_respawn` | A player respawns at the graveyard after death. |

Available placeholders for `graveyard.graveyard_set`:

| Placeholder | Meaning |
| --- | --- |
| `%world%` | Graveyard world. |
| `%x%` | X coordinate. |
| `%y%` | Y coordinate. |
| `%z%` | Z coordinate. |

## Permission and command errors

```yaml
cmd_error:
  no_pex: "<red>Hey ! You can't use this command !"
  command_not_found: "<red>There was a problem executing the command, try again."
```

| Key | Used when |
| --- | --- |
| `cmd_error.no_pex` | The sender does not have permission. |
| `cmd_error.command_not_found` | The command could not be handled. |

## Grave messages

```yaml
grave:
  open_cost: "<red>To open this grave you need %amount%$"
  open_pay: "<yellow> You've paid %amount%$ to open this grave"
  grave_limit_dropped: "<yellow>You reached your gravestone limit (%limit%). Your oldest grave at <white>%world% %x% %y% %z%</white> was removed and its contents were dropped."
  grave_limit_deleted: "<yellow>You reached your gravestone limit (%limit%). Your oldest grave at <white>%world% %x% %y% %z%</white> was deleted with its contents."
```

`open_cost` and `open_pay` are used when Vault economy support is active and opening a grave has a price.

`grave_limit_dropped` and `grave_limit_deleted` are sent when a player reaches the configured active grave limit.

Available placeholders:

| Placeholder | Meaning |
| --- | --- |
| `%amount%` | Price to open the grave. |
| `%cost%` | Same as `%amount%`. |
| `%money%` | Same as `%amount%` in this message. |
| `%limit%` | Active grave limit for the player. |
| `%world%` | World of the removed oldest grave. |
| `%x%`, `%y%`, `%z%` | Coordinates of the removed oldest grave. |

## Decoration messages

```yaml
success:
  decoration_changed: "<gold>You have set your decoration to <yellow>%decoration%"
```

Available placeholders:

| Placeholder | Meaning |
| --- | --- |
| `%decoration%` | Name of the selected decoration. |

## Hologram messages

```yaml
hologram:
  grave_unlocked: "<gray>Unlocked"
```

This is shown when the grave lock has expired.

## Admin command messages

```yaml
admin_cmd:
  help_main_admin: "<yellow>/gravesadmin teleport <player> [index=0] <dark_green>-<lime> Teleport the player to their selected gravestone<br>"
  teleport_no_grave_found: "<red>The player does not have a grave at that index"
  teleport_teleported: "<yellow>You have teleported the player"
```

| Key | Used when |
| --- | --- |
| `admin_cmd.help_main_admin` | Admin help message. |
| `admin_cmd.teleport_no_grave_found` | The selected player has no grave at that index. |
| `admin_cmd.teleport_teleported` | Teleport succeeded. |

## Tips

- Keep placeholders exactly as written.
- Do not remove quotation marks if the message contains symbols like `:` or `%`.
- Use `<br>` if you want a new line inside a message.
- After editing, restart the server or reload the plugin if your setup supports it safely.
