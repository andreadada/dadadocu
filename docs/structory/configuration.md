---
sidebar_position: 3
title: Main Configuration
---

# Main Configuration

The main settings live in `plugins/Structory/config.yml`. The **config schema version** is separate from the plugin release: Structory Premium **26.2** currently bundles `version: 1.6.0`. Don't replace that with `26.2` yourself.

## Default essentials

```yaml
version: 1.6.0

metrics:
  enable: true

scheduler:
  core_pool_size: 2
  max_pool_size: 2
  keep_alive_time: 60
  on_every:
    check: 500

structures:
  disable_item_pickup: true
  shift_to_remove_item: false
  distance: 32.0
  break_confirm_time: 5000
```

| Setting | What it controls |
|---|---|
| `metrics.enable` | Anonymous usage statistics. |
| `scheduler.*` | Internal worker and periodic-check settings. Usually best left at defaults. |
| `structures.disable_item_pickup` | Prevents normal pickup of managed recipe-slot items. |
| `structures.shift_to_remove_item` | Controls the shift-click behavior for removing slot items. |
| `structures.distance` | Minimum distance between recognized structure instances. |
| `structures.break_confirm_time` | Milliseconds allowed for the second confirmation break. |

`gui-items.recipe_default` controls the fallback item shown when a recipe has no custom `item-display`.

## Persistence (Premium 26.2)

Structure instances are saved using **YAML by default**. You can opt into SQLite or MariaDB:

```yaml
persistence:
  backend: yaml
  import_yaml_on_empty: true
  mirror_yaml: true
  shutdown_flush_timeout_ms: 5000
  sql:
    table_prefix: structory
    pool_size: 4
    connection_timeout_ms: 5000
    jdbc_url: ""
    sqlite:
      file: data/structory.db
    mariadb:
      host: 127.0.0.1
      port: 3306
      database: structory
      username: structory
      password: ""
```

Select **one** backend: `yaml`, `sqlite` or `mariadb`. The alias `mysql` selects MariaDB.

When moving to SQL, `import_yaml_on_empty` can copy your existing instances into an empty SQL store. `mirror_yaml` retains a YAML copy after successful SQL writes. Neither setting replaces regular backups.

For connection settings, migration steps and optional multi-server sync, read [Persistence and Backups](./persistence.md).

## Live MariaDB synchronization

`persistence.remote_sync` is an **opt-in** feature for nodes sharing the same MariaDB database. It is disabled by default. Don't enable it with SQLite or an old plugin version on another node.

Before using it, give every server a distinct consumer identity and read the [multi-server setup guide](./persistence.md#multiple-servers-with-mariadb).

## Reloading settings

`/structory reload` rebuilds config, recipes, structures and runtime managers; it is intended for testing. For production upgrades, installed dependency changes, and troubleshooting persistent entities, perform a full restart.

The plugin maintains versioned migrations for root YAML files. Back up `plugins/Structory/` before updating; never edit migration state files as a shortcut.
