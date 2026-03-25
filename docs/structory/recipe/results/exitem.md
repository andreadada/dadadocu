---
sidebar_position: 1
title: ExecutableItemsResult
---

Drop an EX's item as a result


## Recipe Configuration Fields

| Field         | Type                                | Description     | Default     |
|---------------|-------------------------------------|-----------------|-------------|
| `key`         | String                              | The EXItem's Id | required    |



<details>
  <summary>Show YAML example</summary>

```yml
custom_item:
  #.... other stuff
  result:
    one:
      type: exitem
      offset: "0 0 0"
      key: "custom_item"
```
</details>