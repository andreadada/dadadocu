---
sidebar_position: 2
title: Installation and Updates
---

# Installation and Updates

Structory runs on compatible Spigot/Paper servers. Use the Java runtime required by your **Minecraft server** and install the matching Structory build. The JDK 21 mentioned in the source build scripts is for **building the plugin**, not a requirement to change your live server's Java version to 21.

## Install

1. Stop the server and place the Structory JAR in `plugins/`.
2. Start the server and check for `[Structory] Plugin loaded!`.
3. Open `plugins/Structory/` and edit the generated configuration.
4. Restart after the first major configuration change.

Optional integrations (Vault, CoinsEngine, CraftEngine, Nexo, Oraxen, MMOItems, ItemsAdder, EcoItems, ExecutableItems and others) are not required for vanilla recipes. Install them only when using their ingredient or result types.

## Updating to 26.2

1. **Back up the entire `plugins/Structory/` folder and your world**.
2. Stop the server and replace the plugin JAR. Make sure an old copy is not left in `plugins/`.
3. Start the server and read any migration, dependency or model warnings.
4. Check your important structures, recipes and saved instances before reopening to players.

Versioned migrations update supported root YAML schema files conservatively. Instance storage remains `yaml` unless you explicitly select SQLite or MariaDB.

Bundled structure and BlockDisplay examples are copied when missing, but **existing user files are left intact**. If you want the newest bundled `diamond_core.json`, replace your old copy manually after backing it up.

## Building from source (developers)

From the Premium repository on Windows:

```powershell
git checkout hardening/p0-p3-2026-09
git pull
.\scripts\build-release.ps1
```

The script looks for an installed **JDK 21** and temporarily sets `JAVA_HOME` / `PATH` for Maven. It doesn't permanently change your system settings.

The resulting file is `target/Structory-Premium-26.2.jar`, with a SHA-256 checksum alongside it. You can override the detected JDK using `-JavaHome21 "C:\path\to\jdk-21"`.

## First checks

Use `/structory admin validate` and test a simple structure. Check the BlockDisplay load messages if you use custom models.

After changing plugin JARs, prefer a full restart rather than a plug-in reloader. `/structory reload` is useful for day-to-day YAML testing but cannot replace testing the complete startup path.
