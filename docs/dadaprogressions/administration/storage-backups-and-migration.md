---
sidebar_position: 3
title: Storage, Backups, and Migration
---

# Storage, backups, and migration

DadaProgressions beta uses a hybrid YAML storage layout designed to keep source data separate from rebuildable leaderboard indexes.

## Data layout

```text
plugins/DadaProgressions/data/
  meta.yml
  player-names.yml
  community-goals/<goalId>.yml
  players/<uuid>.yml
  indexes/player-goals/<goalId>.yml
```

Source-of-truth data includes:

- `meta.yml`;
- `player-names.yml`;
- `community-goals/<goalId>.yml`;
- `players/<uuid>.yml`.

Files under `indexes/player-goals/` are derived and can be rebuilt.

## Beta 26.5 periodic persistence

Periodic persistence now works in two phases:

1. dirty YAML is serialized into immutable snapshots on the Bukkit thread;
2. filesystem writes are performed by one dedicated writer thread.

This reduces periodic disk I/O on the main server tick while avoiding concurrent mutation of live Bukkit `YamlConfiguration` objects.

The writer protects ordering: an older queued snapshot is not allowed to overwrite a newer synchronous save.

Current global settings are:

```yaml
storage:
  async-periodic-writes: true
  save-interval-ticks: 600
  writer-flush-timeout-seconds: 10
```

Explicit operations that require durability, including reward-claim reservation/finalization, reload, backup, and shutdown, wait for the storage state to be safely persisted before continuing.

## Manual backups

Create a backup with:

```text
/dp admin backup
```

Backups are written under:

```text
plugins/DadaProgressions/backups/manual-<timestamp>/data/
```

Use this before:

- plugin updates;
- large goal changes;
- reset commands;
- manual recovery work.

## Leaderboard indexes

Rebuild derived indexes with:

```text
/dp admin rebuildindexes
```

Use the broader repair command when you also want missing storage directories recreated:

```text
/dp admin repair
```

Repair does not invent or silently replace missing source progress.

## Corrupt YAML handling

Corrupt source YAML is quarantined with a suffix similar to:

```text
.corrupt-<timestamp>
```

Corrupt derived index files may be deleted and rebuilt.

If a source file is quarantined, investigate and restore from a known-good backup rather than creating replacement progress by hand.

## Legacy `data.yml` migration

Older beta data may exist as:

```text
plugins/DadaProgressions/data.yml
```

During migration, DadaProgressions creates a pre-migration backup. After successful conversion, the old file is renamed to `data.yml.bak`. If migration fails, the original is left in place.

Migration metadata is recorded in `data/meta.yml`.

## Old `DadaAchievements` folder

If `plugins/DadaProgressions/` is missing or empty and an old `plugins/DadaAchievements/` folder exists, DadaProgressions can copy the old data into the new plugin folder.

The old folder is never deleted automatically.

## Manual file editing

Do not edit runtime files in `data/` while the server is running. Use admin commands for normal corrections. If manual recovery is unavoidable:

1. stop the server;
2. take a full copy of the data folder;
3. edit only the required source file;
4. remove/rebuild derived indexes if necessary;
5. start the server and run `/dp admin validate`.
