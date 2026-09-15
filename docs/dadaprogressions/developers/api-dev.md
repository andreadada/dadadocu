---
sidebar_position: 1
title: Bukkit API
---

# Bukkit API

DadaProgressions exposes a Bukkit service for plugins that need to add progress directly.

The current public API package is:

```java
com.dadaprogressions.api
```

and the service interface is:

```java
DadaProgressionsApi
```

## Interface

```java
package com.dadaprogressions.api;

import org.bukkit.entity.Player;
import java.util.UUID;

public interface DadaProgressionsApi {
    boolean addProgress(String goalId, UUID playerUuid, long amount);
    boolean addProgress(String goalId, Player player, long amount);

    boolean addCriterionProgress(String goalId, String criterionId, UUID playerUuid, long amount);
    boolean addCriterionProgress(String goalId, String criterionId, Player player, long amount);
}
```

## Add DadaProgressions to `plugin.yml`

Hard dependency:

```yaml
depend:
  - DadaProgressions
```

Optional integration:

```yaml
softdepend:
  - DadaProgressions
```

## Compile dependency

Depend on the API module as `provided`/`compileOnly`; do not shade the complete plugin distribution into your plugin.

Current Maven identity in the source tree:

```xml
<dependency>
    <groupId>com.dadaprogressions</groupId>
    <artifactId>dadaprogressions-api</artifactId>
    <version>beta-26.5</version>
    <scope>provided</scope>
</dependency>
```

How you resolve that artifact depends on where you publish or install your development artifacts.

## Get the Bukkit service

```java
import com.dadaprogressions.api.DadaProgressionsApi;
import org.bukkit.Bukkit;
import org.bukkit.plugin.RegisteredServiceProvider;

RegisteredServiceProvider<DadaProgressionsApi> registration =
        Bukkit.getServicesManager().getRegistration(DadaProgressionsApi.class);

DadaProgressionsApi api = registration == null ? null : registration.getProvider();
```

Always handle `null` when using `softdepend`.

## Add progress

```java
boolean applied = api.addProgress("player_daily_vote", player, 1L);
```

The boolean tells you whether progress was actually applied, not merely whether the goal ID existed. A locked, complete, disabled, cooldown-blocked, or otherwise non-applicable operation may return `false`.

## Composite criterion progress

For a specific leaf in a composite goal:

```java
boolean applied = api.addCriterionProgress(
        "weekly_adventurer",
        "mining",
        player,
        5L
);
```

The criterion ID must match a loaded event criterion.

## Threading

API calls are safe to invoke from an asynchronous plugin task. DadaProgressions marshals the mutation to the Bukkit primary thread and waits for the result.

Do not call the API in a tight asynchronous loop: every off-thread call becomes a synchronous server-thread operation.

## Community goals

Passing a player to a community goal allows DadaProgressions to attribute that player's contribution while advancing the shared progress.

## Command-based integrations

If an external plugin cannot use the Java service, execute:

```text
dp admin trigger <goalId> <player> <amount>
```

Example for a vote plugin:

```text
dp admin trigger player_daily_vote %player% 1
```
