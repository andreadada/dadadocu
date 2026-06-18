---
sidebar_position: 3
title: Commands
---

# Commands

This page lists the main commands used to manage EventDirector.

:::info
Exact command names can vary between builds. In many installations, the main command is `/eventdirector` and the short alias is `/ed`.
:::

## Main commands

| Command | Description | Recommended for |
|---|---|---|
| `/eventdirector` | Shows main help or plugin information. | Staff |
| `/eventdirector help` | Shows the command list. | Staff |
| `/eventdirector version` | Shows plugin version and status. | Staff/Admin |
| `/eventdirector reload` | Reloads configuration and messages. | Admin |
| `/eventdirector setup` | Opens the setup wizard. | Admin |
| `/eventdirector admin` | Opens the admin GUI. | Admin |
| `/eventdirector gui` | Opens the GUI, if available. | Admin |
| `/eventdirector backup create <name>` | Creates a manual backup. | Admin |
| `/eventdirector backup list` | Lists available backups. | Admin |
| `/eventdirector restore <name>` | Restores a backup. | Admin |
| `/eventdirector safemode on` | Enables safe mode. | Admin |
| `/eventdirector safemode off` | Disables safe mode. | Admin |
| `/eventdirector safemode status` | Checks safe mode status. | Admin |
| `/eventdirector updatecheck` | Checks for available updates. | Admin |
| `/eventdirector license` | Shows license information, if supported by the build. | Admin |

## Short alias

If enabled, you can use `/ed` instead of `/eventdirector`.

Examples:

```mcfunction
/ed version
/ed setup
/ed admin
```

## Sensitive commands

These commands should be reserved for trusted administrators:

- reload;
- setup;
- backup;
- restore;
- safe mode;
- update checker;
- license management;
- admin GUI access.

:::warning
Do not give restore or safe mode permissions to untrusted users. A wrong restore can overwrite recent configuration changes.
:::
