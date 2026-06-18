---
sidebar_position: 3
title: Quick start
---

# Quick start

This quick start is for administrators who want to get EventDirector running quickly.

## 1. Install the plugin

Stop the server, copy the EventDirector `.jar` into the `plugins` folder, then start the server again.

## 2. Verify the plugin

Run:

```mcfunction
/eventdirector version
```

If the command works, continue.

## 3. Open the admin tools

Run one of the following commands:

```mcfunction
/eventdirector admin
```

or:

```mcfunction
/eventdirector setup
```

Use the admin GUI and setup wizard to review the main options.

## 4. Configure permissions

Give full access only to trusted administrators:

```mcfunction
/lp group admin permission set eventdirector.* true
```

For event staff, use more limited permissions instead of giving wildcard access.

## 5. Create a backup

```mcfunction
/eventdirector backup create first-working-config
```

## 6. Test an event

Use a simple event first. Confirm that it starts, sends messages, checks participants, and gives rewards correctly.

## 7. Go live

Once your test works, you can configure real events for players.

:::warning
Do not start with a complex public event before testing backups, permissions, and safe mode.
:::
