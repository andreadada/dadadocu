---
sidebar_position: 2
title: First setup
---

# First setup

After installing EventDirector, complete a first setup before running events on your live server.

## Recommended setup order

1. Confirm that the plugin loads correctly.
2. Check the plugin version.
3. Open the setup wizard.
4. Review the generated configuration files.
5. Configure permissions.
6. Create a first backup.
7. Test a simple event.

## Check the installed version

Run:

```mcfunction
/eventdirector version
```

This command helps you confirm that the plugin is enabled and that you are using the expected build.

## Open the setup wizard

Run:

```mcfunction
/eventdirector setup
```

The setup wizard is designed to guide administrators through the first configuration steps.

Depending on the build, the wizard may help you configure:

- general settings;
- event defaults;
- storage or generated files;
- GUI access;
- safety options;
- update checks;
- backup behavior.

## Create your first backup

Once the first setup is complete, create a backup:

```mcfunction
/eventdirector backup create first-setup
```

This gives you a clean restore point before you start editing events.

## Test before going live

Before announcing an event to players, test it with staff only.

Check that:

- the event starts correctly;
- rewards work as expected;
- messages are readable;
- conditions are not too restrictive;
- commands are executed correctly;
- no console errors appear.

:::tip
Keep a small test event in your configuration. It is useful after updates, reloads, or permission changes.
:::
