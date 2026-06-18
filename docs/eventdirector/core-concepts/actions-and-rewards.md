---
sidebar_position: 2
title: Actions and rewards
---

# Actions and rewards

Actions and rewards define what happens when an event runs or when a player meets the event requirements.

## What actions can do

Depending on the build and configuration, actions may be used to:

- send messages;
- execute commands;
- give rewards;
- broadcast announcements;
- trigger internal event behavior;
- interact with other plugins.

## Rewards

Rewards are what players receive after participating in or completing an event.

Common reward examples:

- money;
- items;
- crate keys;
- points;
- ranks or temporary permissions;
- commands executed by console;
- messages or titles.

## Command-based rewards

Many Minecraft plugins use commands to give rewards. A reward command may look like this:

```txt
give %player% diamond 1
```

or:

```txt
eco give %player% 100
```

:::warning
Always test reward commands with a staff account before using them in a public event.
:::

## Reward safety

Incorrect rewards can damage your server economy or give unintended items.

Before enabling rewards:

- check the amount;
- check the target player placeholder;
- test with one player;
- verify external plugin permissions;
- watch the console for errors.

## Duplicate rewards

If players receive rewards multiple times, check:

- whether the event can be triggered repeatedly;
- whether the same action is listed more than once;
- whether conditions are too broad;
- whether a reload duplicated running tasks.

If you are unsure, enable safe mode and review the configuration.
