---
sidebar_position: 9
title: PlaceholderAPI and Text Placeholders
---

# PlaceholderAPI and text placeholders

PlaceholderAPI is optional. When it is installed, DadaProgressions registers a public expansion for other plugins.

## Public PlaceholderAPI identifier

Use this identifier for new configurations:

```text
DadaProgressions
```

The old beta identifier remains available for compatibility:

```text
dadaachievements
```

## Public placeholders

Replace `<goalId>` with the exact ID from `goals/*.yml`.

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

## Internal DadaProgressions placeholders

GUI text, messages, notifications, and reward commands can use plugin-provided values such as:

```text
%goal_id%
%goal_name%
%player%
%tier%
%tier_name%
%scope%
%period%
%type%
%progress%
%player_progress%
%community_progress%
%target%
%percent%
%remaining%
%next_reset%
%rank%
%contribution%
%contribution_percent%
%unlocked_tiers%
%claimed_tiers%
%claimable_tiers%
%next_tier%
%next_tier_remaining%
%completed%
```

Reward commands additionally support:

```text
%player_uuid%
```

Progress notifications may also use:

```text
%amount%
%progress_before%
%progress_after%
%percent_before%
%percent_after%
```

## Player context

Some placeholders require a player context. A scoreboard or hologram plugin that parses a placeholder globally without a player may not be able to resolve personal progress, personal rank, or contribution data.

When a PlaceholderAPI value is unexpectedly empty, test the same placeholder through a plugin or command that explicitly supplies the target player.
