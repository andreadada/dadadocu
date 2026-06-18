---
sidebar_position: 3
title: Troubleshooting
---

# Troubleshooting

Most issues come from YAML indentation, a wrong goal ID, or a command that works in chat but not from console.

## No goals loaded

Check:

- files are inside `plugins/DadaProgressions/goals/`;
- file names end with `.yml` or `.yaml`;
- each goal ID has a YAML section under it;
- enum values are valid, for example `PLAYER`, `COMMUNITY`, `DAILY`, `BLOCK_BREAK`;
- indentation uses spaces.

Then run:

```text
/dp admin reload
/dp admin list
```

## GUI does not open

Check:

- the player has `DadaProgressions.use`;
- another plugin is not taking over `/dp`;
- every `guis.yml` layout row resolves to 9 markers;
- the menu has no more than 6 rows;
- old server materials have `legacy-material` fallbacks.

## Rewards do not run

Check:

- the tier is unlocked;
- the tier has not already been claimed;
- reward commands do not start with `/`;
- the command works from console;
- `%player%` is in the place expected by the target plugin.

Example:

```yaml
reward-commands:
  - "eco give %player% 500"
  - "crate key give %player% common 1"
```

## Vote or custom progress does not increase

`VOTE`, `CUSTOM`, and `ANIMAL_BREED` need an external trigger in the beta.

Use:

```text
/dp admin trigger <goalId> <player> <amount>
```

Example for a vote plugin:

```text
dp admin trigger player_daily_vote %player% 1
```

## PlaceholderAPI placeholders are empty

Check:

- PlaceholderAPI is installed and enabled;
- the goal ID is exact;
- the identifier is `DadaProgressions`;
- the placeholder is being parsed with a player context when needed.

Example:

```text
%DadaProgressions_progress_community_daily_mining%
```

## Leaderboards look wrong

Rebuild indexes:

```text
/dp admin rebuildindexes
```

Then validate storage:

```text
/dp admin validate
```

Check console if the in-game report says that extra messages were omitted.

## Old data was not copied

The old `plugins/DadaAchievements` folder is copied only when `plugins/DadaProgressions` is missing or empty.

If the new folder already has files, the plugin leaves both folders alone.

## Java compatibility errors

Install the shaded release jar:

```text
DadaProgressions-beta-26.0.jar
```

Do not install module jars such as `dadaachievements-api` or `dadaachievements-bukkit` as the server plugin.
