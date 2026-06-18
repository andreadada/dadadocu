---
sidebar_position: 1
title: Update checker
---

# Update checker

The update checker helps you verify whether a newer EventDirector version is available.

## Command

```mcfunction
/eventdirector updatecheck
```

or:

```mcfunction
/ed updatecheck
```

## When to use it

Use it:

- after server startup;
- before reporting a bug;
- before updating connected plugins;
- when you want to check whether a release fixes an issue.

## Before updating

1. Read the changelog.
2. Create a backup.
3. Stop the server.
4. Replace the `.jar` file.
5. Start the server.
6. Check console and configuration.
7. Test one event.

:::warning
Do not update directly on a very active server without a backup. Even a small update can change configuration behavior.
:::
