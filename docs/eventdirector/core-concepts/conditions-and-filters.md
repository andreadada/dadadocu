---
sidebar_position: 3
title: Conditions and filters
---

# Conditions and filters

Conditions and filters decide whether an event, action, or reward should apply.

## What conditions are for

Conditions can help you restrict event behavior based on rules such as:

- player eligibility;
- world;
- time;
- permissions;
- event state;
- staff decisions;
- external plugin data.

## What filters are for

Filters help narrow down who or what is affected by an event.

Examples:

- only players in a specific world;
- only players with a permission;
- only participants of a specific event;
- only online players;
- only winners or valid participants.

## Keep conditions simple

Start with simple conditions, then add complexity later.

A good approach is:

1. create the event without strict filters;
2. test that the basic event works;
3. add one condition;
4. test again;
5. repeat.

## Common mistakes

| Mistake | Result |
|---|---|
| Filter is too strict | No player receives the reward |
| Wrong world name | Event does not apply where expected |
| Missing permission | Staff or players cannot use the event |
| Placeholder typo | Condition always fails |
| YAML indentation error | Event may not load |

## Debugging conditions

If an event does not work:

1. check the console;
2. temporarily simplify the conditions;
3. test with one player;
4. confirm the player has the required permissions;
5. re-add filters one by one.
