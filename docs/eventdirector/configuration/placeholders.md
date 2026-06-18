---
sidebar_position: 3
title: Placeholders
---

# Placeholders

Placeholders are dynamic values replaced by the plugin when a message, command, or reward is executed.

## Common placeholder idea

A placeholder may represent:

- player name;
- event name;
- reward amount;
- event status;
- world name;
- participant count;
- time left.

Example:

```txt
%player% completed %event%!
```

The plugin replaces the placeholders with real values when the message is sent.

## Command placeholders

Command rewards often need a player placeholder.

Example:

```txt
give %player% diamond 1
```

If the player placeholder is wrong, the command may fail or target the wrong user.

## Best practices

- Copy placeholders from working examples.
- Do not translate placeholder names.
- Do not add spaces inside placeholders.
- Test commands with one player first.
- Check the console if a placeholder is not replaced.

## PlaceholderAPI

If your build supports PlaceholderAPI, you may be able to use external placeholders from other plugins.

Before using external placeholders:

1. install the required plugin;
2. install the required expansion, if needed;
3. test the placeholder in-game;
4. use it in EventDirector only after confirming it works.

:::info
Not every placeholder is available in every context. A placeholder that works in a message may not always work in a console command.
:::
