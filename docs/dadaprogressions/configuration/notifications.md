---
sidebar_position: 6
title: Notifications
---

# Notifications

Notification settings control how progress and milestone events are presented to players. They do not affect whether progress is accepted.

Global defaults live in `config.yml`. Individual goals can override them under their own `notifications:` section.

## Notification events

DadaProgressions can notify for:

- `progress`
- `tier-unlocked`
- `goal-completed`
- `claim`

## Channels

Supported channels are:

- `chat`
- `actionbar`
- `title`
- `bossbar`

Old server versions use compatibility fallbacks where a modern delivery method is unavailable.

## Global example

```yaml
notifications:
  enabled: true
  channels:
    chat: true
    actionbar: false
    title: false
    bossbar: false
  events:
    progress:
      enabled: true
      audience: player
      every-progress: 10
      message: "<gray>%goal_name%: <aqua>%progress_before%</aqua> -> <green>%progress_after%</green>/<white>%target%</white> <dark_gray>(+%amount%)"
      channels:
        chat: true
        actionbar: true
```

## Per-goal overrides

```yaml
goals:
  community_daily_mining:
    notifications:
      progress:
        every-progress: 50
        channels:
          chat: false
          actionbar: true
      tier-unlocked:
        message: "<green>%goal_name%</green> reached <gold>%tier%%</gold>."
        channels:
          chat: true
          title: true
```

Unset values fall back to global notification configuration.

## Queue and compaction

Progress-heavy servers should keep the queue enabled:

```yaml
notifications:
  queue:
    enabled: true
    compact-same-goal: true
    initial-delay-ticks: 8
    flush-interval-ticks: 20
    poll-ticks: 2
    max-size-per-recipient: 32
```

When `compact-same-goal` is enabled, repeated progress events for the same goal can be represented as one update instead of many individual messages.

## Debounce

The queue supports a sliding debounce:

```yaml
notifications:
  queue:
    debounce:
      enabled: true
      idle-ticks: 40
      max-wait-ticks: 400
      large-increment-threshold: 100
```

A summary is flushed after activity becomes idle, reaches the maximum wait, or crosses the configured large-increment threshold.

This is useful for actions such as mining or crafting where one player can generate many progress increments quickly.

## Chat batching

Multiple ready goal updates can be combined into one chat line:

```yaml
notifications:
  queue:
    chat-batch:
      enabled: true
      max-entries: 0
      separator: " <dark_gray>|</dark_gray> "
```

`max-entries: 0` means the whole ready queue can be included.

## `every-progress`

This setting controls when a progress notification is generated:

```yaml
every-progress: 25
```

The queue controls how generated notifications are displayed; `every-progress` controls how frequently they are created in the first place.

For very frequent goals, increasing `every-progress` is usually the first spam-control setting to adjust.

## Audiences

The default configuration uses player-only notifications for progress and tier unlocks, while completion or claim events may be broadcast depending on your configuration.

Review audience settings before enabling high-volume global messages on a public server.
