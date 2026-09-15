---
sidebar_position: 5
title: Cooldowns and Periods
---

# Cooldowns and periods

Periods decide which time bucket progress belongs to. Cooldowns decide how often a matching event is allowed to acquire progress.

They solve different problems and can be used together.

## Goal periods

Supported goal periods are:

```text
DAILY
WEEKLY
MONTHLY
PERMANENT
```

Example:

```yaml
period: DAILY
```

A daily goal automatically starts using a new daily period key after the configured timezone crosses into the next day. Weekly and monthly goals behave similarly.

`PERMANENT` goals do not automatically rotate into a new period.

## Timezone

The global timezone is configured in `config.yml`:

```yaml
settings:
  timezone: "Europe/Rome"
```

A goal can override it:

```yaml
reset-settings:
  timezone: "America/New_York"
```

Use a valid Java timezone name. Invalid timezone configuration is rejected.

## Progress cooldowns

Example:

```yaml
cooldown:
  enabled: true
  scope: PLAYER
  mode: DURATION
  duration: 30m
  progress-per-acquire: 1
```

| Field | Meaning |
|---|---|
| `enabled` | Enables or disables the cooldown. |
| `scope` | `PLAYER` or `SHARED`. |
| `mode` | `DURATION`, `DAILY`, `WEEKLY`, or `MONTHLY`. |
| `duration` | Rolling duration for `DURATION` mode. |
| `progress-per-acquire` | Progress granted when the cooldown allows acquisition. |

## Duration syntax

`DURATION` accepts a positive number followed by an optional unit:

- `ms`
- `s`
- `m`
- `h`
- `d`

Examples:

```yaml
duration: 30m
duration: 12h
duration: 7d
```

Invalid or overflowing durations are rejected during configuration validation.

## Calendar cooldowns

For one login reward per day:

```yaml
period: PERMANENT
type: LOGIN
cooldown:
  enabled: true
  scope: PLAYER
  mode: DAILY
  progress-per-acquire: 1
```

The goal itself is permanent, while each player may only gain one point per calendar day.

## PLAYER and SHARED cooldown scope

`PLAYER` gives every player an independent cooldown.

For a community goal you may instead use:

```yaml
cooldown:
  enabled: true
  scope: SHARED
  mode: DURATION
  duration: 5m
  progress-per-acquire: 25
```

The first accepted event starts one shared cooldown for the whole community goal.

Player goals always behave as per-player cooldowns.

## Composite criteria

A composite goal can inherit the goal-level cooldown, or an individual event criterion can define its own local cooldown.

Use local cooldowns when different parts of the same composite objective should progress at different frequencies.
