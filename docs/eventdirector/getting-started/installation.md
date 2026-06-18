---
sidebar_position: 1
title: Installation
---

# Installation

This page explains how to install EventDirector on your Minecraft server.

## Requirements

Before installing the plugin, make sure you have:

- a compatible Paper/Spigot-based Minecraft server;
- access to the server `plugins` folder;
- permission to restart the server;
- the correct EventDirector `.jar` file;
- any required dependencies for your specific build.

:::info
If your build depends on external libraries or companion plugins, install those dependencies before starting the server.
:::

## Installation steps

1. Stop the server.
2. Place the EventDirector `.jar` file inside the `plugins` folder.
3. Start the server.
4. Wait until the plugin finishes loading.
5. Check the console for errors or warnings.
6. Join the server and run:

```mcfunction
/eventdirector version
```

If the command returns plugin information, EventDirector is loaded.

## First generated files

On first startup, the plugin may generate configuration files and folders. These files usually contain:

- main settings;
- messages;
- event definitions;
- GUI settings;
- backup folders;
- internal data.

Do not edit generated files while the server is writing them. Stop the server first if you need to make large manual changes.

## Updating from an older version

Before replacing an older EventDirector `.jar`, follow this checklist:

1. Create a backup.
2. Stop the server.
3. Replace the old `.jar` with the new one.
4. Start the server.
5. Check the console.
6. Run `/eventdirector version`.
7. Test at least one simple event.

:::warning
Do not update directly on a busy production server without a backup. Even small updates can change configuration behavior.
:::

## Common installation mistakes

| Problem | Possible cause | Suggested fix |
|---|---|---|
| Plugin does not load | Wrong server version or missing dependency | Check console errors and dependencies |
| Command not found | Plugin failed to enable | Read the startup log |
| GUI does not open | Missing permission or GUI dependency | Check permissions and console |
| Config files are empty | Server stopped during first startup | Delete broken generated files and restart carefully |
