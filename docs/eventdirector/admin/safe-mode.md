---
sidebar_position: 6
title: Safe mode
---

# Safe mode

**Safe mode** is used to block or limit plugin behavior when there is a configuration problem or when you want to prevent unverified events from running on the server.

## When to use safe mode

Use safe mode when:

- the plugin prints errors in the console;
- an event has incorrect rewards;
- a YAML configuration is broken;
- you are performing maintenance;
- you just restored a backup;
- you need to stop automatic events from starting.

## Enable safe mode

```mcfunction
/eventdirector safemode on
```

## Disable safe mode

```mcfunction
/eventdirector safemode off
```

## Check status

```mcfunction
/eventdirector safemode status
```

or check:

```mcfunction
/eventdirector version
```

## What safe mode can do

The exact behavior depends on the build, but safe mode may:

- prevent events from starting;
- block automations;
- limit sensitive commands;
- prevent unverified rewards from being executed;
- keep diagnostic and restore commands available.

## Recommended error procedure

1. Enable safe mode.
2. Check the console.
3. Create a backup if possible.
4. Fix the broken configuration.
5. Reload or restart if needed.
6. Test a simple event.
7. Disable safe mode only when the issue is fixed.

:::warning
Do not disable safe mode just to hide an error. Fix the cause first.
:::
