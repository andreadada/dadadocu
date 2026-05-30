---
sidebar_position: 9
---

# Troubleshooting

This page lists common problems and how to solve them.

## The plugin does not load

Check:

1. The `.jar` file is inside `plugins/`.
2. The server version is compatible with your Structory version.
3. The Java version is compatible with your server.
4. The console does not show dependency errors.
5. Optional dependencies used by your recipes are installed and enabled.

Restart the server after changing plugin files.

## The structure is not detected

| Cause | Fix |
|---|---|
| Wrong block clicked | Click the configured `check-block`. |
| Player is not sneaking | Use `Shift + Right Click` if your setup requires it. |
| Layout does not match | Compare each row of the layout with the build. |
| Wrong level | Check `level: 0`, `level: 1`, and `level: -1`. |
| Wrong orientation | Set `orientation: false` while testing. |
| Wrong YAML format | Make sure levels are under `layout.levels`. |
| Wrong world | Check the `validworlds` option if used. |

## The recipe does not craft

Check:

1. The structure has the `crafting` option.
2. The structure has enough `recipe-slots`.
3. The recipe is available through structure `recipe` and recipe `discovers`.
4. The recipe listener matches the structure listener.
5. All ingredients are present.
6. External item plugins are installed if used.
7. The player has enough experience or currency if required.

Correct structure recipe access example:

```yaml
options:
  crafting:
    recipe: ["forge"]
```

Correct recipe discover example:

```yaml
my_recipe:
  discovers: "forge"
```

## The recipe GUI does not open

The GUI opens automatically when multiple recipes match.

To always open it, add:

```yaml
options:
  crafting:
    open-gui: ALWAYS
    recipe: ["default"]
```

Do not use old `recipe-group` examples for new configurations. Prefer `recipe` on the structure and `discovers` in the recipe.

## `killedentity` does not work

`killedentity` requires the `entity-death` listener.

Structure:

```yaml
options:
  crafting:
    listeners:
      interact: {}
      entity-death:
        range: 8
```

Recipe:

```yaml
listeners:
  - entity-death
ingredients:
  kill:
    type: killedentity
    entities:
      - ZOMBIE
```

Also check:

- the mob died within range;
- the structure instance was loaded;
- the killer was a player;
- the entity type matches the recipe.

## Normal right-click crafting stopped after adding entity-death

When you add `crafting.listeners`, include `interact` explicitly.

```yaml
listeners:
  interact: {}
  entity-death:
    range: 8
```

## Items disappear or cannot be picked up

Check these settings in `config.yml`:

```yaml
structures:
  disable_item_pickup: true
  shift_to_remove_item: false
```

If `disable_item_pickup` is true, Structory manages recipe-slot items and players should interact with the structure instead of picking items up normally.

## Saved item does not work

Check:

1. The item was saved with `/structory item save <name>`.
2. The file exists in `plugins/Structory/customitem/`.
3. The recipe uses the same key.

Example:

```yaml
type: saveditem
key: strangeapple
```

## Custom item plugin ingredient does not work

Check:

1. The dependency plugin is installed.
2. The dependency plugin is enabled before Structory hooks into it.
3. The item key is correct.
4. The correct ingredient type is used.

Recommended examples:

```yaml
type: craftengine
key: "default:topaz"
```

```yaml
type: oraxen
key: "ruby"
```

For Oraxen ingredients, prefer `type: oraxen` instead of the short alias.

## Particles are too heavy

Reduce:

- `amount`;
- scheduled effects;
- large `boxsized` areas;
- effects used by many structure instances.

Use sounds or small particles for frequent actions such as item insert and take.

## YAML errors

Most YAML errors are caused by indentation.

Correct:

```yaml
options:
  notify:
    message: "Hello"
```

Incorrect:

```yaml
options:
notify:
message: "Hello"
```

Use spaces, not tabs.

## Best testing process

When creating a new structure:

1. Start with only the layout and a `notify` message.
2. Test detection.
3. Add particles or simple sounds.
4. Add crafting with one simple recipe.
5. Add recipe slots.
6. Add animations.
7. Add listeners such as `entity-death`.
8. Add premium features one at a time.
9. Restart the server after major edits.
