---
sidebar_position: 4
title: Examples
---

# Examples

This page contains simple configuration examples and usage ideas.

:::info
These examples are intentionally generic. Adjust field names and structure to match your final EventDirector build.
:::

## Simple event idea

A basic event may include:

```yaml
summer_event:
  enabled: true
  display-name: "Summer Event"
  messages:
    start: "&6The summer event has started!"
    end: "&eThe summer event has ended!"
  rewards:
    - "give %player% diamond 1"
```

## Staff-only test event

Use a staff-only event to test commands safely:

```yaml
staff_test:
  enabled: false
  display-name: "Staff Test"
  permission: "eventdirector.test"
  rewards:
    - "say %player% completed the staff test."
```

## Reward command example

```txt
eco give %player% 250
```

## Broadcast example

```txt
say The event has started!
```

## Good testing flow

1. Create a disabled event.
2. Add one message.
3. Add one reward.
4. Test with one staff account.
5. Add conditions later.
6. Create a backup.
7. Enable the event.

## Example backup names

```txt
before-summer-event
before-reward-change
stable-events-config
```
