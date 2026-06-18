---
sidebar_position: 2
title: Admin GUI
---

# Admin GUI

The admin GUI allows staff members to manage EventDirector in a more visual way.

## Opening the GUI

Possible commands:

```mcfunction
/eventdirector admin
```

```mcfunction
/eventdirector gui
```

```mcfunction
/ed admin
```

## Common sections

The GUI may include sections for:

- event list;
- event creation;
- event editing;
- event status;
- actions and rewards;
- backups;
- restore tools;
- safety controls;
- version information;
- setup wizard access.

## Navigation

GUI icons should be treated as shortcuts.

| Section | Purpose |
|---|---|
| Events | View and edit events |
| Configuration | Review general options |
| Backup | Create or manage backups |
| Restore | Restore a previous configuration |
| Safe mode | Enable or disable safe mode |
| Info | View plugin version and status |

## Usage tips

- Do not edit live events without a backup.
- If multiple admins work together, decide who edits what.
- After important changes, reload and test.
- Check the console if a button appears to do nothing.

:::info
The GUI may change between versions. If a section is not available in your build, use the equivalent command or check your configuration.
:::
