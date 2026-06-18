---
sidebar_position: 2
title: Storage, Backups, and Migration
---

# Storage, Backups, and Migration

DadaProgressions beta stores data in YAML files.

## Data layout

```text
plugins/DadaProgressions/data/
  meta.yml
  player-names.yml
  community-goals/<goalId>.yml
  players/<uuid>.yml
  indexes/player-goals/<goalId>.yml
```

The important source files are:

- `meta.yml`
- `player-names.yml`
- `community-goals/<goalId>.yml`
- `players/<uuid>.yml`

Back these up before updates or manual data edits.

## Leaderboard indexes

Files under `data/indexes/player-goals/` are derived indexes. They are useful, but not the source of truth.

If they go missing or look wrong, rebuild them:

```text
/dp admin rebuildindexes
```

or run the broader repair command:

```text
/dp admin repair
```

## Backups

Create a manual backup with:

```text
/dp admin backup
```

The backup is written under:

```text
plugins/DadaProgressions/backups/manual-<timestamp>/data/
```

Use this before risky changes, updates, or manual storage edits.

## Validation and repair

Run validation with:

```text
/dp admin validate
```

It checks for corrupt files, missing indexes, orphan indexes, invalid period keys, and unknown goal IDs.

Run repair with:

```text
/dp admin repair
```

Repair recreates missing directories and rebuilds derived indexes. It does not quietly rewrite source progress files.

## Corrupt files

Corrupt source YAML is quarantined with a `.corrupt-<timestamp>` suffix.

Corrupt derived index YAML is deleted and rebuilt.

If a source file is quarantined, restore it manually from backup.

## Legacy `data.yml`

Older beta data may exist as:

```text
plugins/DadaProgressions/data.yml
```

During migration, the plugin backs it up to:

```text
plugins/DadaProgressions/backups/pre-migration-<timestamp>/data.yml
```

After a successful migration, the old file becomes:

```text
plugins/DadaProgressions/data.yml.bak
```

If migration fails, the original file stays in place.

## Old plugin folder

Old beta builds used:

```text
plugins/DadaAchievements/
```

If `plugins/DadaProgressions` is missing or empty and `plugins/DadaAchievements` exists, startup copies the old folder to the new one. The old folder is not deleted.

If `plugins/DadaProgressions` already contains files, nothing is copied. This avoids overwriting live data.
