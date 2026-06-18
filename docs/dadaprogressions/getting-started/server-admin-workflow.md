---
sidebar_position: 2
title: Server Admin Workflow
---

# Server Admin Workflow

Most setup work happens in `goals/`, with occasional edits to `config.yml` and `guis.yml`.

## Normal setup flow

1. Install the plugin and start the server once.
2. Open `plugins/DadaProgressions/goals/`.
3. Edit the bundled goals or create your own files.
4. Replace every sample `say` reward command.
5. Tune notifications so chat does not become noisy.
6. Adjust `guis.yml` only after the goals are loading correctly.
7. Run `/dp admin reload` for small edits.
8. Run `/dp admin validate` after meaningful changes.
9. Test rewards with a normal player account.

For bigger edits, restart the server. Reload is convenient while testing, but a clean restart is safer before a public launch.

## Before players use it

Check these first:

1. `/dp admin list` shows the goals you expect.
2. `/dp admin validate` does not report serious errors.
3. `/dp admin backup` creates a backup.
4. `/dp` and `/achievements` open the GUI.
5. At least one personal goal gains progress.
6. At least one community goal gains progress.
7. Reward commands run from console and target the right player.
8. Vote or custom goals are triggered by the external plugin you use.

## YAML habits

Small YAML mistakes cause most setup problems.

- Use spaces, not tabs.
- Keep indentation consistent.
- Edit one goal at a time.
- Keep goal IDs stable once players have progress.
- Do not start reward commands with `/`.
- Test command rewards from console before adding them to tiers.

If something feels off after an edit, run `/dp admin validate` before guessing.
