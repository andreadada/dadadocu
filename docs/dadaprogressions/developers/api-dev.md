---
sidebar_position: 1
title: API-DEV
---

# API-DEV

DadaProgressions exposes a Bukkit service for plugins that want to add progress directly.

One naming detail matters: the plugin is called `DadaProgressions`, but the Java API still uses the old `com.dadaachievements` package and `DadaAchievementsApi` interface name. That is intentional for compatibility.

## Interface

```java
package com.dadaachievements.api;

import org.bukkit.entity.Player;

import java.util.UUID;

public interface DadaAchievementsApi {
    boolean addProgress(String goalId, UUID playerUuid, long amount);

    boolean addProgress(String goalId, Player player, long amount);
}
```

## plugin.yml dependency

Use a hard dependency if your plugin cannot work without DadaProgressions:

```yaml
depend:
  - DadaProgressions
```

Use a soft dependency if the integration is optional:

```yaml
softdepend:
  - DadaProgressions
```

## Compile dependency

Add the API jar to your compile classpath as `provided` or `compileOnly`. Do not shade the full DadaProgressions plugin jar into your plugin.

Maven coordinates in the beta source tree:

```xml
<dependency>
    <groupId>com.dadaachievements</groupId>
    <artifactId>dadaachievements-api</artifactId>
    <version>beta-26.0</version>
    <scope>provided</scope>
</dependency>
```

## Getting the service

```java
import com.dadaachievements.api.DadaAchievementsApi;
import org.bukkit.Bukkit;
import org.bukkit.entity.Player;
import org.bukkit.plugin.RegisteredServiceProvider;

public final class ProgressionsHook {
    private DadaAchievementsApi api;

    public boolean load() {
        RegisteredServiceProvider<DadaAchievementsApi> registration =
                Bukkit.getServicesManager().getRegistration(DadaAchievementsApi.class);

        if (registration == null) {
            return false;
        }

        this.api = registration.getProvider();
        return this.api != null;
    }

    public boolean addVoteProgress(Player player) {
        if (api == null || player == null) {
            return false;
        }

        return api.addProgress("player_daily_vote", player, 1L);
    }
}
```

## Notes

- `goalId` must match a loaded goal ID.
- `amount` must be positive.
- For player goals, pass a player or player UUID.
- For community goals, passing a player also records that player's contribution.
- `addProgress` returns `false` if the goal does not exist or the amount is invalid.
- Goal cooldowns still apply.
- With `softdepend`, always handle the API being unavailable.

## Vote listener example

```java
public void onVote(Player player) {
    if (dadaProgressionsApi != null) {
        dadaProgressionsApi.addProgress("player_daily_vote", player, 1L);
    }
}
```

If your integration can only run commands, use the admin trigger command instead:

```text
dp admin trigger player_daily_vote %player% 1
```
