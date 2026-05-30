---
sidebar_position: 2
title: Installation
---

# Installation

This page explains how to install Structory on a Minecraft server.

## Requirements

You need:

- a Spigot, Paper, or compatible server;
- Java compatible with your server version;
- the Structory plugin `.jar` file;
- access to the server `plugins` folder.

Paper is recommended for better performance and compatibility.

## Install Structory

1. Stop your server.
2. Put the Structory `.jar` file inside the `plugins` folder.
3. Start the server.
4. Check that the folder `plugins/Structory/` has been created.
5. Stop the server again before editing the first configuration files.

After the first start, Structory creates its default files and folders.

## Optional dependencies

Structory can hook into several plugins. These are not all required. Install only the ones you want to use.

| Plugin | Used for |
|---|---|
| Vault | Main economy support. |
| CoinsEngine | Custom currency ingredients and results. |
| CraftEngine | CraftEngine items and blocks. |
| Oraxen | Oraxen custom items. |
| Nexo | Nexo custom items. |
| MMOItems | MMOItems custom items. |
| ItemsAdder | ItemsAdder custom items. |
| EcoItems | EcoItems custom items. |
| ExecutableItems | ExecutableItems custom items. |

If a dependency is missing, do not use its ingredient or result type in your recipes.

## Recommended restart policy

For production servers, restart the server after changing structures, recipes, or plugin files.

`/structory reload` is useful while testing, but a full restart is safer after large edits.

## Checking that Structory loaded correctly

After starting the server, check the console for:

```text
[Structory] Plugin loaded!
```

You can also run:

```text
/structory
```

If the command exists and returns a message, the plugin is loaded.

## Updating Structory

Before updating:

1. Stop the server.
2. Back up the full folder `plugins/Structory/`.
3. Replace the old Structory `.jar` with the new one.
4. Start the server.
5. Check the console for configuration warnings.

Structory can create a backup of `config.yml` when it detects a new configuration version. You should still keep a full manual backup before updating.
