---
sidebar_position: 4
title: Notify Option
---

# 📢 Notify Option

## What is the Notify Option?

The `notify` option lets you send messages or visual notifications to the player when a structure is created. You can display chat messages, action bar text, and even titles with fade effects.

This is useful for giving feedback, storytelling, or simply making your structures feel more interactive and alive.

---

## 🛠️ YAML Configuration Example

```yaml
options:
  notify:
    message: "<yellow>You have created the &e{structure}"
    actionbar: "<yellow>Structure activated!"
    title: "<yellow>Welcome to the altar"
    subtitle: "<yellow>Let the ritual begin"
    duration: 40
    fade_in: 10
    fade_out: 10
```
---

## 🔍 Field Explanation

| Field       | Description                                      |
|-------------|--------------------------------------------------|
| `message`   | Chat message sent to the player                  |
| `actionbar` | Text shown in the action bar (above hotbar)      |
| `title`     | Title text shown in the center of the screen     |
| `subtitle`  | Subtitle text shown below the title              |
| `duration`  | How long the title stays visible (in ticks)      |
| `fade_in`   | Fade-in duration for the title (in ticks)        |
| `fade_out`  | Fade-out duration for the title (in ticks)       |

---

# ✅ When Does It Trigger?
Notifies are automatically sent when the structure is created.

