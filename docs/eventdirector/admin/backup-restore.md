---
sidebar_position: 5
title: Backup and restore
---

# Backup and restore

EventDirector includes tools for creating backups and restoring configurations.

## Why backups matter

Create a backup before:

- updating the plugin;
- editing complex events;
- using the setup wizard on an already configured server;
- changing messages or permissions;
- testing rewards and commands;
- manually editing YAML files.

## Create a backup

```mcfunction
/eventdirector backup create backup-name
```

Example:

```mcfunction
/eventdirector backup create before-tournament
```

## List backups

```mcfunction
/eventdirector backup list
```

## Restore a backup

```mcfunction
/eventdirector restore backup-name
```

After restoring, it is recommended to:

1. check the console;
2. reload the plugin if needed;
3. verify events;
4. test at least one simple event.

## Backup names

Use clear names:

```txt
before-update-0-9-25
before-christmas-event
stable-config-june
manual-backup
```

Avoid strange characters, spaces, and unnecessary symbols.

## When to create backups

| Moment | Backup recommended? |
|---|---|
| Before an update | Yes |
| Before manual YAML edits | Yes |
| Before creating complex events | Yes |
| After every small visual change | Not always |
| Before a restore | Yes, if possible |

:::danger
A restore can overwrite newer configuration changes. Before restoring, make sure you selected the correct backup.
:::
