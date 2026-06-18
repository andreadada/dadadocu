---
sidebar_position: 1
title: Welcome to EventDirector
---

# Welcome to EventDirector

EventDirector is a Minecraft server plugin built to help server owners and staff create, manage, and control server events in a cleaner and safer way.

It is designed for communities that run seasonal events, tournaments, scheduled activities, staff-led minigames, rewards, special server moments, or any feature that needs organized event management.

## What you can do with EventDirector

With EventDirector you can manage event-related workflows such as:

- setting up the plugin for the first time;
- opening an admin GUI for staff operations;
- creating and managing event configurations;
- using commands and permissions to separate staff roles;
- creating manual backups before risky changes;
- restoring previous configurations when something goes wrong;
- enabling safe mode during maintenance or troubleshooting;
- checking the installed plugin version and available updates.

## Who this wiki is for

This wiki is written for:

- server owners;
- administrators;
- event managers;
- moderators with event permissions;
- staff members who need to understand how to use the plugin safely.

It does not require development knowledge. The goal is to explain what each feature does, when to use it, and how to avoid common mistakes.

## Recommended reading order

If this is your first time using EventDirector, follow this order:

1. [Installation](./getting-started/installation)
2. [First setup](./getting-started/first-setup)
3. [Quick start](./getting-started/quick-start)
4. [Commands](./admin/commands)
5. [Permissions](./admin/permissions)
6. [Backup and restore](./admin/backup-restore)
7. [Safe mode](./admin/safe-mode)

## Important note

:::info
Some command and permission names can vary between builds. If a command does not work exactly as shown, check the plugin version, the console output, and the final `plugin.yml` of your build.
:::

## Basic safety rule

Before changing important event configurations, always create a backup.

```mcfunction
/eventdirector backup create before-event-changes
```

This simple habit makes it much easier to recover from broken YAML files, incorrect rewards, or unwanted changes.
