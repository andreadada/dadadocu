---
sidebar_position: 4
title: Rewards and Claims
---

# Rewards and claims

Reward tiers are milestone percentages. A player may unlock several tiers before reaching the final target.

## Basic reward tiers

```yaml
tiers:
  25:
    name: "<green>Starter Reward"
    reward-commands:
      - "eco give %player% 100"
  50:
    name: "<yellow>Halfway Reward"
    reward-commands:
      - "crate key give %player% common 1"
  100:
    name: "<gold>Completion Reward"
    reward-commands:
      - "lp user %player% permission set server.goal.complete true"
```

Tier keys may be written as `50` or `50%`.

Reward commands are executed by console. Do not start them with `/`.

## Manual and automatic claim mode

The default is:

```yaml
claim-mode: MANUAL
```

Players claim unlocked rewards from the GUI or with:

```text
/dp claim <goalId>
/dp claim <goalId> <tierPercent>
/dp claimall
```

Use:

```yaml
claim-mode: AUTO
```

when rewards should be claimed automatically when they become eligible for the acting player.

Manual claiming is generally easier to reason about for community goals and production beta servers.

## Safe claim handling in beta 26.4+

Reward commands are external side effects: economy, permissions, crates, and other plugins may change state outside DadaProgressions.

To reduce duplicate rewards after crashes, DadaProgressions now reserves a claim as `PENDING` on disk before executing reward commands.

The normal flow is:

1. validate that the tier is unlocked and not claimed;
2. persist a pending claim reservation;
3. execute reward commands as console;
4. mark the tier claimed;
5. clear the pending reservation.

If a command fails or the server stops at an unsafe point, the claim remains pending instead of automatically replaying the reward.

## Resolving a pending claim

An administrator can resolve a pending claim with:

```text
/dp admin resolveclaim <goalId> <player> <tierPercent> <markclaimed|retry>
```

Use `markclaimed` when you know the external reward was already delivered:

```text
/dp admin resolveclaim community_daily_mining Steve 100 markclaimed
```

This finalizes the claim without executing reward commands again.

Use `retry` only when you know the previous reward was not delivered:

```text
/dp admin resolveclaim community_daily_mining Steve 100 retry
```

The player must be online for a retry. DadaProgressions persists a new reservation before executing the reward again.

:::warning Choose recovery actions carefully
DadaProgressions cannot automatically know whether an external economy, permissions, crate, or custom command completed before a crash. Check the target plugin or server logs before choosing `retry`.
:::

## Reward placeholders

Common reward-command placeholders include:

```text
%player%
%player_uuid%
%goal_id%
%goal_name%
%tier%
%tier_name%
%progress%
%target%
%percent%
%contribution%
```

See [PlaceholderAPI](placeholders.md) for the full list of internal display placeholders.

## Production advice

Before publishing a goal:

- test every reward command from console;
- test placeholders with a real player name;
- keep high-value rewards on explicit tiers;
- use a backup before resetting claims;
- do not use `resetclaims` as a normal support workflow for a single pending claim; use `resolveclaim` instead.
