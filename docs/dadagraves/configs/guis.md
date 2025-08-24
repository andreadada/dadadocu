---
sidebar_position: 3
title: guis.yml
---

# 🖼️ guis.yml Guide

The `guis.yml` file defines the layout and behavior of all graphical interfaces used by the plugin. It allows full customization of menus such as gravestone info, decoration selection, and item recovery.

Each GUI is defined under a named section (`personal-gui`, `selector-gui`, `grave`) and includes a `layout` and `ingredients`.

---

## 🔠 Layout System

The layout is defined using character mapping. Each character corresponds to a specific ingredient type defined in the `ingredients` section.

Example layout:
```
- "x x x x x x x x x"
- "x x x x x x x x x"
- "x x x x x x x x x"
- "x x x x x x x x x"
- "# # y y y y y # #"
- "Q E # # # # # # C"
```

🧩 Ingredient Types (Overview)

Each ingredient type defines the behavior of a slot in the GUI. These are parsed internally and linked to specific logic:

**Common Types**

- `Item`: Static visual item (e.g. border or filler). Uses `DadaItemBuilder` to define material, name, and lore.
- `close`: Closes the GUI. Uses a `CloseItem` object with optional lore and styling.

---

## 🧍 Section: `personal-gui`

This section configures the interface shown to players when viewing their gravestone info.

**Ingredient types:**
- `Selected`: Highlights the current decoration
- `Item`: Used for borders and fillers

Supports dynamic lore with `%decoration%` and conditional formatting.

---

## 🧩 Section: `selector-gui`

Used to let players browse and select available decorations.


**Ingredient types:**
- `Item`: For borders and background
- `Back`, `Forward`: For page navigation

**Placeholders:**
- `%decoration%`: Decoration name
- `%currentpage%`, `%maxpage%`: Pagination info

---

## ⚰️ Section: `grave`

This GUI is shown when a player interacts with their gravestone. It allows them to recover items, XP, and view decorations.

**Ingredient types:**
- `QuickAccess`: Retrieves all stored items. Supports `empty-item` fallback and updates GUI state.
- `xp`: Retrieves stored experience. Also supports empty fallback and GUI updates.
- `Item`: Used for borders

**Behavior Notes**

- `QuickAccess` and `xp` support left-click and right-click actions:
  - Left-click: Take all
  - Right-click: Drop everything
- GUI updates are handled via internal lists (`updategui`) to refresh content dynamically.
- `%owner%` placeholder is available in the GUI title.

---

## 🧱 Default Items

Defined at the top level of `guis.yml`:

```yaml
default-decoration-item:
  material: PAPER

default-not-unlocked-item:
  material: GRAY_STAINED_GLASS_PANE
```

Used as fallback visuals when no decoration is selected or when a decoration is locked.

---

## 📝 Tips for Beginners

- Every character in the layout must be defined in `ingredients`, or it will be ignored.
- Use `<gold>`, `<gray>`, `<br>` for styled text and lore.
- If you're unsure what a type does, start with `Item` and `close`, then experiment with `selected`, `back`, `forward`, `QuickAccess`, and `xp`.
- You can preview GUI behavior by testing with a single slot and expanding gradually.

---
