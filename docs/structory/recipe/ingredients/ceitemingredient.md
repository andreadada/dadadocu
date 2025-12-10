---
sidebar_position: 1
title: CraftEngineItem
---

Register an Craft Engine item as ingredient.

ingredient key: `ceitem` (alias: `craftengine`)


## Recipe Configuration Fields

| Field         | Type                                | Description                | Default     |
|---------------|-------------------------------------|----------------------------|-------------|
| `key`         | String                              | The Craft Engine item's Id | required    |



<details>
  <summary>Show YAML example</summary>

```yml
example_recipe:
  name: example_recipe
  ingredients:
    #....
    two:
      type: ceitem
      key: "chargedquartz"
    #....
```
</details>