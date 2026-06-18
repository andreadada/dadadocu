---
sidebar_position: 1
title: Common issues
---

# Common issues

This page helps you troubleshoot frequent EventDirector problems.

## The plugin does not start

Check:

- compatible server version;
- correct `.jar` file;
- console errors;
- missing dependencies;
- generated configuration files.

Suggested fix:

1. stop the server;
2. check console/log files;
3. verify the `.jar` file;
4. temporarily remove modified configuration files;
5. restart;
6. if it starts, restore configurations one by one.

## A command does not work

Possible causes:

- missing permission;
- command changed in the current version;
- alias not registered;
- plugin not loaded;
- console error.

Check with:

```mcfunction
/eventdirector version
```

## The GUI does not open

Check:

- `eventdirector.gui` or equivalent permission;
- console errors;
- server compatibility;
- required GUI dependencies for your build.

## An event does not start

Possible causes:

- event is disabled;
- condition is not met;
- filter is too restrictive;
- invalid YAML configuration;
- plugin is in safe mode;
- missing permissions.

## Rewards are not given

Check:

- reward command syntax;
- placeholders;
- whether the player is online;
- economy or reward plugin permissions;
- console errors.

## YAML is invalid

Typical symptoms:

- plugin cannot load configuration;
- event is ignored;
- console errors appear;
- value is not recognized.

Fix:

- check indentation;
- remove tabs;
- use quotes for complex text;
- compare with a working file;
- restore a backup if needed.

## Plugin is in safe mode

If EventDirector is in safe mode, some features may be blocked.

Check with:

```mcfunction
/eventdirector safemode status
```

Disable it only after fixing the problem:

```mcfunction
/eventdirector safemode off
```
