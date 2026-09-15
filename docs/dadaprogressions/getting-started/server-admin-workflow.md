---
sidebar_position: 2
title: First Setup and Production Checklist
---

# First setup and production checklist

A reliable DadaProgressions setup is easier if you configure it in layers rather than changing goals, GUI, storage, and notifications at the same time.

## Recommended setup workflow

### 1. Start with the default files

Install the plugin and let it generate `config.yml`, `guis.yml`, and the default `goals/` files. Confirm `/dp` opens before changing anything.

### 2. Define your progression design

Decide which goals are:

- personal or community-wide;
- daily, weekly, monthly, or permanent;
- simple or composite;
- manually claimed or automatically claimed;
- locked behind prerequisites.

Stable goal IDs matter because progress and claims are stored by goal ID. Rename an ID only if you intentionally want it to behave like a new goal.

### 3. Configure and validate goals first

Edit `goals/*.yml`, then run:

```text
/dp admin validate
```

Do not begin GUI redesign work until all goals load correctly.

### 4. Test reward commands from console

Reward commands are executed as console. Test the exact command manually from the server console before adding it to a tier.

Do not prefix reward commands with `/`.

### 5. Tune notifications

High-frequency event types such as block breaking, item pickup, or damage can generate many progress events. Use queue compaction, debounce, and `every-progress` to keep player chat readable.

### 6. Adjust the GUI

Only after the underlying goal behaviour is correct should you customize `guis.yml`. A broken layout should never be confused with a broken progression rule.

### 7. Test as a normal player

Operators can hide permission mistakes. Use a non-op account and verify:

- `/dp` opens;
- goal progress increases only when it should;
- locked goals remain locked;
- reward tiers unlock correctly;
- claims execute the intended console commands;
- leaderboard contribution is correct.

## Production checklist

Before opening an update to players, check all of the following:

- `/dp admin validate` reports no configuration or storage errors.
- `/dp admin list` contains every expected goal and no accidental duplicates.
- `/dp admin backup` completes successfully.
- A representative PLAYER goal progresses correctly.
- A representative COMMUNITY goal progresses and records contribution correctly.
- At least one filtered goal is tested with both a matching and non-matching event.
- At least one cooldown is tested twice to confirm the second acquisition is rejected when expected.
- Reward commands are tested from console.
- `/dp claim` and `/dp claimall` behave correctly.
- PlaceholderAPI output is checked if your server depends on it.
- The server is restarted once and progress is still present.

## Useful admin tools while testing

Use the event debugger when a goal is not progressing as expected:

```text
/dp admin debug <goalId> <onlinePlayer>
```

The next relevant event reports filters, point calculation, prerequisites, and cooldown decisions.

Cancel a debug session with:

```text
/dp admin debug cancel <onlinePlayer>
```

For common structural edits, the in-game editor is available through:

```text
/dp admin editor
```

The editor validates edits before accepting them, but advanced configurations are still easier to review directly in YAML.

## YAML rules worth following

- Use spaces, never tabs.
- Keep indentation consistent.
- Keep goal IDs and criterion IDs short and stable.
- Goal and criterion IDs may contain letters, numbers, `_`, and `-`.
- Make one logical change at a time.
- Run validation before and after large edits.
- Keep a backup before resets, migrations, or version upgrades.
