---
sidebar_position: 3
title: Notifications and Cooldowns
---

# Notifications and Cooldowns

Notifications live in `config.yml`. Goal-specific overrides can be placed directly inside a goal.

Use notifications carefully. Progress events can fire a lot, especially for block breaking or combat goals.

## Events and channels

Events:

- `progress`
- `tier-unlocked`
- `goal-completed`
- `claim`

Channels:

- `chat`
- `actionbar`
- `title`
- `bossbar`

Bossbar delivery is compatibility-safe and falls back on older servers.

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
      every-progress: 1
      message: "<gray>%goal_name%: <aqua>%progress_before%</aqua> -> <green>%progress_after%</green>/<white>%target%</white> <dark_gray>(+%amount%)"
      channels:
        chat: true
        actionbar: true
        title: false
        bossbar: false
```

## Per-goal override

```yaml
goals:
  community_daily_mining:
    notifications:
      progress:
        every-progress: 50
        channels:
          actionbar: true
          chat: false
      tier-unlocked:
        message: "<gradient:green:aqua>%goal_name%</gradient> reached tier <gold>%tier%%</gold>!"
        channels:
          chat: true
          title: true
          bossbar: true
```

Anything missing falls back to the global notification config.

## Progress spam control

`every-progress` controls how often progress messages are sent.

With this:

```yaml
every-progress: 10
```

players get a progress message when the value crosses 10, 20, 30, and so on. Completion still gets announced.

## Cooldowns

Cooldowns limit how often progress can be accepted from matching events.

```yaml
goals:
  player_lifetime_regular:
    period: PERMANENT
    type: LOGIN
    cooldown:
      enabled: true
      scope: PLAYER
      mode: DAILY
      progress-per-acquire: 1
      duration: 24h
```

| Field | Notes |
|---|---|
| `enabled` | Enables the cooldown. |
| `scope` | `PLAYER` or `SHARED`. Shared only matters for community goals. |
| `mode` | `DURATION`, `DAILY`, `WEEKLY`, or `MONTHLY`. |
| `duration` | Used by `DURATION`, for example `30m`, `12h`, or `7d`. |
| `progress-per-acquire` | Maximum progress accepted when the cooldown allows it. |

## Shared community cooldown

```yaml
goals:
  community_daily_mining:
    scope: COMMUNITY
    cooldown:
      enabled: true
      scope: SHARED
      mode: DAILY
      progress-per-acquire: 25
```

With `scope: SHARED`, the first valid contribution starts the cooldown for everyone. Player goals always behave as per-player cooldowns.
