---
sidebar_position: 1
title: Setup wizard
---

# Setup wizard

The setup wizard helps administrators configure EventDirector without editing every file manually.

## Open the wizard

```mcfunction
/eventdirector setup
```

or, if aliases are enabled:

```mcfunction
/ed setup
```

## When to use it

Use the setup wizard:

- after the first installation;
- after a major update;
- when generated files are missing;
- when you want to review core options;
- before setting up real public events.

## Before using the wizard

If the server already has event configurations, create a backup first:

```mcfunction
/eventdirector backup create before-setup-wizard
```

## What the wizard may configure

Depending on the build, the wizard can help with:

- default settings;
- event folders;
- messages;
- GUI behavior;
- backup settings;
- safe mode settings;
- update checks;
- basic validation.

## After completing the wizard

After the setup wizard finishes:

1. check the console;
2. run `/eventdirector version`;
3. open the admin GUI;
4. create a backup;
5. test a simple event.

:::tip
Use the setup wizard as a starting point. For advanced events, you may still need to edit configuration files manually.
:::
