---
sidebar_position: 4
title: PlaceholderAPI
---

# PlaceholderAPI

PlaceholderAPI is optional. If it is installed, DadaProgressions registers placeholders on startup.

Use this identifier for new setups:

```text
DadaProgressions
```

The old beta identifier is still registered:

```text
dadaachievements
```

Keep the old one only for legacy configs.

## Public placeholders

Replace `<goalId>` with the exact goal ID from `goals/*.yml`.

```text
%DadaProgressions_progress_<goalId>%
%DadaProgressions_target_<goalId>%
%DadaProgressions_percent_<goalId>%
%DadaProgressions_claimable_<goalId>%
%DadaProgressions_claimed_tiers_<goalId>%
%DadaProgressions_unlocked_tiers_<goalId>%
%DadaProgressions_next_tier_<goalId>%
%DadaProgressions_next_reset_<goalId>%
%DadaProgressions_rank_<goalId>%
%DadaProgressions_contribution_<goalId>%
```

Example:

```text
%DadaProgressions_progress_community_daily_mining%
```

Legacy example:

```text
%dadaachievements_progress_community_daily_mining%
```

## Placeholders inside DadaProgressions text

GUI text, messages, notifications, and reward commands can also use plugin placeholders.

Common values:

- `%goal_id%`
- `%goal_name%`
- `%player%`
- `%tier%`
- `%tier_name%`
- `%scope%`
- `%period%`
- `%type%`
- `%progress%`
- `%player_progress%`
- `%community_progress%`
- `%target%`
- `%percent%`
- `%remaining%`
- `%next_reset%`
- `%rank%`
- `%contribution%`
- `%contribution_percent%`
- `%unlocked_tiers%`
- `%claimed_tiers%`
- `%claimable_tiers%`
- `%next_tier%`
- `%next_tier_remaining%`
- `%completed%`

Reward commands also get:

- `%player_uuid%`

Progress notification messages can use:

- `%amount%`
- `%progress_before%`
- `%progress_after%`
- `%percent_before%`
- `%percent_after%`
