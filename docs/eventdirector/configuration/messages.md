---
sidebar_position: 2
title: Messages
---

# Messages

Messages control the text shown to players and staff.

Depending on the build, messages may appear in:

- chat;
- action bar;
- titles;
- GUI item names;
- GUI lore;
- console feedback;
- command responses.

## Editing messages

Before editing messages:

1. create a backup;
2. open the message file;
3. edit only the text you need;
4. keep placeholders unchanged unless you know what they do;
5. reload or restart;
6. test the command or event.

## Colors and formatting

Your build may support Minecraft color codes, MiniMessage, or another formatting system.

Examples:

```txt
&6Event started!
```

```txt
<gold>Event started!</gold>
```

Use the format supported by your build.

## Placeholder safety

If a message contains placeholders, keep them exactly as they are.

Example:

```txt
%player% joined the event.
```

Changing `%player%` to `%players%` may break the replacement if that placeholder does not exist.

## Best practices

- Keep staff messages clear.
- Keep player messages short.
- Test messages in-game.
- Avoid very long GUI text.
- Use consistent colors.
