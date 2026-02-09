---
sidebar_position: 1
title: OraxenItem
---


Register an Oraxen item as ingredient.

ingredient key: `itemsadder` (alias: `iaitem`)


## Recipe Configuration Fields

| Field         | Type                                | Description              | Default     |
|---------------|-------------------------------------|--------------------------|-------------|
| `key`         | String                              | The ItemsAdder item's Id | required    |



<details>
  <summary>Show YAML example</summary>

```yml
example_recipe:
  name: example_recipe
  ingredients:
    #....
    two:
      type: iaitem
      key: "chargedquartz"
    #....
```
</details>