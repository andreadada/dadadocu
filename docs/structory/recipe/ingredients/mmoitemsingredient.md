---
sidebar_position: 1
title: KilledEntity
---

Register an Oraxen item as ingredient.

ingredient key: `mitem` (alias: `mmoitem`)


## Recipe Configuration Fields

| Field  | Type                                | Description         | Default   |
|--------|-------------------------------------|---------------------|-----------|
| `type` | String                              | Required to work    | `mmoitem` |
| `key`  | String                              | The MMO item's Id   | required  |
| `kind` | String                              | The MMO item's Type | required  |




<details>
  <summary>Show YAML example</summary>

```yml
example_recipe:
  name: example_recipe
  ingredients:
    #....
    two:
      type: mitem
      kind: SWORD
      key: "excalibur"
    #....
```
</details>