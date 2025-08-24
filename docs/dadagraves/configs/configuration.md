---
sidebar_position: 2
title: config.yml
---

# ⚙️ config.yml Guide

The `config.yml` file controls how the plugin behave. It’s divided into modular sections for permissions, holograms, decorations, and platform generation.

---

## 🔐 Permissions (`pex`)

This section defines how long gravestones last and remain locked, based on player permission groups.

- `duration`: Total time (in seconds) before the gravestone disappears.
- `lock`: Time (in seconds) during which the gravestone is locked and cannot be accessed.
- You can define multiple groups (e.g. `default`, `vip`) and assign them via permissions like `dadagraves.pex.vip`.

Example:
```yaml
pex:
  default:
    duration: 900
    lock: 300
  vip:
    duration: 1800
    lock: 900
```

---

## 🪧 Hologram Display (`hologram`)

Controls the floating text shown above gravestones.

- `type: fixed`: Static text that doesn’t change.
- `type: updatable`: Dynamic text that updates over time.
- Placeholders:
  - `%player%`: Player name
  - `%lock%`: Remaining lock time
  - `%timeleft%`: Time until gravestone disappears

Example:
```yaml
hologram:
  lines:
    one:
      type: fixed
      text: "<gold>Gravestone of <yellow>%player%"
    two:
      type: updatable
      text: "<gold>Locked for: <red>%lock%"
    three:
      type: updatable
      text: "<gold>Decays in <dark_aqua>%timeleft%"
```

---

## 🎨 Default Decoration

Sets the default decoration used if the player hasn’t selected one.

Example:
```yaml
default-decoration: base_player_head
```

You can change this to any registered decoration ID.

---

## 🗺️ Platform Configuration (`platform`)

Defines how the block under or around the gravestone is replaced depending on the environment.

- `block`: The block to detect at the death location.
- `where`: Position relative to the player:
  - `UNDER`: Block below the player
  - `IN`: Block at the player's position
  - `BOTH`: Either `IN` or `UNDER` must match
- `replace`: The block that will be placed as the platform

You can define multiple biome or theme profiles (e.g. `nature`, `volcanic`, `water`).

Example:
```yaml
platform:
  nature:
    patterns:
      one:
        block: AIR
        where: UNDER
    replace: BIG_DRIPLEAF
```

---

## 📝 Notes

- All time values are in **seconds**.
- You can add more permission groups or platform types as needed.
- Hologram text supports Minecraft legacy formatting (`<gold>`, `<gray>`, `<br>`, etc.).
- Platform rules allow biome-specific customization for immersive gravestone placement.

---

For decoration setup and GUI customization, see [`guis.yml`](/docs/dadagraves/configs/guis.md).
