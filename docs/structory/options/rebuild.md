---
sidebar_position: 11
---

# Rebuild Option

The `rebuild` option can rebuild or modify blocks after a structure is broken.

Use it for structures that should restore part of themselves, remove temporary blocks, or spawn display blocks again after a break event.

## Basic format

```yaml
options:
  rebuild:
    build:
      class: place
      material: STONE
      offset: "0 0 0"
```

The `build` section uses Structory builders.

## Builder types

| Type | Description |
|---|---|
| `place` | Places a block at an offset. |
| `destroy` | Destroys a block at an offset. |
| `destroylayout` | Destroys layout-related blocks. |
| `spawnbd` | Spawns block displays. |

## Place builder

```yaml
build:
  class: place
  material: CRYING_OBSIDIAN
  offset: "0 0 0"
```

For player heads:

```yaml
build:
  class: place
  material: PLAYER_HEAD
  texture: "base64-texture-value"
  offset: "0 1 0"
```

## Destroy builder

```yaml
build:
  class: destroy
  offset: "0 1 0"
```

## Practical use

Example: restore the main block after a structure is broken.

```yaml
options:
  rebuild:
    build:
      class: place
      material: CRYING_OBSIDIAN
      offset: "0 0 0"
```

## Recommendations

- Test rebuild behavior in a copy of the world before using it on a public server.
- Avoid rebuilding large structures automatically unless you have tested performance.
- Be careful with protected regions and other protection plugins.
- Use crate or structure recreation systems when you need a complete placeable structure item.
