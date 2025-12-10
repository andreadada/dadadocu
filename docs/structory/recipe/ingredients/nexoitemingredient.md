---
sidebar_position: 1
title: NexoItem
---

Register a Nexo item as ingredient.

ingredient key: `nitem` (alias: `nexo`)


## Recipe Configuration Fields

| Field         | Type                                | Description        | Default     |
|---------------|-------------------------------------|--------------------|-------------|
| `key`         | String                              | The Mexo item's Id | required    |



<details>
  <summary>Show YAML example</summary>

```yml
example_recipe:
  name: example_recipe
  ingredients:
    #....
    two:
      type: nitem
      key: "chargedquartz"
    #....
```
</details>