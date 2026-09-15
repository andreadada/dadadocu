---
sidebar_position: 4
title: Troubleshooting
---

# Troubleshooting

Start with:

```text
/dp admin validate
```

Then use the specific section below.

## Plugin does not enable

With `settings.strict-startup: true`, invalid goal configuration intentionally prevents startup.

Check the console for the first configuration error, then verify:

- YAML indentation uses spaces, not tabs;
- goal IDs are unique;
- enum values are valid;
- filters support the selected event type;
- prerequisite goals and tiers exist;
- cooldown durations and reset timezones are valid.

Do not disable strict startup just to hide a configuration error on a production server.

## No goals are loaded

Confirm that:

- files are under `plugins/DadaProgressions/goals/`;
- file names end in `.yml` or `.yaml`;
- every goal ID points to a YAML section;
- there are no duplicate IDs across separate files.

Then run:

```text
/dp admin validate
/dp admin reload
/dp admin list
```

## A goal does not progress

Use:

```text
/dp admin debug <goalId> <onlinePlayer>
```

Perform the expected action once. The debug report is the best way to identify:

- a failing filter;
- wrong `filter-mode`;
- point-rule behaviour;
- a missing prerequisite;
- an active cooldown;
- a wrong event type.

## Crafting progress is unexpected

Current builds account for recipe result amount and shift-click multi-crafting instead of always counting one craft action as one item.

Shift-click crafting is estimated from the available recipe inputs, so if another plugin heavily modifies inventory/crafting behaviour, verify the result on your server with a test goal.

If you intended to count craft actions rather than produced items, design the point base/rules around that behaviour instead of assuming every craft event is worth one.

## Damage goals count incorrectly

Cancelled damage and zero final damage are ignored. Projectile damage is attributed to the player shooter when possible.

If a protection/combat plugin modifies damage, use event debug to see the final event that DadaProgressions receives.

## Playtime looks delayed

Playtime is accumulated from actual elapsed online time and credited in whole-minute units. Short sessions below one accumulated minute will not immediately add one point.

## Rewards fail or become pending

A failed reward command can leave a claim in the safe `PENDING` state.

Check the server console and verify the external command first. Then resolve with:

```text
/dp admin resolveclaim <goalId> <player> <tierPercent> markclaimed
```

if the reward was delivered, or:

```text
/dp admin resolveclaim <goalId> <player> <tierPercent> retry
```

if you have confirmed it was not delivered.

Do not blindly retry high-value rewards.

## GUI does not open

Check:

- the player has `DadaProgressions.use`;
- another plugin is not taking over the command;
- layout rows resolve to 9 markers;
- menus use at most 6 rows;
- legacy material fallbacks exist when running old Minecraft versions.

## PlaceholderAPI value is empty

Check:

- PlaceholderAPI is installed and enabled;
- the exact goal ID is used;
- new setups use the `DadaProgressions` identifier;
- a player context is available for personal values.

## Leaderboard looks stale

First run:

```text
/dp admin rebuildindexes
```

Then:

```text
/dp admin validate
```

Player and community leaderboard ordering is cached in memory and invalidated when progress changes. Rebuilding indexes is mainly for derived player-goal files that are missing, corrupt, or out of date.

## Old data was not copied

The old `plugins/DadaAchievements/` folder is copied only when the new `plugins/DadaProgressions/` folder is missing or empty. Existing new-folder data is never overwritten automatically.

## Wrong jar / Java error

Install the final shaded distribution jar, currently:

```text
DadaProgressions-beta-26.5.jar
```

Do not install Maven module jars as plugins.
