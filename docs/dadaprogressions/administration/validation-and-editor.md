---
sidebar_position: 2
title: Validation, Debugging, and Editor
---

# Validation, debugging, and editor

DadaProgressions includes tools for safely changing a live beta configuration without relying only on console stack traces.

## Validate before reload

Run:

```text
/dp admin validate
```

Validation checks goal configuration and storage health. Goal validation includes problems such as:

- malformed YAML;
- invalid or duplicate goal IDs;
- invalid criterion IDs;
- incompatible filter/event combinations;
- invalid point rules;
- invalid cooldown durations;
- invalid reset timezones;
- missing prerequisite goals or tiers;
- prerequisite cycles.

Storage validation checks source YAML, indexes, period keys, orphaned/unknown goal references, and other consistency problems.

## Strict startup

For production beta servers, keep:

```yaml
settings:
  strict-startup: true
```

This prevents the plugin from starting with a partially loaded goal registry when one or more goal files are invalid.

## Transactional reload

Use:

```text
/dp admin reload
```

Goal reload is transactional. If the attempted goal configuration is invalid, the previous valid goal registry remains active instead of being replaced by a partial configuration.

This is safer than a reload process that clears all old goals before discovering a YAML mistake.

## Event debugger

Arm debugging for one goal and online player:

```text
/dp admin debug <goalId> <onlinePlayer> [timeoutSeconds]
```

The next relevant event explains why it did or did not progress. The report includes filter checks, point calculation, prerequisite state, and cooldown decision.

The timeout must be between 5 and 600 seconds.

Cancel with:

```text
/dp admin debug cancel <onlinePlayer>
```

## In-game goal editor

Open the editor with:

```text
/dp admin editor
```

The editor supports common hierarchical operations for goals, criteria, filters, point rules, and prerequisite selection.

Edits are written atomically and validated. If an edit would produce invalid goal configuration, the file change is rolled back and the active registry remains unchanged.

Use the editor when you want guided values and selectors. Use YAML when you need to review large or repeated structures efficiently.

## A good live-edit workflow

1. `/dp admin backup`
2. make the edit;
3. `/dp admin validate`;
4. `/dp admin reload`;
5. `/dp admin debug ...` if behaviour is not what you expected;
6. test with a normal player;
7. keep the backup until the next restart has also been tested.
