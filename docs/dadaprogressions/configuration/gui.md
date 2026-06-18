---
sidebar_position: 2
title: GUI Configuration
---

# GUI Configuration

The GUI file is:

```text
plugins/DadaProgressions/guis.yml
```

It controls menu titles, slot layouts, materials, names, lore, and navigation buttons.

## Layouts

Layouts use one marker per inventory slot:

```yaml
layout:
  - "x x x x x x x x x"
  - "x D x W x M x L x"
  - "x x C x A x P x x"
```

Spaces are ignored. Each row must end up as exactly 9 markers, and a menu can have at most 6 rows.

## Markers

| Marker | Meaning |
|---|---|
| `x` | Filler. |
| `D` | Daily goals. |
| `W` | Weekly goals. |
| `M` | Monthly goals. |
| `L` | Lifetime goals. |
| `C` | Community goals. |
| `P` | Personal goals, or previous page depending on the menu. |
| `G` | Goal item in a paginated list. |
| `T` | Reward tier item. |
| `E` | Leaderboard entry. |
| `A` | Claim all. |
| `B` | Back. |
| `R` | Refresh. |
| `N` | Next page. |
| `Q` | Close. |

More `G`, `T`, or `E` markers means more visible entries per page.

## Main menu example

```yaml
gui:
  main:
    title: "<blue>DadaProgressions"
    layout:
      - "x x x x x x x x x"
      - "x D x W x M x L x"
      - "x x x x x x x x x"
      - "x x C x A x P x x"
      - "x x x x x x x x Q"
    items:
      daily:
        material: "CLOCK"
        legacy-material: "WATCH"
        name: "<aqua>Daily Quests"
      claim-all:
        material: "CHEST"
        name: "<green>Claim All Rewards"
        lore:
          - "<gray>Claim every available reward tier."
```

## Detail menu example

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
    items:
      summary:
        material: "BOOK"
        name: "%goal_name%"
      tier:
        locked-material: "STAINED_GLASS_PANE"
        unlocked-material: "CHEST"
        claimed-material: "EMERALD_BLOCK"
```

## Old server materials

For old Minecraft versions, add `legacy-material` and `data` when the modern material does not exist.

```yaml
personal:
  material: "PLAYER_HEAD"
  legacy-material: "SKULL_ITEM"
  data: 3
  name: "<blue>Personal Goals"
```

## Text formatting

DadaProgressions uses the bundled DadaPlatform/Kyori formatter when it is available.

The fallback still supports legacy `&` codes, common color/style tags, `<community>`, `<personal>`, and closing-tag resets. Hover and click events are not preserved through legacy Bukkit string messages.
