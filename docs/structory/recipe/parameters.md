---
sidebar_position: 3
sidebar_label: Parameters
---

# Parameters

Some recipe fields can use fixed values or dynamic parameters.

For normal configurations, start with fixed values. Use parameters only when you need random values, offsets, or dynamic locations.

## Fixed values

Most fields can be written directly.

```yaml
amount: 3
value: 50
currency: coins
```

This is the safest format for simple recipes.

## Random integer

Use `randomint` when a result or condition should use a random whole number.

```yaml
amount:
  param: randomint
  min: 1
  max: 5
```

This can be used in fields that accept an integer parameter.

## Random decimal number

Use `randomdouble` when a field accepts a decimal value.

```yaml
value:
  param: randomdouble
  min: 10.0
  max: 25.0
```

Use this only where the field accepts decimal numbers.

## Text parameter

```yaml
message:
  param: str
  value: "The ritual is complete."
```

Most text fields can also be written directly without `param: str`.

## Integer parameter

```yaml
amount:
  param: int
  value: 3
```

Most integer fields can also be written directly.

## Location parameter

A full location can be written with world and coordinates.

```yaml
location:
  param: location
  world: world
  x: 100
  y: 65
  z: 100
  yaw: 0
  pitch: 0
```

This is useful for fixed world locations, but most Structory recipes should use offsets instead.

## Offset from the structure center

Offsets are relative to the structure center.

Simple format:

```yaml
offset: "0 1 0"
```

Expanded format:

```yaml
location:
  param: offset
  x: 0
  y: 1
  z: 0
```

Accepted aliases include:

- `offset`
- `centeroffset`
- `instanceoffset`
- `ioffset`

Use offsets for result drops, entity summons, and most structure-based effects.

## Practical examples

### Drop a random amount of items

```yaml
result:
  reward:
    type: item
    offset: "0 1 0"
    amount:
      param: randomint
      min: 1
      max: 3
    item:
      material: DIAMOND
```

### Summon at the structure center

```yaml
result:
  summon:
    type: summon
    entity: ZOMBIE
    amount: 1
    location:
      param: offset
      x: 0
      y: 1
      z: 0
```

## Recommendations

- Use direct values when possible.
- Use quoted vectors for offsets: `"0 1 0"`.
- Use `randomint` for random item amounts.
- Use offsets instead of fixed world locations for portable structures.
- Test random and dynamic parameters after every reload or restart.
