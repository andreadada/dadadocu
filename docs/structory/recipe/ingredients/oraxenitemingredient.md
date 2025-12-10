---
sidebar_position: 1
title: OraxenItem
---


Register an Oraxen item as ingredient.

ingredient key: `oteim` (alias: `oraxen`)


## Recipe Configuration Fields

| Field         | Type                                | Description          | Default     |
|---------------|-------------------------------------|----------------------|-------------|
| `key`         | String                              | The Oraxen item's Id | required    |



<details>
  <summary>Show YAML example</summary>

```yml
example_recipe:
  name: example_recipe
  ingredients:
    #....
    two:
      type: oitem
      key: "chargedquartz"
    #....
```
</details>