---
sidebar_position: 9
title: Troubleshooting
---

# Troubleshooting Structory

Start with the server console. Many problems are caused by a valid YAML file whose *key or section* is not what Structory expects. For production changes, use a full restart and keep a backup of `plugins/Structory/`.

## The structure isn't recognized

Check the clicked `check-block`, `Shift + Right Click`, and the actual layout including negative Y levels. The levels belong under `layout.levels`. Start with `orientation: false` for a symmetrical altar and use `/structory admin preview <key>` to compare the loaded layout against the real build.

If the structure is already registered nearby, the minimum distance setting can also prevent another instance from being created.

## BlockDisplay doesn't appear

Work through these checks **in order**:

1. Check `plugins/Structory/blockdisplay/<model>.json` exists and is valid JSON.
2. Make sure the structure entry references the **filename without `.json`**: `key: diamond_core`.
3. Confirm you are using a `blockdisplay` entry beneath `options`, with `core:` (or another entry name) beneath it.
4. On startup, look for `BlockDisplay definitions loaded` and `BlockDisplay structure '...': registered ... model(s)`.
5. When the instance is created/loaded, look for `BlockDisplay spawned ... UUID=...`. If this line is missing, the issue is before entity rendering.
6. Test with a simple one-passenger `minecraft:block_display` model and no animation before adding complex models.

If an option key can't be resolved, the plugin reports `Block display key '...' is not registered`. A missing model might simply be an old JSON: existing files are **not overwritten** by bundled updates.

The [BlockDisplay guide](./options/blockdisplay.md) includes a minimal JSON and a working configuration shape.

## The display appears, but rotates around a corner

`ROTATE` and `FLOAT_ROTATE` are meant to spin a simple BlockDisplay about its **visual center**, while `ORBIT` deliberately moves it around a larger circle.

If your model spins around a corner, check that your JAR contains the newest 26.2 center-pivot fix, then retest with the bundled Diamond Core. Custom multi-passenger models may need careful transformation matrices.

Don't blindly add `0.5` to every YAML offset: the JSON transformation can already include the centering translation.

## Particles are offset by half a block

Regular shapes play from the center of the structure's center block. `STRUCTURE_OUTLINE` is different: it deliberately traces block edges instead. Check that the effect's `offset` hasn't already been manually compensated for an older version.

## The recipe doesn't craft

Verify `options.crafting.recipe`, the recipe's `discovers` key, available recipe slots, ingredients and listener types. If you configure custom listeners, remember to include `interact` if you still want right-click crafting.

```yaml
options:
  crafting:
    listeners:
      interact: {}
      entity-death:
        range: 8
```

Custom items also require the corresponding dependency plugin to be installed and enabled. `Hooked to 0 item loaders` is **not an error** when you use only vanilla items.

## Saved item or recipe icon is missing

Check `plugins/Structory/customitem/`, the saved item key, and the recipe's `item-display`. Use `/structory admin recipes` to inspect registered recipes.

## A structure or default example disappeared after an update

Don't delete your entire config folder. Structory can restore *missing bundled files*, but it never overwrites existing user files. Check that the example is actually bundled with your installed JAR, and look for custom YAML parsing warnings. Re-create missing examples from a backup if you've customized them.

## Instances disappear after a restart

Look for `Structure instance persistence backend: yaml` / `sqlite` / `mariadb` and the loaded instance count. If the count is zero when it shouldn't be, check the configured backend before changing any files.

See [Persistence and Backups](./persistence.md) for safe migration and recovery.

## Particles lag the server

The cost grows with `amount × density × active instances` and update frequency. Decrease `density`, increase `period` and `schedule-period`, and avoid overlapping long-running effects. `STRUCTURE_OUTLINE` caches its geometry, but it still emits particles when drawn.

## Build fails because Maven is using Java 8

On Windows use the current `scripts/build-release.ps1`. It searches for an installed JDK 21 and selects it temporarily. If it can't find one, provide `-JavaHome21 "C:\path\to\jdk-21"`. The build requirement is separate from the runtime Java version required by your Minecraft server.

## Useful admin diagnostics

```text
/structory admin validate
/structory admin fix
/structory admin debug <instance-uuid>
/structory performance
/structory cluster
```

Use `fix` without `apply` first so you can inspect proposed changes. For a difficult problem, test the same setup on a clean server with only Structory and the required dependencies.
