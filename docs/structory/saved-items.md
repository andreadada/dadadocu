---
sidebar_position: 7
title: Saved Items
---

# Saved Items

Saved items let you store the exact item in your hand and reuse it later in recipes or results.

This is useful when an item has custom name, lore, model data, enchantments, NBT, or plugin metadata.

## Save an item

Hold the item in your main hand and run:

```text
/structory item save <name>
```

Example:

```text
/structory item save strangeapple
```

## Get a saved item

```text
/structory item get strangeapple
```

## Replace a saved item

Hold the new version in your main hand and run:

```text
/structory item replace strangeapple
```

## Delete a saved item

```text
/structory item delete strangeapple
```

## Use a saved item as an ingredient

```yaml
ingredients:
  one:
    type: saveditem
    key: strangeapple
```

## Use a saved item as a result

```yaml
result:
  one:
    type: saveditem
    key: strangeapple
    offset: "0 0 0"
```

## Where saved items are stored

Saved items are stored in:

```text
plugins/Structory/customitem/
```

Back up this folder before updating or moving the server.

## Naming recommendations

Use simple saved item names:

```text
strangeapple
godapple
forge_core
upgrade_token
```

Avoid spaces and special characters.


## Managing saved items from the Admin GUI

If your build includes the Admin GUI, you can inspect saved items from:

```text
/structory admin item
```

This is useful after saving or replacing an item because you can check that Structory loaded it correctly.

The saved item admin page is mainly used to:

- browse registered saved items;
- check the item icon and name;
- copy the saved item key;
- use the key inside recipe files.

Example usage inside a recipe:

```yaml
ingredients:
  custom_core:
    type: saveditem
    item: strangeapple
    amount: 1
```
