---
sidebar_position: 99
---

# Wiki WIP Notes

This is my working page for the parts of the Structory wiki that are not ready to be presented as stable public documentation yet.

The normal wiki pages should stay clean and useful for server owners. If something is not confirmed, not fully implemented, or still depends on old configuration formats, I prefer to keep it here instead of showing it as an official feature.

## Already added to the wiki

These sections were missing or too vague before, and I have now documented them in the public pages:

- Crafting option configuration.
- Structure-side and recipe-side listeners.
- `interact` listener.
- `entity-death` listener.
- Correct use of `killedentity`.
- Difference between `entity` and `killedentity`.
- Structure-level consume animations.
- Recipe ingredient animation overrides.
- Consume strategies.
- Particle and decoration configuration.
- Parameter syntax.
- Dependency item aliases.
- Recipe picker `item-display`.
- Complete end-to-end examples.
- Migration notes for older configuration formats.
- Better pages for crate, block display, bag, storage, and rebuild.
- Troubleshooting for listener and recipe matching problems.

## Things I am not documenting as stable yet

### `recipe-group`

Some old bundled examples use this format:

```yaml
crafting:
  recipe-group: ["DEFAULT"]
```

For now, the format I want to document is this one:

```yaml
crafting:
  recipe: ["default"]
```

with the recipe linked like this:

```yaml
my_recipe:
  discovers: "default"
```

I should not use `recipe-group` in public examples unless I confirm that the active parser supports it correctly, or I update the plugin to support it in a clear way.

### `DataOption`

The `data` option is registered in the option system, but it is not ready as a complete user-facing feature.

For now I should avoid documenting it as something server owners can use. It can be added to the wiki only when the final behavior is clear.

### `event` ingredient

There are signs of an event-based ingredient idea in the source, but I do not want to document `type: event` as usable until I confirm that it is registered and supported in the active configuration.

At the moment, it should stay out of the public recipe examples.

### Full `gui.yml` customization

The wiki currently documents the parts that are safe for normal server owners:

- `open-gui: ALWAYS`
- recipe `item-display`
- default GUI item in `config.yml`

The complete recipe picker layout still looks mostly internal in the current build. I should not write a full `gui.yml` customization guide until I confirm exactly what can be changed safely.

### Storage behavior

The storage page exists, but I kept it conservative on purpose.

The option can define inventory containers, but I still need to verify the full user-facing flow before writing a stronger guide. In particular, I should test opening behavior, persistence, and what happens across reloads/restarts.

### Oraxen short ingredient alias

For Oraxen ingredients, the wiki currently recommends this safer format:

```yaml
type: oraxen
```

I should avoid recommending this short alias for ingredients:

```yaml
type: oitem
```

unless I verify or fix the current behavior.

For Oraxen results, `oraxen` and `oitem` can remain documented as intended aliases.

### Bag checker support for custom block plugins

The bag page currently documents the safer checker types:

- standard material
- whitelist
- blacklist
- any
- none

If custom block plugin checkers are meant to be public, I need to test them in the current build before adding full examples.

### Heavy scheduled decorations

Scheduled decorations are documented, but they should stay with a performance warning.

Before making the page stronger, I should test them on a server with many placed structures, because the real cost depends on how many instances are loaded and how many particles are scheduled.

## Plugin cleanup I should consider before final release

These are not wiki-only tasks, but they affect how confidently I can document the plugin:

1. Confirm or remove old `recipe-group` examples.
2. Complete or hide `DataOption`.
3. Decide whether the `event` ingredient is public or internal.
4. Confirm the real status of full `gui.yml` customization.
5. Verify the Oraxen short ingredient alias for ingredients.
6. Test storage persistence and the normal player/admin access flow.
7. Confirm bag checker support for custom block plugins.
8. Test reload safety after changing recipes, listeners, and dependency hooks.

## Final test pass before publishing the wiki

Before publishing the wiki as final, I should test these things on a clean server:

1. Create a simple structure from scratch.
2. Add a right-click recipe with physical item slots.
3. Add `open-gui: ALWAYS` and two matching recipes.
4. Add a structure-level animation.
5. Add one recipe-level animation override.
6. Add an `entity-death` listener with a `killedentity` ingredient.
7. Test a Vault or CoinsEngine recipe if the dependency is installed.
8. Test one custom item dependency recipe.
9. Test crate placement with `override: check`.
10. Test scheduled particles with several structure instances loaded.
