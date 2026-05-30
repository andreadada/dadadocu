---
sidebar_position: 6
title: Privacy Option - Premium
---

# Privacy Option

The `privacy` option controls who can interact with a structure after it is created.

This is a premium feature.

## Basic example

```yaml
options:
  privacy:
    type: OwnerOnly
```

When a player creates the structure, they become the owner.

## Privacy types

| Type | Description |
|---|---|
| `OwnerOnly` | Only the owner can interact with the structure. |
| `Public` | The structure has an owner but is public. |
| `AllowAll` | Any player can interact. |

## Owner-only structure

```yaml
options:
  privacy:
    type: OwnerOnly
```

Use this for personal altars, private generators, or player-owned crafting stations.

## Public structure

```yaml
options:
  privacy:
    type: Public
```

Use this for shared structures that still need an owner.

## Allow everyone

```yaml
options:
  privacy:
    type: AllowAll
```

Use this for spawn structures, public crafting stations, or server-wide altars.

## Changing privacy with commands

```text
/structory option privacy set <instance-uuid> OwnerOnly
/structory option privacy set <instance-uuid> Public
/structory option privacy set <instance-uuid> AllowAll
```

For public structures, you can change the owner:

```text
/structory option privacy edit public owner <instance-uuid> <player>
/structory option privacy edit public owneruuid <instance-uuid> <player-uuid>
```

## Finding the instance UUID

Instance data is saved in:

```text
plugins/Structory/instances/
```

The file name is usually the structure instance UUID.

## Recommended use

| Use case | Recommended type |
|---|---|
| Player-owned crafting station | `OwnerOnly` |
| Server spawn altar | `AllowAll` |
| Guild or shared structure | `Public` or `AllowAll` depending on your rules |
| Reward structure placed by staff | `AllowAll` |
