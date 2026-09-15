---
sidebar_position: 8
title: GUI Configuration
---

# GUI configuration

The player GUI is configured in:

```text
plugins/DadaProgressions/guis.yml
```

It controls menu titles, slot layouts, materials, names, lore, and navigation. Goal logic itself remains in `goals/*.yml`.

## Layout rules

Each character is one inventory slot. Spaces are ignored.

Both examples below represent nine slots:

```yaml
- "x x x x x x x x x"
- "xxxxxxxxx"
```

Every row must resolve to exactly 9 markers and a menu may contain at most 6 rows.

## Built-in markers

| Marker | Meaning |
|---|---|
| `x` | Filler |
| `D` | Daily category |
| `W` | Weekly category |
| `M` | Monthly category |
| `L` | Lifetime category |
| `C` | Community category |
| `P` | Personal category or previous page, depending on the menu |
| `G` | Paginated goal entry |
| `T` | Reward tier entry |
| `E` | Leaderboard entry |
| `A` | Claim all |
| `B` | Back |
| `R` | Refresh |
| `N` | Next page |
| `Q` | Close |
| `S` | Goal summary in the detail view |

Repeated `G`, `T`, or `E` markers define how many entries fit on one page.

## Main menu example

```yaml
gui:
  main:
    title: "<blue>DadaProgression"
    layout:
      - "x x x x x x x x x"
      - "x D x W x M x L x"
      - "x x x x x x x x x"
      - "x x C x A x P x x"
      - "x x x x x x x x Q"
```

## Goal list example

```yaml
gui:
  list:
    goal-item:
      show-state-lore: false
    layout:
      - "x x x x x x x x x"
      - "x G G G G G G G x"
      - "x G G G G G G G x"
      - "x G G G G G G G x"
      - "x G G G G G G G x"
      - "B x x P R N x x x"
```

`show-state-lore: false` keeps list items focused on the lore defined in each goal's `display.lore`. Turn it on when you want more technical state information directly in list views.

## Detail menu

```yaml
gui:
  detail:
    title: "<blue>%goal_name%"
    layout:
      - "x x x x S x x x x"
      - "x x x x x x x x x"
      - "x T T T T T T T x"
      - "x T T T T T T T x"
      - "x T T T T T T T x"
      - "B x A x R x L x x"
```

Tier items can use separate materials for locked, unlocked, and claimed state.

## Old Minecraft material compatibility

When a modern material name does not exist on an old server version, define a legacy fallback:

```yaml
personal:
  material: "PLAYER_HEAD"
  legacy-material: "SKULL_ITEM"
  data: 3
  name: "<blue>Personal Goals"
```

Keep compatibility fallbacks when your jar is deployed across a wide range of Minecraft versions.

## Formatting and placeholders

GUI names and lore can use DadaProgressions placeholders and the same formatting system used by messages.

Example:

```yaml
name: "<gold>%goal_name%"
lore:
  - "<gray>Progress: <white>%progress%</white>/<white>%target%</white>"
  - "<gray>Contribution: <white>%contribution%</white>"
```

## Troubleshooting layouts

If a GUI fails to open after editing `guis.yml`:

1. count every non-space marker in each row;
2. confirm every row has exactly 9;
3. confirm the menu has at most 6 rows;
4. check old-version material names;
5. restore the previous file if the problem began immediately after a visual edit.
