---
sidebar_position: 4
title: Decorations
---

# 🪦 Decorations Guide

Decorations are visual elements that players can choose to represent their gravestone. Each decoration is a named structure composed of multiple visual components, such as blocks, items, text, or player heads.


All decoration files are automatically loaded from the `/decorations` directory when the plugin starts. You can add, remove, or modify decorations simply by editing the files in that folder—no manual registration needed.

---

## 🧱 Structure of a Decoration

Each decoration is defined by a unique key and contains one or more components. Here's an example:

```yaml
base_gravestone:
  base: true
  name: "Gravestone"
  decorations:
    one:
      type: displayblock
      key: gravestone
    two:
      type: displayblock
      key: flowers
    three:
      type: textdisplay
      text: "%player%"
      yaw: 0
      scale: 0.8
      offset: "0.0 -0.2 0.0"
```

### 🔍 Explanation

- `base_gravestone`: Unique ID of the decoration
- `base: true`: Nothing to worry about now
- `name`: Display name shown in GUIs
- `decorations`: List of components that make up the decoration

Each component (`one`, `two`, `three`, etc.) defines a visual element with a specific `type`.

---

## 🎨 Available Component Types

Each decoration can include one or more of the following types:

### 🧱 `displayblock`

Displays a block at the gravestone location.

```yaml
type: displayblock
key: gravestone
```

- `key`: Refers to a predefined block model or asset

### 🪙 `helditem`

Displays the held item of the player

```yaml
type: helditem
```

### 🧑 `playerhead`

Displays the player’s head.

```yaml
type: playerhead
```

- Automatically uses the skin of the player who died

### 📝 `textdisplay`

Displays floating text near the gravestone.

```yaml
type: textdisplay
text: "%player%"
yaw: 0
scale: 0.8
offset: "0.0 -0.2 0.0"
```

- `text`: Can include placeholders like `%player%`
- `yaw`: Rotation angle
- `scale`: Size of the text
- `offset`: Position relative to the gravestone (`x y z`)

---

## 🧩 Notes for Beginners

- You can define as many decorations as you want, each with a unique name
- Decorations are selectable via the GUI (`selector-gui`)
- `%player%` is a placeholder that shows the name of the deceased player
- Make sure each `key` used in `displayblock` or `helditem` refers to a valid asset or material

---
