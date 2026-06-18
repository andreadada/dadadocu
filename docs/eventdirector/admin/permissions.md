---
sidebar_position: 4
title: Permissions
---

# Permissions

Permissions control who can use EventDirector commands and administrative features.

:::info
The list below uses a recommended and common naming style. Verify the exact permission names in the final plugin build before publishing public documentation.
:::

## Recommended permissions

| Permission | Description | Give to |
|---|---|---|
| `eventdirector.use` | Basic user command access. | Players / Staff |
| `eventdirector.help` | View command help. | Staff |
| `eventdirector.admin` | General administrative access. | Admin |
| `eventdirector.gui` | Open the admin GUI. | Admin / Trusted staff |
| `eventdirector.setup` | Use the setup wizard. | Owner / Admin |
| `eventdirector.reload` | Reload configuration. | Owner / Admin |
| `eventdirector.backup` | Create and list backups. | Admin |
| `eventdirector.restore` | Restore backups. | Owner / Trusted admin |
| `eventdirector.safemode` | Manage safe mode. | Owner / Trusted admin |
| `eventdirector.updatecheck` | Check for updates. | Admin |
| `eventdirector.license` | View or manage license information. | Owner |
| `eventdirector.*` | All EventDirector permissions. | Owner only |

## LuckPerms examples

Give full EventDirector access to an admin group:

```mcfunction
/lp group admin permission set eventdirector.* true
```

Give only GUI access to a staff member:

```mcfunction
/lp user StaffName permission set eventdirector.gui true
```

Give event staff basic command access:

```mcfunction
/lp group eventstaff permission set eventdirector.help true
/lp group eventstaff permission set eventdirector.gui true
```

## Permissions to protect

Always protect:

- `eventdirector.restore`;
- `eventdirector.safemode`;
- `eventdirector.setup`;
- `eventdirector.reload`;
- `eventdirector.*`.

## Practical permission setup

Use two staff levels:

| Group | Permissions |
|---|---|
| Event staff | GUI, help, basic event commands |
| Technical admin | Backup, restore, reload, safe mode, setup |

This prevents event organizers from accidentally changing critical technical settings.
