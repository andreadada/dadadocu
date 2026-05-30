---
sidebar_position: 2
title: Box Sized Particle
---

# Box Sized Particle

The `boxsized` decoration spawns particles randomly inside a 3D box.

It is useful for ambient effects around altars, portals, generators, and magical structures.

## Example

```yaml
type: boxsized
amount: 15
particle:
  type: particle
  particle: PORTAL
  amount: 1
  speed: 0.1
center-offset: "0 1 0"
start-point-offset: "-2.5 -0.6 -2.5"
end-point-offset: "2.5 0.5 2.5"
```

## Fields

| Field | Description |
|---|---|
| `amount` | Number of random positions generated each time the decoration plays. |
| `particle` | Decoration played at each generated position. Usually a `particle` decoration. |
| `center-offset` | Offset applied from the structure center. |
| `start-point-offset` | First corner of the box. |
| `end-point-offset` | Opposite corner of the box. |

## Scheduled particle example

```yaml
options:
  particle:
    scheduled:
      type: boxsized
      amount: 15
      particle:
        type: particle
        particle: PORTAL
        amount: 1
        speed: 0.1
      center-offset: "0 1 0"
      start-point-offset: "-2 -1 -2"
      end-point-offset: "2 1 2"
```

## Performance advice

Avoid very high `amount` values on many structures at the same time. Start with values between `5` and `20`.
