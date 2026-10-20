---
sidebar_position: 10
title: Persistence and Backups
---

# Persistence and Backups (Premium 26.2)

Structory keeps track of each structure built by players: its UUID, world, position and configuration state. The default backend is **YAML**, just like earlier versions. SQL is optional.

All settings below go in `plugins/Structory/config.yml`.

## Stay on YAML

```yaml
persistence:
  backend: yaml
```

Instances are stored in `plugins/Structory/instances/`. This is the simplest choice for a single server. Back up the entire Structory data folder and the world together.

## Use SQLite

```yaml
persistence:
  backend: sqlite
  import_yaml_on_empty: true
  mirror_yaml: true
  sql:
    sqlite:
      file: data/structory.db
```

SQLite runs without a separate database server. The configured file must stay inside the Structory data directory.

When a new SQL store is empty, `import_yaml_on_empty` can copy existing YAML instances into it. `mirror_yaml` writes a YAML copy after successful SQL writes, helping with recovery. Neither setting is a replacement for backups.

## Use MariaDB

```yaml
persistence:
  backend: mariadb
  import_yaml_on_empty: true
  mirror_yaml: true
  sql:
    table_prefix: structory
    pool_size: 4
    connection_timeout_ms: 5000
    mariadb:
      host: 127.0.0.1
      port: 3306
      database: structory
      username: structory
      password: "change-me"
```

Create the database and account first, give them appropriate permissions and keep credentials private. You can also use `persistence.sql.jdbc_url` for an explicit JDBC connection string.

## Moving from YAML to SQL

1. Shut down the server and back up `plugins/Structory/` and the world.
2. Select `sqlite` or `mariadb` and configure the connection.
3. Leave `import_yaml_on_empty: true` for the first launch.
4. Start the server and verify the selected backend and number of instances in the console.
5. Check a few existing structures, then take a second backup.

Automatic import happens **only when the SQL store is empty**. Don't repeatedly wipe the database to re-run an import. When reverting to YAML, restore matching data and world backups instead of blindly switching backends.

## Multiple servers with MariaDB

Live instance propagation is an advanced option and uses **MariaDB only**. All nodes must use compatible Structory builds and the same MariaDB database.

```yaml
persistence:
  backend: mariadb
  remote_sync:
    enabled: true
    poll_interval_ticks: 20
    batch_size: 100
    consumer_id: ""
    lease_duration_ms: 30000
    warn_lag_entries: 5000
    compaction:
      enabled: true
      interval_ms: 60000
      retain_entries: 1000
      stale_consumer_timeout_ms: 86400000
```

Each server needs a **unique, stable consumer identity**. With an empty `consumer_id`, Structory creates/uses a local identity in `remote-sync-node-id.txt`. Do not copy that file unchanged to another server.

The service uses a change journal and leases to coordinate updates. `poll_interval_ticks` sets the polling frequency; `batch_size` limits each batch. The compaction settings clean up old journal history without discarding the necessary window for active consumers.

Use `/structory cluster` for cluster diagnostics. Before recovering or removing a stale consumer, confirm that its original server is offline. Don't run two servers using the same consumer ID.

:::caution
Live synchronization is not a substitute for a shared world, coordinated chunk ownership, or backups. Test multi-server changes in a staging environment before enabling them in production.
:::

## Upgrade safety

26.2 includes versioned migrations for `config.yml`, `gui.yml` and `messages.yml`. They preserve existing values where possible and create migration backups when changes are needed.

Don't edit `schema-versions.yml` manually. If startup fails during an upgrade, stop the server, read the specific error and restore the backup rather than repeatedly reloading.
