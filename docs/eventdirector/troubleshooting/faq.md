---
sidebar_position: 2
title: FAQ
---

# FAQ

## Is EventDirector for players or staff?

Mainly for staff and administrators. Players interact with events based on how the server configures them.

## Should I use the GUI or YAML files?

For the first setup, use the GUI and setup wizard. For advanced configurations, YAML files are more precise and easier to version.

## Can I edit an event while it is active?

It is better to avoid it. Stop the event or work on a test copy first.

## Should I create a backup before every change?

Not before every tiny edit, but always before updates, restores, large changes, or important public events.

## Can I give admin commands to event staff?

Yes, but separate permissions. Event staff should not automatically receive restore, reload, or safe mode access.

## Why did a player not receive a reward?

Possible causes:

- the player was not a valid participant;
- a condition failed;
- a placeholder is wrong;
- the reward command is invalid;
- an external plugin is missing;
- the player was offline.

## Why does the plugin not read my YAML file?

Usually because of indentation, tabs, special characters, or missing required fields.

## Does safe mode delete data?

No. Safe mode is intended to block or limit risky behavior. It should not delete configurations.

## Can restore overwrite recent data?

Yes. A restore can overwrite newer configuration changes, so use it carefully.

## What should I include in a support request?

Include:

- EventDirector version;
- server version;
- full console error;
- affected event file;
- what you were doing;
- whether the issue happens after restart;
- whether safe mode is enabled.
